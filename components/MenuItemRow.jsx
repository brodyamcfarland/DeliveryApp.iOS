import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { urlFor } from '../sanity'
import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/solid';
import { selectBasketItems, addToBasket, selectBasketItemsWithId, removeFromBasket } from '../slices/basketSlice';
import { useDispatch, useSelector } from 'react-redux';

const MenuItemRow = ({ id, name, description, price, img }) => {

    const [showQuantity, setShowQuantity] = useState(false);
    const items = useSelector((state) => selectBasketItemsWithId(state, id));
    const dispatch = useDispatch();  

    const addItemToBasket = () => {
        dispatch(addToBasket({ id, name, description, price, img }));
    }

    const removeItemFromBasket = () => {
        if (!items.length > 0) return;
        dispatch(removeFromBasket({ id }));
    }

  return (
    <>
        <TouchableOpacity 
            className={`bg-white border p-4 border-gray-300 ${showQuantity && "border-b-0"}`}
            onPress={()=> setShowQuantity(!showQuantity)}
        >
            <View className='flex-row'>
                <View className='flex-1 pr-2'>
                    <Text className='text-lg mb-1'>{name}</Text>
                    <Text className='text-gray-500'>{description}</Text>
                    <Text className='text-gray-700 mt-2'>$ {price}</Text>
                </View>
                <View>
                    <Image
                        style={{borderWidth: 1, borderColor: '#f3f3f3'}}
                        source={{ uri: urlFor(img).url() }}
                        className='h-20 w-20 bg-gray-300 p-4 rounded-xl'
                    />
                </View>
            </View>
        </TouchableOpacity>

        {showQuantity && (
            <View className='bg-white px-4'>
                <View className='flex-row items-center space-x-2 pb-3'>
                    <TouchableOpacity onPress={addItemToBasket}>
                        <PlusCircleIcon size={40} color='#6d6afc'/>
                    </TouchableOpacity>
                    <Text className='min-w-[10px]'>{items.length}</Text>
                    <TouchableOpacity onPress={removeItemFromBasket}
                                      disabled={!items.length}>
                        <MinusCircleIcon size={40} color={items.length > 0 ? '#6d6afc': 'gray'}/>
                    </TouchableOpacity>
                </View>
            </View>
        )}
    </>
  )
}

export default MenuItemRow