<template>
  <div class="contact-container">
    <Header></Header>
    <div class="contact-wrapper">
      <div class="contact-news">
        <div class="contact-news-img flex-center">
          <img :src="require('@/assets/img/home/child-logo.png')" alt="news">
        </div>
        <p>IPA主持委员会面向全国招募省级代理、市级代理、区域代理及考点单位。部分省、市、区域尚有空缺。</p>
        <p>有意向的伙伴，可以挑选对应的科目合作加盟。</p>
        <div class="contact-news-img flex-center">
          <img :src="require('@/assets/img/contact/contact-news-1.png')" alt="news">
        </div>
        <p>合作联系   孙老师  18078941345</p>
      </div>
      <div class="contact-table-content">
        <div class="contact-table">
          <table border="0">
            <tr>
              <th>合作级别</th>
              <th>数量</th>
              <th>授权书/授权牌</th>
              <th>学员考试</th>
              <th>学生教材</th>
              <th>师资班</th>
            </tr>
            <tr>
              <td>省级代理</td>
              <td>每省1个</td>
              <td>总部统一制作，每个考点1000元工本费+服务费</td>
              <td>自行组织</td>
              <td>60元/本，统一向总部购买</td>
              <td>总部统一组织</td>
            </tr>
            <tr>
              <td>市级代理</td>
              <td>每市1个</td>
              <td>总部统一制作，每个考点1000元工本费+服务费</td>
              <td>自行组织</td>
              <td>60元/本，统一向总部购买</td>
              <td>总部统一组织</td>
            </tr>
            <tr>
              <td>考务中心</td>
              <td>若干</td>
              <td>每个考点1000元工本费+服务费</td>
              <td>自行组织</td>
              <td>60元/本，统一向总部购买</td>
              <td>总部统一组织</td>
            </tr>
          </table>
        </div>
      </div>
      <div class="contact-map" id="map"></div>
      <div class="contact-info">
        <div class="contact-info-left">
          <div class="contact-item">
            <div class="contact-item-title">
              <span class="contact-icon icon-address"></span>
              地址
            </div>
            <div class="contact-item-content">
              <p style="margin-top:30px;">海南省海口市</p>
              <p>海航互联网大厦A座</p>
            </div>
          </div>
          <!-- <div class="contact-item">
            <div class="contact-item-title">
              <span class="contact-icon icon-email"></span>
              电子邮件
            </div>
            <div class="contact-item-content">
              <p class="important">xxxxxxxx@163.com</p>
              <p>请将您的问题反馈给我们</p>
            </div>
          </div> -->
          <div class="contact-item">
            <div class="contact-item-title">
              <span class="contact-icon icon-phone"></span>
              全国热线
            </div>
            <div class="contact-item-content">
              <p class="important">18078941345</p>
              <p>欢迎与我们进行沟通</p>
            </div>
          </div>
        </div>
        <div class="contact-info-right">
          <div class="contact-qrcode">
            <img :src="require('@/assets/img/qrcode.jpg')" alt="vx" width="100" height="100">
          </div>
          官方微信号
        </div>
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
  methods: {
    initMap () {
      const map = new window.AMap.Map('map', {
        zoom: 15,
        center: [110.340238, 20.018194]
      })
      var marker = new window.AMap.Marker({
        position: new window.AMap.LngLat(110.340238, 20.018194),
        offset: new window.AMap.Pixel(-10, -10),
        icon: 'https://webapi.amap.com/theme/v1.3/markers/n/mark_rs.png', // 添加 Icon 图标 URL
        title: '海航互联网金融大厦'
      })
      map.add(marker)
    }
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
    this.initMap()
  }
}
</script>

<style lang="less" scope>
  .contact-container {
    min-height: 100vh;
    .contact-wrapper {
      padding: 60px 15vw 0;
      min-height: calc(100vh - 60px - 267px);
      .contact-news {
        width: 40vw;
        margin: 0 auto;
        p {
          text-indent: 2rem;
        }
        .contact-news-img {
          width: 100%;
          img {
            width: 100%;
          }
        }
      }
      .contact-info {
        padding-top: 60px;
        display: flex;
        .contact-info-right {
          width: 20vh;
          display: flex;
          flex-direction: column;
          align-items: center;
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
        margin-top: 50px;
        width: 100%;
        height: 30vh;
      }
    }
    .contact-table-content {
      display: flex;
      > div {
        flex: 1;
        &:nth-child(2) {
          flex: 1.3;
          padding-left: 50px;
        }
        .desc {
          display: inline-block;
          font-size: 18px;
          font-weight: 700;
          margin: 20px 0;
        }
        table {
          width: 100%;
          border-spacing: 0;
          border-collapse: collapse;
          tr {
            height: 30px;
            &:first-child {
              background: lightsalmon;
            }
          }
          th,td {
            text-align: center;
            border: 1px solid #000;
            min-height: 60px;
            padding: 10px 0;
          }
        }
      }
    }
  }
</style>
