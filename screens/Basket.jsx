import { View, Text, SafeAreaView, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useMemo, useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { selectCompany } from '../slices/companySlice';
import { selectBasketItems, selectBasketTotal } from '../slices/basketSlice';
import { useDispatch, useSelector } from 'react-redux';
import { XCircleIcon } from 'react-native-heroicons/solid';
import { urlFor } from '../sanity';
import { removeFromBasket } from '../slices/basketSlice';

const Basket = () => {
  const navigation = useNavigation();
  const company = useSelector(selectCompany);
  const items = useSelector(selectBasketItems);
  const basketTotal = useSelector(selectBasketTotal);
  const dispatch = useDispatch();
  const [groupedBasket, setGroupedBasket] = useState([]);
  const [disabled, setDisabled] = useState(true);

  const sendToDelivery = () => {
    if(disabled === false) {
    navigation.navigate('SubmittingOrder');
    }
  };

  // UseMemo: If value of items does not change, it wont recompute value - optimized
  useMemo(() => {
    const groupedItems = items.reduce((results, item) => {
      (results[item.id] = results[item.id] || []).push(item);
      return results;
    }, {});

    setGroupedBasket(groupedItems);
  }, [items]);

  useEffect(() => {
    setTimeout(() => {
      setDisabled(false);
  }, 1000);
  }, [])
  

  return (
    <SafeAreaView className='flex-1 bg-gray-900'>
      <View className='flex-1 bg-gray-700'>
        <View className='p-5 border-b border-[#6d6afc] bg-white shadow-sm'>
          <View>
            <Text className='text-lg font-bold text-center'>Basket</Text>
            <Text className='text-center text-gray-600'>{company.title}</Text>
          </View>
          <TouchableOpacity
            onPress={navigation.goBack}
            className='rounded-full bg-gray-200 absolute top-3 right-5'
          >
            <XCircleIcon color='#6d6afc' height={50} width={50}/>
          </TouchableOpacity>
        </View>
        <View className='flex-row items-center space-x-4 px-4 py-3 bg-white mx-2 rounded-xl my-5'>
          <Image  
            source={{
              uri: "/"
            }}
            className='h-7 w-7 bg-gray-400 p-4 rounded-full'
          />
          <Text className='flex-1'>Deliver in 30-60 mins</Text>
          <TouchableOpacity>
            <Text className='text-[#6d6afc]'>Change</Text>
          </TouchableOpacity>
        </View>
        <ScrollView className='divide-y divide-gray-400'>
          {Object.entries(groupedBasket).map(([key, items]) => (
            <View
              key={key}
              className='flex-row items-center space-x-3 bg-white py-2 px-5'>
              <Text className='text-[#6d6afc]'>{items.length} x</Text>
              <Image
                source={{
                  uri: urlFor(items[0]?.img).url()
                }}
                className='h-12 w-12 rounded-full'
              />
              <Text className='flex-1'>{items[0]?.name}</Text>
              <Text className='text-gray-500'>$ {items[0]?.price}</Text>
              <TouchableOpacity>
                <Text
                  className='text-[#6d6afc] text-xs'
                  onPress={() => dispatch(removeFromBasket({ id: key }))}
                >
                Remove
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
        <View className='p-5 bg-gray-900 mt-5 space-y-4'>
          <View className='flex-row justify-between'>
            <Text className='text-gray-400'>Subtotal</Text>
            <Text className='text-gray-400'>$ {parseFloat(basketTotal).toFixed(2)}</Text>
          </View>
          <View className='flex-row justify-between'>
            <Text className='text-gray-400'>Delivery Fee</Text>
            <Text className='text-gray-400'>$ 5.99</Text>
          </View>
          <View className='flex-row justify-between'>
            <Text className='text-white'>Total</Text>
            <Text className='font-extrabold text-white'>$ {parseFloat(basketTotal + 5.99).toFixed(2)}</Text>
          </View>
          <TouchableOpacity
            onPress={sendToDelivery}
            className='rounded-xl bg-[#6d6afc] p-4 shadow-md'
          >
            <Text className='text-center text-white text-lg font-bold'>Place Order</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Basket