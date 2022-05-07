<template>
  <div class="abroad">
    <Header></Header>
    <div class="abroad-container">
      内容待填充...
      <!-- <IpaTabs :tabList="tabList">
        <IpaTabsPanel name="central">考务中心设立</IpaTabsPanel>
        <IpaTabsPanel name="proxy">代理设立</IpaTabsPanel>
        <IpaTabsPanel name="auth">签约授权</IpaTabsPanel>
      </IpaTabs> -->
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/web/public/Header'
import Footer from '@/components/web/public/Footer'
// import IpaTabs from '@/components/web/ipaTabs'
// import IpaTabsPanel from '@/components/web/ipaTabsPanel'

export default {
  name: 'abroad',
  data () {
    return {
      tabList: [
        { val: 'central', text: '考务中心设立' },
        { val: 'proxy', text: '代理设立' },
        { val: 'auth', text: '签约授权' }
      ]
    }
  },
  components: {
    Header,
    Footer
    // IpaTabs,
    // IpaTabsPanel
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
.abroad {
  min-height: 100vh;
  .abroad-container {
    padding: 60px 15vw 0;
    min-height: calc(100vh - 60px - 267px);
  }
}
</style>
