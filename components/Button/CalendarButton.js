import React, { useState, useCallback } from 'react';
import {
  Text,
  TouchableOpacity,
  Image,
  View,
  SafeAreaView,
  // Platform,
} from 'react-native';
import PropTypes from 'prop-types';
import moment from 'moment';
import {
  DatePickerModal,
  en,
  registerTranslation,
} from 'react-native-paper-dates';
import styles from './styles';
import { CALENDAR_ICON } from '../../assets/icons';

registerTranslation('en', en);

/**
 *
 * @param onSubmit
 * @return {JSX.Element}
 * @constructor
 */
const CalendarButton = (props) => {
  const { onSubmit, mode } = props;
  const [dateRange, setRange] = useState({
    startDate: undefined,
    endDate: undefined,
  });
  const [dateSingle, setDateSingle] = useState(undefined);

  const [open, setOpen] = useState(false);

  const onDismiss = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const onRangeConfirm = useCallback(
    ({ startDate, endDate }) => {
      setOpen(false);
      setRange({ startDate, endDate });
      onSubmit({ startDate, endDate });
    },
    [setOpen, setRange, onSubmit],
  );

  const onSingleConfirm = useCallback(
    (selectedDate) => {
      setOpen(false);
      setDateSingle(selectedDate.date);
      onSubmit(moment(selectedDate.date).format());
      console.log(`selectedDate.date: ${moment(selectedDate.date).format()}`);
    },
    [setOpen, setRange, onSubmit],
  );

  const showDatePicker = () => {
    setOpen(true);
  };

  const ChosenDatePicker = ({ choice }) => (choice === 'range' ? (
    <DatePickerModal
      locale="en"
      mode="range"
      visible={open}
      onDismiss={onDismiss}
      startDate={dateRange.startDate}
      endDate={dateRange.endDate}
      onConfirm={onRangeConfirm}
    />
  ) : (
    <DatePickerModal
      locale="en"
      mode="single"
      visible={open}
      onDismiss={onDismiss}
      date={dateSingle}
      onConfirm={onSingleConfirm}
    />
  ));

  ChosenDatePicker.propTypes = {
    choice: PropTypes.string.isRequired,
  };

  const DateString = mode === 'single'
    ? moment(dateSingle).format('MMMM D')
    : `${moment(dateRange.startDate).format('MMMM D')} - ${moment(
      dateRange.endDate,
    ).format('MMMM D')}`;

  return (
    <SafeAreaView>
      <TouchableOpacity style={styles.calendarButton} onPress={showDatePicker}>
        <View style={styles.calendarButtonLabel}>
          <Image
            style={styles.calendarIcon}
            source={CALENDAR_ICON}
            resizeMode="contain"
          />
          <Text style={styles.calendarDate}>{DateString}</Text>
        </View>
      </TouchableOpacity>
      <View style={{ backgroundColor: 'white' }}>
        <ChosenDatePicker choice={mode} />
      </View>
    </SafeAreaView>
  );
};

CalendarButton.propTypes = {
  onSubmit: PropTypes.func,
  mode: PropTypes.string.isRequired,
};

CalendarButton.defaultProps = {
  onSubmit: () => {},
};

export default CalendarButton;
