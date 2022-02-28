import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import {Icon, Button} from 'react-native-elements';
import {Rating} from 'react-native-ratings';
import ViewMoreText from 'react-native-view-more-text';
import TabContainer from '../Components/TabContainer';

const CourseScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#ecf7f9'}}>
      <View style={styles.header}>
        <Icon name="left" type="antdesign" style={{marginTop: 8}} />
        <Image
          source={require('../Assests/Profile.jpg')}
          style={{
            width: 50,
            height: 50,
            borderRadius: 10,
            marginRight: 10,
          }}
        />
      </View>
      <View style={{marginTop: 25, marginLeft: 30}}>
        <Text style={{fontSize: 25, fontWeight: 'bold', color: '#313855'}}>
          Angular-The
        </Text>
        <Text style={{fontSize: 25, fontWeight: 'bold', color: '#313855'}}>
          Complete Guide
        </Text>
        <Text style={{color: '#2bb1cf', fontSize: 20}}>Development</Text>
      </View>
      <View style={styles.row2}>
        <Rating type="custom" tintColor="#ecf7f9" imageSize={20} />
        <Text style={{fontSize: 20, color: 'black'}}>3.5</Text>
        <Icon name="people" type="ionicons" style={{marginLeft: 30}} />
        <Text style={{fontSize: 20, color: 'black'}}>30,425</Text>
        <Icon name="clock" type="feather" style={{marginLeft: 40}} />
        <Text style={{fontSize: 20, color: 'black', marginRight: 100}}>
          86 hr
        </Text>
      </View>
      <View style={styles.row3}>
        <Text style={{fontSize: 40, color: 'black', fontWeight: 'bold'}}>
          $ 19.99
        </Text>
      </View>
      <View style={styles.row4}>
        <Text style={{fontSize: 25, color: 'black', fontWeight: 'bold'}}>
          About course
        </Text>
        <ViewMoreText numberOfLines={2}>
          <Text style={{fontSize: 20, color: 'grey'}}>
            This course starts from scratch and its is simple you either need to
            know Angular1 nor Angular2! Angular 12 is simple and easy to learn
            its a latest versionof Angular.
          </Text>
        </ViewMoreText>
      </View>
      {/* crearing lesson and review tap */}
      <View style={{width: '100%', height: 350}}>
        <TabContainer />
      </View>
      <View style={{padding: 10}}>
        <Button
          title="Buy now"
          buttonStyle={{
            backgroundColor: '#f2a95c',
            borderRadius: 30,
            height: 50,
          }}
          containerStyle={{
            width: 400,
            height: 100,
            marginHorizontal: 70,
          }}
        />
      </View>
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
  row2: {
    marginTop: 20,
    marginLeft: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  row3: {
    marginTop: 20,
    marginLeft: 40,
  },
  row4: {
    marginTop: 20,
    marginLeft: 40,
  },

  categorycontainer: {
    flexDirection: 'row',
    marginTop: 30,
    marginLeft: 30,
    marginBottom: 20,
  },
  categoryText: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
    marginLeft: 15,
  },
  categoryTextSelected: {
    color: 'grey',
    paddingBottom: 5,
    borderBottomWidth: 2,
    borderColor: 'grey',
  },
});

export default CourseScreen;
