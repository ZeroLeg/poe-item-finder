<script setup lang="ts">
import { RouterView } from 'vue-router'
import { getTradeSeachQuery } from '@/plugins/trade'

const query = {
  query: {
    filters: {
      trade_filters: {
        disabled: false,
        filters: {
          price: {
            min: 1,
            max: 300
          }
        }
      }
    },
    status: {
      option: 'online'
    },
    stats: [
      {
        type: 'and',
        filters: []
      }
    ],
    name: "Shavronne's Wrappings",
    type: "Occultist's Vestment"
  },
  sort: {
    price: 'asc'
  }
}
const response = getTradeSeachQuery(query)

console.log(response)
</script>

<template>
  <RouterView />
</template>
