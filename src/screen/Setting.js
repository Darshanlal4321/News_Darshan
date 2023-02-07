import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import CustomButton from '../common/customComponent/CustomButton';
import HeaderComponent from '../common/customComponent/HeaderComponent';
import SearchComponent from '../common/customComponent/SearchComponent';
import IonIcon from 'react-native-vector-icons/Ionicons';
import Ent from 'react-native-vector-icons/Entypo';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Setting = ({navigation}) => {
  const [newTopic, setNewTopic] = useState('');
  const [topic, setTopic] = useState();

  useEffect(() => {
    getTopic();
  }, []);

  const getTopic = async () => {
    let ds = await AsyncStorage.getItem('TopicSelected');
    console.log('changeTopicDatadata saved', ds);
    setTopic(JSON.parse(ds));
  };

  const AddNewTopic = value => {
    console.log('newTopicValue--->', value);
    setNewTopic(value);
  };

  const pushNewTopic = async () => {
    if (newTopic.length == 0) {
      alert('Please enter Topic');
    } else if (newTopic.length < 3) {
      alert('Topic name should be more than 3 character');
    } else {
      let selected = [];
      if (topic == null) {
        let newObject = {
          id: selected.length + 1,
          subject: newTopic,
          selected: false,
          selectedNewData: false,
        };
        console.log('newObject---->', newObject);

        selected.push(newObject);
      } else {
        selected = [...topic];
        let newObject = {
          id: selected.length + 1,
          subject: newTopic,
          selected: false,
          selectedNewData: false,
        };
        console.log('newObject---->', newObject);
        selected.push(newObject);
      }

      try {
        await AsyncStorage.setItem('TopicSelected', JSON.stringify(selected));
        console.log('changeTopicDatadata saved', selected);
        let d = await AsyncStorage.getItem('TopicSelected');
        setTopic(JSON.parse(d));
        console.log('changeTopicDatadata saved', topic);
      } catch (err) {
        console.log(err);
      }
    }
  };

  const showNews = async payload => {
    let _new = [];
    topic.map(item => {
      if (item.id == payload.id) {
        _new.push({
          ...payload,
          selected: !payload.selected,
        });
      } else {
        _new.push(item);
      }
    });
    setTopic(_new);
  };

  const deletTopic = id => {
    const filterData = topic.filter(item => item.id !== id);
    console.log('id::::::::', filterData);
    setTopic(filterData);
  };
  const renderItem = item => {
    console.log('item:::::', item.item);
    return (
      <View
        style={
          {
            // flexWrap: 'wrap',
            //   height: 300,
          }
        }>
        <View
          style={{
            ...styles.container,
            backgroundColor: item.item.selected ? '#BF212E' : '#8090A6',
          }}>
          <TouchableOpacity onPress={() => showNews(item.item)}>
            <Text
              style={{
                ...styles.textstyle,
                color: item.item.selected ? '#8090A6' : '#D9D6D2',
              }}>
              {item?.item.subject}
            </Text>
          </TouchableOpacity>
          <IonIcon
            name="checkmark-circle"
            size={27}
            style={{
              ...styles.iconStyle,
              color: item.item.selected ? 'white' : '#8090A6',
            }}
          />
          {item.item.selected ? (
            <View></View>
          ) : (
            <TouchableOpacity onPress={() => deletTopic(item.item.id)}>
              <Ent
                name="circle-with-cross"
                size={27}
                // onPress={deletTopic(item.item.id)}
                style={{
                  ...styles.iconStyle,
                  color: 'white',
                }}
              />
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  };
  return (
    <LinearGradient colors={['#D9D6D2', '#8090A6']} style={{flex: 1}}>
      <HeaderComponent
        headerTiltle={'Settings'}
        iconName={'close'}
        onclickButton={() => navigation.goBack()}
      />
      <View
        style={{
          alignItems: 'flex-end',
          paddingHorizontal: 20,
          marginTop: 50,
          marginBottom: 20,
        }}>
        <Text>Add your own custom topic.</Text>
      </View>
      <SearchComponent
        searchNewsData={AddNewTopic}
        searchNewsFun={pushNewTopic}
        searchNews={newTopic}
      />
      <View style={{alignItems: 'flex-end', paddingHorizontal: 20}}>
        <Text>20 characters max.</Text>
        <Text style={{marginTop: 40}}>Select topics, for your news feed.</Text>
      </View>
      <View style={{height: 350}}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <FlatList
            data={topic}
            numColumns={4}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            //   ListFooterComponent={() => <View style={{height: 100}} />}
            showsVerticalScrollIndicator={false}
            scrollEnabled={false}
          />
        </ScrollView>
      </View>
      <CustomButton
        onClick={() => {
          AsyncStorage.setItem('TopicSelected', JSON.stringify(topic)).then(
            () => {
              navigation.navigate('BottomTab');
            },
          );
        }}
      />
    </LinearGradient>
  );
};

export default Setting;

const styles = StyleSheet.create({
  mainView: {alignItems: 'flex-end', marginTop: 30, padding: 10},
  text: {color: '#BF212E', fontSize: 32, fontWeight: 'bold'},
  subView: {alignItems: 'flex-end', marginTop: 10, padding: 10},
  shortText: {color: '#8090A6', fontSize: 14},
  container: {
    borderWidth: 1,
    flexDirection: 'row',
    borderColor: '#BF212E80',
    height: 45,
    borderRadius: 20,
    // justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 5,
    marginTop: 5,
  },
  textstyle: {
    fontSize: 16,
    // padding: 10,
    marginLeft: 10,
  },
  iconStyle: {
    // marginLeft: 1,
    marginRight: 10,
  },
});
