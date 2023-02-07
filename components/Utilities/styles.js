import React from 'react';
import {StyleSheet, Button, Dimensions} from 'react-native';
import global from './commonStyle.js';

const styles = StyleSheet.create({
  //Navigation Styles Start
  maincontainer: {
    ...global.header,
    ...global.body,
    flex: 1,
  },
  whitebg: {
    backgroundColor: '#fff',
  },
  header: {
    width: Dimensions.get('window').width,
    height: 45,
    ...global.body,
    backgroundColor: '#fff',
  },

  headerText: {
    fontSize: 20,
    ...global.body,
    ...global.black80,
  },
  navicon: {
    width: 24,
    height: 24,
  },

  logout: {
    width: 50,
    backgroundColor: '#000000',
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  drawer: {
    backgroundColor: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  drawerHeader: {
    backgroundColor: '#ffffff',
    height: 100,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  drawerHeaderText: {
    color: '#000000',
    fontSize: 24,
    ...global.body,
    ...global.black80,
    ...global.bold,
  },
  drawerImage: {
    margin: 10,
    width: 80,
    height: 60,
  },
  drawerScreen: {
    height: 50,
    color: '#000000',
    fontSize: 24,
    fontWeight: 'bold',
    backgroundColor: '#ffffff',
    borderBottomColor: '#cccccc',
    borderBottomWidth: 1,
  },
  //Common
  listContainer: {
    ...global.window,
    ...global.body,
  },
  container: {
    backgroundColor: '#ffffff',
    marginTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    ...global.body,
    ...global.flex,
  },
  listHeading: {
    fontSize: 15,
    color: '#b3b3b3',
    ...global.body,
    marginTop: 25,
    marginBottom: 20,
  },
  errmess: {
    color: 'red',
    fontSize: 12,
    alignSelf: 'center',
  },
  modal: {
    ...global.flex,
    justifyContent: 'center',
    width: Dimensions.get('window').width * 0.8,
    //height: 150,
    borderRadius: 20,
    paddingLeft: 20,
    paddingRight: 20,
    ...global.body,
  },
  inputModal: {
    width: 150,
    marginRight: 30,
    ...global.body,
  },
  btnContainerModal: {
    width: 60,
    marginTop: 6,
  },
  modalBtn: {
    fontSize: 20,
    color: '#24BF9C',
    backgroundColor: '#fff',
    ...global.button,
    ...global.shadow,
  },
  messModal: {
    padding: 20,
    fontSize: 15,
  },

  dateIconContainer: {
    margin: 20,
  },
  dateIcon: {
    fontSize: 16,
    padding: 6,
    paddingLeft: 20,
    paddingBottom: 10,
    borderWidth: 1,
    width: 200,
    ...global.black60,
    borderRadius: 40,
  },
  calIcon: {
    width: 90,
    paddingTop: 5,
    paddingLeft: 60,
  },
  radio: {
    textAlignVertical: 'top',
    marginTop: 0,
    ...global.black80,
  },
  radioBtn: {
    color: '#000',
  },
  slider: {
    marginLeft: 5,
    marginTop: -2,
  },
  thumb: {
    height: 30,
    width: 30,
    backgroundColor: '#fff',
    ...global.shadow,
  },
  track: {
    height: 5,
  },

  //Goal Setting

  BenefitContainer: {
    backgroundColor: '#ffffff',
    ...global.flex,
  },
  benefits: {
    ...global.list,
  },
  goalBenefit: {
    ...global.centerAlign,
  },
  benefitType: {
    ...global.centerAlign,
    ...global.listType,
  },
  benefitTypeActive: {
    ...global.centerAlign,
    ...global.listActive,
  },
  benefitTypeIcon: {
    ...global.centerAlign,
    ...global.icon,
    backgroundColor: '#fff',
  },
  benefitTypeIconActive: {
    ...global.centerAlign,
    ...global.icon,
    backgroundColor: '#E9FAF5',
  },
  icon: {
    ...global.icon,
  },
  btnTime: {
    ...global.button,
    ...global.shadow,
    fontSize: 16,
    ...global.black80,
    backgroundColor: '#fff',
  },
  btnTimeActive: {
    ...global.button,
    ...global.shadow,
    fontSize: 16,
    color: '#fff',
    backgroundColor: '#24BF9C',
  },
  btnContainer: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  btnSetGoal: {
    ...global.button,
    ...global.shadow,
    fontSize: 20,
    color: '#fff',
    backgroundColor: '#24BF9C',
  },
  border: {
    borderTopColor: '#b3b3b3',
    marginTop: 20,
    marginBottom: 10,
    borderTopWidth: 1,
    marginLeft: 20,
    marginRight: 20,
  },

  //Log Symptoms

  LogContainer: {
    padding: 20,
    paddingTop: 0,
  },
  symptoms: {
    ...global.list,
    ...global.body,
  },
  symptomType: {
    ...global.listType,
    paddingTop: 5,
  },
  btnSave: {
    fontSize: 20,
    color: '#fff',
    backgroundColor: '#24BF9C',
    ...global.button,
    ...global.shadow,
  },
  row: {
    height: 80,
  },
  rowHeader: {
    height: 40,
    marginBottom: 30,
    marginTop: 10,
    borderBottomColor: '#b3b3b3',
    borderBottomWidth: 1,
  },
  //Home page
  titlename: {
    ...global.black60,
    fontSize: 18,
  },
  link: {
    color: '#24BF9C',
    fontSize: 18,
  },
  button: {
    width: 50,
    backgroundColor: '#000000',
    position: 'absolute',
    bottom: 20,
    right: 20,
    color: '#ffffff',
  },
  welcome: {
    color: '#24BF9C',
    fontSize: 32,
    marginBottom: 20,
    marginTop: 20,
  },
  goalTxt: {
    ...global.black80,
    ...global.body,
    fontSize: 20,
    marginBottom: 20,
    marginTop: 20,
    width: Dimensions.get('window').width * 0.9,
  },
  goalBtn: {
    ...global.button,
    ...global.shadow,
    fontSize: 20,
    color: '#fff',
    backgroundColor: '#24BF9C',
  },
  HomeContainer: {
    paddingBottom: 20,
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    ...global.flex,
  },
  //Article Page
  article: {
    maxWidth: Dimensions.get('window').width,
    maxHeight: Dimensions.get('window').height * 0.5,
    backgroundColor: '#ffffff',
    padding: 20,
    flex: 1,
    position: 'relative',
    marginTop: 5,
    marginBottom: 25,
    marginRight: 15,
    marginLeft: 15,
    justifyContent: 'flex-start',
    backgroundColor: 'white',
    ...global.shadow,
    display: 'flex',
    flexDirection: 'row',
  },
  imageContainer: {
    position: 'relative',
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center',
  },
  textContainer: {
    textAlign: 'left',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginTop: 10,
    width: Dimensions.get('window').width * 0.5,
    paddingLeft: 15,
  },
  image: {
    borderRadius: 20,
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    resizeMode: 'contain',
    maxWidth: Dimensions.get('window').width * 0.3,
    maxHeight: Dimensions.get('window').height * 0.3,
    width: Dimensions.get('window').width * 0.3,
    height: Dimensions.get('window').height * 0.3,
    alignSelf: 'flex-start',
  },
  category: {
    fontSize: 14,
    textAlign: 'left',
    color: '#24BF9C',
  },
  title: {
    fontSize: 14,
    textAlign: 'left',
    flexWrap: 'wrap',
    fontWeight: 'bold',
    marginBottom: 5,
    marginTop: 5,
  },
  description: {
    flexWrap: 'wrap',
    overflow: 'hidden',
    fontSize: 14,
  },
  timeRead: {
    backgroundColor: '#24BF9C',
    fontSize: 8,
    color: 'white',
    position: 'absolute',
    top: 10,
    left: 0,
    width: 60,
    zIndex: 1,
    padding: 5,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  formRow: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    margin: 20,
    marginBottom: 0,
  },
  formLabel: {
    fontSize: 18,
  },
  formItem: {
    width: Dimensions.get('window').width * 0.7,
  },
  //Article Detail

  ArtContainer: {
    flex: 1,
    maxWidth: Dimensions.get('window').width,
    backgroundColor: 'white',
  },
  ArticleDetail: {
    maxWidth: Dimensions.get('window').width,
    backgroundColor: 'white',
    padding: 20,
    flex: 1,
    position: 'relative',
    justifyContent: 'flex-start',
  },
  ArtImage: {
    resizeMode: 'cover',
    maxWidth: Dimensions.get('window').width,
    maxHeight: Dimensions.get('window').height * 0.6,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * 0.33,
    marginBottom: 10,
  },

  ArtTitle: {
    fontSize: 16,
    textAlign: 'left',
    marginTop: 5,
    fontWeight: 'bold',
  },
  ArtSubTitle: {
    textAlign: 'left',
    fontSize: 14,
    flexWrap: 'wrap',
    marginTop: 5,
  },
  ArtCategory: {
    textAlign: 'left',
    fontSize: 14,
    flexWrap: 'wrap',
    color: '#24BF9C',
  },
  ArtDescription: {
    textAlign: 'left',
    fontSize: 14,
    marginTop: 5,
  },
  ArtReadTime: {
    textAlign: 'left',
    fontSize: 12,
    marginTop: 5,
  },
  //OverView Page
  chartContainer: {
    marginTop: 90,
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20,
    maxHeight: 280,
    borderBottomWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    borderBottomColor: '#cdcdcd',
    paddingBottom: 45,
  },
  chart: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    position: 'relative',
    marginRight: -80,
  },
  percentage: {
    position: 'absolute',
    justifyContent: 'center',
    alignSelf: 'center',
    paddingRight: 75,
  },
  pertext: {
    textAlign: 'center',
    justifyContent: 'center',
    marginTop: 8,
    fontSize: 22,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    color: '#24BF9C',
  },
  goalTimer: {
    fontSize: 25,
    marginBottom: 5,
    marginTop: -15,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    ...global.black60,
  },
  totalTimer: {
    fontSize: 75,
    fontWeight: '700',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    ...global.black80,
  },
  totalTimerTime: {
    fontSize: 50,
    fontWeight: '700',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    ...global.black80,
  },
  btnContainer: {
    backgroundColor: '#ffffff',
    justifyContent: 'space-between',
    flexDirection: 'row',
    flexWrap: 'wrap',
    margin: 10,
    alignItems: 'flex-end',
    paddingLeft: 20,
    paddingRight: 20,
    maxWidth: Dimensions.get('window').width,
    width: Dimensions.get('window').width,
  },
  btnGreen: {
    fontSize: 16,
    color: '#fff',
    backgroundColor: '#24BF9C',
    ...global.button,
    ...global.shadow,
    paddingTop: 10,
    paddingBottom: 10,
  },
  btnWhite: {
    fontSize: 18,
    ...global.black80,
    backgroundColor: '#fff',
    ...global.button,
    ...global.shadow,
    zIndex: -9,
  },
  btnIcon: {
    width: 20,
    height: 15,
    zIndex: 999,
  },
  hideText: {
    display: 'none',
  },
  alertMes: {
    color: 'red',
    fontSize: 18,
    marginBottom: 15,
  },
  // Benefits
  benefitContainer: {
    backgroundColor: '#ffffff',
    flex: 1,
    position: 'relative',
    backgroundColor: 'white',
    ...global.shadow,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    borderWidth: 1,
    borderColor: '#fff',
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 30,
    width: (Dimensions.get('window').width - 90) / 3,
    ...global.body,
    padding: 10,
    alignContent: 'flex-start',
  },
  benefitsWrapper: {
    position: 'relative',
    paddingBottom: 15,
  },
  benefitIcon: {
    ...global.icon,
    marginBottom: 10,
    alignContent: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#94EAD2',
  },
  benefitTitle: {
    paddingBottom: 5,
    fontSize: 16,
    ...global.black40,
    ...global.body,
    ...global.bold,
    lineHeight: 18,
  },
  benefitDescription: {
    paddingBottom: 5,
    ...global.black80,
    ...global.body,
    lineHeight: 16,
  },
  benefitProgress: {
    height: 7,
    borderRadius: 5,
  },
  // Loading screen
  loadingView: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    flex: 1,
  },
  loadingImage: {
    ...global.header,
  },
  loadingText: {
    color: '#24BF9C',
    fontSize: 20,
    fontWeight: 'bold',
  },

  // Goal Screen Styles Start Point

  viewSpacing: {
    marginTop: 30,
  },
  goalsHeader: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 30,
  },
  contentSection: {
    marginLeft: 20,
  },
  goalsHeaderContent: {
    width: 100,
    marginTop: 10,
  },
  checkboxContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 15,
  },
  selectText: {
    marginTop: 10,
    textAlign: 'center',
    fontSize: 20,
    color: 'gray',
  },

  //   Goal Screen Styles End Point
});

export default styles;
