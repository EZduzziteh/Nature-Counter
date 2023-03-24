
import React from 'react';
import { Linking, } from 'react-native';
import Benefits from "../../SampleData/Benefits.json";
import { ImagesAssets } from '../../assets/ImagesAssets.js';
import SectionHeaderRow from '../Row/SectionHeaderRow';


import {
  View,
  StyleSheet,
  Button,
  Modal,
  Image,
  Text,
  TouchableOpacity,
  Animated,
} from 'react-native';

// Modal Pop Up screen constructor
const ModalPoup = ({visible, children}) => {
  const [showModal, setShowModal] = React.useState(visible);
  const scaleValue = React.useRef(new Animated.Value(0)).current;
  React.useEffect(() => {
    toggleModal();
  }, [visible]);
  const toggleModal = () => {
    if (visible) {
      setShowModal(true);
      Animated.spring(scaleValue, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      setTimeout(() => setShowModal(false), 200);
      Animated.timing(scaleValue, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  };
  return (
    <Modal transparent visible={showModal}>
      <View style={styles.modalBackGround}>
        <Animated.View
          style={[styles.modalContainer, {transform: [{scale: scaleValue}]}]}>
          {children}
        </Animated.View>
      </View>
    </Modal>
  );
};

// Function to read image from json data file (assets)
const getImage = (image) => {
  switch (image) {
      case "image1":
          return ImagesAssets.image1
          break;
      case "image2":
        return ImagesAssets.image2
        break;
        case "arrow":
          return ImagesAssets.arrow
          break;

      default:
          return ImagesAssets.image1;
          break;
  }
}

const BenefitsGainedSection = () => {
  const [visible, setVisible] = React.useState(false);
  const [title, setTitle] = React.useState('');
  const [text, setText] = React.useState('');
  const [learnMore, setLearnMore] = React.useState('');
  const [nextButton, setNextButton] = React.useState(false);
  const link = learnMore
  return (
    <View>
    <View style={[ styles.container,{ flexDirection: 'row',}, ]}>
    <Image source={require('../../assets/icons/TopBenefitsLogo.png')}></Image>
    <SectionHeaderRow title="Estimated Benefits"/>
    </View>

    <View style={{flex: 1, top: 0, justifyContent: 'center', alignItems: 'center'}}>
     
      <ModalPoup visible={visible}>
        <View style={{alignItems: 'center'}}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => setVisible(false)}>
              <Image 
                source={require('../../assets/x.png')}
                style={{height: 10, width: 10}}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{alignItems: 'center'}}>
          <Image
            source={require('../../assets/icons/success.png')}
            style={{height: 40, width: 40, marginVertical: 5}}
          />
        </View>
        <Text
          style={{
            marginVertical: 30,
            fontSize: 18,
            textAlign: 'left',
            fontWeight: 'bold',
          }}>
          {title}
        </Text>
        <Text style={{marginVertical: 30, fontSize: 12, textAlign: 'left'}}>
          {text}
        </Text>
        <Text
          style={{color: 'green'}}
          onPress={() => Linking.openURL(link)}>
          Learn More{'\n'}{'\n'}{'\n'}
        </Text>
        <View style={[{ width: "50%", margin: 10}]}>
        { nextButton && <Button color="green" title="Next"></Button> } 
        </View>
      </ModalPoup>

      {Benefits.benefits.map((item, i) => (
      <TouchableOpacity key={i} style={{borderColor: 'green',borderWidth: 2, borderRadius:10, overflow: 'hidden',flexDirection: 'row', overflow: 'hidden', backgroundColor: '#fff', marginLeft: 10, marginRight: 10, marginBottom: 6, height: 50, background: 'transparent'}} 
      onPress={() => {setVisible(true); setTitle(item.title); setText(item.text);setLearnMore(item.learnMoreURL);setNextButton(item.nextButton)}}>
      <View style={{borderColor: 'green', borderRadius:20, overflow: 'hidden'}}>
      <View style={{width: 40, height:40 , marginLeft: 10}} >
        <Image style= {{flex:1 , width: undefined, height: undefined}} source={getImage(item.image)} />
        </View>
      </View>
      <View style={{flexGrow: 1, flexShrink: 1, marginLeft: -20,alignSelf: 'center'}}>
        <Text style={{fontSize: 15,fontWeight: '500'}}>       {item.title}</Text>
      </View>
      <View style={{width: 20, height:20 , alignSelf: 'center',marginRight: 5}} >
        <Image style= {{flex:1 , width: undefined, height: undefined}} source={getImage('arrow')} />
        </View>
  </TouchableOpacity>
      ))}
    </View>
    </View>
  );
};

// Styling mopdal popup screen
const styles = StyleSheet.create({
  modalBackGround: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '80%',
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 20,
    elevation: 20,
  },
  header: {
    width: '100%',
    height: 40,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
});

// Export component
export default BenefitsGainedSection;



///this stufdf is the old stuff, its just here in case we need to pull it back laterc
/*
import React from 'react';
import { Text } from 'react-native';
import { StyledRow } from '../Utilities/commonStyle';
import SectionHeaderRow from '../Row/SectionHeaderRow';
import BenefitCard from '../Card/BenefitCard';

const BenefitsGainedSection = ({ benefits, onPress }) => {

  return (
    <>
      <SectionHeaderRow title="Benefits Gained" onPress={onPress} />
      { benefits && benefits.length > 0 ? (
        <StyledRow>
          { benefits.map((b) => {
            return (
              <BenefitCard
                key={b._id}
                icon={b.icon}
                title={b.benefit}
                progress={b.gainTime}
              />
            );
          })}
        </StyledRow>
      ) : <Text style={{textAlign: 'center'}}>No benefits to show</Text> }
    </>
  );
};

export default BenefitsGainedSection;
*/