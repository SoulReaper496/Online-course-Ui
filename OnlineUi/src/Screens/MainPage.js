import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TextInput,
  ImageBackground,
  FlatList,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  LinearGradient,
} from 'react-native';

import Card from '../Components/Card';
import Recommend from '../Components/Recommend';

//importing data

import {categories} from '../../data';

const {width} = Dimensions.get('window') / 2;
//const cardWidth = width / 1.8;

const image = {
  uri: 'https://wallpaperaccess.com/full/2155720.jpg',
};

export default function MainPage({navigation}) {
  //const [data, setData] = React.useState(categories);

  //creating cart using FlatList

  return (
    <ImageBackground
      source={image}
      style={{width: '100%', height: '100%', borderRadius: 60}}>
      <SafeAreaView>
        <View style={styles.screen}>
          <View style={styles.row1}>
            <Image
              source={require('../Assests/home.jpg')}
              style={{width: 80, height: 80, borderRadius: 40}}
            />
            <Text icon="home"></Text>
            <Image
              source={require('../Assests/Profile.jpg')}
              style={{
                width: 50,
                height: 50,
                borderRadius: 10,
                marginRight: 10,
                marginTop: 12,
              }}
            />
          </View>

          <View style={styles.row2}>
            <Text
              style={{
                width: 250,
                height: 45,
                fontSize: 30,
                fontWeight: 'bold',
              }}>
              Welcome Back
            </Text>
            <Text
              style={{
                width: 250,
                height: 75,
                fontSize: 60,
                fontWeight: 'bold',
                color: 'black',
                marginTop: -20,
              }}>
              Jason
            </Text>
          </View>
          <View style={styles.row3}>
            <View style={styles.searchContainer}>
              <TextInput placeholder="Search Courses" style={styles.input} />
              <Image
                source={require('../Assests/filterimage.png')}
                style={{
                  width: 40,
                  height: 60,
                  marginRight: 10,
                  backgroundColor: 'black',
                }}
              />
            </View>
          </View>
          <View style={styles.row4}>
            <Text
              style={{
                fontSize: 20,
                width: 150,
                height: 30,
                fontWeight: 'bold',
                color: 'black',
              }}>
              Categorias
            </Text>
            <Text
              style={{
                fontSize: 20,
                width: 106,
                height: 30,
                marginLeft: 100,
                color: 'darkblue',
              }}>
              ViewAll
            </Text>
          </View>

          <View style={styles.card}>
            <Card />
          </View>

          <View style={styles.row5}>
            <Text
              style={{
                fontSize: 20,
                width: 150,
                height: 30,
                fontWeight: 'bold',
                color: 'black',
              }}>
              Recommended
            </Text>
            <Text
              style={{
                fontSize: 20,
                width: 106,
                height: 30,
                marginLeft: 100,
                color: 'darkblue',
              }}>
              ViewAll
            </Text>
          </View>

          <View style={styles.recom}>
            <Recommend />
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  row1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 40,
    marginLeft: 15,
  },
  row2: {
    flexDirection: 'column',
    marginTop: 100,
    marginLeft: 40,
  },
  row3: {
    marginTop: 150,
    marginLeft: 40,
    marginRight: 30,
    flexDirection: 'row',
  },
  searchContainer: {
    height: 80,
    backgroundColor: 'white',
    borderRadius: 30,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
    marginLeft: 10,
  },
  row4: {
    flexDirection: 'row',
    marginTop: 100,
    marginLeft: 30,
    justifyContent: 'space-between',
  },

  row5: {
    flexDirection: 'row',
    marginTop: 20,
    marginLeft: 40,
    justifyContent: 'space-between',
  },
  card: {
    height: 250,
    width: 500,
    marginLeft: 50,
  },
  recom: {
    height: 250,
    width: 500,
    marginLeft: 50,
  },
});
