import * as React from "react"
import {graphql} from "gatsby";

// markup
const IndexPage = ({data}) => {
  console.log(data)
  return (
    <main>
      {data.allShopifyProduct.nodes.map(({title}) => {
        return <div>{title}</div>
      })}
    </main>
  )
}


export const query = graphql`
    query {
        allShopifyProduct {
            nodes {
                id
                title
            }
        }
    }
`

export default IndexPage
