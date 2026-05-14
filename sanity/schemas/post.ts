export default {
  name: 'post',
  title: '文章 / Blog Post',
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
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'type',
      title: '类型 / Type',
      type: 'string',
      options: {
        list: [
          { title: '文章 / Article', value: 'article' },
          { title: '小妙招 / Daily Tip', value: 'tip' },
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'excerpt',
      title: '摘要 / Excerpt',
      type: 'text',
      rows: 3,
    },
    {
      name: 'content',
      title: '内容 / Content',
      type: 'array',
      of: [
        { type: 'block' },
        { type: 'image', options: { hotspot: true } },
      ],
    },
    {
      name: 'coverImage',
      title: '封面图 / Cover Image',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'categories',
      title: '分类 / Categories',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'category' } }],
    },
    {
      name: 'publishedAt',
      title: '发布时间 / Published At',
      type: 'datetime',
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'type',
      media: 'coverImage',
    },
  },
};
