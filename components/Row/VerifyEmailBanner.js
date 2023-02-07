import React, { useCallback } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { OutlineButton } from '../Button';
import { THEME_GREEN } from '../Utilities/Constants';
import { openInbox } from 'react-native-email-link';

/**
 * component for showing a banner on home screen if user hasn't verified their email
 * @return {JSX.Element}
 */
export default () => {
  /**
   * button for verify email banner
   * @return {JSX.Element}
   * @constructor
   */
  const OpenMailButton = () => {
    const handlePress = useCallback(async () => {
      // open the custom mail if the app has one
      await openInbox();
    }, []);

    return <OutlineButton label="Verify" onPress={handlePress} />;
  };

  return (
    <View style={styles.banner}>
      <Text style={styles.text}>
        Verify Your Email
      </Text>
      <OpenMailButton />
    </View>
  );
};

const styles = StyleSheet.create({
  banner: {
    height: 60,
    backgroundColor: THEME_GREEN,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 15,
    color: 'white',
    marginLeft: 20,
  },
});
