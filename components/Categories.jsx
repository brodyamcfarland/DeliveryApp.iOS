import { View, Text, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import CategoryCard from './CategoryCard';
import NoImage from '../assets/PlaceholderImage.png';
import sanityClient, { urlFor } from '../sanity';
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
    <ScrollView className='bg-white'
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
            img={urlFor(category.img).width(200).url()}
            title={category.name}/>
        ))}
    </ScrollView>
  )
}

export default Categories;