import { HomeIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'home',
  title: 'Home',
  type: 'document',
  icon: HomeIcon,
  // Uncomment below to have edits publish automatically as you type
  // liveEdit: true,
  fields: [
    defineField({
      name: 'title',
      description: 'This field is the title of your personal website.',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'customLogo',
      description: 
        'Upload your custom logo, it will replace your title in the header of your website. Use SVG or PNG with a transparent background.',
      title: 'Custom logo (Optional)',
      type: 'image',
    }),
    defineField({
      name: 'overview',
      description:
        'This text is your description. Used for the introduction paragraph at a Home page and also for the <meta> description tag for SEO.',
      title: 'Introduction text',
      type: 'object',
      fields:[
        {
        name: 'text',
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
        validation: (rule) => rule.max(155).required(),
        },
        {
          title: 'Display this introduction on Home page?',
          description: 'If you turn in off it still be used for SEO description',
          name: 'displayText',
          type: 'boolean',
        },
      ],
    }),
    defineField({
      name: 'showcaseProjects',
      title: 'Showcase projects',
      description:
        'These are the projects that will appear on your home page. First create your set of projects and then add to the list below. You can rearrange the display order by dragging each project.',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{ type: 'project' }],
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        subtitle: 'Home',
        title,
      }
    },
  },
})
