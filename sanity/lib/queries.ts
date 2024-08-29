import { groq } from 'next-sanity'

export const homePageQuery = groq`
  *[_type == "home"][0]{
    _id,
    _updatedAt,
    overview{
      text,
      displayText,
    },
    customLogo,
    showcaseProjects[]->{
      _type,
      coverImage{
        _type,
        asset,
        "lqip": asset->metadata.lqip,
      },
      overview,
      "slug": slug.current,
      title,
      year,
    },
    title,
  }
`

export const moreProjectsQuery = groq`
  *[_type == "home"][0]{
    showcaseProjects[]->{
      _type,
      coverImage{
        _type,
        asset,
        "lqip": asset->metadata.lqip,
      },
      overview,
      "slug": slug.current,
      title,
      year,
      _updatedAt,
    },
  }
`

export const aboutPageQuery = groq`
  *[_type == "about"][0]{
    _id,
    title,
    customLogo,
    overview,
    aboutImage{
      _type,
      asset,
      "lqip": asset->metadata.lqip,
    },
    aboutLinks[]{
      _type,
      title,
      url,
    },
  }
`

export const homePageTitleQuery = groq`
  *[_type == "home"][0].title
`

export const projectBySlugQuery = groq`
  *[_type == "project" && slug.current == $slug][0] {
    _id,
    year,
    coverImage,
    description,
    overview,
    site,
    "slug": slug.current,
    title,
    content[]{
      _type == 'singleImage' => {
        _type,
        _key,
        photo{
          _type,
          asset,
          "lqip": asset->metadata.lqip,
        },
        caption,
      },
      _type == 'twoImages' => {
        _type,
        _key,
        photoOne{
          _type,
          asset,
          "lqip": asset->metadata.lqip,
        },
        photoTwo{
          _type,
          asset,
          "lqip": asset->metadata.lqip,
        },
        caption,
      },
      _type == 'textBlock' => {
        _type,
        _key,
        description,
      },
      _type == 'singleVideo' => {
        _type,
        _key,
        videoLink,
        caption,
      },
      _type == 'twoVideos' => {
        _type,
        _key,
        videoOneLink,
        videoTwoLink,
        caption,
      },
    },
  }
`

export const projectPaths = groq`
  *[_type == "project" && slug.current != null].slug.current
`

export const settingsQuery = groq`
  *[_type == "settings"][0]{
    footer,
    "menuItems": {
      "page": menuItems[_type == 'reference']->{
        _type,
        "slug": slug.current,
        title,
        },
      "link": menuItems[_type == 'navLink'] {
        _type,
        title,
        url,
      },
    },
    ogImage,
    favIcon,
    bgColor {
      'r': rgb.r,
      'g': rgb.g,
      'b': rgb.b,
    },
    textColor {
      'r': rgb.r,
      'g': rgb.g,
      'b': rgb.b,
    },
    displayLastUpdated,
  }
`