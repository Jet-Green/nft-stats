<template>
  <div>{{ nfts }}</div>
</template>

<script>
import gql from "graphql-tag";

export default {
  apollo: {
    nfts: gql`
      query {
        nfts {
          title
          author
        }
      }
    `,
  },
};
</script>