<template>
  <div class="w-full p-10 flex justify-center">
    <draggable :list="playList" @change="log" group="people" class="border-2 w-full min-h-10">
      <div v-for="element in playList" :key="element.id.videoId" class="max-w-sm rounded shadow-lg m-auto">
        <img :src="element.snippet.thumbnails.medium.url" />
          {{ element.snippet.title }}
      </div>
    </draggable>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
export default {
  name: 'PlayList',
  components: {
    draggable
  },
  data() {
    return {
      playList: []
    }
  }
}
</script>