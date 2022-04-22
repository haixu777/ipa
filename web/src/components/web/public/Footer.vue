<template>
  <div class = "footer_container" :style="footerHeight + 'px'">
    <div class = "footer_content">
      <div class="company-logo">
        <img class="company-logo-icon" :src="require('@/assets/img/index/ipa-logo.png')" alt="ipa">
        <div class="company-cn-name">国际认证协会（IPAFT）主持委员会</div>
        <div class="company-en-name">INTERNATIONAL CERTIFICATION ASSOCIATION</div>
      </div>
      <div class="company-info-text">
        <p>国际认证协会主持委员会是首个由国际认证协会（IPA）授权的少儿表演认证项目的委员会。委员会在文化发展的大环境下，扎根于行业，服务于艺术培训机构。围绕在国家政府关于少儿艺术行业发展的总体要求，围绕政府大力推广少儿影视表演艺术的要求下，进行创造性地开展工作。切实做好行业规划、行业促进、行业服务及认证考核证书颁发</p>
      </div>
      <div class="company-info-QRcode">
        <div class="vx-code">
          <img :src="vxQrCodeUrl" alt="qrcode">
          <div>官方微信号</div>
        </div>
        <div class="gzh-code">
          <img :src="gzhQrCodeUrl" alt="qrcode">
          <div>官方公众号</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      footerHeight: '',
      curWidth: '',
      vxQrCodeUrl: 'https://aimg8.dlssyht.cn/u/2015338/module/simplepicbackground/2015338/375/749526_1589965710.jpg?x-oss-process=image/resize,m_fixed,w_81,h_81,limit_0',
      gzhQrCodeUrl: 'https://aimg8.dlssyht.cn/u/2015338/module/simplepicbackground/2015338/375/749545_1589965760.jpg?x-oss-process=image/resize,m_fixed,w_85,h_83,limit_0'
    }
  },
  methods: {
  },
  created () {
    // 页面创建时执行一次getHeight进行赋值，顺道绑定resize事件
    // window.addEventListener('resize', this.setFooterHeight)
    // this.setFooterHeight()
  }
}
</script>

<style lang = "less" scoped>
*{
  margin: 0;
  padding: 0;
}
h2{
  font-size: 100%;
  font-weight: 400;
  font-variant: normal;
}
.footer_container {
  width: 100%;
  background: #1f2329;
  padding: 60px 0;
}

.footer_content {
  max-width: 1440px;
  color: #fff;
  margin: 0 auto;
  display: flex;
  > div {
    flex: 1;
  }
  .company-logo {
    /* width: 400px; */
    /* padding: 0 100px; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-right: 2px solid #909399;
    .company-logo-icon {
      width: 120px;
      height: 110px;
    }
    .company-en-name {
      font-size: 10px;
    }
  }
  .company-info-text {
    padding: 0 100px;
    font-size: 15px;
    display: flex;
    align-items: center;
  }
  .company-info-QRcode {
    display: flex;
    justify-content: space-around;
    > div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-content: center;
      > div {
        text-align: center;
      }
    }
    img {
      width: 85px;
      height: 85px;
    }
  }
}

@media only screen and (max-width: 991px) {
  .footer_content {
    flex-direction: column;

    .footer-content-column {
      text-align: center;
      margin: 0 auto 0;

      h2 {
        text-align: center;
      }
      padding-left: 0;
    }
    .focus_us div:last-of-type > span{
      margin-right: 0;
    }
    .media{
      justify-content: center;
    }
    .logo-container{
      justify-content: center;
      text-align: left;
    }
  }
}

.qr_popover {
  width: 100%;
  text-align: center;

  img {
    width: 130px;
    height: 130px;
    margin-bottom: 10px;
  }
}
</style>
