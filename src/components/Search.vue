<template>
  <div>
    <form action="" class="w-full max-w-s">
      <div class="flex items-center border-b border-b-2 border-teal-500 py-2">
        <input type="text" v-model="searchTerm" placeholder="Search songs..." class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none">
        <button @click="search" class="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="button">
          Search
        </button>
      </div>
    </form>

    <div class="w-full p-10 flex justify-center">
      <draggable :list="searchItems" :clone="cloneDog" @change="log" :group="{ name: 'people', pull: 'clone', put: false }" class="border-2 w-full min-h-10">
        <div v-for="element in searchItems" :key="element.id.videoId" class="max-w-sm rounded shadow-lg m-auto">
          <img :src="element.snippet.thumbnails.medium.url" />
           {{ element.snippet.title }}
        </div>
      </draggable>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable'

export default {
  name: 'Search',
  components: {
    draggable
  },
  data() {
    return {
      searchTerm: 'kimmv',
      searchItems: [],
      playList: [],
      myArray: [
        {name: 'Jovan'},
        {name: 'Alex'},
        {name: 'Marta'}
      ],
      idGlobal: 0
    }
  },
  methods: {
    search() {
      alert(this.searchTerm);
      this.$gapi.request({
          path: 'https://www.googleapis.com/youtube/v3/search',
          method: 'GET',
          params: {
            part: 'snippet',
            maxResults: 3,
            q: this.searchTerm
          }
        }).then(response => {
          // eslint-disable-next-line no-console
          console.log(response.result.items)
          this.searchItems = response.result.items;
        })
    },
    log: function(evt) {
      // eslint-disable-next-line no-console
          console.log('evt-evt', evt)
    },
    cloneDog( item ) {
       // eslint-disable-next-line no-console
          console.log('item-item', item)
          this.playList.push(item)
      return item;
    }
  },
}
</script>