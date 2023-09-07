import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import BottomBarWithButton from '../component/BottomBarWithButton';
import EntryCard from '../component/EntryCard';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import {LinearTextGradient} from 'react-native-text-gradient';
import navigationString from '../utils/navigationString';
import fonts from '../utils/fonts';
import MemberShipCard from '../component/MemberShipCard';
const Data = [
  {
    id: 1,
    voucherID: 'SIM-01',
    date: 'May 6, 2022 	• 7 pm',
    totalHours: '00:00:00',
    SpendingHours: '01:30:00',
  },
  {
    id: 2,
    voucherID: 'SIM-02',
    date: 'May 6, 2022 	• 7 pm',
    totalHours: '00:00:00',
    SpendingHours: '01:30:00',
  },
  {
    id: 3,
    voucherID: 'SIM-03',
    date: 'May 6, 2022 	• 7 pm',
    totalHours: '00:00:00',
    SpendingHours: '01:30:00',
  },
  {
    id: 4,
    voucherID: 'SIM-04',
    date: 'May 6, 2022 	• 7 pm',
    totalHours: '00:30:00',
    SpendingHours: '01:50:00',
  },
];
const HomeScreen = ({navigation}) => {
  const handelScan = () => {
    navigation.navigate(navigationString.QrScannerScreen);
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        hidden={false}
        backgroundColor={'#000000'}
        barStyle={'light-content'}
      />
      <View style={styles.logoBanner_view}>
        <Image
          source={require('../../assets/appLogo/logoBanner.png')}
          style={styles.logoBanner}
        />
        {/* <TouchableOpacity
          style={styles.profile_logo}
          onPress={() => {
            navigation.navigate(navigationString.ProfileScreen);
          }}>
          <Image
            source={require('../../assets/appLogo/blankProfile.png')}
            style={styles.profile_picture}
          />
        </TouchableOpacity> */}
        {/* 
        <View style={styles.progress_circle_view}>
          <AnimatedCircularProgress
            size={200}
            width={18}
            fill={60}
            tintColor="#f5bf36"
            rotation={0}
            lineCap={'round'}
            // tintColorSecondary="#BD7D08"
            backgroundColor="#FFFFFF80"
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
            <Text style={styles.inner_view_subtext}>Total Spending Hours</Text>
          </LinearTextGradient>
        </View> */}
      </View>

      <View style={styles.list_view}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={Data}
          keyExtractor={item => item.id}
          renderItem={({item, index}) =>
            index == 0 ? (
              <Text style={styles.recent_heading}>Membership History</Text>
            ) : (
              <MemberShipCard
                item={item}
                key={index}
                onPress={() => {
                  navigation.navigate(navigationString.MemberShipDetailView, {
                    item: item,
                  });
                }}
              />
            )
          }
        />
      </View>
      {/* <BottomBarWithButton onPress={handelScan} /> */}
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems:'center',
    backgroundColor: '#FFFFFF',
  },
  logoBanner_view: {
    width: '100%',
    alignItems: 'center',
  },
  logoBanner: {
    width: '100%',
  },
  list_view: {
    marginTop: 26,
    height: 410,
    paddingHorizontal: 16,
    // backgroundColor:'red'
  },
  recent_heading: {
    color: '#161617',
    fontSize: 20,
    // marginLeft: 32,
    marginBottom: 10,
    fontFamily: fonts.PlusJakartaSansBold,
  },

  progress_circle_view: {
    position: 'absolute',
    bottom: -70,
    transform: [{scaleX: -1}],
  },
  progress_circle_inner_view: {
    backgroundColor: '#000000',
    position: 'absolute',
    bottom: -52,
    width: 166,
    height: 166,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inner_view_text: {
    fontSize: 40,
    fontFamily: fonts.PoppinsMedium,
  },
  inner_view_subtext: {
    fontSize: 16,
    fontFamily: fonts.PoppinsRegular,
  },
  profile_logo: {
    width: 48,
    height: 48,
    backgroundColor: '#ffffff',
    borderRadius: 100,
    position: 'absolute',
    right: 20,
    top: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profile_picture: {
    width: 43,
    height: 43,
    borderRadius: 100,
  },

  card_time_view: {
    width: 88,
    height: 25,
    backgroundColor: '#000000',
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card_time_text: {
    fontFamily: fonts.PlusJakartaSansMedium,
    fontSize: 12,
  },
});
