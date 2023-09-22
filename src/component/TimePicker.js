import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import fonts from '../utils/fonts';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
const TimePicker = ({label , isDisabled}) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    console.log('A date has been picked: ', date);
    const timestamp = new Date(date);
    const formattedTime = timestamp.toLocaleString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    });
    setSelectedDate(formattedTime);
    hideDatePicker();
  };
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TouchableOpacity
      disabled={isDisabled}
        style={[styles.textInput_view]}
        onPress={showDatePicker}>
        <Text style={styles.text_view_subText}>
          {selectedDate ? selectedDate : 'Select Time'}
        </Text>
        <Image
          source={require('../../assets/icons/clock.png')}
          style={styles.bottom_view_button_icon}
        />
      </TouchableOpacity>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="time"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
};

export default TimePicker;

const styles = StyleSheet.create({
  label: {
    fontFamily: fonts.PoppinsMedium,
    fontSize: 15,
    color: '#000',
  },
  textInput_view: {
    width: '100%',
    height: 50,
    borderRadius: 10,
    backgroundColor: '#F6F6F6',
    marginTop: 5,
    paddingHorizontal: 9,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  text_view_subText: {
    fontSize: 14,
    fontFamily: fonts.PoppinsMedium,
    color: '#000000',
  },
  bottom_view_button_icon: {
    width: 24,
    height: 24,
  },
  container: {
    marginVertical: 10,
  },
});
