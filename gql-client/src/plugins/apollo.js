import ApolloClient from 'apollo-boost'
import VueApollo from 'vue-apollo'

const apolloClient = new ApolloClient({
    // You should use an absolute URL here
    //   uri: 'https://api.graphcms.com/simple/v1/awesomeTalksClone'
    uri: "http://localhost:4001/graphql"
})

const apolloProvider = new VueApollo({
    defaultClient: apolloClient,
})
export default apolloProvider;