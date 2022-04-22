<template>
  <div class="about">
    <AwHeader style="about-header"></AwHeader>
    <div class="about-container">
      <div class="about-banner">
        <!-- <img :src="bannerImgUrl" alt="stage"> -->
        <IpaTabs :tabList="tabList">
          <IpaTabsPanel name="certification">
            <div class="about-certification-wrap">
              test
            </div>
          </IpaTabsPanel>
          <IpaTabsPanel name="ipaft">222</IpaTabsPanel>
          <IpaTabsPanel name="purpose">333</IpaTabsPanel>
        </IpaTabs>
      </div>
    </div>
    <AwFooter></AwFooter>
  </div>
</template>

<script>
import AwHeader from '../../components/web/public/Header'
import AwFooter from '../../components/web/public/Footer'
import IpaTabs from '../../components/web/ipaTabs'
import IpaTabsPanel from '../../components/web/ipaTabsPanel'
export default {
  name: 'about',
  data () {
    return {
      bannerImgUrl: require('@/assets/img/about-banner.jpg'),
      tabList: [
        { text: '国际认证协会', val: 'certification' },
        { text: '主持委员会', val: 'ipaft' },
        { text: '协会理念宗旨', val: 'purpose' }
      ]
    }
  },
  components: {
    AwHeader,
    AwFooter,
    IpaTabs,
    IpaTabsPanel
  },
  mounted () {
    this.$store.commit('setHeaderLogo', {
      headerLogoShow: false
    })
    this.$store.commit('setShadowActive', {
      headerShadowActive: false
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
.about {
  .about_header {
    background-color: rgba(255, 255, 255, .5);
    backdrop-filter: blur(10px);
    //border-bottom: 1px solid #eff0f1;
  }
  .about-container {
    padding: 60px 15vw 0;
    .about-banner {
      width: 100%;
      height: 120px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .about-certification-wrap {
      display: flex;
    }
  }
}
</style>
