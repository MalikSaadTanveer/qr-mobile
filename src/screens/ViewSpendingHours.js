import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import fonts from '../utils/fonts';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import {LinearTextGradient} from 'react-native-text-gradient';
import HeaderWithLeftButton from '../component/HeaderWithLeftButton';
const ViewSpendingHours = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor="#F6F6F6"
        barStyle={'dark-content'}
        hidden={false}
      />
      <HeaderWithLeftButton
        title={'Spending Hours'}
        onPress={() => {
          navigation.goBack();
        }}
      />

      <View style={{alignItems: 'center'}}>
        <View style={styles.progress_circle_view}>
          <AnimatedCircularProgress
            size={270}
            width={18}
            fill={60}
            tintColor="#f5bf36"
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
            <Text style={styles.inner_view_subtext}>Total Spending Hours</Text>
          </LinearTextGradient>
        </View>
      </View>

      <View style={styles.card_container}>
        <View style={styles.card_view}>
          <View style={styles.card_inner_upper_view}>
            <Image source={require('../../assets/icons/import.png')} />
          </View>
          <View style={styles.card_inner_text_container}>
            <LinearTextGradient
              style={{textAlign: 'center'}}
              locations={[0, 1]}
              colors={['#F3CD6B', '#BD7D08']}
              start={{x: 0, y: 0}}
              end={{x: 0, y: 1}}>
              <Text style={styles.card_inner_time}>09:00</Text>
            </LinearTextGradient>
            <LinearTextGradient
              style={{textAlign: 'center'}}
              locations={[0, 1]}
              colors={['#F3CD6B', '#BD7D08']}
              start={{x: 0, y: 0}}
              end={{x: 0, y: 1}}>
              <Text style={styles.card_inner_text}>Check-in Time</Text>
            </LinearTextGradient>
          </View>
        </View>
        <View style={styles.card_view}>
          <View style={styles.card_inner_upper_view}>
            <Image source={require('../../assets/icons/export.png')} />
          </View>
          <View style={styles.card_inner_text_container}>
            <LinearTextGradient
              style={{textAlign: 'center'}}
              locations={[0, 1]}
              colors={['#F3CD6B', '#BD7D08']}
              start={{x: 0, y: 0}}
              end={{x: 0, y: 1}}>
              <Text style={styles.card_inner_time}>17:00</Text>
            </LinearTextGradient>
            <LinearTextGradient
              style={{textAlign: 'center'}}
              locations={[0, 1]}
              colors={['#F3CD6B', '#BD7D08']}
              start={{x: 0, y: 0}}
              end={{x: 0, y: 1}}>
              <Text style={styles.card_inner_text}>Check-out Time</Text>
            </LinearTextGradient>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ViewSpendingHours;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6F6',
  },
  progress_circle_view: {
    // position: 'absolute',
    // bottom: -70,
    transform: [{scaleX: -1}],
    marginTop: 70,
  },
  progress_circle_inner_view: {
    backgroundColor: '#000000',
    position: 'absolute',
    top: 88,
    width: 234,
    height: 234,
    borderRadius: 150,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 55,
  },
  inner_view_text: {
    fontSize: 40,
    fontFamily: fonts.PoppinsMedium,
  },
  inner_view_subtext: {
    fontSize: 16,
    fontFamily: fonts.PoppinsRegular,
  },
  card_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    marginTop: 40,
  },
  card_view: {
    width: 167,
    height: 156,
    borderRadius: 20,
    backgroundColor: '#000000',
  },
  card_inner_upper_view: {
    width: 48,
    height: 48,
    borderRadius: 100,
    backgroundColor: '#FFFFFF1A',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 16,
  },
  card_inner_time: {
    fontSize: 24,
    fontFamily: fonts.PoppinsMedium,
  },
  card_inner_text: {
    fontSize: 16,
    fontFamily: fonts.PoppinsRegular,
  },
  card_inner_text_container: {
    alignItems: 'flex-start',
    paddingHorizontal: 16,
  },
});
