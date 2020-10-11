import React from 'react'
import { graphql } from 'gatsby'
import Slider from '../components/Slider'
import NewsCarousel from '../components/NewsCarousel'
import Section from '../components/Section'
import FeatureGrid from '../components/FeatureGrid'
import FunderGrid from '../components/FunderGrid'
import useForm from '../utils/useForm'
import ContactUs from '../components/ContactUs'

export const pageQuery = graphql`
{
  vision: allSanityVision {
    nodes {
      text
    }
}

  slideData: allSanitySlide {
                nodes {
                id
      title
      order
      image {
                asset {
                fluid(maxWidth: 1675) {
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
  features: allSanityCategory {
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

const Home = ({ data }) => {
  const vision = data.vision.nodes[0].text
  const slideData = data.slideData.nodes
  const funders = data.funders.nodes
  const posts = data.posts.nodes
  const features = data.features.nodes
  return (
    <div className="min-h-screen bg-white">
      <Slider slideData={slideData} />
      <Section title="Latest News" colour='gray'>
        <NewsCarousel news={posts} />
      </Section>
      <Section title="" colour='white'>
        <div className="mt-4 mb-4">
          <p className="mt-4 pb-8  mx-auto text-2xl text-center text-gray-600">{vision}</p>
          <FeatureGrid features={features} />
        </div>
      </Section>
      <Section title="" colour='gray'>
        <div className="grid grid-cols-1 gap-0 sm:grid-cols-2">
          <Section title="Where We are" colour='gray' noShadow>

          </Section>
          <Section title="Contact Us" colour='gray' noShadow>
            <ContactUs />
          </Section>
        </div >
      </Section>

      <Section title="Funding Providers" colour='white'>
        <p className="pb-2 mt-6 max-w-4xl mx-auto text-xl text-center text-gray-600">We are extremely grateful to our funders including NHS Tayside and P&K Council for providing our core funding since 2002.</p>
        <FunderGrid funders={funders} />
      </Section>
    </div >
  )
}
export default Home