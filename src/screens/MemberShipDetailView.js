import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import HeaderWithLeftButton from '../component/HeaderWithLeftButton';
import {LinearTextGradient} from 'react-native-text-gradient';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import fonts from '../utils/fonts';
import navigationString from '../utils/navigationString';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {GET_MEMBERSHIP_BY_ID} from '../utils/config';
import {useIsFocused} from '@react-navigation/native';

const MemberShipDetailView = ({navigation, route}) => {
  const {memberShipId} = route.params;
  const isFocused = useIsFocused();
  const [data, setData] = useState('');
  const [user_Id, setUser_id] = useState('');
  const [roomId, setRoomId] = useState('');
  const [remainingTime, setRemainingTime] = useState(100);

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

  const getMemberShip = async () => {
    const Id = await AsyncStorage.getItem('userId');
    const userId = JSON.parse(Id);
    setUser_id(userId);

    axios
      .get(GET_MEMBERSHIP_BY_ID + memberShipId)
      .then(function (response) {
        if (!response.data.error) {
          setRoomId(response?.data?.response?.membership?.room_id?._id);
          setData(response?.data?.response);
          remaingTimeCalculate(response?.data?.response);
        }
      })
      .catch(function (error) {
        console.log('error', error);
      });
  };

  useEffect(() => {
    if (isFocused) {
      getMemberShip();
    }
  }, [isFocused]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'#ffffff'} barStyle={'dark-content'} />
      <HeaderWithLeftButton
        title={'MemberShip Detail'}
        rightIcon={require('../../assets/icons/scannerLogo.png')}
        onPress={() => {
          navigation.goBack();
        }}
        rightOnPress={() => {
          navigation.navigate(navigationString.QrScannerScreen, {
            memberShipId: memberShipId,
            userId: user_Id,
            roomId: roomId,
          });
        }}
        titleColor={'#000000'}
      />
      <ScrollView>
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
                      {data
                        ? data?.membership?.total_hours.hours +
                          ':' +
                          data?.membership?.total_hours?.minutes
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
                      {data?.membership?.total_remaining_time
                        ? data?.membership?.total_remaining_time?.hours +
                          ':' +
                          data?.membership?.total_remaining_time?.minutes
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

            <View style={styles.text_view}>
              <Text style={styles.text_view_heading}>Membership Expiry</Text>
              <Text style={styles.text_view_subText}>
                {data?.membership?.expiry_date}
              </Text>
            </View>
            <View style={styles.meddle_text_view}>
              <View style={styles.meddle_text_subView}>
                <Text style={styles.meddle_text_subView_heading}>
                  Room Number
                </Text>
                <Text style={styles.meddle_text_subView_text}>
                  {data?.membership?.room_id?.room_number}
                </Text>
              </View>
              <View style={styles.meddle_text_subView}>
                <Text style={styles.meddle_text_subView_heading}>
                  Total Amount
                </Text>
                <Text style={styles.meddle_text_subView_text}>
                  {data?.membership?.total_amount}
                </Text>
              </View>
            </View>
            <View style={styles.meddle_text_view}>
              <View style={styles.meddle_text_subView}>
                <Text style={styles.meddle_text_subView_heading}>
                  Payment Method
                </Text>
                <Text style={styles.meddle_text_subView_text}>
                  {data?.membership?.payment_method}
                </Text>
              </View>
              <View style={styles.meddle_text_subView}>
                <Text style={styles.meddle_text_subView_heading}>
                  Payment Receive
                </Text>
                <Text style={styles.meddle_text_subView_text}>
                  {data?.membership?.payment_method}
                </Text>
              </View>
            </View>
          </View>

          <Text style={styles.meddle_heading}>Visit History</Text>

          <View style={styles.visit_history_view}>
            {data?.membership_detail?.map((item, index) => (
              <View key={index}>
                <View style={{marginTop: 12}} key={item._id}>
                  <LinearTextGradient
                    locations={[0, 1]}
                    colors={['#F3CD6B', '#BD7D08']}
                    start={{x: 0, y: 0}}
                    end={{x: 0, y: 1}}>
                    <Text style={styles.visit_date_text}>{item.date}</Text>
                  </LinearTextGradient>
                </View>
                <View style={styles.visit_status_heading_view}>
                  <Text
                    style={[
                      styles.visit_status_heading_text,
                      {fontWeight: 'bold', fontSize: 14},
                    ]}>
                    Check in
                  </Text>
                  <Text
                    style={[
                      styles.visit_status_heading_text,
                      {fontWeight: 'bold', fontSize: 14},
                    ]}>
                    Check out
                  </Text>
                </View>

                {item.status.map((subItem, index) => (
                  <View style={styles.visit_status_heading_view} key={index}>
                    <Text style={styles.visit_status_heading_text}>
                      {subItem.checkin_time}
                    </Text>
                    <Text style={[styles.visit_status_heading_text]}>
                      {subItem.checkout_time
                        ? subItem.checkout_time
                        : '________'}
                    </Text>
                  </View>
                ))}
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MemberShipDetailView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  content_container: {
    paddingHorizontal: 16,
    width: '100%',
  },
  upper_content_view: {
    width: '100%',
    height: 444,
    borderRadius: 12,
    borderColor: '#e9e9e9',
    borderWidth: 1,
    backgroundColor: '#ffffff',
    marginTop: 30,
    paddingHorizontal: 14,
    paddingVertical: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  progress_circle_container: {
    flexDirection: 'row',
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
    marginTop: 55,
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
});
