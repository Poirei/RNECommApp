/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {FlatList, Image, Text, TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import items from './data/data';

const App = () => {
  return (
    <View
      style={{
        paddingTop: 10,
        paddingLeft: 24,
        backgroundColor: '#fafafa',
        minHeight: '100%',
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Icon name="superpowers" size={50} />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 22,
          }}>
          <Text
            style={{
              color: '#c4bdbd',
              marginRight: 30,
              fontSize: 14.5,
              fontWeight: 'bold',
            }}>
            Privacy Policy
          </Text>
          <Text style={{color: '#c4bdbd', fontSize: 14.5, fontWeight: 'bold'}}>
            Contacts
          </Text>
        </View>
      </View>
      <View style={{paddingTop: '27%', paddingBottom: '10%'}}>
        <TextInput
          underlineColorAndroid="#fafa"
          style={{
            width: '90%',
            fontSize: 32,
            fontWeight: 'bold',
            paddingVertical: 20,
            color: 'black',
          }}
          placeholder="Find something"
          placeholderTextColor="#dfe7e5"
        />
      </View>
      <View style={{paddingTop: 30}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 18.5, fontWeight: '700'}}>
            Trending Products
          </Text>
          <Text style={{color: '#ddd8dd', paddingHorizontal: 34}}>
            SEE ALL <Icon name="angle-right" />
          </Text>
        </View>
        <FlatList
          horizontal
          data={items}
          keyExtractor={item => item.key.toString()}
          renderItem={({item}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'space-around',
                borderRadius: 5,
                padding: 10,
                height: 240,
                backgroundColor: '#69e6db',
                minWidth: 150,
                width: 166,
                marginTop: 10,
                marginRight: 14,
                elevation: 1,
                shadowColor: 'black',
                shadowOffset: {
                  width: 3,
                  height: 3,
                },
                shadowRadius: 3,
                shadowOpacity: 1,
              }}>
              <Image
                source={{uri: `${item.imageUrl}`, height: 80, width: 80}}
              />
              <Text
                style={{
                  fontSize: 22,
                  fontWeight: '700',
                  color: 'white',
                  alignSelf: 'flex-start',
                  textShadowOffset: {
                    width: 0,
                    height: 0.2,
                  },
                  textShadowColor: 'black',
                  textShadowRadius: 1,
                }}>
                {item.name}
              </Text>
              <Text
                style={{
                  color: '#f0f8ca',
                  fontWeight: '100',
                  paddingHorizontal: 10,
                }}>
                from {item.vendor}
              </Text>
              <Text
                style={{
                  color: 'white',
                  fontSize: 21,
                  fontWeight: 'bold',
                  alignSelf: 'flex-end',
                  textShadowOffset: {
                    width: 0,
                    height: 0.2,
                  },
                  textShadowColor: 'black',
                  textShadowRadius: 1,
                }}>
                ₹{item.price}
              </Text>
            </View>
          )}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          paddingTop: 30,
          marginTop: '14%',
        }}>
        <Icon name="tag" style={{fontSize: 18}} />
        <Icon name="comment-alt" style={{fontSize: 18}} />
        <Icon name="heart" style={{fontSize: 18}} />
        <Icon name="sliders-h" style={{fontSize: 18}} />
      </View>
    </View>
  );
};

export default App;
