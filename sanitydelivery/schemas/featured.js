export default {
    name: 'featured',
    title: 'Featured Menu Categories',
    type: 'document',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Featured Category Name',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'description',
            type: 'string',
            title: 'Featured Description',
            validation: (Rule) => Rule.max(200),
        },
        {
            name: 'companies',
            type: 'array',
            title: 'Companies',
            of: [{ type: 'reference', to: [{ type: "company" }] }],
        },
    ],
};