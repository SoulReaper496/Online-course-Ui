import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Recommended} from '../../data';
import {Rating, AirbnbRating} from 'react-native-ratings';
import {useNavigation} from '@react-navigation/native';
import {Icon, Button} from 'react-native-elements';
import HeaderImageScrollView, {
  ImageHeaderScrollView,
  TriggeringView,
} from 'react-native-image-header-scroll-view';

export default function DetailRecommend() {
  const navigation = useNavigation();
  const Cart = ({data}) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('coursescreen', data)}>
        <View style={styles.card}>
          <View style={{marginTop: 20}}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: 'white',
                marginLeft: 15,
              }}>
              {data.title}
            </Text>
            <Text style={{color: 'orange', marginLeft: 15}}>
              {data.description}
            </Text>
          </View>

          <View
            style={{
              marginTop: 30,
              marginLeft: 18,
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Icon
              name="clockcircleo"
              type="antdesign"
              color="skyblue"
              size={20}
              style={{alignItems: 'center'}}
            />
            <Text style={{fontSize: 20, color: 'skyblue', marginRight: 50}}>
              {data.hours}
            </Text>
            <Icon
              name="staro"
              color="skyblue"
              type="antdesign"
              size={20}
              style={{alignItems: 'center'}}
            />
            <Text style={{fontSize: 20, color: 'skyblue', marginRight: 120}}>
              {data.ratings}
            </Text>
            <Icon
              name="people"
              type="ionicons"
              color="skyblue"
              size={20}
              style={{alignItems: 'center'}}
            />
            <Text style={{fontSize: 20, color: 'skyblue', marginLeft: 15}}>
              {data.people}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      {/* category */}
      <FlatList
        horizontal={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          marginTop: 60,
          paddingBottom: 10,
        }}
        data={Recommended}
        renderItem={({item}) => <Cart data={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginLeft: 50,
    height: 140,
    width: 450,
    borderColor: 'black',
    backgroundColor: '#466a82',
    borderRadius: 20,
    marginVertical: 5,

    marginRight: 20,
    padding: 10,
  },
});
