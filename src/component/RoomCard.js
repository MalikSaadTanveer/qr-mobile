import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import fonts from '../utils/fonts';

const RoomCard = ({onPress, item, isSelected}) => {
  return (
    <TouchableOpacity
      style={[
        styles.room_button,
        isSelected
          ? {backgroundColor: '#FFAF00', borderColor: '#FFAF00'}
          : item.IsOccupied
          ? {backgroundColor: '#FFAF0029', borderColor: '#FFAF00'}
          : {backgroundColor: '#00B38329', borderColor: '#00B383'},
      ]}
      onPress={() => {
        onPress(item.id);
      }}>
      <Text
        style={[
          styles.room_button_text,
          isSelected
            ? {color: '#fff'}
            : item.IsOccupied
            ? {color: '#FFAF00'}
            : {color: '#00B383'},
        ]}>
        {item.name}
      </Text>
    </TouchableOpacity>
  );
};

export default RoomCard;

const styles = StyleSheet.create({
  room_button: {
    borderWidth: 1,

    paddingVertical: 11,
    // paddingHorizontal:14,
    width: '30%',
    borderRadius: 100,
    alignItems: 'center',
    marginVertical: 8,
  },
  room_button_text: {
    fontFamily: fonts.PoppinsMedium,
    fontSize: 15,
    color: '#00B383',
  },
});
