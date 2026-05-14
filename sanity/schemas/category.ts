export default {
  name: 'category',
  title: '分类 / Category',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: '标题 / Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'URL 标识 / Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'description',
      title: '描述 / Description',
      type: 'text',
      rows: 2,
    },
  ],
};
