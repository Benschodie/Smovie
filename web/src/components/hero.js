import React from 'react'

import Layout from '../components/layout'

export const Hero = ({data}) => {

  const {headline, subheadline, infos} = data.edges[0].node.content[0]
  return (
    <Layout>
      <div className='hero'>
        <h1>{headline}</h1>
        <p>{subheadline}</p>
        {infos.map((info) => {
          return <span key={info}>{info}</span>
        })
        }
        <img src={data.edges[0].node.content[0].image.asset.fluid.src} />
      </div>
    </Layout>
  )
}
