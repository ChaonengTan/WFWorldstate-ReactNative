import { InMemoryCache, ApolloClient, split, HttpLink } from '@apollo/client'
import { getMainDefinition } from '@apollo/client/utilities'
import { WebSocketLink } from '@apollo/client/link/ws'

// Used for Query and Mutation Queries
const httpLink = new HttpLink({
    uri: 'https://wfworldstatemern.herokuapp.com/graphql'
})
// Use for Subscription Queries
const wsLink = new WebSocketLink({
    uri: 'https://wfworldstatemern.herokuapp.com/graphql',
        options: {
        reconnect: true
}
})
// Routes Queries to the http:// or ws:// depending on the type
const splitLink = split(
    ({ query }) => {
        const definition = getMainDefinition(query);
        return (
            definition.kind === 'OperationDefinition' &&
            definition.operation === 'subscription'
        )
    },
    wsLink,
    httpLink,
)
export const client = new ApolloClient({
    link: splitLink,
    cache: new InMemoryCache()
})