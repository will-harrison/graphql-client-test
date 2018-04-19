import React, { Fragment } from 'react';
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

const Item = (props) => {
  return (
    <Query
      query={gql`
      {
        getItem(id: "00c734f3-0bc7-4468-a3bc-ac02dd8bc0f6") {
          id
          sku
          itemDesc
          weeklySales {
            NetQty
          }
        }
      }
      `} >
      {({ loading, error, data }) => {
        if (loading) return <div>Loading</div>
        if (error) return <div>Error</div>

        return data.getItem.map(item => (
          <Fragment key={item.id}>
            <div>{item.sku} {item.itemDesc}</div>
          </Fragment>
        ))
      }}
    </Query>
  );
};

export default Item;