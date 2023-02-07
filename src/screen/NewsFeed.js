import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import HeaderComponent from '../common/customComponent/HeaderComponent';
import TabComponent from '../common/customComponent/TabComponent';
import IonIcon from 'react-native-vector-icons/Ionicons';
import CardComponent from '../common/customComponent/CardComponent';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch, useSelector} from 'react-redux';
import {getNewsData} from '../Redux/action/GetnewsDataAction';
import {useIsFocused} from '@react-navigation/native';
const NewsFeed = ({navigation}) => {
  const [topic, setTopic] = useState();
  const dispatch = useDispatch();
  const newsData = useSelector(state => state.CreateNews.newsData);
  const [news, setNews] = useState('');
  const isFocused = useIsFocused();
  useEffect(() => {
    getTopic();
    if (newsData != null) {
      dispatch(getNewsData('all'));
    }
  }, [isFocused]);

  useEffect(() => {
    // console.log(newsData, "api response")
    if (newsData != null) {
      setNews(newsData.articles);
    }
  }, [newsData]);

  const getTopic = async () => {
    let ds = await AsyncStorage.getItem('TopicSelected');
    console.log('changeTopicDatadata saved', ds);
    let w = JSON.parse(ds).filter(item => {
      return item.selected == true;
    });
    console.log('fdata---->', w);
    setTopic(w);
  };
  const selectedTopicNews = topic => {
    dispatch(getNewsData(topic));
  };

  return (
    <LinearGradient
      colors={['#D9D6D2', '#D9D6D2', '#8090A6', '#8090A6']}
      style={{flex: 1}}>
      <View style={styles.mainView}>
        <HeaderComponent
          headerTiltle={'My News Feed'}
          iconName={'filter-outline'}
          onclickButton={() => navigation.navigate('Setting')}
        />
        <CardComponent DATA={news} />
        <View style={styles.selectContainer}>
          <View style={{paddingLeft: 15}}>
            <FlatList
              data={topic}
              showsHorizontalScrollIndicator={false}
              keyExtractor={item => item.id}
              horizontal
              renderItem={({item}) => {
                return (
                  <TouchableOpacity
                    onPress={() => selectedTopicNews(item?.subject)}>
                    <View
                      style={{
                        ...styles.selectNews,
                        backgroundColor: '#D9D6D2',
                      }}>
                      <Text
                        style={{
                          color: 'grey',
                        }}>
                        {item.subject}
                      </Text>
                    </View>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};

export default NewsFeed;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
  },
  selectNews: {
    borderWidth: 1,
    borderColor: '#ffff',
    padding: 5,
    marginLeft: 3,
    borderRadius: 20,
  },
  selectContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    position: 'absolute',
    bottom: 50,
    width: '100%',
    height: 60,
    paddingBottom: 10,
  },
});
