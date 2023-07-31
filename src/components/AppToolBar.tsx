import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { AppIcons } from '../constant/AppAsset';
import { Color } from '../constant/Colors';
import { useNavigation } from '@react-navigation/native';
import { Text } from './text/StyledText';
import { AppNavigationProp } from '../navigation/AppNavigator';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { User } from '../types/User';
const AppToolBar: React.FC = () => {
  const navigation = useNavigation<AppNavigationProp>();
  const userInfo = useSelector(
    (state: RootState) => state.userReducer.userInfo,
  );
  console.log(userInfo);
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://lh3.googleusercontent.com/a/AAcHTteekTstA5kgs1FHesSYpP7-lUiLXgONjLeDp_-IhzB0=s96-c',
        }}
        style={styles.profileImage}
      />
      <Text style={styles.nameText}>
        {userInfo?.fullName || 'Anonymous user'}
      </Text>
      <View style={styles.qrNotificationContainer}>
        <TouchableOpacity>
          <Image source={AppIcons.qr} style={styles.qrImage} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
          navigation.navigate('Notification');
        }}>
          <Image
            source={AppIcons.notification}
            style={styles.notificationImage}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Email');
          }}
          style={{ marginLeft: 10 }}>
          <Image source={AppIcons.mail} style={styles.notificationImage} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AppToolBar;
const styles = StyleSheet.create({
  container: {
    elevation: 3,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    height: 60,
    backgroundColor: Color.MAINCOLOR,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  nameText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 'auto',
  },
  qrNotificationContainer: {
    tintColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  qrImage: {
    tintColor: 'white',
    width: 20,
    height: 20,
    marginRight: 15,
  },
  notificationImage: {
    tintColor: 'white',
    width: 20,
    height: 20,
  },
});
