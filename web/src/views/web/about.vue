<template>
  <div class="about">
    <AwHeader style="about-header"></AwHeader>
    <div class="about-banner">
      <img :src="bannerImgUrl" alt="stage">
    </div>
    <div class="about-container">
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
        <IpaTabsPanel name="Q&A">
          <el-collapse v-model="activeName" accordion>
            <el-collapse-item title="一、IPA和国际认证协会的关系是什么？" name="1">
              <div>答：IPA是国际认证协会的简称，是国际认证协会注册的商标。</div>
            </el-collapse-item>
            <el-collapse-item title="二、IPA国际认证协会是什么机构？" name="2">
              <div>答：依据《中华人民共和国境外非政府组织境内活动管理法》规定，IPA国际认证协会是一家合法经营的专业能力测评机构，本机构设立于美国，在中国地区设有常驻代表机构，从事关于专业能力认证的业务，在北京市工商行政管理局进行登记。</div>
            </el-collapse-item>
            <el-collapse-item title="三、IPA国际认证协会的经营范围是什么？" name="3">
              <div>答：在美国犹他州的营业执照中载明的是教育顾问与专业认证。在中国的外国（地区）常驻机构登记证中载明的是从事与隶属外国企业有关的非营利性业务活动。</div>
            </el-collapse-item>
            <el-collapse-item title="四、IPA国际认证协会是否有能力、资质开展专业能力测评？" name="4">
              <div>答：具有。根据国务院办公厅印发了国办发〔2019〕39号文件之规定，第三方机构有权利开展专业能力测验业务，颁发相应的职业技能证书，无需政府机构授权、认可。</div>
            </el-collapse-item>
            <el-collapse-item title="五、IPA国际认证协会与国家汉办/孔子学院是什么关系？" name="5">
              <div>答：没有关系。</div>
            </el-collapse-item>
            <el-collapse-item title="六、IPA国际认证协会与培训机构是什么关系？" name="6">
              <div>答：IPA国际认证协会为培训机构提供教材及测评体系，授权培训机构开展相关的培训活动，在培训机构的学员通过考试后，IPA国际认证协会有义务为学员颁发证书。IPA国际认证协会对培训机构收取认证测评的必要费用，费用在每名学员1000元左右，各地区有一定差异。培训机构应严格遵守IPA国际认证协会的规定开展教学培训活动，各机构均向IPA国际认证协会出具过承诺函，保证不会违规开展活动。</div>
            </el-collapse-item>
            <el-collapse-item title="七、IPA国际认证协会授权的事项、范围是什么？" name="7">
              <div>答：授权培训机构作为汉语教师专业能力测评人才推荐单位，开展上述项目在特定地区的推广工作。授权范围、时间、期限详见授权书。</div>
            </el-collapse-item>
            <el-collapse-item title="八、《国际认证协会资质证明》证明的是什么内容？" name="8">
              <div>答：证明IPA国际认证协会在中国开展相关业务的合法性。IPA国际认证协会初始设立于美国犹他州，该营业执照经过美国国务院认证，再经过中国驻美总领馆认证，才在中国境内才能得到有效认可。在得到上述认可后，IPA国际认证协会向北京市工商管理部门申请了外国（地区）常驻机构登记证，在中国境内取得了合法有效的主体资格，依照登记的经营范围经营相关业务。</div>
            </el-collapse-item>
            <el-collapse-item title="九、《国际注册专业能力证书》由谁颁发？" name="9">
              <div>答：由IPA国际认证协会颁发。并非人社部、教育部颁发。学员需要通过IPA国际认证协会统一组织的考试，才能获发证书。</div>
            </el-collapse-item>
            <el-collapse-item title="十、《国际注册专业能力证书》是否与人社部联合颁发？" name="10">
              <div>答：目前由IPA国际认证协会独自颁发。</div>
            </el-collapse-item>
            <el-collapse-item title="十一、《国际注册专业能力证书》是否受教育部认可？" name="11">
              <div>答：该证书与教育部无关。</div>
            </el-collapse-item>
            <el-collapse-item title="十二、《国际注册专业能力证书》与国家汉办孔子学院颁发的证书是否具有同等效力？" name="12">
              <div>答：双方为独立体系，彼此之间无直接关联。</div>
            </el-collapse-item>
            <el-collapse-item title="十三、《国际注册专业能力证书》是否是全球范围内最高水平的能力认证证书？" name="13">
              <div>答：CCTV2曾经有过类似表述，我方进行了引用。</div>
            </el-collapse-item>
            <el-collapse-item title="十四、《国际注册专业能力证书》是否是国内外教师上岗的重要凭证？" name="14">
              <div>答：是凭证之一，但并非强制性要求，在各地区还有其他从业资格要求，具有重要参考价值。</div>
            </el-collapse-item>
            <el-collapse-item title="十五、《国际注册专业能力证书》是否在162个WTO成员国受到广泛认可？" name="15">
              <div>答：是的，但是并无强制认可的效力。</div>
            </el-collapse-item>
            <el-collapse-item title="十六、《国际注册专业能力证书》是否全球通用，终身有效？" name="16">
              <div>答：是的，引用自CCTV的报道表述“世界范围内唯一被认可的汉语言教师上岗证书”。该证书是终身有效的。</div>
            </el-collapse-item>
          </el-collapse>
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
      bannerImgUrl: require('@/assets/img/banner-about.png'),
      tabList: [
        { text: '国际认证协会', val: 'certification' },
        { text: '主持委员会', val: 'ipaft' },
        { text: '协会理念宗旨', val: 'purpose' },
        { text: '问题答疑', val: 'Q&A' }
      ],
      activeName: '1'
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
  .about-banner {
    padding-top: 60px;
    width: 100%;
    height: 350px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .about_header {
    background-color: rgba(255, 255, 255, .5);
    backdrop-filter: blur(10px);
    //border-bottom: 1px solid #eff0f1;
  }
  .about-container {
    // padding: 90px 15vw 0;
    padding-top: 30px;
    padding-right: 10vw;
    min-height: calc(100vh - 90px - 267px);
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
  .el-collapse-item__header {
    // color: #3370ff;
    font-size: 20px;
    font-weight: 700;
  }
}
</style>
