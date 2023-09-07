import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from 'react-native';
import React from 'react';
import HeaderWithLeftButton from '../component/HeaderWithLeftButton';
import {LinearTextGradient} from 'react-native-text-gradient';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import fonts from '../utils/fonts';
import navigationString from '../utils/navigationString';

const checkData = [
  {
    _id: 1,
    date: 'Wednesday, 6 September 2023',
    status: [
      {
        _id: 11,
        checkIn: '06:24:00 AM',
        checkOut: '06:24:00 AM',
      },
      {
        _id: 12,
        checkIn: '06:24:00 AM',
        checkOut: '06:24:00 AM',
      },
      {
        _id: 13,
        checkIn: '06:24:00 AM',
        checkOut: '06:24:00 AM',
      },
    ],
  },
  {
    _id: 2,
    date: 'Wednesday, 6 September 2023',
    status: [
      {
        _id: 21,
        checkIn: '06:24:00 AM',
        checkOut: '06:24:00 AM',
      },
      {
        _id: 22,
        checkIn: '06:24:00 AM',
        checkOut: '06:24:00 AM',
      },
      {
        _id: 23,
        checkIn: '06:24:00 AM',
        // checkOut: '06:24:00 AM',
      },
    ],
  },
];

const MemberShipDetailView = ({navigation}) => {
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
          navigation.navigate(navigationString.QrScannerScreen);
        }}
        titleColor={'#000000'}
      />
      <ScrollView>
        <View style={styles.content_container}>
          <View style={styles.upper_content_view}>
            <View style={{position: 'relative', flexDirection: 'row'}}>
              <View style={styles.progress_circle_view}>
                <AnimatedCircularProgress
                  size={147}
                  width={18}
                  fill={60}
                  tintColor="#EBC15D"
                  rotation={0}
                  lineCap={'round'}
                  // tintColorSecondary="#BD7D08"
                  backgroundColor="#0000000A"
                />
              </View>
              <View style={styles.progress_circle_inner_view}>
                <LinearTextGradient
                  locations={[0, 1]}
                  colors={['#F3CD6B', '#BD7D08']}
                  start={{x: 0, y: 0}}
                  end={{x: 0, y: 1}}>
                  <Text style={styles.inner_view_text}>14:55</Text>
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

              <View style={[styles.progress_circle_view, {left: 180}]}>
                <AnimatedCircularProgress
                  size={147}
                  width={18}
                  fill={60}
                  tintColor="#EBC15D"
                  rotation={0}
                  lineCap={'round'}
                  // tintColorSecondary="#BD7D08"
                  backgroundColor="#0000000A"
                />
              </View>

              <View style={[styles.progress_circle_inner_view, {left: 87}]}>
                <LinearTextGradient
                  locations={[0, 1]}
                  colors={['#F3CD6B', '#BD7D08']}
                  start={{x: 0, y: 0}}
                  end={{x: 0, y: 1}}>
                  <Text style={styles.inner_view_text}>14:55</Text>
                </LinearTextGradient>
                <LinearTextGradient
                  style={{textAlign: 'center'}}
                  locations={[0, 1]}
                  colors={['#F3CD6B', '#BD7D08']}
                  start={{x: 0, y: 0}}
                  end={{x: 0, y: 1}}>
                  <Text style={styles.inner_view_subtext}>Remaining Hours</Text>
                </LinearTextGradient>
              </View>
            </View>

            <View style={styles.text_view}>
              <Text style={styles.text_view_heading}>Membership Expiry</Text>
              <Text style={styles.text_view_subText}>
                Wednesday, 6 September 2023
              </Text>
            </View>
            <View style={styles.meddle_text_view}>
              <View style={styles.meddle_text_subView}>
                <Text style={styles.meddle_text_subView_heading}>
                  Room Number
                </Text>
                <Text style={styles.meddle_text_subView_text}>SIM-023548</Text>
              </View>
              <View style={styles.meddle_text_subView}>
                <Text style={styles.meddle_text_subView_heading}>
                  Total Amount
                </Text>
                <Text style={styles.meddle_text_subView_text}>$2000.00</Text>
              </View>
            </View>
            <View style={styles.meddle_text_view}>
              <View style={styles.meddle_text_subView}>
                <Text style={styles.meddle_text_subView_heading}>
                  Payment Method
                </Text>
                <Text style={styles.meddle_text_subView_text}>Cash</Text>
              </View>
              <View style={styles.meddle_text_subView}>
                <Text style={styles.meddle_text_subView_heading}>
                  Payment Receive
                </Text>
                <Text style={styles.meddle_text_subView_text}>Cash</Text>
              </View>
            </View>
          </View>

          <Text style={styles.meddle_heading}>Visit History</Text>

          <View style={styles.visit_history_view}>
            {checkData.map((item, index) => (
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
                  <Text style={styles.visit_status_heading_text}>Check in</Text>
                  <Text
                    style={[
                      styles.visit_status_heading_text,
                      {marginLeft: 131},
                    ]}>
                    Check out
                  </Text>
                </View>

                {item.status.map((subItem, index) => (
                  <View style={styles.visit_status_heading_view} key={index}>
                    <Text style={styles.visit_status_heading_text}>
                      {subItem.checkIn}
                    </Text>
                    <Text
                      style={[
                        styles.visit_status_heading_text,
                        {marginLeft: 110},
                      ]}>
                      {subItem.checkOut ? subItem.checkOut : '________'}
                    </Text>
                  </View>
                ))}
              </View>
            ))}
            {/* <LinearTextGradient
              locations={[0, 1]}
              colors={['#F3CD6B', '#BD7D08']}
              start={{x: 0, y: 0}}
              end={{x: 0, y: 1}}>
              <Text style={styles.visit_date_text}>
                Wednesday, 6 September 2023
              </Text>
            </LinearTextGradient>
            <View style={styles.visit_status_heading_view}>
              <Text style={styles.visit_status_heading_text}>Check in</Text>
              <Text
                style={[styles.visit_status_heading_text, {marginLeft: 131}]}>
                Check out
              </Text>
            </View>

            <View style={styles.visit_status_heading_view}>
              <Text style={styles.visit_status_heading_text}>06:24:00 AM</Text>
              <Text
                style={[styles.visit_status_heading_text, {marginLeft: 131}]}>
                06:24:00 AM
              </Text>
            </View>
            <View style={styles.visit_status_heading_view}>
              <Text style={styles.visit_status_heading_text}>06:24:00 AM</Text>
              <Text
                style={[styles.visit_status_heading_text, {marginLeft: 131}]}>
                06:24:00 AM
              </Text>
            </View>
            <View style={styles.visit_status_heading_view}>
              <Text style={styles.visit_status_heading_text}>06:24:00 AM</Text>
              <Text
                style={[styles.visit_status_heading_text, {marginLeft: 131}]}>
                06:24:00 AM
              </Text>
            </View>
            <View style={styles.visit_status_heading_view}>
              <Text style={styles.visit_status_heading_text}>06:24:00 AM</Text>
              <Text
                style={[styles.visit_status_heading_text, {marginLeft: 131}]}>
                06:24:00 AM
              </Text>
            </View> */}
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
  },
  progress_circle_view: {
    position: 'absolute',
    transform: [{scaleX: -1}],
  },
  progress_circle_inner_view: {
    backgroundColor: '#000000',
    // position: 'absolute',
    bottom: -17,
    width: 112,
    height: 112,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    left: 18,
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
  },
  visit_date_text: {
    fontSize: 14,
    fontFamily: fonts.PoppinsMedium,
  },
  visit_status_heading_view: {
    flexDirection: 'row',
    marginVertical: 2,
  },
  visit_status_heading_text: {
    color: '#161617',
    fontSize: 13,
    fontFamily: fonts.PoppinsMedium,
  },
});
