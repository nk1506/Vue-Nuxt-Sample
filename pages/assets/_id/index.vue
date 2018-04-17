<template>
  <section class="single-asset">
    <h1> {{asset._source.assetName}} </h1>
    <div>
      <img :src="asset._source.fileLocation" :alt="asset._source.assetName"/>
    </div>
    <p> {{asset._source.assetDescription}} </p>

  </section>

</template>

<script>
    import axios from '~/plugins/axios'

  export default {
      async asyncData (context) {
          let { data } = await axios.get('/api/assets/'+context.params.id)
          return { asset: data[0] }
      }
  }
</script>

<style scoped>

  .single-asset {
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 30px;

  }
</style>
