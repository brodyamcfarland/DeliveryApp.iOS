import { View, Text, SafeAreaView, Image } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import Courage from '.././assets/Courage.jpg';
import {
    UserIcon,
    ChevronDownIcon,
    SearchIcon,
    AdjustmentsIcon,
} from 'react-native-heroicons/outline';

const Home = () => {

    const navigation = useNavigation();

    //Remove Default Header upon mount
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, [])

  return (
    <SafeAreaView>
        <View className='flex-row pb-3 items-center mx-4 space-x-2'>
            <Image
                source={Courage}
                className='h-7 w-7 bg-gray-900 p-4 rounded-full'
            />
            <View>
                <Text className='font-bold text-gray-500'>Deliver</Text>
                <Text className='font-bold text-lg'>
                    Current Location
                    <ChevronDownIcon size={20} color="#00BB77" />
                </Text>
            </View>
        </View>
    </SafeAreaView>
  )
}

export default Home