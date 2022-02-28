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
import {categories} from '../../data';
import {useNavigation} from '@react-navigation/native';

const {width} = Dimensions.get('window') / 2;
export default function Card() {
  const navigation = useNavigation();
  const Cart = ({data}) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('detailsscreen', data)}>
        <View style={styles.card}>
          <Image
            source={data.image}
            style={{
              height: 110,
              width: 200,
              borderTopLeftRadius: 25,
              borderTopRightRadius: 25,
            }}
          />

          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: 'black',
              marginLeft: 15,
            }}>
            {data.name}
          </Text>
          <Text style={{fontSize: 20, color: 'skyblue', marginLeft: 15}}>
            {data.course}
          </Text>

          <Text></Text>
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
        data={categories}
        renderItem={({item}) => <Cart data={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    height: 180,

    borderColor: 'black',
    backgroundColor: 'white',
    borderRadius: 25,
    marginVertical: 5,

    marginRight: 20,
  },
});
