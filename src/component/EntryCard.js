import {StyleSheet, Text, View, Image, SafeAreaView} from 'react-native';
import React from 'react';
import {LinearTextGradient} from 'react-native-text-gradient';
const EntryCard = ({userName, date, time}) => {
  return (
    <SafeAreaView style={{alignItems: 'center'}}>
      <View style={styles.card_view}>
        <View style={styles.card_image_text_view}>
          <View style={styles.card_image_view}>
            <Image source={require('../../assets/icons/qrBlack.png')} />
          </View>
          <View style={styles.card_text_view}>
            <Text style={styles.card_text_heading}>{userName}</Text>
            <Text style={styles.card_text_subHeading}>{date}</Text>
          </View>
        </View>
        <View style={styles.card_time_view}>
          <LinearTextGradient
            locations={[0, 1]}
            colors={['#F3CD6B', '#BD7D08']}
            start={{x: 0, y: 0}}
            end={{x: 0, y: 1}}>
            <Text style={styles.card_time_text}>{time}</Text>
          </LinearTextGradient>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default EntryCard;

const styles = StyleSheet.create({
  card_view: {
    width: 326,
    height: 64,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  card_image_text_view: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  card_image_view: {
    width: 64,
    height: 64,
    borderRadius: 50,
    backgroundColor: '#0000000D',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card_text_view: {
    marginLeft: 12,
  },
  card_text_heading: {
    fontSize: 16,
    color: '#161617',
  },
  card_text_subHeading: {
    fontSize: 12,
    color: '#7D7D82',
  },
  card_time_view: {
    width: 80,
    height: 24,
    backgroundColor: '#000000',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card_time_text: {
    color: '#ffffff',
  },
});
