import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { StarIcon } from 'react-native-heroicons/solid';
import { LocationMarkerIcon } from 'react-native-heroicons/outline';

const FeaturedCard = ({
    id,
    img,
    title,
    rating,
    genre,
    address,
    description,
    menu_items,
    long,
    lat
}) => {
  return (
    <TouchableOpacity className='bg-white mr-3 shadow'>
        <Image 
            source={img}
            className='h-36 w-64 rounded-lg'
        />
        <View className='px-3 pb-4'>
            <Text className='font-bold text-md pt-2'>{title}</Text>
            <View className='flex-row items-center space-x-1'>
                <StarIcon color='#6d6afc' opacity={.5} size={22}/>
                <Text className='text-xs text-gray-500'>
                    <Text className='text-[#301934]'>{rating}</Text> ◦ {genre}
                </Text>
            </View>
            <View className='flex-row items-center space-x-1'>
                <LocationMarkerIcon color="gray" opacity={.5} size={22}/>
                <Text className='text-xs text-gray-700'>Nearby ◦ {address}</Text>
            </View>
        </View>
    </TouchableOpacity>
  )
}

export default FeaturedCard;