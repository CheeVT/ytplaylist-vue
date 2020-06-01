<template>
  <div class="flex items-center justify-between flex-wrap w-full p-6">
    <div class="w-1/2">
      <h3>Now playing</h3>
    </div>
    <div class="w-1/2">
      <Search></Search>
    </div>
  </div>
</template>

<script>

import Search from './../components/Search.vue'

export default {
  name: 'Home',
  components: {
    Search
  },
  props: {

  }
}
</script>