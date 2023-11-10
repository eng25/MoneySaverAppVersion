// import {useState} from 'react'
import {View, ScrollView, SafeAreaView} from 'react-native';
import { Stack} from 'expo-router';
// import{COLORS, icons, images, SIZES} from '../constants'
// import Welcome from '../components/home/welcome/Welcome'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './navigation/tabs'
// import ScreenHeaderBtn from '../app/../constants/components/common/header/'

const App = ()=>{
    // const router = useRouter()
    return (
        <NavigationContainer independent={true}>
        <Tabs/>
         </NavigationContainer>

    );
}
export default App;