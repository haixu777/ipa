<template>
  <div class="certification">
    <Header></Header>
    <div class="certification-container flex-center-col">
      <div class="title">国际认证协会（IPA）资质展示</div>
      <div class="content">
        <div class="item" v-for="item in certificationList" :key="item.id">
          <div class="certification-img">
            <img :src="item.img" :alt="item.id + '-img'">
          </div>
          <div class="certification-desc">{{ item.desc }}</div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/web/public/Header'
import Footer from '@/components/web/public/Footer'
export default {
  name: 'certification',
  data () {
    return {
      certificationList: [
        { id: 1, img: 'http://www.ipa.org.cn/uploads/allimg/110628/0Z20R918.jpg', desc: '国际认证协会是经北京市工商行政管理局登记备案的合法认证机构（登记证编号： 91110000660506808D ），完全具备在国内开展相关认证业务的资格。' },
        { id: 2, img: 'http://www.ipa.org.cn/images/zhengshu.jpg', desc: 'IPA专业能力证书获得了美国律师事务所的权威认证。' },
        { id: 3, img: 'http://www.ipa.org.cn/uploads/allimg/110628/0Z20U3N-9.jpg', desc: '国际认证协会被中国生产力学会教育认证专家委员会评为“中国最具权威性国际认证机构”，再次证明国际认证协会作为中国国际认证第一品牌的强大市场影响力和市场竞争力。' },
        { id: 4, img: 'http://www.ipa.org.cn/uploads/allimg/110628/shangbiao.jpg', desc: 'IPA商标注册证书由中华人民共和国国家工商行政管理总局商标局颁发,编号：第12311485号。' },
        { id: 5, img: 'http://www.ipa.org.cn/uploads/allimg/110628/usshangbiao1.jpg', desc: 'IPA商标注册证书由美国专利和商标局颁发' },
        { id: 6, img: 'http://www.ipa.org.cn/uploads/allimg/110628/usshangbiao2.jpg', desc: '国际认证协会商标注册证书由美国专利和商标局颁发' },
        { id: 7, img: 'http://www.ipa.org.cn/uploads/allimg/110628/Britain.jpg', desc: '由英国驻华大使馆出具的《认证证明》' },
        { id: 8, img: 'http://www.ipa.org.cn/uploads/allimg/110628/Germany.jpg', desc: '由德国驻华大使馆出具的《认证证明》' }
      ]
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
.certification {
  min-height: 100vh;
  .certification-container {
    padding: 60px 15vw 0;
    min-height: calc(100vh - 60px - 267px);
    .title {
      display: flex;
      justify-content: center;
      font-size: 24px;
      font-weight: 700;
      margin: 20px 0;
    }
    .content {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      .item {
        width: 50%;
        border-bottom: 1px solid lightgray;
        padding: 20px;
        box-sizing: border-box;
        &:nth-child(odd) {
          border-right: 1px solid lightgray;
        }
        .certification-img {
          display: flex;
          justify-content: center;
          img {
            height: 170px;
          }
        }
        .certification-desc {
          box-sizing: border-box;
          padding: 10px 20px;
        }
      }
    }
  }
}
</style>
