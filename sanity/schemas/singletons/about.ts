import { BookIcon, LinkIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'about',
  title: 'About',
  type: 'document',
  icon: BookIcon,
  // Uncomment below to have edits publish automatically as you type
  // liveEdit: true,
  fields: [
    defineField({
        type: 'string',
        name: 'title',
        title: 'Title',
        description: 'This is your title for About page that will be displayed in the header of your website.',
        validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'overview',
      description:
        'This field is for your About description.',
      title: 'Description',
      type: 'array',
      of: [
        // Paragraphs
        defineArrayMember({
          lists: [],
          marks: {
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Link',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'Url',
                  },
                ],
              },
            ],
            decorators: [
              {
                title: 'Italic',
                value: 'em',
              },
              {
                title: 'Strong',
                value: 'strong',
              },
            ],
          },
          styles: [],
          type: 'block',
        }),
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'aboutImage',
      title: 'About Image',
      description:
        '(Optional) This image will be displayed next to your About description.',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'aboutLinks',
      title: 'External links',
      description: '(Optional) Here you can add a list of external links, it will be displayed below your About description text.',
      type: 'array',
      of: [
        {
        title: 'Link',
        name: 'navLink',
        type: 'object',
        icon: LinkIcon,
        fields: [
          {
            title: 'Title',
            name: 'title',
            type: 'string',
            description: 'Display Text'
          },
          {
            title: 'URL',
            name: 'url',
            type: 'url',
            description: 'enter an external URL',
            validation: Rule =>
            Rule.uri({
              scheme: ['http', 'https', 'mailto', 'tel']
            }),
          },
        ],
        preview: {
          select: {
            title: 'title',
            url: 'url'
          },
          prepare({ title, url }) {
            return {
              title: title,
              subtitle: url,
              media: LinkIcon,
            }
          },
        },
      },
    ],
  }),
  ],
  preview: {
    prepare() {
      return {
        title: 'About page',
      }
    },
  },
})
