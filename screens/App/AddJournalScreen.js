import React, { useEffect, useState, useRef} from 'react';
import { StyleSheet, View } from 'react-native';
import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import { CalendarButton } from '../../components/Button';
import AddJournalList from '../../components/Journal/AddJournalList';
import {useDispatch} from 'react-redux';

export function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value; //assign the value of ref to the argument
  },[value]); //this code will run when the value of 'value' changes
  return ref.current; //in the end, return the current ref value.
}

const AddJournalScreen = ({ passedEntries }) => {
  const [entries, setEntries] = useState([
    {
      id: uuidv4(),
      date: moment(new Date()).format(),
      location: '',
      startTime: new Date().toISOString(),
      duration: ''
    },
  ]);
  const [newDate, setSelectedDate] = useState(new Date())
  const dispatch = useDispatch();
  useEffect(() => {
    // if (passedEntries.length > 0) {
    //   setEntries(passedEntries);
    // }
    //var prevState = usePrevious(entries);
    console.log("UseEffect passedEntries:", entries);
    if(entries && entries.length > 0) {
        entries[0]["date"] = newDate;
        setEntries(state => {entries})
    }
  }, [newDate]);

  const dateHandler = (selectedDate) => {
    // setEntries((prevState) => {
    //   const newDate = prevState.date;
    //   // newDate.setMonth(selectedDate.getMonth());
    //   // newDate.setDate(selectedDate.getDate());
    //   // newDate.setFullYear(selectedDate.getFullYear());

    //   return {
    //     ...prevState,
    //     date: selectedDate,
    //   };
    // });
    // const newEntry = [...entries, { date: selectedDate }];
    // setEntries((prevState) => ({...prevState, date: selectedDate}));
    setSelectedDate(selectedDate)
    console.log(`datehandler: ${selectedDate}`);
  };
  // console.log(`newdate: ${newDate}`);
  // console.log(entries);

  return (
    <View>
      <View style={styles.body}>
        <CalendarButton mode="single" onSubmit={dateHandler} />
        <AddJournalList passedEntries={entries} dateSelected={newDate} ghi/>
      </View>
    </View>
  );
};

AddJournalScreen.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  passedEntries: PropTypes.arrayOf(PropTypes.object),
};

AddJournalScreen.defaultProps = {
  passedEntries: [],
};

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
