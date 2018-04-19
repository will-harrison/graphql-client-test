import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import { Link } from 'react-router-dom'

const AllItems = (props) => (
  <Query
    query={gql`
      {
        getAllItems {
          id
          sku
          itemDesc
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      return data.getAllItems.map(item => (
        <div key={item.id}>
          <Link to={`items/${item.id}`}>{`${item.itemDesc}: ${item.sku}`}</Link>
        </div>
      ));
    }}
  </Query>
)

export default AllItems