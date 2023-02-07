import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useState, useEffect} from 'react';
import HeaderComponent from '../common/customComponent/HeaderComponent';
import TabComponent from '../common/customComponent/TabComponent';
import CardComponent from '../common/customComponent/CardComponent';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useIsFocused} from '@react-navigation/native';
const Bookmark = ({navigation}) => {
  const [bookMarknews, setBookMarkNews] = useState();
  const isFocused = useIsFocused();
  useEffect(() => {
    getBookMarkNews();
  }, [isFocused]);

  const getBookMarkNews = async () => {
    let ds = await AsyncStorage.getItem('bookMarkNews');
    console.log('Asyc::::::::::', ds);
    setBookMarkNews(JSON.parse(ds));
  };
  return (
    <LinearGradient
      colors={['#D9D6D2', '#D9D6D2', '#8090A6', '#8090A6']}
      style={{flex: 1}}>
      <View style={styles.mainView}>
        <HeaderComponent
          headerTiltle={'News Bookmarked'}
          iconName={'filter-outline'}
          onclickButton={() => navigation.navigate('Setting')}
        />
        <CardComponent DATA={bookMarknews} />
      </View>
    </LinearGradient>
  );
};

export default Bookmark;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
  },
  cardContainer: {
    backgroundColor: '#FFFFFFA5',
    justifyContent: 'center',
    width: '100%',
    borderRadius: 5,
    marginTop: 5,
    padding: 1,
    borderWidth: 5,
    borderColor: '#FFFFFF',
  },
});
