import { View, Text, SafeAreaView, Image, TextInput, ScrollView } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
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
import sanityClient from '../sanity';

const Home = () => {

    const navigation = useNavigation();
    const [featured, setFeatured] = useState([]);

    //Remove Default Header upon mount - When UI Loads
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, [])

    //UseEffect - When Component Loads
    useEffect(() => {
        sanityClient.fetch(`
        *[_type == "featured"] {
            ...,
            companies[]-> {
            ...,
            menuitems[]->
            }
        }`)
        .then((data) => {
            setFeatured(data);
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
            <View className='pb-20'>
                {/* Categories */}
                <Categories />

                {/* Featured Row */}
                {featured?.map(category => (
                    <FeaturedRow
                    key={category._id}
                    id={category._id}            
                    title={category.name}
                    description={category.description}
                    />
                ))}
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default Home