import { View, Text, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { ArrowRightIcon } from 'react-native-heroicons/outline';
import FeaturedCard from './FeaturedCard';
import BLANK from '../assets/Blank.jpg';
import sanityClient from '../sanity';

const FeaturedRow = ({ id, title, description }) => {

    const [companies, setCompanies] = useState([]);

    useEffect(() => {
        sanityClient.fetch(`
        *[_type == "featured" && _id == $id] {
            ...,
            companies[]->{
            ...,
            menuitems[]->,
            type-> {
                name
            }
        }
    }[0]`, { id }).then(data => {
            setCompanies(data?.companies);
        });
    }, []);
    
  return (
    <View className='bg-gray-900'>
        <View className='bg-gray-100 mt-3'>
            <View className='mt-4 flex-row items-center justify-between px-4'>
                <Text className='font-bold text-md'>{title}</Text>
                <View className='top-2'>
                    <ArrowRightIcon color='#6d6afc'/>
                </View>
            </View>
            <Text className='text-[11px] text-gray-500 px-4 mb-4'>{description}</Text>
        </View>
        <ScrollView
            horizontal
            contentContainerStyle={{
                paddingHorizontal: 15
            }}
            showsHorizontalScrollIndicator={false}
            className="pt-4 pb-1 bg-gray-900"
        >
            {/* Featured Cards */}

            {companies?.map(company => (
                <FeaturedCard
                key={company._id}
                id={company._id}
                img={company.img}
                title={company.name}
                rating={company.rating}
                genre={company.type?.name}
                address={(company.address).slice(0,20)+"..."}
                description={company.description}
                menuitems={company.menuitems}
                long={company.long}
                lat={company.lat}
                />
            ))}
            
        </ScrollView>
    </View>
  )
}

export default FeaturedRow