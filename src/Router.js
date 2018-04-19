import React, { Component } from 'react'
import { ApolloProvider } from 'react-apollo'
import ApolloClient from 'apollo-boost'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import App from './App'
import Item from './components/Item'

const client = new ApolloClient({ uri: 'http://localhost:8000/graphql' })

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <ApolloProvider client={client}>
          <Switch>
            <Route exact path={'/'} component={App} />
            <Route exact path={'/items/:id'} component={Item} />
          </Switch>
        </ApolloProvider>
      </BrowserRouter>
    )
  }
}

export default Router