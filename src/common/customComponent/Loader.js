// import React from "react";
// import { StyleSheet, View } from "react-native";
// import { Lottie } from "lottie-react-native";

// const Loading = () => {
//     return (
//         <View style={{ backgroundColor: "#00000088", position: 'absolute', width: "100%", height: '100%' }}>

//             <Lottie source={require('../loading.json')} autoPlay loop />
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     lottie: { width: 100, height: 100 },
// });

// export default Loading

import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import Lottie from 'lottie-react-native';
import {useSelector} from 'react-redux';

const Loading = () => {
  const value = useSelector(state => state.CreateNews.loaderSuccess);
  console.log(value, 'Loader updated value');
  if (value) {
    return (
      <View
        style={{
          backgroundColor: '#00000088',
          position: 'absolute',
          width: '100%',
          height: '100%',
        }}>
        <Lottie
          source={require('../127928-colors-loading.json')}
          autoPlay
          loop
        />
      </View>
    );
  } else {
    return <View />;
  }
};

export default Loading;
