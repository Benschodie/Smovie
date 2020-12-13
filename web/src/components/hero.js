import React from 'react'

import Layout from '../components/layout'
import circle from '../assets/circle.svg'

import './hero.css'

export const Hero = ({data}) => {
  const {headline, subheadline, infos} = data.edges[0].node.content[0]
  return (
    <Layout>
      <div className='hero flex justify-center bg-gray-100'>
        <div className='hero__informations flex flex-col items-left justify-center'>
          <h1 className='text-5xl'>{headline}</h1>
          <p className='text-gray-800 text-lg my-16 max-w-sm tracking-wider leading-10'>{subheadline}</p>
        </div>
        <div className='hero__img relative'>
          <div className='hero__tags absolute z-30 right-20 top-2/4 flex flex-col'>
            {infos.map((info) => {
              return <span className='text-lg' key={info}>{info}</span>
            })
            }
          </div>
          <img className='relative' src={data.edges[0].node.content[0].image.asset.fluid.src} />
          <img className='hero__grafik absolute bottom-0 right-32' src={circle} alt='kreis' />
        </div>
      </div>
    </Layout>
  )
}
