import createSchema from 'part:@sanity/base/schema-creator'

import schemaTypes from 'all:part:@sanity/base/schema-type'

import category from './category';
import company from './company';
import featured from './featured';
import menuItem from './menuItem';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    company,
    category,
    menuItem,
    featured,
  ]),
});
