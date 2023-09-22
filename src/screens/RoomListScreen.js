import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import HeaderWithLeftButton from '../component/HeaderWithLeftButton';
import fonts from '../utils/fonts';
import RoomCard from '../component/RoomCard';
import CustomButton from '../component/CustomButton';
import navigationString from '../utils/navigationString';

const Rooms = [
  {
    id: 1,
    name: 'SIM-0235',
    IsOccupied: true,
  },
  {
    id: 2,
    name: 'SIM-0235',
    IsOccupied: true,
  },
  {
    id: 3,
    name: 'SIM-0235',
    IsOccupied: false,
  },
  {
    id: 4,
    name: 'SIM-0235',
    IsOccupied: false,
  },
  {
    id: 5,
    name: 'SIM-0235',
    IsOccupied: true,
  },
  {
    id: 6,
    name: 'SIM-0235',
    IsOccupied: false,
  },
  {
    id: 7,
    name: 'SIM-0235',
    IsOccupied: true,
  },
  {
    id: 8,
    name: 'SIM-0235',
    IsOccupied: true,
  },
  {
    id: 9,
    name: 'SIM-0235',
    IsOccupied: false,
  },
  {
    id: 10,
    name: 'SIM-0235',
    IsOccupied: true,
  },
];

const RoomListScreen = ({navigation}) => {
  const [selectedRoom, setSelectedRoom] = useState('');

  const handelRoomSelection = id => {
    // console.log('id', id);
    let filterRoom = Rooms.filter(item => item.id === id);
    // console.log('room', filterRoom);
    if (filterRoom[0].IsOccupied) {
      Alert.alert('Room is Already Occupied');
    } else {
      setSelectedRoom(id);
    }
  };
  console.log('selected room', selectedRoom);
  return (
    <SafeAreaView style={styles.container}>
      <HeaderWithLeftButton
        leftIcon={true}
        onPress={() => {
          navigation.goBack();
        }}
        title={'Room Availability'}
        titleColor={'#000'}
      />
      <View style={styles.upper_view}>
        <View style={styles.upper_inner_view}>
          <View style={styles.upper_view_icon}></View>
          <Text style={styles.upper_view_text}>Available Room</Text>
        </View>
        <View style={styles.upper_inner_view}>
          <View
            style={[
              styles.upper_view_icon,
              {backgroundColor: '#FFAF00'},
            ]}></View>
          <Text style={styles.upper_view_text}>Occupied Room</Text>
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.room_list_view}>
        {Rooms.map((item, index) => (
          <RoomCard
            key={index}
            item={item}
            onPress={id => {
              handelRoomSelection(id);
            }}
            isSelected={selectedRoom === item.id}
          />
        ))}
      </ScrollView>
      <View style={styles.button}>
        <CustomButton
          title={'Book'}
          onPress={() => {
            navigation.navigate(navigationString.MemberShipDetailView);
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default RoomListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  upper_view: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 45,
    alignItems: 'center',
    width: '100%',
    marginTop: 20,
  },
  upper_inner_view: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  upper_view_text: {
    fontFamily: fonts.PoppinsRegular,
    fontSize: 15,
    color: '#000',
    marginLeft: 10,
  },
  upper_view_icon: {
    width: 10,
    height: 10,
    backgroundColor: '#00B383',
    borderRadius: 100,
  },
  room_list_view: {
    flexDirection: 'row',
    marginTop: 20,
    paddingHorizontal: 16,
    width: '100%',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  button: {
    marginBottom: 20,
    paddingHorizontal: 20,
  },
});
