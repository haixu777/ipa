<template>
  <div class = "banner" ref="banner">
    <div class = "Limit">
      <el-carousel :interval = "2000" arrow = "hover" :height = "BannerHeight" :autoplay = "true"
                   ref = "carousel" trigger = "click" indicator-position = "none">
        <el-carousel-item v-for = "item in imgList" :key = "item.id">
          <div class = "img_con">
            <div class = "img_cover"></div>
            <img class = "element-img" alt = "" :src = "item.imgUrl">
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="mic-logo"></div>
  </div>
</template>

<script>
export default {
  name: 'Banner',
  props: {
    BannerHeight: {
      required: false
    },
    imgList: {
      required: false,
      default: function () {
        return [{
          id: 0,
          imgUrl: require('../../assets/img/banner-bg.jpg')
        }]
      }
    }
  },
  data () {
    return {
      bannerWidth: 1
    }
  },
  mounted () {
    // const ratio = 2.234 // banner 宽高比
    // this.bannerWidth = this.$refs.banner.offsetHeight * ratio
    // window.onresize = () => {
    //   this.bannerWidth = this.$refs.banner.offsetHeight * ratio
    // }
  }
}
</script>

<style lang = "less" scoped>
.banner {
  position: relative;
  margin: 0 auto;
  .mic-logo {
    position: absolute;
    bottom: 50px;
    left: 13vw;
    z-index: 9999;
    width: 5%;
    height: 35%;
    /* width: 5.208vw;
    height: 23.148vh; */
    background: url('../../assets/img/mic-logo.png') no-repeat 100% 100%;
    background-size: 100% 100%;
    /* background-size: 5.208vw 23.148vh; */
  }
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}

.img_con {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  :after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(51, 112, 255, .2);
    height: 100%;
    z-index: 666;
  }
}

.element-img {
  width: 100%;
  height: 100%;
}

/deep/ .el-carousel__arrow {
  width: 40px;
  height: 40px;
  font-size: 30px;
  background-color: rgba(255, 255, 255, .1);
}

/deep/ .el-carousel__arrow:hover {
  background-color: rgba(255, 255, 255, .3);
}
</style>
