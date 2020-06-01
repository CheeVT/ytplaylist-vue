<template>
  <div>
    <form action="" class="w-full max-w-s">
      <div class="flex items-center border-b border-b-2 border-teal-500 py-2">
        <input type="text" placeholder="Search songs..." class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none">
        <button class="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="button">
          Search
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Search'
}
</script>