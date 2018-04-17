<template>
  <section class="assets">
    <Asset
      v-for="asset in assets"
      :key="asset._source._id"
      :thumbnail="asset._source.fileLocation"
      :title="asset._source.assetName"
      :id="asset._source.assetName"
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
        return { assets: data }
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
