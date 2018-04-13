<template>
  <section class="assets">
    <Asset
      v-for="asset in assets"
      :key="asset.id"
      :thumbnail="asset.thumbnail"
      :previewText="asset.previewText"
      :title="asset.title"
      :id="asset.id"
    ></Asset>
  </section>
</template>

<script>
  import Asset from '~/components/assets/Asset.vue'
  import axios from '~/plugins/axios'

  export default {
    components: {
      Asset
    },
    async asyncData () {
        let { data } = await axios.get('/api/assets')
        return { assets: data.data }
    }
  }
</script>

<style scoped>
  .assets {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;

  }

</style>
