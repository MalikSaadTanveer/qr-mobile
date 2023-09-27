import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  Image,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import navigationString from '../utils/navigationString';
import fonts from '../utils/fonts';
import MemberShipCard from '../component/MemberShipCard';
import axios from 'axios';
import {GET_MEMBERSHIP_BY_USER_ID} from '../utils/config';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useIsFocused} from '@react-navigation/native';

import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
const HomeScreen = ({navigation}) => {
  const [data, setData] = useState('');
  const isFocused = useIsFocused();
  const [isRefreshing, setIsRefreshing] = useState(false);

  const getMemberShip = async () => {
    const user_Id = await AsyncStorage.getItem('userId');
    const userId = JSON.parse(user_Id);

    axios
      .get(GET_MEMBERSHIP_BY_USER_ID + userId)
      .then(function (response) {
        if (!response.data.error) {
          setData(response.data.response);
          setIsRefreshing(false);
        }
      })
      .catch(function (error) {
        
      });
  };
  const handelOnFresh = () => {
    setIsRefreshing(true);
    getMemberShip();
  };

  useEffect(() => {
    if (isFocused) {
      getMemberShip();
    }
  }, [isFocused]);
  const handelSignOut = async () => {
    await AsyncStorage.removeItem('userId');
    navigation.replace(navigationString.SignInScreen);
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        hidden={false}
        backgroundColor={'#000000'}
        barStyle={'light-content'}
      />

      <FlatList
        onRefresh={() => {
          handelOnFresh();
        }}
        refreshing={isRefreshing}
        showsVerticalScrollIndicator={false}
        data={data}
        style={{margin: 0, padding: 0}}
        contentContainerStyle={{padding: 0, margin: 0}}
        keyExtractor={item => item._id}
        renderItem={({item, index}) => {
          return (
            <>
              {index === 0 && (
                <View>
                  <Image
                    source={require('../../assets/appLogo/logoBanner.png')}
                    style={styles.logoBanner}
                    resizeMode="cover"
                  />
                  <Menu style={styles.menu}>
                    <MenuTrigger style={{width: '100%', right: 20}}>
                      <View style={{right: 0}}>
                        <Image
                          source={require('../../assets/icons/menuDot.png')}
                          style={{width: 30, height: 30}}
                          tintColor={'#ffffff'}
                        />
                      </View>
                    </MenuTrigger>
                    <MenuOptions style={styles.menuOptions}>
                      <MenuOption onSelect={() => handelSignOut()}>
                        <Text style={styles.singleMenuOption}>LOGOUT</Text>
                      </MenuOption>
                    </MenuOptions>
                  </Menu>
                  <View style={{paddingHorizontal: 16}}>
                    <Text style={styles.recent_heading}>
                      Membership History
                    </Text>
                  </View>
                </View>
              )}
              <View style={{paddingHorizontal: 16}} key={index}>
                <MemberShipCard
                  item={item}
                  key={index}
                  onPress={() => {
                    navigation.navigate(navigationString.MemberShipDetailView, {
                      memberShipId: item._id,
                    });
                  }}
                />
              </View>
            </>
          );
        }}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  logoBanner_view: {
    alignItems: 'center',
  },
  logoBanner: {
    width: '100%',
    height: 335,
    top: -1,
  },
  recent_heading: {
    color: '#161617',
    fontSize: 20,
    marginBottom: 10,
    marginTop: 10,
    fontFamily: fonts.PlusJakartaSansBold,
  },
  menu_dot_button: {
    position: 'absolute',
    right: 20,
    top: 10,
    width: 25,
    height: 25,
  },
  menu: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    textAlign: 'right',
    justifyContent: 'flex-end',
    paddingTop: 20,
  },
  menuOptions: {
    position: 'absolute',
    top: 25,
    right: 35,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  singleMenuOption: {
    fontSize: 14,
    fontFamily: fonts.PoppinsRegular,
    paddingLeft: 15,
    paddingRight: 30,
    paddingVertical: 8,
    color: '#000000',
  },
});
