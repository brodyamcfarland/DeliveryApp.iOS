export default {
    name: 'menuItem',
    title: 'Menu Item',
    type: 'document',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Name of Item',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'description',
            type: 'string',
            title: 'Item Description',
            validation: (Rule) => Rule.max(200),
        },
        {
            name: 'price',
            type: 'number',
            title: 'Price of the Item',
        },
        {
            name: 'img',
            type: 'image',
            title: 'Image of the Item',
        }
    ]
}