<template>
  <div class="flex justify-between flex-wrap w-full p-6">
    <div class="w-1/2">
      <h3>Now playing</h3>
      <PlayList></PlayList>
    </div>
    <div class="w-1/2">
      <Search></Search>
    </div>
  </div>
</template>

<script>

import PlayList from './../components/PlayList.vue'
import Search from './../components/Search.vue'

export default {
  name: 'Home',
  components: {
    PlayList,
    Search
  },
  props: {

  }
}
</script>