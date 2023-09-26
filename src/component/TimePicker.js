import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import fonts from '../utils/fonts';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {LinearTextGradient} from 'react-native-text-gradient';
const TimePicker = ({label, isDisabled, setTime, checkin, isCheckoutField}) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState(
    isCheckoutField == false && checkin != null
      ? new Date(checkin).toLocaleString('en-US', {
          hour: 'numeric',
          minute: 'numeric',
          hour12: true,
        })
      : '',
  );

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    hideDatePicker();
    let currentTime = new Date(Date.now()).toUTCString();
    let selectedTime = new Date(date.getTime()).toUTCString();

    let time_difference = new Date(selectedTime) - new Date(currentTime);
    console.log(time_difference);
    if (time_difference > 900000) {
      setSelectedDate('');
      setTime('');
      Alert.alert(
        'Warning',
        'You are not allowed to set time more than 15 minutes from now.',
        [{text: 'ok'}],
      );
      return;
    }

    let checkin_time = new Date(checkin).toUTCString();
    let checkout_difference = new Date(selectedTime) - new Date(checkin_time);

    if (checkout_difference < 0) {
      setSelectedDate('');
      setTime('');
      Alert.alert('Warning', 'You can not set time before checkin time.', [
        {text: 'ok'},
      ]);
      return;
    }

    console.log('A date has been picked: ', date);
    const timestamp = new Date(date);
    const formattedTime = timestamp.toLocaleString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    });
    setSelectedDate(formattedTime);
    setTime(date.getTime());
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
        date={new Date()}
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
