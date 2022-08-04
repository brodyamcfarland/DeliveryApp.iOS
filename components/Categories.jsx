import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import CategoryCard from './CategoryCard';
import NoImage from '../assets/PlaceholderImage.png';

const Categories = () => {
  return (
    <ScrollView className='bg-white'
                contentContainerStyle={{
                    paddingHorizontal: 15,
                    paddingTop: 10,
                }}
                horizontal
                showsHorizontalScrollIndicator={false}
    >
        {/* Category Card */}
        <CategoryCard img={NoImage} title='Category1'/>
        <CategoryCard img={NoImage} title='Category2'/>
        <CategoryCard img={NoImage} title='Category3'/>
        <CategoryCard img={NoImage} title='Category4'/>
        <CategoryCard img={NoImage} title='Category5'/>
        <CategoryCard img={NoImage} title='Category6'/>
        <CategoryCard img={NoImage} title='Category7'/>
    </ScrollView>
  )
}

export default Categories;