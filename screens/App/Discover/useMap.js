import { useState, useRef, useCallback } from 'react';
import { PermissionsAndroid } from 'react-native';
import Geolocation from 'react-native-geolocation-service';

const DEVIATION = 0.0002;
const GEOLOCATION_PERMISSION_TITLE = 'Location Services Permission Request';
const GEOLOCATION_PERMISSION_MESSAGE = 'NatureCounter needs Location Services in order to track your nature activity time.';
const GEOLOCATION_PERMISSION_BUTTON_POSITIVE = '';

export function useMap() {
  const mapRef = useRef(null);
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [latLong, setLatLong] = useState([30.265853, -97.735070])
  const handleNavigateToPoint = useCallback(
    (id, lat, long) => {
      if (mapRef) {
        mapRef.current.animateCamera(
          {
            center: {
              latitude: lat - DEVIATION,
              longitude: long,
            },
            zoom: 18.5,
          },
          500,
        );
      }
      setSelectedMarker(id);
    },
    [mapRef, setSelectedMarker]
  );

  const handleResetInitialPosition = useCallback(async () => {
    if (mapRef) {
      try {
        const permisionGranted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: GEOLOCATION_PERMISSION_TITLE,
            message: GEOLOCATION_PERMISSION_MESSAGE,
            buttonPositive: GEOLOCATION_PERMISSION_BUTTON_POSITIVE
          }
        );
        if (permisionGranted == PermissionsAndroid.RESULTS.GRANTED) {
          Geolocation.getCurrentPosition((position) => {
            console.log(position);
            setLatLong([position.coords.latitude, position.coords.longitude])
            const newPos = {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
              latitudeDelta: 0.01,
              longitudeDelta: 0.01
            };
            mapRef.current.animateToRegion(
              newPos,
              500,
            );
            setSelectedMarker(null);
          }, (error) => {
            console.error(error);
          });
        } else {
          console.log('Permission Denied, setting to default position');
          mapRef.current.animateToRegion(
            {
              latitude: 30.265853,
              longitude: -97.735070,
              latitudeDelta: 0.01,
              longitudeDelta: 0.01,
            },
            500,
          );
        }
      } catch (error) {
        console.error(error);
      }
    }
  }, [mapRef, setSelectedMarker]);

  return {
    mapRef,
    selectedMarker,
    handleNavigateToPoint,
    handleResetInitialPosition,
    latLong
  };
}
