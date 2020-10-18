import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import NewsCarousel from '../components/NewsCarousel'
import Section from '../components/Section'
import FeatureGrid from '../components/FeatureGrid'
import FunderGrid from '../components/FunderGrid'
import Vision from '../components/Vision'
import Map from '../components/Map'

export const pageQuery = graphql`
{
  general: allSanityGeneral {
    nodes {
      vision
      fundersMessage
      homepagePicture {
        asset {
          fluid(maxWidth: 1903) {
            ...GatsbySanityImageFluid
          }
        }
      }
      homepagePictureDescription
    }
  }
  posts: allSanityNews {
    nodes {
      title
      publishedAt(formatString: "DD MMM YYYY")
      excerpt
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
  features: allSanityDigitalGardenSections {
    nodes {
      title
      description
      order
      slug {
        current
      }
      image {
        asset {
          fluid(maxWidth: 400) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
  funders: allSanityFunders {
    nodes {
      id
      name
      link
      order
      image {
        asset {
          fluid(maxWidth: 200) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
}

`

const Home = ({ data }) => {
  const vision = data.general.nodes[0].vision
  const fundersMessage = data.general.nodes[0].fundersMessage
  const homepagePicture = data.general.nodes[0].homepagePicture
  const homepagePictureDescription = data.general.nodes[0].homepagePictureDescription
  const funders = data.funders.nodes
  const posts = data.posts.nodes
  const features = data.features.nodes
  return (

    <div className="min-h-screen">
      <Img className="w-full flex-shrink-0 mx-auto" fluid={homepagePicture.asset.fluid} alt={homepagePictureDescription} />
      <Section title="" colour='white'>
        <Vision vision={vision} />
      </Section>
      <Section title="Latest News" colour='warm-gray' noBorder>
        <NewsCarousel newsItems={posts} />
      </Section>

      <Section title="" colour='white'>
        <FeatureGrid features={features} />
      </Section>
      <Section title="" colour='warm-gray'>
        <div className="grid grid-cols-1 gap-0 sm:grid-cols-2">
          <Section title="Where We are" colour='warm-gray' noBorder noTopGap>
            <Map />
          </Section>
          <Section title="Donations" colour='warm-gray' noBorder noTopGap>
            <div className="h-80"></div>
          </Section>
        </div >
      </Section>

      <Section title="Funding Sources" subtitle={fundersMessage} colour='white' >
        <FunderGrid funders={funders} />
      </Section>
    </div >
  )
}
export default Home