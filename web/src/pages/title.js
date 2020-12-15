import React from 'react'
import {graphql} from 'gatsby'

// eslint-disable-next-line space-before-function-paren
export default function TitleAuswerfer(props) {
  return (
    <div>
      <h2>title auswerfer</h2>
    </div>
  )
}

export const query = graphql`
  query NextPageQuery {
    allSanityPage {
      nodes {
        title
      }
    }
  }
`
