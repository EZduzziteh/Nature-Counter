import {
  StyleSheet, ScrollView, Pressable, Text,
} from 'react-native';
import React, { useState } from 'react';
import { Button, TextInput, Card } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import DateTimePicker from '@react-native-community/datetimepicker';
import { THEME_DARK_GREEN } from '../Utilities/Constants';
import DateTimePickerModal from "react-native-modal-datetime-picker"
import {TimePicker, ValueMap} from 'react-native-simple-time-picker';
import {useDispatch} from 'react-redux';

const AddJournal = ({ passedEntry, dateSelected }) => {
  console.log("Date Selected:", (dateSelected));
  const [startTimeVisible, setStartTimeVisible] = useState(false);
  const [durationVisible, setDurationVisible] = useState(false);
  const [entry, setEntry] = useState(passedEntry);
  console.log("Value Map", ValueMap);
  const [value, setValue] = useState<ValueMap>({
    hours: 0,
    minutes: 0,
    seconds: 0
    });

  const locationHandler = (selectedLocation) => {
    setEntry((prevState) => ({ ...prevState, location: selectedLocation }));
  };
  console.log("Location Handler");
  const startTimeHandler = (event, selectedTime) => {
    setStartTimeVisible(false);
    if (event.type !== 'dismissed') {
      setEntry((prevState) => ({
        ...prevState,
        startTime: selectedTime.toISOString(),
      }));
    }
    console.log("Start time selected:", entry.startTime);
    console.log("Duration selected:", duration);
  };
  const onCancelHandler = () => {
    setDurationVisible(false);

  }
  const handleChange = (newValue: ValueMap) => {
      setValue(newValue);
      setDurationVisible(false);
  };
//  const durationHandler = (hour, minute) => {
//      setDurationVisible(false);
//      setEntry((prevState) => ({
//        ...prevState,
//        duration: `${hour} hrs, ${minute} mins`
//      }));
//      console.log("Start time selected:", entry.startTime);
//      console.log("Duration selected:", entry.duration);
//   };

  AddJournal.propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    passedEntry: PropTypes.object.isRequired,
    dateSelected: PropTypes.any.isRequired,
  };
//  console.log("Render Journal Entry");
  return (
    <Card style={styles.body}>
      <TextInput
        style={styles.text}
        placeholder="Date"
        value={moment(dateSelected).format('MM/DD/YY')}
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
      <Pressable
        onPress={() => {
          setStartTimeVisible(true);
        }}
      >
        {/* <TextInput
          style={styles.text}
          placeholder="Start Time"
          value={moment(entry.startTime).format('hh:mm:ss a')}
          disabled
        /> */}
        <Text style={styles.time}>{moment(entry.startTime).format('hh:mm:ss a')}</Text>
      </Pressable>
      {/* {durationVisible && (
        <DateTimePicker
          testID="dateTimePicker"
          value={new Date(0, 0, 0, 0, 0, 0)}
          mode="time"
          onChange={durationHandler}
          display="spinner"
          is24Hour
        />
      )} */}
      {/* <Pressable
        onPress={() => {
          setDurationVisible(true);
        }}
      > */}
      {durationVisible && (
          <TimePicker
            value={value}
            onChange = {handleChange}
          />
      )}
      <Pressable
          onPress={() => {
            setDurationVisible(true);
          }}
      >
        <Text style={styles.time}>{value}</Text>
      </Pressable>

      {/* <Text style={styles.time}>{entry.duration}</Text> */}
      {/* </Pressable> */}
    </Card>
  );
};

const AddJournalList = ({ passedEntries, dateSelected }) => {
  console.log("Passed Entries:", passedEntries);
  const [entries, setEntries] = useState(passedEntries);
  const dispatch = useDispatch();
  const addAnotherEntry = () => {
    const newEntry = {
      id: uuidv4(),
      date: dateSelected,
      location: '',
      startTime: new Date().toISOString(),
      duration: moment
        .utc(moment.duration('00:00:00').asMilliseconds())
        .format('HH:mm:ss'),
    };
    setEntries((prevState) => [...prevState, newEntry]);
  };

  const navigation = useNavigation();

  const submitHandler = () => {
    const userId = auth().currentUser.uid
    const endTime = 0
    dispatch(journalEntryActions.postJournalEntry(userId, entry.location, entry.startTime, endTime))
    navigation.navigate('JournalScreen', entries);
  };

  return (
    <ScrollView
      style={{
        height: 'auto',
        marginHorizontal: 20,
        marginBottom: 180,
      }}
    >
      {isIterable(entries) ? (
        entries.map((entry) => {
            isIterable(entry) ?
                (
                    <AddJournal
                    passedEntry={entry}
                    dateSelected={dateSelected}
                    key={entry.id} />
                ) : (<div/>)
            })
        ) : (<div/>)
      }

      <Button mode="text" onPress={addAnotherEntry}>
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
    </ScrollView>
  );
};

AddJournalList.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  passedEntries: PropTypes.arrayOf(PropTypes.object).isRequired,
  dateSelected: PropTypes.any.isRequired,
};

export default AddJournalList;

const styles = StyleSheet.create({
  body: {
    marginTop: 10,
    padding: 10,
  },
  text: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderBottomColor: '#C1C1C1',
    borderBottomWidth: 1,
  },
  time: {
    paddingLeft: 10,
    paddingVertical: 20,
    color: 'black',
    borderBottomColor: '#C1C1C1',
    borderBottomWidth: 3,
  },
});

function isIterable(obj) {
  // checks for null and undefined
  if (obj == null) {
    return false;
  }
  return typeof obj[Symbol.iterator] === 'function';
}
