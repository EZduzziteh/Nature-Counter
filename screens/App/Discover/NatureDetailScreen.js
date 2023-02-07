import React, { useEffect, useLayoutEffect } from 'react';
import {
  StyleSheet,
  Dimensions,
  ScrollView,
  Text,
  Image,
  View,
  BackHandler,
} from 'react-native';
import styled from 'styled-components/native';
import { Icon } from 'react-native-elements';
import { HeaderBackButton } from '@react-navigation/stack';

const NatureDetailScreen = ({ navigation, route }) => {

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <HeaderBackButton onPress={() => { navigation.navigate('MapScreen') }} />
      ),
    });
  }, [navigation]);

  useEffect(() => {
    const backHandler = BackHandler.addEventListener("hardwareBackPress", () => { navigation.navigate('MapScreen'); return true });
    return () => backHandler.remove();
  }, [navigation]);

  const { params } = route;
  const selectedNature = params.selectedNature;

  const Header = styled.View`
  display: flex;
  flex-direction: row;
  padding: 20px 20px 0px 20px;
  align-items: center;
  justify-content: space-around;
  background-color: white;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  margin-top: -30px;
`;

  const StyledImage = styled.Image`
  flex-basis: 10%;
  height: 50%;
`;

  const HeaderContent = styled.View`
  flex-basis: 85%;
  padding: 0px 20px 10px 20px;
  border-bottom-color: #EBEBEB;
  border-bottom-width: 2px;
`;

  const StyledTitle = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #2F3136;
  margin-bottom: 10px;
`;


  return (
    <>
      <ScrollView style={styles.Container}>
        <Image style={styles.NatureImage} source={selectedNature.picture} />

        <Header>
          <StyledImage source={selectedNature.img} resizeMode="contain" />
          <HeaderContent>
            <Text style={styles.Heading1}>{selectedNature.name}</Text>
            <Text style={styles.Heading2}>{selectedNature.direction}</Text>
            <Text style={styles.Heading2}>{selectedNature.distance} Miles</Text>
          </HeaderContent>
          <Icon name="heart-o" type="font-awesome" color="grey" />
        </Header>

        <View style={styles.NatureDetail}>
          <StyledTitle>About this Park</StyledTitle>
          <Text style={{ marginBottom: 30 }}>{selectedNature.description}</Text>
          <StyledTitle>Activites in this Park </StyledTitle>

          <View style={styles.ActivityContainer}>
            {selectedNature.activities.map((activity, index) => (<View key={index}>
              <View style={styles.ActIconContainer}>
                <Image source={selectedNature.icons[index]} resizeMode="contain" />
                <StyledTitle>{activity}</StyledTitle>
              </View>
            </View>))}
          </View>

        </View>
      </ScrollView>
    </>

  );
}

export default NatureDetailScreen;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    maxWidth: Dimensions.get('window').width,
  },
  NatureDetail: {
    maxWidth: Dimensions.get('window').width,
    backgroundColor: 'white',
    padding: 20,
    flex: 1,
    position: 'relative',
    justifyContent: 'flex-start',
  },
  Heading1: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  Heading2: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'grey',
  },
  NatureImage: {
    resizeMode: 'cover',
    maxWidth: Dimensions.get('window').width,
    maxHeight: Dimensions.get('window').height * 0.6,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * 0.33,
  },
  ActivityContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'center',
  },
  ActIconContainer: {
    textAlign: 'center',
  },
});