import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectBasketItems, selectBasketTotal } from '../slices/basketSlice'
import { useNavigation } from '@react-navigation/native'

const BasketModal = () => {
    const items = useSelector(selectBasketItems);
    const navigation = useNavigation();
    const basketTotal = useSelector(selectBasketTotal);

  return (
    <View className='absolute bottom-10 w-full z-50'>
        <TouchableOpacity onPress={()=> navigation.navigate("Basket")} className='mx-5 p-4 bg-[#6d6afc] rounded-lg flex-row items-center space-x-1 shadow-inner'>
            <View className='bg-[#301934] rounded-full px-1'>
                <Text className='text-white font-extrabold text-lg py-1 px-2'>{items.length}</Text>
            </View>
            <Text className='flex-1 pl-1 text-white font-bold'>View Basket</Text>
            <Text className='text-lg text-shadow text-white font-extrabold'>$ {parseFloat(basketTotal).toFixed(2)}</Text>        
        </TouchableOpacity>
    </View>
  )
}

export default BasketModal