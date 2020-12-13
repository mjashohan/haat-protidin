<template>
  <div class="container txt">
      <div style="padding-top:30px"></div>
      <h4 style="padding-bottom:20px;padding-left:60px"><u><strong>Our top retailers</strong></u></h4>
      <div id="photos" v-for="img in images" v-bind:key="img"> 
          <img :src="img.src" :alt="img.alt" height="200px">
          <figcaption>{{ img.txt }}<a :href="img.lnk" style="display:block;font-size:11px">Product Details</a></figcaption>
      </div>
  </div>
</template>

<script>
export default {
    name: 'PicGrid',
    data() {
        return {
            images: [
                { src: '/static/samples/Sara.png', alt: 'Sara 1', txt: 'Sara 1', lnk: '#' },
                { src: '/static/samples/Sara2.png', alt: 'Sara 2', txt: 'Sara 2', lnk: '#' },
                { src: '/static/samples/Sara3.png', alt: 'Sara 3', txt: 'Sara 3', lnk: '#' },
                { src: '/static/samples/Sara4.jpg', alt: 'Sara 4', txt: 'Sara 4', lnk: '#' }
            ],
            caption: [
                { txt: 'Sara 1', lnk: '#' },
                { txt: 'Sara 2', lnk: '#' },
                { txt: 'Sara 3', lnk: '#' },
                { txt: 'Sara 4', lnk: '#' }
            ]
        }
    }
}
</script>

<style scoped>
    #cap {
        text-align: left;
    }
    a{
        text-decoration: underline;
        color: #ef5023;
        font-weight: bold;
    }

    .txt{
        color: #ef5023;
        font-weight: bolder;
    }

     #photos {
        display: inline-block;
        padding-left: 60px;
    }

</style>