<template>
  <div class="about">
    <AwHeader style="about-header"></AwHeader>
    <div class="about-container">
      <div class="about-banner">
        <!-- <img :src="bannerImgUrl" alt="stage"> -->
      </div>
      <IpaTabs :tabList="tabList">
        <IpaTabsPanel name="certification">
          <div class="about-certification-wrap">
            <div class="about-certification-wrap-left">
              <img :src="require('@/assets/img/index/ipa-logo.png')" alt="ipaft-logo" class="ipa-logo">
            </div>
            <div class="about-certification-wrap-right">
              <div class="about-title">协会简介：</div>
              <div class="about-content">
                <div class="about-content-item">
                  <div class="about-item-label">&nbsp;&nbsp;&nbsp;全&nbsp;&nbsp;&nbsp;&nbsp;称：</div>
                  <div class="about-item-text">国际认证协会（International Profession Certification Association）</div>
                </div>
                <div class="about-content-item">
                  <div class="about-item-label">&nbsp;&nbsp;&nbsp;性&nbsp;&nbsp;&nbsp;&nbsp;质：</div>
                  <div class="about-item-text">致力于开展职业教育与考核认证的专业机构</div>
                </div>
                <div class="about-content-item">
                  <div class="about-item-label">&nbsp;&nbsp;&nbsp;总&nbsp;&nbsp;&nbsp;&nbsp;部：</div>
                  <div class="about-item-text">美国</div>
                </div>
                <div class="about-content-item">
                  <div class="about-item-label">中国区总部：</div>
                  <div class="about-item-text">北京</div>
                </div>
                <div class="about-content-item">
                  <div class="about-item-label">主持委员会：</div>
                  <div class="about-item-text">海南 海口</div>
                </div>
                <div class="about-content-item">
                  <div class="about-item-label">&nbsp;&nbsp;&nbsp;网&nbsp;&nbsp;&nbsp;&nbsp;址：</div>
                  <div class="about-item-text">www.ipa.org.cn</div>
                </div>
              </div>
              <div class="about-title">国际品牌：</div>
              <div class="about-content">
                <p>国际认证协会International Profession Certification Association（简称IPA）是资质齐全的驻京国际认证机构。是中国地区唯一经美国国务院签印并由中国驻美国大使馆认证认可的国际认证协会。协会得到了多个国家的经营许可批文，是国内最具中国官方权威认可的国际认证协会。 IPA得到了世界各国政府机构和市场的广泛认可和欢迎。在中国，IPA获得国家质量监督检验检疫总局的权威认证认可，是北京市公安局出入境管理处与北京市工商行政管理局登记备案的合法国际认证机构。北京市工商行政管理局登记备案（统一社会信用代码：91110000660506808D），北京市公安局出入境管理处登记备案（编号：B2400017429）。</p>
                <p>IPA国际认证协会是国内唯一具有认证资质的国际性协会，其认证资质受到中国法律及签发国法律的共同保护。</p>
                <p>在中国经济不断发展，文化发展繁荣的环境下，协会将紧跟时代发展的步伐，牢记协会的使命，发挥协会属性，加强协会在认证行业中的地位和作用，充分发挥自身优势，增加对全社会的辐射力和影响力，为促进认证行业发展做出应有的贡献，发挥协会桥梁纽带的作用。为行业检验人才，了解行业人士需求，反映行业呼声，切实引导规范行业健康发展！</p>
              </div>
            </div>
          </div>
        </IpaTabsPanel>
        <IpaTabsPanel name="ipaft">
          <div class="ipaft-wrapper">
            <div class="ipa-logo flex-center">
              <div class="ipa-logo-icon"></div>
              <div class="ipa-logo-text">
                <div>国际认证协会（IPA）主持委员会</div>
                <div>INTERNATIONAL PROFESSION ASSOCIATION</div>
              </div>
            </div>
            <!-- <div class="about-title">国际认证协会（IPA）主持委员会</div> -->
            <div class="about-content">
              <p>国际认证协会International Profession Certification Association （简称IPA）是资质齐全的驻京国际认证机构。其在北京市工商行政管理局备案号为9U10000660506808D。旗下的国际认证协会（IPA）主持委员会全国总部位于祖国美丽的海南岛海口市，是中娱传媒文化产业集团为海南自由贸港建设引进的标志性的文化品牌。也是继模特委员会、影视委员会后所引进的第三个王牌项目。旨在充份利用国际教育资源，结合本土特色，打造现代化的教育理念，培养全方位的少年英才。</p>
              <p>委员会目前拥有“少儿播音与主持、少儿主持与口才、少儿采访与编辑”三大认证方向，从“师资教育、等级认证、赛事活动、专业研学、影视输出、电视栏目”六大服务出发，以“教育为本、构建行业正能量综合平台”为发展宗旨，完善中国少儿素质教育的拼图，培养少儿表达自己的能力，为中小学校、幼儿园、少儿培训机构提供全方位的产品与服务赋能，共建少儿口才领域的全民培养机制。</p>
            </div>
          </div>
        </IpaTabsPanel>
        <IpaTabsPanel name="purpose">
          <div class="about-purpose-wrapper">
            <div class="purpose-title">协会理念：</div>
            <div class="purpose-desc">以文化为本的沉浸式教育</div>
            <div class="purpose-logo">
              <img src="https://aimg8.dlssyht.cn/u/2015338/module/simplepicbackground/2015338/279/556442_1588833306.png?x-oss-process=image/resize,m_fixed,w_205,h_200,limit_0" alt="purpose-1">
              <img src="https://aimg8.dlssyht.cn/u/2015338/module/simplepicbackground/2015338/279/556452_1588833329.png?x-oss-process=image/resize,m_fixed,w_205,h_200,limit_0" alt="purpose-2">
              <img src="https://aimg8.dlssyht.cn/u/2015338/module/simplepicbackground/2015338/279/556480_1588833369.png?x-oss-process=image/resize,m_fixed,w_205,h_200,limit_0" alt="purpose-3">
            </div>
            <div class="purpose-title">协会宗旨：</div>
            <div class="purpose-content">
              <div>以建立完善的行业教学体系为目标</div>
              <div>制定符合行业标准考核内容</div>
              <div>构建师资进修交流的平台</div>
              <div>为合作伙伴提供系统的项目运营方案</div>
              <div>为学员提供最优质认证体系和搭建竞技</div>
              <div>交流学习的全国乃至国际性大平台</div>
            </div>
          </div>
        </IpaTabsPanel>
      </IpaTabs>
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
.about {
  min-height: 100vh;
  color: #555;
  .about_header {
    background-color: rgba(255, 255, 255, .5);
    backdrop-filter: blur(10px);
    //border-bottom: 1px solid #eff0f1;
  }
  .about-container {
    padding: 60px 15vw 0;
    min-height: calc(100vh - 60px - 267px);
    .about-banner {
      width: 100%;
      height: 120px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .ipa-logo {
      .ipa-logo-icon {
        width: 120px;
        height: 110px;
        background: url('../../assets/img/index/ipa-logo.png') no-repeat 100% 100%;
        background-size: 120px 110px;
      }
      .ipa-logo-text {
        margin-left: 20px;
        > div {
          &:nth-child(1) {
            font-size: 28px;
            font-weight: 700;
          }
          &:nth-child(2) {
            font-size: 18px;
            font-weight: 700;
          }
        }
      }
    }
    .about-title {
      font-size: 22px;
      color: #0B5394;
      font-weight: 700;
      margin: 20px 0;
      margin-top: 0;
    }
    .about-content {
      p {
        font-size: 14px;
        line-height: 1.7;
        text-indent: 2rem;
      }
      .about-content-item {
        display: flex;
        font-size: 12px;
        margin-bottom: 5px;
        .about-item-label {
          width: 80px;
        }
        .about-item-text {
          flex: 1;
        }
      }
    }
    .about-certification-wrap {
      display: flex;
      .about-certification-wrap-left {
        .ipa-logo {
          width: 322px;
          height: 300px;
        }
      }
      .about-certification-wrap-right {
        flex: 1;
        margin-left: 20px;
      }
    }
    .about-purpose-wrapper {
      > div {
        margin-bottom: 10px;
      }
      .purpose-title {
        font-size: 30px;
        color: rgb(11, 83, 148);
        font-weight: 700;
      }
      .purpose-desc {
        font-size: 20px;
        margin-bottom: 30px;
      }
      .purpose-logo {
        display: flex;
        justify-content: space-around;
        img {
          width: 200px;
          height: 200px;
          border-radius: 100%;
        }
      }
      .purpose-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        > div {
          margin-bottom: 10px;
        }
      }
    }
  }
}
</style>
