import React from 'react'
import { graphql } from 'gatsby'
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
      startDate(formatString: "Do")
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
      <PageTitle title="Wellbeing Calender" subtitle="To access information about any of the campaigns, please click the blue link" />
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 border-b border-l mt-4 mb-16 mx-16 rounded overflow-hidden">
        {months.map(month => <Month key={month.name} month={month} campaigns={campaigns.filter(campaign => campaign.month.name === month.name)} />)}
      </ul>
    </div>
  )

}
export default WellbeingCalender

const Month = ({ month, campaigns }) => (
  <li className="overflow-hidden p-8 col-span-1 flex flex-col border-t border-r bg-warm-gray-50">
    <div className="cursor-pointer flex-1 flex flex-col">
      <h3 className="text-center text-xl text-gray-500 uppercase leading-5 font-semibold">{month.name}</h3>
      <ul className="flex flex-col mb-2">
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
  <li className="mt-6 mr-8">
    <a href={campaign.link} className="flex items-center">
      <p className="p-2 w-16 text-center text-lg rounded border border-warm-gray-200 bg-warm-gray-100 text-warm-gray-600 group-hover:bg-warm-gray-100 animate">{campaign.startDate}</p>
      <p className="ml-4 text-lg hyperlink">{campaign.name}</p>
    </a>
  </li>
)