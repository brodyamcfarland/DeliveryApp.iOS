import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import { ArrowRightIcon } from 'react-native-heroicons/outline';
import FeaturedCard from './FeaturedCard';
import BLANK from '../assets/Blank.jpg';

const FeaturedRow = ({ id, title, description }) => {
  return (
    <View className='bg-white'>
        <View className='mt-4 flex-row items-center justify-between px-4'>
            <Text className='font-bold text-md'>{title}</Text>
            <ArrowRightIcon color='#6d6afc'/>
        </View>
        <Text className='text-[11px] text-gray-500 px-4'>{description}</Text>
        <ScrollView
            horizontal
            contentContainerStyle={{
                paddingHorizontal: 15
            }}
            showsHorizontalScrollIndicator={false}
            className="pt-4"
        >
            {/* Featured Cards */}
            <FeaturedCard
                id={1}
                img={BLANK}
                title="Company Name"
                rating={4.5}
                genre="Genre"
                address="420 Blaze Ave"
                description="Test Description"
                menu_items={[]}
                long={16}
                lat={30}
            />
            <FeaturedCard
                id={1}
                img={BLANK}
                title="Company Name"
                rating={4.5}
                genre="Genre"
                address="420 Blaze Ave"
                description="Test Description"
                menu_items={[]}
                long={16}
                lat={30}
            />
            <FeaturedCard
                id={1}
                img={BLANK}
                title="Company Name"
                rating={4.5}
                genre="Genre"
                address="420 Blaze Ave"
                description="Test Description"
                menu_items={[]}
                long={16}
                lat={30}
            />

        </ScrollView>
    </View>
  )
}

export default FeaturedRow