import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { urlFor } from '../sanity';
import { ArrowLeftIcon, ChevronRightIcon, LocationMarkerIcon, StarIcon } from 'react-native-heroicons/solid';
import { QuestionMarkCircleIcon } from 'react-native-heroicons/outline';
import MenuItemRow from '../components/MenuItemRow';
import BasketModal from '../components/BasketModal';


const Company = () => {

    const navigation = useNavigation();

    const {params: {
        id,
        img,
        title,
        rating,
        genre,
        address,
        description,
        menuitems,
        long,
        lat
        },} = useRoute();
    
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, [])
    
  return (
    <>
    <BasketModal />
    <ScrollView>
      <View className='relative'>
        <Image
            source={{
                uri: urlFor(img).url()
            }}
            className='w-full h-56 bg-gray-300 p-4'
        />
        <TouchableOpacity className='absolute top-14 left-5 bg-gray-100 rounded-full p-2'
                          onPress={navigation.goBack}>
            <ArrowLeftIcon size={20} color='#6d6afc'/>
        </TouchableOpacity>
      </View>
      <View className='bg-white'>
        <View className='px-4 pt-4'>
            <Text className='text-2xl font-bold'>{title}</Text>
            <View className='flex-row space-x-2 my-1'>
                <View className='flex-row items-center space-x-1'>
                    <StarIcon color='#6d6afc' opacity={.5} size={22}/>
                    <Text className='text-xs text-gray-500'>
                        <Text className='text-[#301934]'>{rating}</Text> ◦ {genre}
                    </Text>
                </View>
                <View className='flex-row items-center space-x-1'>
                    <LocationMarkerIcon color='gray' opacity={.4} size={22}/>
                    <Text className='text-xs text-gray-500'>
                        Nearby ◦ {address}
                    </Text>
                </View>
            </View>
            <Text className='text-gray-600 mt-2 pb-4'>{description}</Text>
        </View>
        <TouchableOpacity className='flex-row items-center space-x-2 p-4 border-y border-gray-500'>
            <QuestionMarkCircleIcon opacity={.5} size={20}/>
            <Text className='pl-2 flex-1 text-md font-bold'>
                Have a special request?
            </Text>
            <ChevronRightIcon color='#6d6afc' />
        </TouchableOpacity>
      </View>

      <View className='pb-40'>
        <Text className='px-4 pt-6 mb-3 font-bold text-xl'> Menu </Text>
        {/* MenuItems */}

        {menuitems.map(menuitem => (
            <MenuItemRow
                 key={menuitem._id}
                 id={menuitem._id}
                 name={menuitem.name}
                 description={menuitem.description}
                 price={menuitem.price}
                 img={menuitem.img}
            />
        ))}
      </View>
    </ScrollView>
    </>
  )
}

export default Company