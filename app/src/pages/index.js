import React from 'react'
import Slider from '../components/Slider'
// import PostGrid from '../components/PostGrid'
import Section from '../components/Section'
// import CategoryGrid from '../components/CategoryGrid'
import FunderGrid from '../components/FunderGrid'
import { graphql } from 'gatsby'

const Home = ({ data }) => {
  const slideData = data.slideData.nodes
  const funders = data.funders.nodes
  // const posts = data.posts.nodes
  // const categories = data.categories.nodes
  return (
    <div className="min-h-screen bg-white">
      <Slider slideData={slideData} />
      {/* <Section title="Latest News" colour='gray'>
        <PostGrid posts={posts} />
      </Section>
      <Section title="" colour='white'>
        <p className="pb-8 max-w-4xl mx-auto text-2xl text-center text-gray-600">“Our vision is for a world of wellbeing where people experiencing mental distress are fairly treated with compassion, understanding and respect and can follow their hopes and dreams wherever they lead.”</p>
        <CategoryGrid categories={categories} />
      </Section> */}
      <Section title="Funding Providers" colour='white'>
        <FunderGrid funders={funders} />
      </Section>
    </div>
  )
}

export const pageQuery = graphql`
{
  slideData: allSanitySlide {
                nodes {
                id
      title
      order
      image {
                asset {
                fluid(maxWidth: 1250) {
                src
              }
        }
      }
    }
  }
  posts: allSanityPost {
                nodes {
                title
         publishedAt(formatString: "DD MMM YYYY")
         exerpt
        slug {
                current
              }
        author {
                name
              }
        mainImage {
                asset {
                fluid(maxWidth: 400) {
                ...GatsbySanityImageFluid
              }
          }
        }
      }
    }
  categories: allSanityCategory {
                nodes {
                title
                description
                order
        slug {
                current
              }
      mainImage {
                asset {
                fluid(maxWidth: 400) {
                ...GatsbySanityImageFluid
              }
        }
      }
    }
  }
    funders: allSanityFunder {
                nodes {
                id
      title
        slug {
                current
              }      order
      image {
                asset {
                fluid(maxWidth: 400) {
                ...GatsbySanityImageFluid
              }
        }
      }
    }
  }
}
`

export default Home