import { View, Text, SafeAreaView, Image, TextInput, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import NoImage from '../assets/Blank.jpg';
import {
    UserIcon,
    ChevronDownIcon,
    SearchIcon,
    AdjustmentsIcon,
} from 'react-native-heroicons/outline';
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';

const Home = () => {

    const navigation = useNavigation();

    //Remove Default Header upon mount
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, [])

  return (
    <SafeAreaView className='bg-gray-900 text-black'>

        {/* Header */}
        <View className='flex-row pb-3 items-center mx-4 space-x-2'>
            <Image
                source={NoImage}
                className='h-7 w-7 bg-gray-900 p-4 rounded-full'
            />
            <View className='flex-1'>
                <Text className='font-bold text-gray-300'>Deliver</Text>
                <Text className='flex-row font-bold text-lg text-gray-100'>
                    Current Location
                    <ChevronDownIcon size={20} color="#6d6afc"/>
                </Text>
            </View>
            <UserIcon size={35} color='#FFFFFF'/>
        </View>

        {/* Search Bar */}
        <View className='flex-row items-center space-x-2 mx-4 mb-2 bg-white rounded-lg'>
            <View className='bg-gray-200 flex-row flex-1 space-x-2 p-3 rounded-tl-lg rounded-bl-lg'>
                <SearchIcon color='#000000' size={20}/>
                <TextInput placeholder='Add Placeholder Here'/>
            </View>
            <View className='pr-2'>
                <AdjustmentsIcon color='#6d6afc'/>
            </View>
        </View>

        {/* Scrollable Body */}
        <ScrollView>
            {/* Categories */}
            <Categories />

            {/* Featured Row */}
            <FeaturedRow
                id='1'            
                title='Featured'
                description='Paid Placements'
            />
            {/* Discounts */}
            <FeaturedRow
                id='2'
                title='Discounts'
                description="Check out Today's deals!"
            />
            {/* Near You */}
            <FeaturedRow
                id='3'            
                title='Nearby Offers'
                description='Find deals at locations nearest to you!'
            />
        </ScrollView>

    </SafeAreaView>
  )
}

export default Home