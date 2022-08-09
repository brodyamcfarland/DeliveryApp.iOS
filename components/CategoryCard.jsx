import { Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { urlFor } from '../sanity';

const CategoryCard = ({ img , title}) => {
  return (
    <TouchableOpacity className='relative mr-2 bg-gray-300'>
        <Image source={{
                uri: urlFor(img).url()
            }}
        className='h-20 w-20 rounded-2xl shadow-xl' />
        <Text className='relative text-center text-black text-[10px] font-bold'>{title}</Text>
    </TouchableOpacity>
  )
}

export default CategoryCard