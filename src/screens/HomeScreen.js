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
const Data = [
  {
    id: 1,
    userName: 'User Name1',
    date: 'May 6, 2022 	• 7 pm',
    time: '09:00:00',
  },
  {
    id: 2,
    userName: 'User Name2',
    date: 'May 6, 2022 	• 7 pm',
    time: '09:00:00',
  },
  {
    id: 3,
    userName: 'User Name3',
    date: 'May 6, 2022 	• 7 pm',
    time: '09:00:00',
  },
  {
    id: 4,
    userName: 'User Name4',
    date: 'May 6, 2022 	• 7 pm',
    time: '09:00:00',
  },
  {
    id: 5,
    userName: 'User Name5',
    date: 'May 6, 2022 	• 7 pm',
    time: '09:00:00',
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
        <TouchableOpacity
          style={styles.profile_logo}
          onPress={() => {
            navigation.navigate(navigationString.ProfileScreen);
          }}>
          <Image
            source={require('../../assets/appLogo/blankProfile.png')}
            style={styles.profile_picture}
          />
        </TouchableOpacity>

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
        </View>
      </View>

      <View style={styles.list_view}>
        <Text style={styles.recent_heading}>Recently Scanned</Text>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={Data}
          keyExtractor={item => item.id}
          renderItem={({item, index}) => (
            <EntryCard
              onPress={() => {
                navigation.navigate(navigationString.ViewSpendingHours);
              }}
              key={index}
              userName={item.userName}
              date={item.date}
              time={item.time}
            />
          )}
        />
      </View>
      <BottomBarWithButton onPress={handelScan} />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems:'center'
  },
  logoBanner_view: {
    width: '100%',
    alignItems: 'center',
  },
  logoBanner: {
    width: '100%',
  },
  list_view: {
    marginTop: 90,
    height: 340,
  },
  recent_heading: {
    color: '#161617',
    fontSize: 20,
    marginLeft: 32,
    marginBottom: 11,
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
});
