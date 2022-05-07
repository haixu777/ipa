<template>
  <div class="contract">
    <Header></Header>
    <div class="contract-container">
      <div class="contract-top">
        <div class="contract-item">
          <img :src="require('@/assets/img/contract-1.jpg')" alt="contract">
        </div>
        <div class="contract-item">
          <img :src="require('@/assets/img/contract-3.jpg')" alt="contract">
        </div>
        <div class="contract-item">
          <img :src="require('@/assets/img/contract-2.jpg')" alt="contract">
        </div>
      </div>
      <div class="contract-bottom">
        <div class="contract-title">国际认证协会（IPA）主持委员会2022年认证费用标准</div>
        <div class="contract-content">
          <div class="contract-table">
            <table border="0">
              <tr>
                <th>科目</th>
                <th>级别</th>
                <th>认证费（元）</th>
              </tr>
              <tr>
                <td rowspan="4">国际注册少儿播音与主持</td>
                <td>初级</td>
                <td>780</td>
              </tr>
              <tr>
                <td>中级</td>
                <td>880</td>
              </tr>
              <tr>
                <td>高级</td>
                <td>980</td>
              </tr>
              <tr>
                <td>专业</td>
                <td>2480</td>
              </tr>
              <tr>
                <td colspan="3"></td>
              </tr>
              <tr>
                <td rowspan="4">国际注册少儿主持与口才</td>
                <td>初级</td>
                <td>780</td>
              </tr>
              <tr>
                <td>中级</td>
                <td>880</td>
              </tr>
              <tr>
                <td>高级</td>
                <td>980</td>
              </tr>
              <tr>
                <td>专业</td>
                <td>2480</td>
              </tr>
              <tr>
                <td colspan="3"></td>
              </tr>
              <tr>
                <td rowspan="4">国际注册少儿采访与编辑</td>
                <td>初级</td>
                <td>780</td>
              </tr>
              <tr>
                <td>中级</td>
                <td>880</td>
              </tr>
              <tr>
                <td>高级</td>
                <td>980</td>
              </tr>
              <tr>
                <td>专业</td>
                <td>2480</td>
              </tr>
            </table>
            <span class="desc">上述价格含考试报名、证书制作</span>
          </div>
          <div class="contract-table">
            <table border="0">
              <tr>
                <th>科目</th>
                <th>级别</th>
                <th>认证费（元）</th>
              </tr>
              <tr>
                <td rowspan="4">国际注册少儿播音与主持培训师</td>
                <td>初级</td>
                <td>5980</td>
              </tr>
              <tr>
                <td>中级</td>
                <td>6980</td>
              </tr>
              <tr>
                <td>高级</td>
                <td>7980</td>
              </tr>
              <tr>
                <td>专业</td>
                <td>15800</td>
              </tr>
              <tr>
                <td colspan="3"></td>
              </tr>
              <tr>
                <td rowspan="4">国际注册少儿主持与口才培训师</td>
                <td>初级</td>
                <td>5980</td>
              </tr>
              <tr>
                <td>中级</td>
                <td>6980</td>
              </tr>
              <tr>
                <td>高级</td>
                <td>7980</td>
              </tr>
              <tr>
                <td>专业</td>
                <td>15800</td>
              </tr>
              <tr>
                <td colspan="3"></td>
              </tr>
              <tr>
                <td rowspan="4">国际注册少儿采访与编辑培训师</td>
                <td>初级</td>
                <td>5980</td>
              </tr>
              <tr>
                <td>中级</td>
                <td>6980</td>
              </tr>
              <tr>
                <td>高级</td>
                <td>7980</td>
              </tr>
              <tr>
                <td>专业</td>
                <td>15800</td>
              </tr>
            </table>
            <span class="desc">上述价格包含师资班培训、考试报名、证书制作</span>
          </div>
        </div>
      </div>
      <div class="contract-stamp">
        <div class="stamp-img"></div>
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
.contract {
  min-height: 100vh;
  .contract-container {
    padding: 60px 15vw 0;
    min-height: calc(100vh - 60px - 267px);
    .contract-top {
      display: flex;
      padding-top: 20px;
      .contract-item {
        flex: 1;
        padding: 10px;
        > img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .contract-bottom {
      .contract-title {
        text-align: center;
        font-size: 24px;
        font-weight: 700;
        margin: 20px 0;
      }
      .contract-content {
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
            }
          }
        }
      }
    }
    .contract-stamp {
      display: flex;
      justify-content: flex-end;
      .stamp-img {
        width: 505px;
        height: 185px;
        background: url('../../assets/img/stamp.png') no-repeat 100% 100%;
        background-size: 505px 185px;
      }
      margin-bottom: 10px;
    }
  }
}
</style>
