import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Modal,
  ActivityIndicator,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import HeaderWithLeftButton from '../component/HeaderWithLeftButton';
import {LinearTextGradient} from 'react-native-text-gradient';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import fonts from '../utils/fonts';
import navigationString from '../utils/navigationString';
import axios from 'axios';
import {ADD_MEMBERSHIP_DETAIL} from '../utils/config';
import TimePicker from '../component/TimePicker';
import CustomButton from '../component/CustomButton';

const MemberShipDetailView = ({navigation, route}) => {
  const {responseData} = route.params;
  const [remainingTime, setRemainingTime] = useState(100);
  const [time, SetTime] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [updateResponse, setUpdateResponse] = useState(null);
  const [loader, setLoader] = useState();

  const remaingTimeCalculate = data => {
    const totalSeconds =
      data?.membership?.total_hours?.hours * 3600 +
      data?.membership?.total_hours?.minutes * 60;
    const remainingSeconds =
      data?.membership?.total_remaining_time?.hours * 3600 +
      data?.membership?.total_remaining_time?.minutes * 60;

    const remainingTimeParentage = (remainingSeconds / totalSeconds) * 100;
    setRemainingTime(parseInt(remainingTimeParentage));
  };

  useEffect(() => {
    remaingTimeCalculate(responseData);
  }, []);

  const handelSave = async () => {
    setLoader(true);
    setModalVisible(true);
    try {
      let response = await axios.post(ADD_MEMBERSHIP_DETAIL, {
        time_in_milliseconds: time,
        membership_id: responseData?.membership?._id,
      });
      if (!response.data.error) {
        setTimeout(() => {
          setUpdateResponse(response.data);
          setModalVisible(false);
          navigation.replace(navigationString.QrScannerScreen);
        }, 1000);
      } else {
        setModalVisible(true);
        setResponseMessage(response.data.error_detail);
      }
    } catch (error) {
      setModalVisible(true);
      setResponseMessage(error.response.data);
    }
  };

  const formatDate = timestamp => {
    const daysOfWeek = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    const date = new Date(timestamp);

    const dayOfWeek = daysOfWeek[date.getUTCDay()];
    const dayOfMonth = date.getUTCDate();
    const month = months[date.getUTCMonth()];
    const year = date.getUTCFullYear();

    return `${dayOfWeek}, ${dayOfMonth} ${month} ${year}`;
  };

  const date = new Date();
  const FormattedDate = formatDate(date);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'#ffffff'} barStyle={'dark-content'} />
      <HeaderWithLeftButton
        title={'MemberShip Detail'}
        leftIcon={true}
        onPress={() => {
          navigation.goBack();
        }}
        titleColor={'#000000'}
      />
      <ScrollView>
        <View style={styles.current_date_view}>
          <Text style={styles.label}>Current Date </Text>
          <View style={[styles.textInput_view]}>
            <Text style={styles.text_view_subText}>{FormattedDate}</Text>
          </View>
        </View>
        <View style={styles.content_container}>
          <View style={styles.upper_content_view}>
            <View style={styles.progress_circle_container}>
              <View style={styles.progress_circle}>
                <View style={styles.progress_circle_view}>
                  <AnimatedCircularProgress
                    size={147}
                    width={12}
                    fill={100}
                    tintColor="#EBC15D"
                    rotation={0}
                    lineCap={'round'}
                    backgroundColor="#0000000A"
                  />
                </View>
                <View style={styles.progress_circle_inner_view}>
                  <LinearTextGradient
                    locations={[0, 1]}
                    colors={['#F3CD6B', '#BD7D08']}
                    start={{x: 0, y: 0}}
                    end={{x: 0, y: 1}}>
                    <Text style={styles.inner_view_text}>
                      {responseData?.membership?.total_hours
                        ? responseData?.membership?.total_hours.hours +
                          ':' +
                          responseData?.membership?.total_hours?.minutes
                        : '00:00'}
                    </Text>
                  </LinearTextGradient>
                  <LinearTextGradient
                    style={{textAlign: 'center'}}
                    locations={[0, 1]}
                    colors={['#F3CD6B', '#BD7D08']}
                    start={{x: 0, y: 0}}
                    end={{x: 0, y: 1}}>
                    <Text style={styles.inner_view_subtext}>Total Hours</Text>
                  </LinearTextGradient>
                </View>
              </View>
              <View style={styles.progress_circle}>
                <View style={[styles.progress_circle_view]}>
                  <AnimatedCircularProgress
                    size={147}
                    width={12}
                    fill={remainingTime}
                    tintColor="#EBC15D"
                    rotation={0}
                    lineCap={'round'}
                    backgroundColor="#0000000A"
                  />
                </View>

                <View style={[styles.progress_circle_inner_view]}>
                  <LinearTextGradient
                    locations={[0, 1]}
                    colors={['#F3CD6B', '#BD7D08']}
                    start={{x: 0, y: 0}}
                    end={{x: 0, y: 1}}>
                    <Text style={styles.inner_view_text}>
                      {responseData?.membership?.total_remaining_time
                        ? responseData?.membership?.total_remaining_time
                            ?.hours +
                          ':' +
                          responseData?.membership?.total_remaining_time
                            ?.minutes
                        : '00:00'}
                    </Text>
                  </LinearTextGradient>
                  <LinearTextGradient
                    style={{textAlign: 'center'}}
                    locations={[0, 1]}
                    colors={['#F3CD6B', '#BD7D08']}
                    start={{x: 0, y: 0}}
                    end={{x: 0, y: 1}}>
                    <Text style={styles.inner_view_subtext}>
                      Remaining Hours
                    </Text>
                  </LinearTextGradient>
                </View>
              </View>
            </View>
            <View style={[styles.meddle_text_view, {marginTop: 30}]}>
              <View style={styles.meddle_text_subView}>
                <Text style={styles.meddle_text_subView_heading}>
                  Voucher ID
                </Text>
                <Text style={styles.meddle_text_subView_text} numberOfLines={1}>
                  {responseData?.membership?._id}
                </Text>
              </View>
              <View style={styles.meddle_text_subView}>
                <Text style={styles.meddle_text_subView_heading}>
                  Member Name
                </Text>
                <Text style={styles.meddle_text_subView_text}>
                  {responseData?.membership?.user_id?.first_name +
                    ' ' +
                    responseData?.membership?.user_id?.last_name}
                </Text>
              </View>
            </View>

            <View style={styles.text_view}>
              <Text style={styles.text_view_heading}>Membership Expiry</Text>
              <Text style={styles.text_view_subText}>
                {responseData?.membership?.expiry_date}
              </Text>
            </View>
            <View style={styles.meddle_text_view}>
              <View style={styles.meddle_text_subView}>
                <Text style={styles.meddle_text_subView_heading}>
                  Room Number
                </Text>
                <Text style={styles.meddle_text_subView_text}>
                  {responseData?.membership?.room_id?.room_number}
                </Text>
              </View>
              <View style={styles.meddle_text_subView}>
                <Text style={styles.meddle_text_subView_heading}>
                  Total Amount
                </Text>
                <Text style={styles.meddle_text_subView_text}>
                  {'$' + responseData?.membership?.total_amount}
                </Text>
              </View>
            </View>
            <View style={styles.meddle_text_view}>
              <View style={styles.meddle_text_subView}>
                <Text style={styles.meddle_text_subView_heading}>
                  Payment Method
                </Text>
                <Text style={styles.meddle_text_subView_text}>
                  {responseData?.membership?.payment_method}
                </Text>
              </View>
              <View style={styles.meddle_text_subView}>
                <Text style={styles.meddle_text_subView_heading}>
                  Payment Receive
                </Text>
                <Text style={styles.meddle_text_subView_text}>
                  {responseData?.membership?.payment_method}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.bottom_view}>
          <TimePicker
            label={'Check-In'}
            isDisabled={responseData?.last_in_status === null ? false : true}
            setTime={SetTime}
            checkin={responseData?.last_in_status?.checkin_time || null}
          />
          <TimePicker
            label={'Check-Out'}
            isDisabled={responseData?.last_in_status === null ? true : false}
            setTime={SetTime}
            checkin={responseData?.last_in_status?.checkin_out || null}
          />
        </View>

        <View style={styles.Save_button}>
          <CustomButton
            title={'Save'}
            onPress={() => {
              handelSave();
            }}
          />
        </View>
      </ScrollView>
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
            <Text style={styles.modalText}>
              {!updateResponse ? (
                <ActivityIndicator size={'large'} />
              ) : (
                updateResponse?.error && updateResponse?.error_details
              )}
            </Text>
            {updateResponse?.error && (
              <Pressable
                onPress={() => {
                  setModalVisible(false);
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
            )}
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default MemberShipDetailView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  current_date_view: {
    paddingHorizontal: 16,
  },
  content_container: {
    paddingHorizontal: 16,
    width: '100%',
  },
  upper_content_view: {
    width: '100%',
    // height: 444,
    borderRadius: 12,
    borderColor: '#e9e9e9',
    borderWidth: 1,
    backgroundColor: '#ffffff',
    marginTop: 15,
    paddingHorizontal: 14,
    paddingBottom: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  progress_circle_container: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  progress_circle: {
    flex: 1,
    alignItems: 'center',
  },
  progress_circle_view: {
    position: 'absolute',
    transform: [{scaleX: -1}],
  },
  progress_circle_inner_view: {
    backgroundColor: '#000000',
    bottom: -11,
    width: 125,
    height: 125,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  inner_view_text: {
    fontSize: 28,
    fontFamily: fonts.PoppinsMedium,
  },
  inner_view_subtext: {
    fontSize: 12,
    fontFamily: fonts.PoppinsRegular,
  },
  text_view: {
    width: '100%',
    height: 63,
    borderRadius: 10,
    backgroundColor: '#F6F6F6',
    marginTop: 20,
    paddingHorizontal: 9,
    paddingVertical: 11,
  },
  text_view_heading: {
    color: '#7d7d82',
    fontSize: 13,
    fontFamily: fonts.PoppinsRegular,
  },
  text_view_subText: {
    fontSize: 14,
    fontFamily: fonts.PoppinsMedium,
    color: '#000000',
  },
  meddle_text_view: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  meddle_text_subView: {
    width: 147,
    height: 64,
    borderRadius: 10,
    backgroundColor: '#F6F6F6',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingHorizontal: 10,
  },
  meddle_text_subView_heading: {
    color: '#7D7D82',
    fontSize: 13,
    fontFamily: fonts.PoppinsRegular,
  },
  meddle_text_subView_text: {
    fontFamily: fonts.PoppinsMedium,
    fontSize: 14,
    color: '#000000',
  },
  meddle_heading: {
    fontSize: 18,
    fontFamily: fonts.PoppinsMedium,
    color: '#000000',
    marginTop: 20,
  },
  visit_history_view: {
    width: '100%',
    paddingVertical: 4,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    borderColor: '#e9e9e9',
    borderWidth: 1,
    elevation: 2,
    paddingHorizontal: 16,
    marginBottom: 20,
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  visit_date_text: {
    fontSize: 14,
    fontFamily: fonts.PoppinsMedium,
  },
  visit_status_heading_view: {
    flexDirection: 'row',
    marginVertical: 3,
  },
  visit_status_heading_text: {
    color: '#161617',
    fontSize: 12,
    fontFamily: fonts.PoppinsMedium,
    width: '50%',
  },
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
  bottom_view: {
    marginTop: 50,
    width: '100%',
    paddingHorizontal: 16,
  },
  bottom_view_button_icon: {
    width: 24,
    height: 24,
  },
  Save_button: {
    width: '100%',
    paddingHorizontal: 16,
    marginTop: 25,
    marginBottom: 15,
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
