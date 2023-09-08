import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import fonts from '../utils/fonts';
import {LinearTextGradient} from 'react-native-text-gradient';

const MemberShipCard = ({item, onPress}) => {
  // console.log('item', item);
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.upper_view}>
        <Text style={styles.upper_view_text}>voucher ID</Text>
        <View style={styles.card_time_view}>
          <LinearTextGradient
            locations={[0, 1]}
            colors={['#F3CD6B', '#BD7D08']}
            start={{x: 0, y: 0}}
            end={{x: 0, y: 1}}>
            <Text style={styles.card_time_text}>
              {item?.room_id?.room_number}
            </Text>
          </LinearTextGradient>
        </View>
      </View>
      <Text style={styles.middle_text}>{item?.room_id?.room_number}</Text>
      <View style={styles.bottom_container_view}>
        <View style={styles.bottom_view}>
          <Text style={styles.bottom_view_text}>Total Hours</Text>
          <LinearTextGradient
            locations={[0, 1]}
            colors={['#F3CD6B', '#BD7D08']}
            start={{x: 0, y: 0}}
            end={{x: 0, y: 1}}>
            <Text style={styles.bottom_view_gradient_text}>
              {item.total_hours
                ? item?.total_hours?.hours +
                  ':' +
                  item?.total_hours?.minutes +
                  ':' +
                  item?.total_hours?.seconds
                : '00:00:00'}
            </Text>
          </LinearTextGradient>
        </View>
        <View style={styles.bottom_view}>
          <Text style={styles.bottom_view_text}>Spending Hours</Text>
          <LinearTextGradient
            locations={[0, 1]}
            colors={['#F3CD6B', '#BD7D08']}
            start={{x: 0, y: 0}}
            end={{x: 0, y: 1}}>
            <Text style={styles.bottom_view_gradient_text}>
              {item?.total_remaining_time
                ? item?.total_remaining_time?.hours +
                  ':' +
                  item?.total_remaining_time?.minutes +
                  ':' +
                  item?.total_remaining_time?.seconds
                : '00:00:00'}
            </Text>
          </LinearTextGradient>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MemberShipCard;

const styles = StyleSheet.create({
  container: {
    height: 130,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    borderColor: '#E9E9E9',
    width: '100%',
    padding: 14,
    borderWidth: 1,
    elevation: 3,
    marginVertical: 10,
  },
  upper_view: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  upper_view_text: {
    color: '#7D7D82',
    fontSize: 14,
    fontFamily: fonts.PoppinsRegular,
  },
  middle_text: {
    fontSize: 14,
    fontFamily: fonts.PoppinsMedium,
    color: '#000000',
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
  bottom_container_view: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5,
  },
  bottom_view: {
    height: 52,
    width: 150,
    backgroundColor: '#f6f6f6',
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottom_view_text: {
    color: '#7D7D82',
    fontSize: 12,
    fontFamily: fonts.PoppinsRegular,
  },
  bottom_view_gradient_text: {
    fontSize: 16,
    fontFamily: fonts.PoppinsMedium,
  },
});
