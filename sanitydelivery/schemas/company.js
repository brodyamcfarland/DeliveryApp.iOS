export default {
  name: 'company',
  title: 'Company',
  type: 'document',
  fields: [
    {
      name: "name",
      type: "string",
      title: "Company Name",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      type: "string",
      title: "Description",
      validation: (Rule) => Rule.max(200),
    },
    {
      name: "img",
      type: "image",
      title: "Company Image",
    },
    {
      name: "lat",
      type: "number",
      title: "Latitude",
    },
    {
      name: "long",
      type: "number",
      title: "Longitude",
    },
    {
      name: "address",
      type: "string",
      title: "Company Address",
      validation: (Rule) => Rule.max(200),
    },
    {
      name: "rating",
      type: "number",
      title: "Enter a rating between 1-5 Stars",
      validation: (Rule) => 
        Rule.required()
          .min(1)
          .max(5)
          .error("Please enter a value between 1-5")
    },
    {
      name: "type",
      title: "Category",
      validation: (Rule) => Rule.required(),
      type: "reference",
      to: [{ type: "category" }]
    },
    {
      name: "menuItems",
      title: "Menu Items",
      type: "array",
      of: [{ type: "reference", to: [{ type: menuItem }] }],
    },
  ],
};