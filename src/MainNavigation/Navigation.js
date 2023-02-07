import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../screen/SplashScreen';
import Home from '../screen/Home';
import NewsFeed from '../screen/NewsFeed';
import BottomTab from './BottomTab';
import GlobalNews from '../screen/GlobalNews';
import Bookmark from '../screen/Bookmark';
import Setting from '../screen/Setting';
const Navigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="BottomTab"
          component={BottomTab}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Setting"
          component={Setting}
          options={{headerShown: false}}
        />
        {/* <Stack.Screen name="NewsFeed" component={NewsFeed} options={{ headerShown: false }} />
                <Stack.Screen name="GlobalNews" component={GlobalNews} options={{ headerShown: false }} />
                <Stack.Screen name="Bookmark" component={Bookmark} options={{ headerShown: false }} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

const styles = StyleSheet.create({});
