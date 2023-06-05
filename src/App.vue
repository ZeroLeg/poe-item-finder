<script setup lang="ts">
import { RouterView } from 'vue-router'
import { getTradeSeachQuery } from '@/utils/trade'

// const query = {
//   query: {
//     filters: {
//       trade_filters: {
//         disabled: false,
//         filters: {
//           price: {
//             min: 1,
//             max: 300
//           }
//         }
//       }
//     },
//     status: {
//       option: 'online'
//     },
//     stats: [
//       {
//         type: 'and',
//         filters: []
//       }
//     ],
//     name: "Shavronne's Wrappings",
//     type: "Occultist's Vestment"
//   },
//   sort: {
//     price: 'asc'
//   }
// }
// const response = getTradeSeachQuery(query)
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-dark mb-5" data-bs-theme="dark">
    <div class="container-fluid">
      <div class="navbar-brand d-flex align-items-center">
        <img src="@/assets/logo.png" alt="Logo" width="150" class="d-inline-block align-text-top" />
      </div>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <span class="nav-link">Find item by query filter</span>
          </li>
          <li class="nav-item">
            <span class="nav-link">Import item from path of building</span>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <RouterView />
</template>
