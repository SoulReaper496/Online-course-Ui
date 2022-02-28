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

export default function Recommend() {

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
            <Text style={{color: 'white', marginLeft: 15}}>
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
            <Rating type="custom" tintColor="#466a82" imageSize={20} />
            <Text style={{fontSize: 20, color: 'white', marginRight: 120}}>
              {data.ratings}
            </Text>
            <Text style={{fontSize: 20, color: 'skyblue', marginLeft: 15}}>
              {data.hours}
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
        horizontal={true}
        showsHorizontalScrollIndicator={false}
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
    height: 150,
    width: 400,
    borderColor: 'black',
    backgroundColor: '#466a82',
    borderRadius: 20,
    marginVertical: 5,

    marginRight: 20,
    padding: 10,
  },
});
