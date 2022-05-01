<template>
  <div class="contact-container">
    <Header></Header>
    <div class="contact-wrapper">
      <div class="contact-info">
        <div class="contact-info-left">
          <div class="contact-item">
            <div class="contact-item-title">
              <span class="contact-icon icon-address"></span>
              地址
            </div>
            <div class="contact-item-content">
              <p style="margin-top:30px;">海南省海口市XXXXX</p>
              <p>XXX大厦</p>
            </div>
          </div>
          <div class="contact-item">
            <div class="contact-item-title">
              <span class="contact-icon icon-email"></span>
              电子邮件
            </div>
            <div class="contact-item-content">
              <p class="important">xxxxxxxx@163.com</p>
              <p>请将您的问题反馈给我们</p>
            </div>
          </div>
          <div class="contact-item">
            <div class="contact-item-title">
              <span class="contact-icon icon-phone"></span>
              全国热线
            </div>
            <div class="contact-item-content">
              <p class="important">xxxx-xxxx-xxxx</p>
              <p>欢迎与我们进行沟通</p>
            </div>
          </div>
        </div>
        <div class="contact-info-right">
          <div class="contact-qrcode">
            <img src="https://aimg8.dlssyht.cn/u/2015338/module/simplepicbackground/2015338/375/749526_1589965710.jpg?x-oss-process=image/resize,m_fixed,w_81,h_81,limit_0" alt="vx">
          </div>
          官方微信号
        </div>
      </div>
      <div class="contact-map">
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '../../components/web/public/Header'
import Footer from '../../components/web/public/Footer'
export default {
  data () {
    return {
    }
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
  .contact-container {
    min-height: 100vh;
    .contact-wrapper {
      padding: 60px 15vw 0;
      min-height: calc(100vh - 60px - 267px);
      .contact-info {
        padding-top: 60px;
        display: flex;
        .contact-info-right {
          width: 20vh;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
        }
        .contact-info-left {
          flex: 1;
          display: flex;
          .contact-item {
            flex: 1;
            .contact-item-title {
              position: relative;
              font-size: 24px;
              font-weight: 700;
              .contact-icon {
                position: absolute;
                top: -5px;
                left: -60px;
                width: 40px;
                height: 40px;
                &.icon-address {
                  background: url('../../assets/img/icon-address.svg') no-repeat 100% 100%;
                  background-size: 40px 40px;
                }
                &.icon-email {
                  background: url('../../assets/img/icon-email.svg') no-repeat 100% 100%;
                  background-size: 40px 40px;
                }
                &.icon-phone {
                  background: url('../../assets/img/icon-phone.svg') no-repeat 100% 100%;
                  background-size: 40px 40px;
                }
              }
            }
            .important {
              font-size: 24px;
              font-weight: 700;
            }
          }
        }
      }
      .contact-map {
        width: 100%;
        height: 350px;
        background: url('../../assets/img/map.png') no-repeat 100% 100%;
        background-size: 100% 350px;
        background-position: center center;
      }
    }
  }
</style>
