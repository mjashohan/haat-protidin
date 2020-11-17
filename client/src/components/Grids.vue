<template>
  <div class="container">
      <div>
          <img v-for="image in images" :src="image.whr" :alt="image.alt" v-bind:key="image" height="200px">
          <p id="cap" v-for="cap in caption" v-bind:key="cap">{{ cap.txt }}<br><a :href="cap.lnk">Description</a></p>
      </div>
  </div>
</template>

<script>
export default {
    name: 'PicGrid',
    data() {
        return {
            images: [
                { whr: 'https://scontent-dus1-1.xx.fbcdn.net/v/t1.0-9/101004560_1087623011624265_980422720212697088_o.jpg?_nc_cat=107&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeEf716Uh4TYQEGjpNG8cpDz4qa2eDoVeHriprZ4OhV4eoDUVkhHCprrVYE48ndfyig&_nc_ohc=__F2R7RcHloAX-TxnmP&_nc_ht=scontent-dus1-1.xx&oh=986fe736384483a393a0d560eed5f605&oe=5FCC16B4', alt: 'Sara 1' },
                { whr: '@/assets/samples/Sara2.png', alt: 'Sara 2' },
                { whr: '@/assets/samples/Sara3.png', alt: 'Sara 3' },
                { whr: '@/assets/samples/Sara4.jpg', alt: 'Sara 4' }
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
        text-decoration: none;
    }

</style>