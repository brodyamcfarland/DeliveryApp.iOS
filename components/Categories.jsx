import { View, Text, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import CategoryCard from './CategoryCard';
import NoImage from '../assets/PlaceholderImage.png';
import sanityClient from '../sanity';
import category from '../sanitydelivery/schemas/category';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    sanityClient.fetch(`
      *[_type == "category"]
    `).then(data => {
      setCategories(data);
    })
  }, [])

  return (
    <ScrollView className='bg-gray-300 shadow-inner pb-1'
                contentContainerStyle={{
                    paddingHorizontal: 15,
                    paddingTop: 10,
                }}
                horizontal
                showsHorizontalScrollIndicator={false}
    >
        {/* Category Card */}

        {categories.map((category) => (
          <CategoryCard
            key={category._id}
            img={category.img}
            title={category.name}/>
        ))}
    </ScrollView>
  )
}

export default Categories;