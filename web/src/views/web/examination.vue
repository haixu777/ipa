<template>
  <div class="examination">
    <Header></Header>
    <div class="examination-container">
      examination
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/web/public/Header'
import Footer from '@/components/web/public/Footer'

export default {
  name: 'examination',
  data () {
    return {}
  },
  components: {
    Header,
    Footer
  },
  mounted () {
    this.$store.commit('setHeaderLogo', {
      headerLogoShow: false
    })
    this.$store.commit('setShadowActive', {
      headerShadowActive: true
    })
    this.$store.commit('setNavDarkActive', {
      navDarkActive: true
    })
    this.$store.commit('setHeaderShow', {
      headerShow: false
    })
  }
}
</script>

<style lang="less" scope>
.examination {
  min-height: 100vh;
  .examination-container {
    padding: 60px 15vw 0;
    min-height: calc(100vh - 60px - 267px);
  }
}
</style>
