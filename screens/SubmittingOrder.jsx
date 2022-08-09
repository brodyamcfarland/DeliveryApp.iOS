import { View, Text, SafeAreaView } from 'react-native'
import React, { useEffect } from 'react'
import * as Animatable from 'react-native-animatable';
import * as Progress from 'react-native-progress';
import { useNavigation } from '@react-navigation/native';

const SubmittingOrder = () => {
    const navigation = useNavigation();

    //After 4 seconds, app will navigate to Delivery Screen
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("Delivery");
        }, 4000);
    }, [])

  return (
    <SafeAreaView className='bg-[#6d6afc] flex-1 justify-center items-center'>
      <Animatable.Image
        source={require('../assets/Finalizing.gif')}
        animation='slideInUp'
        iterationCount={1}
        className='h-96 w-96'
       />
       <Animatable.Text
        animation='slideInUp'
        iterationCount={1}
        className='text-lg my-10 text-white font-bold text-center'
       >
        Waiting for your order to be accepted!
       </Animatable.Text>
       <Progress.Circle size={60} indeterminate={true} color='white' />
    </SafeAreaView>
  )
}

export default SubmittingOrder