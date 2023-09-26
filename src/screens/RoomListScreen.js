import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Alert,
  Modal,
  Pressable,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import HeaderWithLeftButton from '../component/HeaderWithLeftButton';
import fonts from '../utils/fonts';
import RoomCard from '../component/RoomCard';
import CustomButton from '../component/CustomButton';
import navigationString from '../utils/navigationString';
import {GET_ALL_ROOMS, UPDATE_MEMBERSHIP_DETAIL_BY_ID} from '../utils/config';
import axios from 'axios';
import {LinearTextGradient} from 'react-native-text-gradient';

const RoomListScreen = ({navigation, route}) => {
  const [selectedRoom, setSelectedRoom] = useState('');
  const [responseRoom, setResponseRoom] = useState('');
  const [roomObj, setRoomObj] = useState(null);
  const {responseData} = route.params;
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [loader, setLoader] = useState(false);

  const handelRoomSelection = (id, name) => {
    let filterRoom = responseRoom.filter(item => item._id === id);
    if (filterRoom[0].is_occupied) {
      setModalVisible(true);
      setModalMessage('Room is Already Occupied');
    } else {
      setSelectedRoom(id);
      setRoomObj({
        _id: id,
        room_number: name,
        is_occupied: true,
      });
    }
  };

  const getAllRoom = async () => {
    try {
      let response = await axios.get(GET_ALL_ROOMS);
      if (!response.data.error) {
        setResponseRoom(response.data.response);
      } else {
        setModalMessage(response.data.error_detail);
        setModalVisible(true);
      }
    } catch (error) {
      setModalMessage(error.response.data);
      setModalVisible(true);
    }
  };

  useEffect(() => {
    getAllRoom();
  }, []);

  const handelSave = async () => {
    setLoader(true);
    if (!selectedRoom) {
      setModalVisible(true);
      setModalMessage('Please Select Room First');
      setLoader(false);
    } else {
      try {
        let response = await axios.put(
          UPDATE_MEMBERSHIP_DETAIL_BY_ID + responseData.response.membership._id,
          {
            room_id: selectedRoom,
          },
        );
        if (!response.data.error) {
          if (selectedRoom) {
            let tempData = responseData.response;
            tempData.membership.room_id = roomObj;
            navigation.replace(navigationString.MemberShipDetailView, {
              responseData: tempData,
            });
          }
        }
      } catch (error) {
        setModalMessage(error.response.data);
        setModalVisible(true);
      }
      setLoader(false);
    }
  };
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
        {responseRoom.length > 0 &&
          responseRoom?.map((item, index) => (
            <RoomCard
              key={index}
              item={item}
              onPress={(id, name) => {
                handelRoomSelection(id, name);
              }}
              isSelected={selectedRoom === item._id}
            />
          ))}
      </ScrollView>
      <View style={styles.button}>
        <CustomButton
          title={'Book'}
          onPress={() => {
            handelSave();
          }}
          loader={loader}
        />
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{modalMessage}</Text>
            <Pressable
              onPress={() => {
                setModalVisible(false);
                setModalMessage('');
              }}>
              <View style={styles.card_time_view}>
                <LinearTextGradient
                  locations={[0, 1]}
                  colors={['#F3CD6B', '#BD7D08']}
                  start={{x: 0, y: 0}}
                  end={{x: 0, y: 1}}>
                  <Text style={styles.textStyle}>ok</Text>
                </LinearTextGradient>
              </View>
            </Pressable>
          </View>
        </View>
      </Modal>
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
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000d4',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    paddingHorizontal: 18,
    width: '80%',
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    fontSize: 14,
    marginBottom: 15,
    textAlign: 'center',
    fontFamily: fonts.PoppinsRegular,
    color: '#000000',
  },
  card_time_view: {
    width: 88,
    height: 28,
    backgroundColor: '#000000',
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
