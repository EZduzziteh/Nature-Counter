import React from 'react';
import { TouchableOpacity, Image, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import { PlusIcon } from '../../assets/icons';

/**
 *
 * @param onPress
 * @return {JSX.Element}
 * @constructor
 */

const AddJournalButton = () => {
  const navigation = useNavigation();

  const onPressHandler = () => {
    navigation.navigate('AddJournalScreen');
  };

  return (
    <TouchableOpacity onPress={onPressHandler}>
      <View>
        <Image
          style={styles.addJournalButton}
          source={PlusIcon}
          resizeMode="contain"
        />
      </View>
    </TouchableOpacity>
  );
};

export default AddJournalButton;
