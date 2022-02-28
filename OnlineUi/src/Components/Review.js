import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import {Rating, AirbnbRating} from 'react-native-ratings';

const Review = () => {
  return (
    <ScrollView>
      <View style={styles.row1}>
        <Image
          source={require('../Assests/Profile.jpg')}
          style={{
            width: 60,
            height: 60,
            borderRadius: 30,
            marginLeft: 50,
          }}
        />
        <View style={{marginRight: 200}}>
          <Text style={{fontSize: 20, color: 'black'}}>Sangeeth Raj</Text>
          <Rating type="custom" tintColor="grey" imageSize={22} />
        </View>
        <Text style={{fontSize: 15, marginTop: 15}}>a Month ago</Text>
      </View>
      <View style={styles.row2}>
        <Text style={{fontSize: 17, color: 'grey'}}>
          This was a very immersive and interesting course -- a lot of
          self-learning to be done on your own to really understand and put
          together into practice the technology into your own course and
          workflow.
        </Text>
      </View>
      <View style={styles.row1}>
        <Image
          source={require('../Assests/Profile.jpg')}
          style={{
            width: 60,
            height: 60,
            borderRadius: 30,
            marginLeft: 50,
          }}
        />
        <View style={{marginRight: 200}}>
          <Text style={{fontSize: 20, color: 'black'}}>Sangeeth Raj</Text>
          <Rating type="custom" tintColor="grey" imageSize={22} />
        </View>
        <Text style={{fontSize: 15, marginTop: 15}}>a Month ago</Text>
      </View>
      <View style={styles.row2}>
        <Text style={{fontSize: 17, color: 'grey'}}>
          This was a very immersive and interesting course -- a lot of
          self-learning to be done on your own to really understand and put
          together into practice the technology into your own course and
          workflow.
        </Text>
      </View>
      <View style={styles.row1}>
        <Image
          source={require('../Assests/Profile.jpg')}
          style={{
            width: 60,
            height: 60,
            borderRadius: 30,
            marginLeft: 50,
          }}
        />
        <View style={{marginRight: 200}}>
          <Text style={{fontSize: 20, color: 'black'}}>Sangeeth Raj</Text>
          <Rating type="custom" tintColor="grey" imageSize={22} />
        </View>
        <Text style={{fontSize: 15, marginTop: 15}}>a Month ago</Text>
      </View>
      <View style={styles.row2}>
        <Text style={{fontSize: 17, color: 'grey'}}>
          This was a very immersive and interesting course -- a lot of
          self-learning to be done on your own to really understand and put
          together into practice the technology into your own course and
          workflow.
        </Text>
      </View>
      <View style={styles.row1}>
        <Image
          source={require('../Assests/Profile.jpg')}
          style={{
            width: 60,
            height: 60,
            borderRadius: 30,
            marginLeft: 50,
          }}
        />
        <View style={{marginRight: 200}}>
          <Text style={{fontSize: 20, color: 'black'}}>Sangeeth Raj</Text>
          <Rating type="custom" tintColor="grey" imageSize={22} />
        </View>
        <Text style={{fontSize: 15, marginTop: 15}}>a Month ago</Text>
      </View>
      <View style={styles.row2}>
        <Text style={{fontSize: 17, color: 'grey'}}>
          This was a very immersive and interesting course -- a lot of
          self-learning to be done on your own to really understand and put
          together into practice the technology into your own course and
          workflow.
        </Text>
      </View>
      <View style={styles.row1}>
        <Image
          source={require('../Assests/Profile.jpg')}
          style={{
            width: 60,
            height: 60,
            borderRadius: 30,
            marginLeft: 50,
          }}
        />
        <View style={{marginRight: 200}}>
          <Text style={{fontSize: 20, color: 'black'}}>Sangeeth Raj</Text>
          <Rating type="custom" tintColor="grey" imageSize={22} />
        </View>
        <Text style={{fontSize: 15, marginTop: 15}}>a Month ago</Text>
      </View>
      <View style={styles.row2}>
        <Text style={{fontSize: 17, color: 'grey'}}>
          This was a very immersive and interesting course -- a lot of
          self-learning to be done on your own to really understand and put
          together into practice the technology into your own course and
          workflow.
        </Text>
      </View>
      <View style={styles.row1}>
        <Image
          source={require('../Assests/Profile.jpg')}
          style={{
            width: 60,
            height: 60,
            borderRadius: 30,
            marginLeft: 50,
          }}
        />
        <View style={{marginRight: 200}}>
          <Text style={{fontSize: 20, color: 'black'}}>Sangeeth Raj</Text>
          <Rating type="custom" tintColor="grey" imageSize={22} />
        </View>
        <Text style={{fontSize: 15, marginTop: 15}}>a Month ago</Text>
      </View>
      <View style={styles.row2}>
        <Text style={{fontSize: 17, color: 'grey'}}>
          This was a very immersive and interesting course -- a lot of
          self-learning to be done on your own to really understand and put
          together into practice the technology into your own course and
          workflow.
        </Text>
      </View>
      <View style={styles.row1}>
        <Image
          source={require('../Assests/Profile.jpg')}
          style={{
            width: 60,
            height: 60,
            borderRadius: 30,
            marginLeft: 50,
          }}
        />
        <View style={{marginRight: 200}}>
          <Text style={{fontSize: 20, color: 'black'}}>Sangeeth Raj</Text>
          <Rating type="custom" tintColor="grey" imageSize={22} />
        </View>
        <Text style={{fontSize: 15, marginTop: 15}}>a Month ago</Text>
      </View>
      <View style={styles.row2}>
        <Text style={{fontSize: 17, color: 'grey'}}>
          This was a very immersive and interesting course -- a lot of
          self-learning to be done on your own to really understand and put
          together into practice the technology into your own course and
          workflow.
        </Text>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  row1: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 30,
  },
  row2: {
    width: 400,
    height: 100,
    marginLeft: 60,
    marginTop: 10,
  },
});

export default Review;
