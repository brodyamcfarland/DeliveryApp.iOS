import { Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const CategoryCard = ({ img , title}) => {
  return (
    <TouchableOpacity className='relative mr-2 bg-gray-100 mb-2 rounded-xl'>
        <Image source={img}
        className='h-20 w-20' />
        <Text className='absolute bottom-1 left-3 text-black text-[10px] font-bold'>{title}</Text>
    </TouchableOpacity>
  )
}

export default CategoryCard