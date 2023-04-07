import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import { CalendarButton } from '../../components/Button';
import EntryHistory from '../../components/Journal/EntryHistory';
import AddJournalButton from '../../components/Button/AddJournalButton';
//import journalEntries from '../../helpers/journalEntries.json';
import axios from 'axios';
import {fetchJournalEntries} from '../../redux/actions/journalEntryActions';
import {useDispatch, useSelector} from 'react-redux';

const JournalScreen = () => {
  const [entries, setEntries] = useState();
  const [dateFilter, setDateFilter] = useState({
    startDate: new Date(),
    endDate: new Date(),
  });

  const dispatch = useDispatch();
  const journalEntries = useSelector(
    state => state.getIn(['JournalEntryData', 'journalEntries']),
    journalEntries,
  );

  useEffect(() => {
    dispatch(fetchJournalEntries)
  }, []);

  const handleCalendarButtonPress = (selectedDate) => {
    setDateFilter(selectedDate);
  };

  return (
    <View style={styles.journalContainer}>
      <View style={styles.journalButton}>
        <CalendarButton onSubmit={handleCalendarButtonPress} mode="range" />
        <AddJournalButton />
      </View>
      <EntryHistory
        goalTime="08:00:00"
        entries={journalEntries}
        dateFilter={dateFilter}
      />
    </View>
  );
};

JournalScreen.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  route: PropTypes.object.isRequired,
};

JournalScreen.defaultProps = {};

export default JournalScreen;

const styles = StyleSheet.create({
  journalContainer: {
    marginTop: 20,
    marginLeft: 10,
  },
  journalButton: {
    marginRight: 15,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});
