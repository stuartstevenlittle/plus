import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import PageTitle from '../components/PageTitle'


export const pageQuery = graphql`
{
  campaigns: allSanityWellbeingCampaign {
    nodes {
      id
      name
      link
      month {
        name
      }
      startDate
      timeDescription
      image {
        asset {
          fluid(maxWidth: 600) {
            src
          }
        }
      }
    }
  }
  months: allSanityMonth {
    nodes {
      name
      order
    }
  }
}

`

function sortByDate(array, property) {
  return array.sort(function (a, b) {
    return new Date(b[property]) - new Date(a[property]);
  });
}

const WellbeingCalender = ({ data }) => {
  const months = data.months.nodes.sort((a, b) => (a.order > b.order) ? 1 : -1)
  const campaigns = data.campaigns.nodes
  sortByDate(campaigns, 'startDate')

  return (
    <div className="border-b">
      <PageTitle title="Wellbeing Calender" subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, aliquam" />
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 border-b border-l mt-4 mb-16 mx-16">
        {months.map(month => <Month key={month.name} month={month} campaigns={campaigns.filter(campaign => campaign.month.name === month.name)} />)}
      </ul>
    </div>
  )

}
export default WellbeingCalender

const Month = ({ month, campaigns }) => (
  <li className="overflow-hidden p-8 col-span-1 flex flex-col border-t border-r bg-white">
    <div className="cursor-pointer flex-1 flex flex-col">
      <h3 className="text-center text-2xl text-teal-800 uppercase leading-5 font-semibold">{month.name}</h3>
      <ul className="flex mt-4">
        {
          campaigns.map((campaign, index) =>
            <Campaign key={index} campaign={campaign} />
          )
        }
      </ul>
    </div>
  </li >
)

const Campaign = ({ campaign }) => (
  <li className=" mr-8">
    <a href={campaign.link} className="">
      <h3 className="mt-2 font-semibold">{campaign.timeDescription}</h3>
      <p className=" mb-3 text-gray-700">{campaign.name}</p>
      <Img className="h-32 w-32 shadow hover:opacity-90 rounded-lg" fluid={campaign.image.asset.fluid} alt={campaign.name} />
    </a>
  </li>
)