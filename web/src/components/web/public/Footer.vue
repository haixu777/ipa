<template>
  <div class = "footer_container" :style="footerHeight + 'px'">
    <div class = "footer_content">
      <div class="company-logo">
        <img class="company-logo-icon" :src="require('@/assets/img/index/ipa-logo.png')" alt="ipa">
        <div class="company-cn-name">国际认证协会（IPA）主持委员会</div>
        <div class="company-en-name">INTERNATIONAL CERTIFICATION ASSOCIATION</div>
      </div>
      <div class="company-info-text">
        <p>IPA主持委员会目前拥有“少儿播音与主持、少儿主持与口才、少儿采访与编辑”三大认证方向，从“师资教育、等级认证、赛事活动、专业研学、影视输出、电视栏目”六大服务出发，以“教育为本、构建行业正能量综合平台”为发展宗旨，完善中国少儿素质教育的拼图，培养少儿表达自己的能力，为中小学校、幼儿园、少儿培训机构提供全方位的产品与服务赋能，共建少儿口才领域的全民培养机制。</p>
      </div>
      <div class="company-info-QRcode">
        <!-- <div class="vx-code">
          <img :src="vxQrCodeUrl" alt="qrcode">
          <div>官方微信号</div>
        </div> -->
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
      // vxQrCodeUrl: 'https://aimg8.dlssyht.cn/u/2015338/module/simplepicbackground/2015338/375/749526_1589965710.jpg?x-oss-process=image/resize,m_fixed,w_81,h_81,limit_0',
      gzhQrCodeUrl: require('@/assets/img/qrcode.jpg')
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

/* @media only screen and (max-width: 991px) {
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
} */

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
