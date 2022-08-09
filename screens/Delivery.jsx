import { View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native'
import { selectCompany } from '../slices/companySlice';
import { XIcon } from 'react-native-heroicons/solid';
import * as Progress from 'react-native-progress';
import deliveryguy from '../assets/DeliveryGuy.gif'
import MapView, { Marker } from 'react-native-maps';
import Robbie from '../assets/Robbie.jpg';

const Delivery = () => {
    const navigation = useNavigation();
    const company = useSelector(selectCompany);
  return (
    <View className='bg-[#6d6afc] flex-1'>
      <SafeAreaView className='z-50'>
        <View className='flex-row justify-between items-center p-5'>
            <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                <XIcon color='white' size={30}/>
            </TouchableOpacity>
            <Text className='font-light text-white text-large'>Order Help</Text>
        </View>
        <View className='bg-white mx-5 my-2 rounded-lg p-6 z-50 shadow-lg'>
            <View className='flex-row justify-between'>
                <View>
                    <Text className='text-md text-gray-500'>Estimated Delivery Time</Text>
                    <Text className='text-3xl font-bold'>30-60 Minutes</Text>
                </View>
                <Image
                    source={deliveryguy}
                    className='h-20 w-20 ml-2'   
                />
            </View>
            <Progress.Bar size={30} color="#6d6afc" indeterminate={true} />
            <Text className='mt-3 text-gray-400'>Your order from <Text className='text-black font-bold'>{company.title}</Text> is being processed.</Text>
        </View>        
      </SafeAreaView>
      {/* If you are building for web, use Mapbox */}
      <MapView
        initialRegion={{
            latitude: company.lat,
            longitude: company.long,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
        }}
        className='flex-1 mt-10 z-0'
        mapType='mutedStandard'
      >
        <Marker
            coordinate={{
                latitude: company.lat,
                longitude: company.long,
            }}
            title={company.title}
            description={company.description}
            identifier="origin"
            pinColor='#6d6afc'
        />
      </MapView>
      <SafeAreaView className='bg-gray-900 flex-row items-center space-x-5 h-28'>
        <Image 
            source={Robbie}
            className='h-12 w-12 bg-gray-300 p-4 rounded-full ml-5'
        />
        <View className='flex-1'>
            <Text className='text-white text-lg'>Robbie B.</Text>
            <Text className='text-gray-400'>Your Driver</Text>
        </View>
        <Text className='text-[#6d6afc] mr-5 text-lg font-bold'>Contact</Text>
      </SafeAreaView>
    </View>
  )
}

export default Delivery