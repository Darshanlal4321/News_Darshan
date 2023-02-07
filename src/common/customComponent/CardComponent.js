import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import IonIcon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CardComponent = ({DATA}) => {
  const windowWidth = Dimensions.get('window').width;
  const [bookMarknews, setBookMarkNews] = useState();
  useEffect(() => {
    getBookMarkNews();
  }, []);

  const getBookMarkNews = async () => {
    let ds = await AsyncStorage.getItem('bookMarkNews');
    console.log('Asyc::::::::::', ds);
    setBookMarkNews(JSON.parse(ds));
  };

  const selectBookMark = async item => {
    let selected = [];
    console.log('Book Mark bookMarknews::::::::::-----', bookMarknews);
    if (bookMarknews == null) {
      console.log('inside iiff');
      selected.push(item);
    } else {
      selected = [...bookMarknews];
      console.log('inside else', item);
      selected.push(item);
      console.log('Book Mark Async::::::::::-----', selected);
    }
    try {
      await AsyncStorage.setItem('bookMarkNews', JSON.stringify(selected));
      let d = await AsyncStorage.getItem('bookMarkNews');
      setBookMarkNews(JSON.parse(d));
      console.log('BookmarkAsyncData:::::::', bookMarknews);
    } catch (err) {
      console.log(err);
    }
  };

  const renderItem = ({item}) => {
    // console.log("news ::::::::::", item)
    return (
      <View style={{marginVertical: 4, marginHorizontal: 8}}>
        <View style={styles.cardContainer}>
          <Image
            source={{uri: item.urlToImage}}
            blurRadius={6}
            resizeMode="cover"
            style={{
              width: windowWidth / 1.077,
              height: 160,
              borderRadius: 2,
              resizeMode: 'cover',
            }}
          />

          <Text
            style={{
              position: 'absolute',
              // fontFamily: "Lato-Bold",
              marginLeft: 10,
              color: 'red',
              fontSize: 16,
              margin: 45,
              fontWeight: 'bold',
              // // fontWeight: '50'
              opacity: 2,
              // backgroundColor: 'green',
            }}>
            {item.title}
          </Text>

          <Text
            style={{
              marginTop: 5,
              fontFamily: 'Lato-Regular',
              fontSize: 14,
              color: '#000000',
            }}>
            {item.description}
          </Text>
          <View style={styles.icontext}>
            <View style={{marginLeft: 5}}>
              <Text style={styles.datetext}>{item.author}</Text>
              <Text style={styles.datetext2}>{item.publishedAt}</Text>
            </View>
            <View style={{flexDirection: 'row', marginRight: 10}}>
              <TouchableOpacity>
                <IonIcon name={'open-outline'} size={30} color={'red'} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => selectBookMark(item)}>
                <IonIcon
                  name={false ? 'bookmark' : 'bookmark-outline'}
                  size={30}
                  color={'red'}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={{flex: 1}}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item}
        ListFooterComponent={() => <View style={{height: 100}} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default CardComponent;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
  },
  cardContainer: {
    backgroundColor: '#FFFFFFA5',
    justifyContent: 'flex-start',
    width: '100%',
    borderRadius: 5,
    marginTop: 5,
    padding: 1,
    borderWidth: 5,
    borderColor: '#FFFFFF',
  },
  icontext: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  datetext: {
    color: '#8090A6',
    fontSize: 10,
    fontFamily: 'Lato-Regular',
    // marginTop: 5
  },
  datetext2: {
    color: '#8090A6',
    fontSize: 10,
    fontFamily: 'Lato-Regular',
    marginTop: 5,
  },
});
