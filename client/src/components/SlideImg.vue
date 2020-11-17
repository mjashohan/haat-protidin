<template>
  <div id="slider" class="container">
    <transition-group name="fade" tag="div">
      <div v-for="i in [currentIndex]" :key="i">
        <img :src="currentImg" />
      </div>
    </transition-group>
    <!-- <a class="prev" @click="prev" href="#">&#10094; Previous</a>
    <a class="next" @click="next" href="#">&#10095; Next</a> -->
  </div>
</template>

<script>
export default {
    name: "SlideImg",
  data() {
    return {
      images: [
        "https://scontent-dus1-1.xx.fbcdn.net/v/t1.0-9/118348381_10214569621989146_6023804019470881682_n.jpg?_nc_cat=106&ccb=2&_nc_sid=e3f864&_nc_eui2=AeH1Rt-KlKo7iQOjHYi6FXerw8BL3qsDe_jDwEveqwN7-BZ5yabyYnDAOx_RFxxzamU&_nc_ohc=jNwEiiTc6UAAX9WCjNE&_nc_ht=scontent-dus1-1.xx&oh=3b6511c49cc3f38fe9d13d3dc3d308a2&oe=5FCDE731",
        "https://cdn.pixabay.com/photo/2016/02/17/23/03/usa-1206240_1280.jpg",
        "https://cdn.pixabay.com/photo/2015/05/15/14/27/eiffel-tower-768501_1280.jpg",
        "https://cdn.pixabay.com/photo/2016/12/04/19/30/berlin-cathedral-1882397_1280.jpg"
      ],
      timer: null,
      currentIndex: 0
    };
  },

  mounted: function() {
    this.startSlide();
  },

  methods: {
    startSlide: function() {
      this.timer = setInterval(this.next, 4000);
    },

    next: function() {
      this.currentIndex += 1;
    },
    prev: function() {
      this.currentIndex -= 1;
    }
  },

  computed: {
    currentImg: function() {
      return this.images[Math.abs(this.currentIndex) % this.images.length];
    }
  }
};
</script>

<style scoped>
#slider {
  padding: relative;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.9s ease;
  overflow: hidden;
  visibility: visible;
  position: absolute;
  width:70%;
  opacity: 1;
}

.fade-enter,
.fade-leave-to {
  visibility: hidden;
  width:50%;
  opacity: 0;
}

img {
  height:500px;
  width:70%;
  position: left;
}

.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 40%;
  width: auto;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.7s ease;
  border-radius: 0 4px 4px 0;
  text-decoration: none;
  user-select: none;
}

.next {
  right: 0;
}

.prev {
  left: 0;
}

.prev:hover, .next:hover {
  background-color: rgba(0,0,0,0.9);
}
</style>