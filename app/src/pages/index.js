import React from 'react'
import { graphql } from 'gatsby'
import Slider from '../components/Slider'
import NewsCarousel from '../components/NewsCarousel'
import Section from '../components/Section'
import FeatureGrid from '../components/FeatureGrid'
import FunderGrid from '../components/FunderGrid'
import useForm from '../utils/useForm'

export const pageQuery = graphql`
{
  missionStatement: allSanityMissionStatement {
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

export default function Home({ data }) {
  const missionStatement = data.missionStatement.nodes[0].text
  const slideData = data.slideData.nodes
  const funders = data.funders.nodes
  const posts = data.posts.nodes
  const features = data.features.nodes
  const { values, updateValue } = useForm({ firstName: '', lastName: '', email: '', message: '' })
  return (
    <div className="min-h-screen bg-white">
      <Slider slideData={slideData} />
      <Section title="Latest News" colour='gray'>
        <NewsCarousel news={posts} />
      </Section>
      <Section title="" colour='white'>
        <div className="mb-4">
          <p className="mt-4 pb-8 max-w-5xl mx-auto text-2xl text-center text-gray-600">{missionStatement}</p>
          <FeatureGrid features={features} />
        </div>
      </Section>
      <Section title="" colour='gray'>
        <div className="grid grid-cols-1 gap-0 sm:grid-cols-2">
          <Section title="Where We are" colour='gray' noShadow>

          </Section>
          <Section title="Contact Us" colour='gray' noShadow>
            <div class="text-center">
              <p class="mt-4 text-lg leading-6 text-gray-500">
                Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.
            </p>
            </div>
            <div class="mt-12">
              <form action="#" method="POST" class="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                <div>
                  <label for="first_name" class="block text-sm font-medium leading-5 text-gray-700">First name</label>
                  <div class="mt-1 relative rounded-md shadow-sm">
                    <input id="first_name" class="form-input py-3 px-4 block w-full transition ease-in-out duration-150" />
                  </div>
                </div>
                <div>
                  <label for="last_name" class="block text-sm font-medium leading-5 text-gray-700">Last name</label>
                  <div class="mt-1 relative rounded-md shadow-sm">
                    <input id="last_name" class="form-input py-3 px-4 block w-full transition ease-in-out duration-150" />
                  </div>
                </div>
                <div class="sm:col-span-2">
                  <label for="email" class="block text-sm font-medium leading-5 text-gray-700">Email</label>
                  <div class="mt-1 relative rounded-md shadow-sm">
                    <input id="email" type="email" class="form-input py-3 px-4 block w-full transition ease-in-out duration-150" />
                  </div>
                </div>
                <div class="sm:col-span-2">
                  <label for="message" class="block text-sm font-medium leading-5 text-gray-700">Message</label>
                  <div class="mt-1 relative rounded-md shadow-sm">
                    <textarea id="message" rows="4" class="form-textarea py-3 px-4 block w-full transition ease-in-out duration-150"></textarea>
                  </div>
                </div>
                <div class="sm:col-span-2">
                  <span class="w-full inline-flex rounded-md shadow-sm">
                    <button type="button" className="w-full inline-flex text-xl items-center justify-center px-6 py-3 mt-2 border border-transparent leading-6 font-medium rounded-md text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:border-gray-900 focus:shadow-outline-gray active:bg-gray-900 animate">
                      Let's talk
            </button>
                  </span>
                </div>
              </form>
            </div>
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
