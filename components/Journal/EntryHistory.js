import React from 'react';
import { Text } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import { View } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';
import moment from 'moment';
import { JournalTime1 } from '../../assets/icons/Journal';
import Entry from './Entry';

const StyledIcon = styled.Image`
  height: 15px;
  width: 15px;
`;

const EntryHistory = (props) => {
  const { goalTime, entries, dateFilter } = props;
  const { startDate, endDate } = dateFilter;

  const groupByDate = entries
    .filter(
      (entry) => moment(entry.startTime).format('MM/DD/YYYY')
        >= moment(startDate).format('MM/DD/YYYY') && moment(entry.startTime).format('MM/DD/YYYY')
        <= moment(endDate).format('MM/DD/YYYY'),
    )
    .sort((a, b) => a.startTime > b.startTime)
    .reduce((group, entry) => {
      const { startTime } = entry;
      const formattedDate = moment(startTime)
        .format('MM/DD/YYYY');
      // eslint-disable-next-line no-param-reassign
      group[formattedDate] = group[formattedDate] ?? [];
      group[formattedDate].push(entry);
      return group;
    }, {});

  return (
    <View>
      <Text style={{ marginBottom: 10 }}>
        <StyledIcon source={JournalTime1} />
        Entry History
      </Text>

      <ScrollView style={styles.scrollView}>
        {Object.entries(groupByDate).length === 0 ? (
          <Entry
            isEmpty
          />
        ) : null}
        {Object.keys(groupByDate).map((entry) => (
          <Entry
            entries={groupByDate[entry]}
            goalTime={goalTime}
            key={groupByDate[entry][0].id}
          />
        ))}
      </ScrollView>
    </View>
  );
};

EntryHistory.propTypes = {
  goalTime: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  entries: PropTypes.array.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  dateFilter: PropTypes.object.isRequired,
};

export default EntryHistory;

const styles = StyleSheet.create({
  surface: {
    alignItems: 'center',
    justifyContent: 'space-around',
    borderRadius: 20,
    margin: 10,
  },

  scrollView: {
    height: 'auto',
    marginHorizontal: 20,
    marginBottom: 180,
  },

  icon: {
    height: 15,
    width: 15,
  },

  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
});
