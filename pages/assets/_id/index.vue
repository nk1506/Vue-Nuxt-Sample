<template>
  <section class="single-asset">
    <h1> {{asset.title}} </h1>
    <div>
      <img :src="asset.thumbnail" :alt="asset.title"/>
    </div>
    <p> {{asset.previewText}} </p>

  </section>

</template>

<script>
  export default {
    asyncData(context) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve({
            asset:[
              {
                "id":"1",
                "title": "Title 1",
                "thumbnail": "http://jdvault.2adpro.com/asset/get-asset-file-contents?assetId=65884",
                "previewText": "PreviewText 1"

              },
              {
                "id":"2",
                "title": "Title 2",
                "thumbnail": "http://jdvault.2adpro.com/asset/get-asset-file-contents?assetId=65885",
                "previewText": "PreviewText 2"

              }
            ].find( el => el.id === context.params.id)
          })
        }, 100)

      })
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
