import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
// import PropTypes from 'prop-types';
import { Button, TextInput } from 'react-native-paper';
import moment from 'moment';
import DateTimePicker from '@react-native-community/datetimepicker';
import DateTimePickerModal from "react-native-modal-datetime-picker"
import { v4 as uuidv4 } from 'uuid';
import { useNavigation } from '@react-navigation/native';
import { CalendarButton } from '../../components/Button';
import { THEME_DARK_GREEN } from '../../components/Utilities/Constants';
import {useDispatch} from 'react-redux';
import * as journalEntryActions from '../../redux/actions/journalEntryActions';
import auth from '@react-native-firebase/auth';

const AddJournalScreen = () => {
  const [startTimeVisible, setStartTimeVisible] = useState(false);
  const [durationVisible, setDurationVisible] = useState(false);
  const [entry, setEntry] = useState({
    id: uuidv4(),
    date: new Date().toISOString(),
    location: '',
    startTime: new Date().toISOString(),
    duration: moment
      .utc(moment.duration('00:00:00').asMilliseconds())
      .format('HH:mm:ss'),
  });
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const dateHandler = (selectedDate) => {
    setEntry((prevState) => {
      const newDate = new Date(prevState.startTime);
      newDate.setMonth(selectedDate.getMonth());
      newDate.setDate(selectedDate.getDate());
      newDate.setFullYear(selectedDate.getFullYear());

      return {
        ...prevState,
        startTime: newDate.toISOString(),
      };
    });
  };

  const locationHandler = (selectedLocation) => {
    setEntry((prevState) => ({ ...prevState, location: selectedLocation }));
  };

  const startTimeHandler = (event, selectedTime) => {
    setStartTimeVisible(false);
    setEntry((prevState) => ({
      ...prevState,
      startTime: selectedTime.toISOString(),
    }));
  };

  const durationHandler = (time) => {
    setDurationVisible(false);
    setEntry((prevState) => ({
      ...prevState,
      duration: time.toTimeString().split(' ')[0],
    }));
    console.log("Time selected:", entry.duration);
  };

  const submitHandler = () => {
    const userId = auth().currentUser.uid
    dispatch(journalEntryActions.postJournalEntry(userId, location, startTime, ))
    navigation.navigate('JournalScreen', entry);
  };

  return (
    <View>
      <View style={styles.body}>
        <CalendarButton mode="single" onSubmit={dateHandler} />
        <TextInput
          style={styles.text}
          placeholder="Date"
          value={moment(entry.startTime).format('MM/DD/YY')}
          disabled
        />
        <TextInput
          style={styles.text}
          placeholder="Location"
          value={entry.location}
          onChangeText={locationHandler}
        />
        {startTimeVisible && (
          <DateTimePicker
            testID="dateTimePicker"
            value={new Date(entry.startTime)}
            mode="time"
            onChange={startTimeHandler}
            display="spinner"
          />
        )}
        <TextInput
          style={styles.text}
          placeholder="Start Time"
          onFocus={() => {
            setStartTimeVisible(true);
          }}
          value={moment(entry.startTime).format('hh:mm:ss a')}
        />
        {durationVisible && (
          <DateTimePickerModal
            mode="time"
            onConfirm={durationHandler}
          />
        )}
        <TextInput
          style={styles.text}
          placeholder="Duration"
          onFocus={() => {
            setDurationVisible(true);
          }}
          value={entry.duration}
        />
        <Button mode="text" onPress={() => console.log('Pressed')}>
          Add Another Entry +
        </Button>
        <Button
          mode="outlined"
          style={{
            borderColor: THEME_DARK_GREEN,
            borderWidth: 2,
            borderRadius: 100,
          }}
          onPress={submitHandler}
        >
          Save Journal
        </Button>
      </View>
    </View>
  );
};

// AddJournalScreen.propTypes = {
// };

// AddJournalScreen.defaultProps = {};

export default AddJournalScreen;

const styles = StyleSheet.create({
  body: {
    marginTop: 20,
    marginHorizontal: 10,
  },
  text: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderBottomColor: '#E7E7E7',
    borderBottomWidth: 1,
  },
});
