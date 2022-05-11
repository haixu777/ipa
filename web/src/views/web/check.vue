<template>
  <div class="authentication-mine">
    <!-- <Header></Header> -->
    <div class="authentication-container">
      <!-- <div class="banner-wrapper">
        <Banner :imgList="bannerList"></Banner>
      </div> -->
      <div class="authentic">
        <div class="authentic-left">
          <div class="authentic-left-title">国际认证协会证书查询</div>
          <div class="authentic-input">
            <el-input type="text" v-model="id_no" placeholder="请输入身份证号"></el-input>
          </div>
          <div class="authentic-input">
            <el-input type="text" v-model="major" placeholder="请输入证书编号"></el-input>
          </div>
          <div class="search-btn">
            <el-button type="primary" @click="handleCertificateSearch">查询</el-button>
          </div>
        </div>
        <div class="authentic-right">
          <div class="authentic-logo">
            <img src="http://www.ipa.org.cn/images/cx.png" alt="logo">
          </div>
          <div class="authentic-right-info">
            <div class="authentic-right-title">合作机构验证</div>
            <div class="authentic-right-content">
              <div class="authentic-right-desc">
                <p>如果与您洽谈合作的机构在本系统中查询不到，请与我们联系,共同维护您的合法权益。</p>
                <p>咨询电话：010-62655711</p>
              </div>
              <div class="authentic-right-search">
                <div class="authentic-radio">
                  <el-radio-group v-model="radio">
                    <el-radio :label="'qymc'">机构名称</el-radio>
                    <el-radio :label="'frdb'">首席代表</el-radio>
                    <el-radio :label="'bm'">验证编码</el-radio>
                  </el-radio-group>
                </div>
                <div class="authentic-input">
                  <el-input type="text" v-model="keyword" placeholder="请输入内容"></el-input>
                </div>
              <div class="search-btn">
                <el-button type="primary" @click="handleSubmit">提交</el-button>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <Footer></Footer> -->
  </div>
</template>

<script>
// import Header from '@/components/web/public/Header'
// import Footer from '@/components/web/public/Footer'
// import Banner from '@/components/web/Banner'
export default {
  name: 'authentication',
  data () {
    return {
      id_no: '',
      major: '',
      radio: 'qymc',
      keyword: '',
      bannerList: [
        {
          id: 2,
          imgUrl: require('@/assets/img/certification-banner.png')
        }
      ]
    }
  },
  components: {
    // Header,
    // Footer,
    // Banner
  },
  methods: {
    handleCertificateSearch () {
      const idCardReg = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/
      if (!idCardReg.test(this.id_no)) {
        this.$message.error('身份证号码输入有误，请重新输入')
      } else if (!this.major) {
        this.$message.error('请输入证书编号')
      } else {
        // document.getElementById('msgTxt').innerHTML = `
        //   <form id="hiddenlink" action="http://www.ipa.org.cn/Query/Certificate.aspx?id_no=${this.id_no}&major=${this.major}" target="_blank">
        //     <input type="hidden" name="id_no" value="${this.id_no}">
        //     <input type="hidden" name="major" value="${this.major}">
        //   </form>
        // `
        // const form = document.getElementById('hiddenlink')
        // form.submit()
        // const win = window.open('')
        // setTimeout(() => {
        //   window.opener = null
        //   win.location = `http://www.ipa.org.cn/Query/Certificate.aspx?id_no=${this.id_no}&major=${this.major}`
        // }, 1000)
        window.open(`http://www.ipa.org.cn/Query/Certificate.aspx?id_no=${this.id_no}&major=${this.major}`, '_blank')
        // const domA = document.createElement('a')
        // domA.setAttribute('href', `http://www.ipa.org.cn/Query/Certificate.aspx?id_no=${this.id_no}&major=${this.major}`)
        // domA.setAttribute('target', '_blank')
        // domA.click()
      }
    },
    handleSubmit () {
      if (!this.keyword) {
        this.$message.error('请输入查询内容')
      } else {
        window.open(`http://www.ipa.org.cn/Query/Partners.aspx?type=${this.radio}&keyword=${this.keyword}`)
        // document.getElementById('msgTxt').innerHTML = `
        //   <form id="hiddenlink" action="http://www.ipa.org.cn/Query/Partners.aspx?type=${this.radio}&keyword=${this.keyword}" target="_blank">
        //     <input type="hidden" name="type" value="${this.radio}">
        //     <input type="hidden" name="keyword" value="${this.keyword}">
        //   </form>
        // `
        // const form = document.getElementById('hiddenlink')
        // form.submit()
        // var s=document.getElementById("hiddenlink");
        // s.submit();
        // const win = window.open('http://www.ipa.org.cn')
        // setTimeout(() => {
        //   window.opener = null
        //   win.location = `http://www.ipa.org.cn/Query/Partners.aspx?type=${this.radio}&keyword=${this.keyword}`
        // }, 1000)
        // const domA = document.createElement('a')
        // domA.setAttribute('href', `http://www.ipa.org.cn/Query/Partners.aspx?type=${this.radio}&keyword=${this.keyword}`)
        // domA.setAttribute('target', '_blank')
        // domA.click()
      }
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
  }
}
</script>

<style lang="less" scope>
.authentication-mine {
  // min-height: 100vh;
  .authentication-container {
    position: relative;
    padding: 60px 0;
    // min-height: calc(100vh - 60px - 267px);
    .el-carousel__container {
      height: 160px;
      .el-carousel__item {
        border-radius: 10px;
      }
      .img_con :after {
        background: unset;
      }
    }
    .element-img {
      background: #fff;
      object-fit: initial;
    }
    .authentic {
      display: flex;
      padding: 20px;
      .authentic-left {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 250px;
        border-right: 1px dashed #ccc;
        padding: 0 30px;
        .authentic-left-title {
          font-size: 20px;
          font-weight: 700;
        }
      }
      .authentic-right {
        flex: 1;
        display: flex;
        .authentic-logo {
          width: 250px;
          padding: 0 20px;
        }
        .authentic-right-info {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          .authentic-right-title {
            font-size: 20px;
            font-weight: 700;
          }
          .authentic-right-content {
            display: flex;
            .authentic-right-desc {
              // margin-top: 20px;
              width: 350px;
              color: #999;
              padding: 20px;
            }
            .authentic-right-search {
              margin-top: 20px;
            }
          }
        }
      }
      .authentic-input {
        width: 100%;
        margin: 10px 0;
        .el-input {
          width: 100%;
        }
      }
      .search-btn {
        width: 100%;
        button {
          width: 100%;
        }
      }
    }
  }
}
</style>
