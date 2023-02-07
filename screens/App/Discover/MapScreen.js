import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import MapView, { PROVIDER_GOOGLE, Marker, UrlTile, LocalTile } from 'react-native-maps';
import { MARKERS_DATA } from './MARKERS_DATA';
import TopBar from '../../../components/TopBar/TopBar';
import BottomSheet from '../../../components/BottomSheet/BottomSheet';
import mapStyle from './mapStyle';
import { THEME_GREEN } from '../../../components/Utilities/Constants';
import { useMap } from './useMap';
import Geolocation from 'react-native-geolocation-service';
import axios from 'axios';
import rateLimit from 'axios-rate-limit';

const parkLimit = 5;

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: black;
  align-items: center;
  justify-content: center;
`;

const Map = styled(MapView)`
  width: ${Dimensions.get('window').width}px;
  height: ${Dimensions.get('window').height}px;
`;

const axiosInstance = rateLimit(axios.create(), {maxRequests: 1, perMilliseconds: 60000});

const MapScreen = () => {
  const [placesData, setPlacesData] = useState([]);
  const { mapRef, selectedMarker, handleNavigateToPoint, handleResetInitialPosition, latLong } = useMap();

  useEffectAsync(async () => {
    handleResetInitialPosition();
    queryPlaces();
    Geolocation.watchPosition(handleResetInitialPosition);
  }, []);

  useEffectAsync(async () => {
    queryPlaces();
  }, [latLong]);

  function useEffectAsync(effect, inputs) {
    useEffect(() => {
      effect();
    }, inputs);
  }

  function queryPlaces() {
    const queryLL = ''+latLong[0]+','+latLong[1];
    axios.get(
      'https://api.foursquare.com/v3/places/search',
      {
        params: {
          ll: queryLL,
          radius: '5000',
          categories: '16032,16019',
          exclude_all_chains: 'true',
          sort: 'DISTANCE',
          limit: parkLimit.toString()
        },
        headers: {
          Authorization: 'fsq3Op/pD/640rU9TmxrsbVnin4F+4E6FMqsGEG+M8LxeaU='
        }
      }
    )
      .then(res => {
        setPlacesData(res.data['results']);
      })
      .catch(err => {
        console.error(JSON.stringify(err))
      });
  }

  const renderPlacesData = (data) => {
      return placesData.map((m) => (
        <Marker
          key={m.fsq_id}
          coordinate={{
            latitude: m.geocodes.main.latitude,
            longitude: m.geocodes.main.longitude,
          }}
          color={THEME_GREEN}
        />
      ))
  }

  return (
    <Container>
      <TopBar onPressElement={handleResetInitialPosition} />
      <Map
        ref={mapRef}
        customMapStyle={mapStyle}
        provider={PROVIDER_GOOGLE}
        mapType="standard"
        showsUserLocation={true}
      >
        <LocalTile
          pathTemplate='/storage/emulated/0/mytiles/{Z}/{x}/{y}.png'
          tileSize={256}
        />
        {renderPlacesData(placesData)}
      </Map>
      <BottomSheet onPressElement={handleNavigateToPoint} />
    </Container>
  );
};

export default MapScreen;
