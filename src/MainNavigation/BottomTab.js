import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import IonIcon from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screen/Home';
import NewsFeed from '../screen/NewsFeed';
import GlobalNews from '../screen/GlobalNews';
import Bookmark from '../screen/Bookmark';
const BottomTab = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={() => ({
        headerShown: false,

        tabBarStyle: {
          height: 50,
          paddingHorizontal: 5,
          paddingTop: 0,
          backgroundColor: '#F20505',
          position: 'absolute',
          borderTopWidth: 0,
        },
      })}>
      <Tab.Screen
        name="NewsFeed"
        component={NewsFeed}
        options={{
          headerShown: false,
          tabBarLabel: () => null,
          tabBarIcon: tabInfo => {
            return (
              <IonIcon
                name={'options'}
                size={30}
                color={tabInfo.focused ? '#fff' : '#8e8e93'}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="GlobalNews"
        component={GlobalNews}
        options={{
          headerShown: false,
          tabBarLabel: () => null,
          tabBarIcon: tabInfo => {
            return (
              <IonIcon
                name={'globe'}
                size={30}
                color={tabInfo.focused ? '#fff' : '#8e8e93'}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Bookmark"
        component={Bookmark}
        options={{
          headerShown: false,
          tabBarLabel: () => null,
          tabBarIcon: tabInfo => {
            return (
              <IonIcon
                name={'bookmark'}
                size={30}
                color={tabInfo.focused ? '#fff' : '#8e8e93'}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;

const styles = StyleSheet.create({});
