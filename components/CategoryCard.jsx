import { Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { urlFor } from '../sanity';

const CategoryCard = ({ img , title}) => {
  return (
    <TouchableOpacity className='relative mr-2 bg-gray-100 mb-2'>
        <Image source={{
                uri: urlFor(img).url()
            }}
        className='h-20 w-20 rounded-xl' />
        <Text className='absolute bottom-1 left-2 text-white text-[10px] font-bold'>{title}</Text>
    </TouchableOpacity>
  )
}

export default CategoryCard