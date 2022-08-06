import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';

import category from './category';
import featured from './featured';
import menuitem from './menuitem';
import company from './company';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    category,
    menuitem,
    featured,
    company,
  ]),
});
