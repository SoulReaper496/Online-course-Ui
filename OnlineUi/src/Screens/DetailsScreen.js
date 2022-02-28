import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import {Icon, Button} from 'react-native-elements';
import list from '../list.json';
import DetailRecommend from '../Components/DetailRecommend';
import HeaderImageScrollView, {
  ImageHeaderScrollView,
  TriggeringView,
} from 'react-native-image-header-scroll-view';

const DetailsScreen = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.header}>
        <Image
          source={require('../Assests/home.jpg')}
          style={{width: 60, height: 60, borderRadius: 40, marginTop: 2}}
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
      <ImageHeaderScrollView
        minHeight={50}
        maxHeight={300}
        headerContainerStyle={{
          borderRadius: 40,
          width: 450,
          marginLeft: 45,
          backgroundColor: '#e4f3f4',
        }}
        renderHeader={() => (
          <View
            style={{
              height: 300,
              width: 450,
              backgroundColor: 'black',
            }}>
            <Image
              source={require('../Assests/Course1.png')}
              style={{
                width: 450,
                height: 350,
              }}
            />

            <Text
              style={{
                color: 'white',
                fontSize: 40,
                position: 'absolute',
                paddingTop: 200,
                marginLeft: 20,
              }}>
              Development
            </Text>
          </View>
        )}>
        <View style={{flexDirection: 'row', marginLeft: 30}}>
          <Icon
            name="sort"
            type="font-awesome"
            size={30}
            color="white"
            style={{
              width: 60,
              height: 55,
              marginTop: 20,
              paddingRight: 10,
              backgroundColor: 'black',
              borderRadius: 20,
              paddingTop: 10,
              paddingLeft: 8,
            }}
          />

          <ScrollView
            style={{minHeight: 5}}
            horizontal
            showsHorizontalScrollIndicator={false}>
            {list.map((item, index) => (
              <View
                style={{
                  minWidth: 15,
                  padding: 5,
                  marginTop: 20,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <View
                  style={{
                    padding: 2,
                    borderRadius: 50,
                    paddingLeft: 10,
                    paddingRight: 5,
                    width: 150,
                    height: 50,
                    flexDirection: 'row',
                    alignItems: 'center',
                    backgroundColor: 'white',
                  }}>
                  <Icon
                    name="close"
                    type="antdesign"
                    size={20}
                    style={{alignItems: 'center'}}
                  />
                  <Text style={styles.tittlestyle}>{item.title}</Text>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
        <TriggeringView>
          <DetailRecommend />
        </TriggeringView>
      </ImageHeaderScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 40,
    marginLeft: 15,
  },
  imageContainer: {
    flex: 0.45,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: 'white',
    marginTop: 30,
    borderRadius: 25,
    paddingVertical: 45,
    paddingHorizontal: 25,
    width: 450,
    height: 250,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  elevation: {
    shadowColor: 'green',
    shadowOffset: {
      width: 0,
      height: 15,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 30,
  },
  tittlestyle: {
    marginLeft: 15,
    fontSize: 20,
    textTransform: 'lowercase',

    fontWeight: 'bold',
    color: 'black',
  },
});
export default DetailsScreen;
