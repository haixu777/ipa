<template>
  <div class="authentication">
    <Header></Header>
    <div class="authentic-wrapper">
      <IpaTabs :tabList="tabList">
        <IpaTabsPanel name="child">
          <div class="authentic-container teacher-container">
            <p>针对学员的科目主要有小播音员、小主持人/演说家、小记者三个方向，证书为双语版国际注册专业能力证书，以及国际认证协会监督管理委员会出具的资质证明。</p>
            <p>每个认证科目均分为初级、中级、高级、专业级四个档次。</p>
            <div class="img-wrapper">
              <img :src="require('@/assets/img/home/child-logo.png')" alt="child">
              <img src="https://mmbiz.qpic.cn/mmbiz_jpg/niaoQbzRThH7BXrwN6CWaXxDONROuYWhsZETRDeiapZ6LOdN1dy8Y6V2hC1icIIQWX3IFicXT4icyYwgcotTlicYr6RA/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1" alt="news">
              <img src="https://mmbiz.qpic.cn/mmbiz_png/niaoQbzRThH7BXrwN6CWaXxDONROuYWhsW4HT6Io3JeN3Q9X67TneK9tV7khj8mAlcibiaqeibwzzDb3NkytbNhEnw/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1" alt="news">
              <img src="https://mmbiz.qpic.cn/mmbiz_jpg/niaoQbzRThH7BXrwN6CWaXxDONROuYWhsBEsoPl5VNDTkhicWeOdSeDuhB6jcJgNCAPo6lZ9VR06HWAAfTKUFeUA/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1" alt="news">
              <div>证书封面</div>
              <img src="https://mmbiz.qpic.cn/mmbiz_jpg/niaoQbzRThH7BXrwN6CWaXxDONROuYWhsNF5M1AibEM05Q1xKP3DHF5Xya8xGoS1ygQp4hy0KVQmfPc5YYyk8d0A/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1" alt="news">
              <img src="https://mmbiz.qpic.cn/mmbiz_jpg/niaoQbzRThH7BXrwN6CWaXxDONROuYWhsC1EqUFmTY0RVXsgdWwJgsWXUekVfKwQm751syH3Vrck5ycQmHOzVZg/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1" alt="news">
              <img src="https://mmbiz.qpic.cn/mmbiz_jpg/niaoQbzRThH7BXrwN6CWaXxDONROuYWhs74Tgz52W3NgyUEYz0CO6SEnol5ibWONpUESBRHdM3Ve58EFnDqjL6IA/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1" alt="news">
              <div>证书内页</div>
              <img src="https://mmbiz.qpic.cn/mmbiz_jpg/niaoQbzRThH7BXrwN6CWaXxDONROuYWhsyJIF909xDLSstDII71C0giciaECzUHJjXLJUiahzD6zib7oib1dxZ0TicB2w/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1" alt="news">
              <img src="https://mmbiz.qpic.cn/mmbiz_jpg/niaoQbzRThH7BXrwN6CWaXxDONROuYWhskJxny2Eu0weQUTk7qrV8gT06iaMPt1Batzbib0LzxKZOJFpq8hwMacfQ/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1" alt="news">
              <div>资质证明</div>
            </div>
            <!-- <div class="authentic-top">
              <div class="authentic-item">
                <img :src="require('@/assets/img/auth/auth-child-4.png')" alt="auth">
              </div>
              <div class="authentic-item">
                <img :src="require('@/assets/img/auth/auth-child-5.png')" alt="auth">
              </div>
              <div class="authentic-item">
                <img :src="require('@/assets/img/auth/auth-child-6.png')" alt="auth">
              </div>
              <div class="authentic-item">
                <img :src="require('@/assets/img/auth/auth-child-1.png')" alt="auth">
              </div>
              <div class="authentic-item">
                <img :src="require('@/assets/img/auth/auth-child-2.png')" alt="auth">
              </div>
              <div class="authentic-item">
                <img :src="require('@/assets/img/auth/auth-child-3.png')" alt="auth">
              </div>
            </div>
            <div class="authentic-bottom">
              <br>
              <div class="authentic-content">
                <div class="authentic-table">
                  <table border="0">
                    <tr>
                      <th></th>
                      <th>科目</th>
                      <th>级别</th>
                    </tr>
                    <tr>
                      <td rowspan="4">小播音员</td>
                      <td rowspan="4">国际注册少儿播音与主持</td>
                      <td>初级</td>
                    </tr>
                    <tr>
                      <td>中级</td>
                    </tr>
                    <tr>
                      <td>高级</td>
                    </tr>
                    <tr>
                      <td>专业级</td>
                    </tr>
                    <tr>
                      <td rowspan="4">小主持人</td>
                      <td rowspan="4">国际注册少儿主持与口才</td>
                      <td>初级</td>
                    </tr>
                    <tr>
                      <td>中级</td>
                    </tr>
                    <tr>
                      <td>高级</td>
                    </tr>
                    <tr>
                      <td>专业级</td>
                    </tr>
                    <tr>
                      <td rowspan="4">小记者</td>
                      <td rowspan="4">国际注册少儿采访与编辑</td>
                      <td>初级</td>
                    </tr>
                    <tr>
                      <td>中级</td>
                    </tr>
                    <tr>
                      <td>高级</td>
                    </tr>
                    <tr>
                      <td>专业级</td>
                    </tr>
                  </table>
                </div>
                <div class="authentic-table">
                  <table border="0">
                    <tr>
                      <th>级别</th>
                      <th>备注</th>
                    </tr>
                    <tr>
                      <td>初级</td>
                      <td>具备国语普通话对应表达能力。</td>
                    </tr>
                    <tr>
                      <td>中级</td>
                      <td>具备普通话、英语对应表达能力。</td>
                    </tr>
                    <tr>
                      <td>高级</td>
                      <td>具备普通话、英语、第二外语的对应表达能力。</td>
                    </tr>
                    <tr>
                      <td>专业级</td>
                      <td>具备多语种对应表达能力及职业能力。</td>
                    </tr>
                  </table>
                  <br>
                  <br>
                  <br>
                  <div class="authentic-stamp">
                    <div class="stamp-img"></div>
                  </div>
                </div>
              </div>
            </div> -->
          </div>
        </IpaTabsPanel>
        <IpaTabsPanel name="teacher">
          <div class="authentic-container teacher-container">
            <p>针对培训师的科目主要有小播音员、小主持人/演说家、小记者三个方向，证书为双语版国际注册专业能力证书，以及国际认证协会监督管理委员会出具的资质证明。</p>
            <p>拥有培训师证书，代表着同时获得了下述能力和资格：</p>
            <ol>
              <li>1. 拥有对应等级的科目授课能力和资格；</li>
              <li>2. 拥有对应等级的科目的考试组织能力；</li>
              <li>3. 拥有在校内、校外进行口才类课程授课的能力； </li>
            </ol>
            <p>每个认证科目均分为初级、中级、高级、专业级四个档次。</p>
            <div class="img-wrapper">
              <img :src="require('@/assets/img/home/child-logo.png')" alt="child">
              <img src="https://mmbiz.qpic.cn/mmbiz_jpg/niaoQbzRThH7BXrwN6CWaXxDONROuYWhsZETRDeiapZ6LOdN1dy8Y6V2hC1icIIQWX3IFicXT4icyYwgcotTlicYr6RA/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1" alt="news">
              <img src="https://mmbiz.qpic.cn/mmbiz_png/niaoQbzRThH7BXrwN6CWaXxDONROuYWhsW4HT6Io3JeN3Q9X67TneK9tV7khj8mAlcibiaqeibwzzDb3NkytbNhEnw/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1" alt="news">
              <img src="https://mmbiz.qpic.cn/mmbiz_jpg/niaoQbzRThH7BXrwN6CWaXxDONROuYWhsjkpD1rB3yKnftI6MsdFsuxYmicic9NTK2GyU13gRAQIX3OHD0ntb9wXA/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1" alt="news">
              <div>证书封面</div>
              <img src="https://mmbiz.qpic.cn/mmbiz_jpg/niaoQbzRThH7BXrwN6CWaXxDONROuYWhsaJYMhxibslMXQlTCglxzwItfibQiabqxNiah6a3nTuvz8vbkmKXaxNxY8g/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1" alt="news">
              <img src="https://mmbiz.qpic.cn/mmbiz_jpg/niaoQbzRThH7BXrwN6CWaXxDONROuYWhsTOQ1EyYqZib7jNeZOrib09LNtqK2OURiaP83Sn7PXz87fZUoYQOX1g2Zg/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1" alt="news">
              <img src="https://mmbiz.qpic.cn/mmbiz_jpg/niaoQbzRThH7BXrwN6CWaXxDONROuYWhsY1tE8236pDR7uPT8O2hlNutaicSMQnHssK3gicBW8fiaQu8N4BhKxRdFQ/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1" alt="news">
              <div>证书内页</div>
              <img src="https://mmbiz.qpic.cn/mmbiz_jpg/niaoQbzRThH7BXrwN6CWaXxDONROuYWhsM5EF6h3mdyDicxicLT2J8SlcUTfsekibI7gGnrOZYkJ5LuRXw07k073Vw/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1" alt="news">
              <img src="https://mmbiz.qpic.cn/mmbiz_jpg/niaoQbzRThH7BXrwN6CWaXxDONROuYWhskJxny2Eu0weQUTk7qrV8gT06iaMPt1Batzbib0LzxKZOJFpq8hwMacfQ/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1" alt="news">
              <div>资质证明</div>
            </div>
            <!-- <div class="authentic-top">
              <div class="authentic-item">
                <img :src="require('@/assets/img/auth/auth-child-4.png')" alt="auth">
              </div>
              <div class="authentic-item">
                <img :src="require('@/assets/img/auth/auth-child-5.png')" alt="auth">
              </div>
              <div class="authentic-item">
                <img :src="require('@/assets/img/auth/auth-child-6.png')" alt="auth">
              </div>
              <div class="authentic-item">
                <img :src="require('@/assets/img/auth/auth-child-7.png')" alt="auth">
              </div>
              <div class="authentic-item">
                <img :src="require('@/assets/img/auth/auth-child-8.png')" alt="auth">
              </div>
              <div class="authentic-item">
                <img :src="require('@/assets/img/auth/auth-child-9.png')" alt="auth">
              </div>
            </div>
            <div class="authentic-bottom">
              <br>
              <div class="authentic-content">
                <div class="authentic-table">
                  <table border="0">
                    <tr>
                      <th></th>
                      <th>科目</th>
                      <th>级别</th>
                    </tr>
                    <tr>
                      <td rowspan="4">小播音员</td>
                      <td rowspan="4">国际注册少儿播音与主持培训师</td>
                      <td>初级</td>
                    </tr>
                    <tr>
                      <td>中级</td>
                    </tr>
                    <tr>
                      <td>高级</td>
                    </tr>
                    <tr>
                      <td>专业级</td>
                    </tr>
                    <tr>
                      <td rowspan="4">小主持人</td>
                      <td rowspan="4">国际注册少儿主持与口才培训师</td>
                      <td>初级</td>
                    </tr>
                    <tr>
                      <td>中级</td>
                    </tr>
                    <tr>
                      <td>高级</td>
                    </tr>
                    <tr>
                      <td>专业级</td>
                    </tr>
                    <tr>
                      <td rowspan="4">小记者</td>
                      <td rowspan="4">国际注册少儿采访与编辑培训师</td>
                      <td>初级</td>
                    </tr>
                    <tr>
                      <td>中级</td>
                    </tr>
                    <tr>
                      <td>高级</td>
                    </tr>
                    <tr>
                      <td>专业级</td>
                    </tr>
                  </table>
                </div>
                <div class="authentic-table">
                  <table border="0">
                    <tr>
                      <th>级别</th>
                      <th>备注</th>
                    </tr>
                    <tr>
                      <td>初级</td>
                      <td>具备国语普通话教学能力。</td>
                    </tr>
                    <tr>
                      <td>中级</td>
                      <td>具备普通话、英语教学能力。</td>
                    </tr>
                    <tr>
                      <td>高级</td>
                      <td>具备普通话、英语、第二外语的教学能力。</td>
                    </tr>
                    <tr>
                      <td>专业级</td>
                      <td>具备多语种教学能力，及培训专业级老师的能力。</td>
                    </tr>
                  </table>
                  <br>
                  <br>
                  <br>
                  <div class="authentic-stamp">
                    <div class="stamp-img"></div>
                  </div>
                </div>
              </div>
            </div> -->
          </div>
        </IpaTabsPanel>
        <IpaTabsPanel name="fare">
          <div class="authentic-container">
            <div class="authentic-top">
              <div class="authentic-item">
                <img :src="require('@/assets/img/contract-1.jpg')" alt="contract">
              </div>
              <div class="authentic-item">
                <img :src="require('@/assets/img/contract-3.jpg')" alt="contract">
              </div>
              <div class="authentic-item">
                <img :src="require('@/assets/img/contract-2.jpg')" alt="contract">
              </div>
            </div>
            <div class="authentic-bottom">
              <div class="authentic-title">国际认证协会（IPA）主持委员会2022年认证费用标准</div>
              <div class="authentic-content">
                <div class="authentic-table">
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
                <div class="authentic-table">
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
            <div class="authentic-stamp">
              <div class="stamp-img"></div>
            </div>
          </div>
        </IpaTabsPanel>
        <IpaTabsPanel name="exam">
          <div class="authentic-container exam-container">
            <div class="title">一、考试计划</div>
            <p>1、提前2周向总部报备。</p>
            <p>2、报备格式</p>
            <div class="authentic-content" style="width: 600px;">
              <div class="authentic-table">
                <table border="0">
                  <tr>
                    <th>考试类别</th>
                    <th>考试时间</th>
                    <th>参加人数</th>
                    <th>考官信息</th>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </table>
              </div>
            </div>
            <div class="title">二、考核结果</div>
            <p>1、考试全过程视频发送总部备案。</p>
            <p>2、填写通过人员的个人信息表格。</p>
            <p>3、通过人员的图片以中心为单位打包发送。图片以学员名字命名，头像-李某某,身份证-李某某，头像为2寸蓝底免冠照片，身份证正反面在一个图片里。</p>
            <div class="title">三、证书下发</div>
            <p>1、代理方缴费后提供一个统一的收证地址信息，用于该批次的证书接收。</p>
            <p>2、证书总部统一制作，14个工作日内完成。</p>
            <div class="title">四、表格下载</div>
            <div class="word-download">
              <span class="word-icon"></span>
              <a href="/国际认证协会-职业资格认证申请表.docx" download="国际认证协会-职业资格认证申请表.docx">国际认证协会-职业资格认证申请表.docx</a>
            </div>
          </div>
        </IpaTabsPanel>
        <IpaTabsPanel name="auth">
          <Auth></Auth>
        </IpaTabsPanel>
      </IpaTabs>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import Header from '../../components/web/public/Header'
import Footer from '../../components/web/public/Footer'
import Auth from './check'
import IpaTabs from '../../components/web/ipaTabs'
import IpaTabsPanel from '../../components/web/ipaTabsPanel'
export default {
  data () {
    return {
      tabList: [
        { text: '少儿认证', val: 'child' },
        { text: '师资认证', val: 'teacher' },
        { text: '认证费用', val: 'fare' },
        { text: '考试流程', val: 'exam' },
        { text: '证书/网点查询', val: 'auth' }
      ]
    }
  },
  components: {
    Header,
    Footer,
    Auth,
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
.authentication {
  min-height: 100vh;
  .authentic-wrapper {
    padding-top: 90px;
    min-height: calc(100vh - 60px - 17px - 280px);
  }
  .authentic-container {
    padding: 0 5vw 0;
    padding-left: 0;
    min-height: calc(100vh - 60px - 267px);
    &.exam-container {
      .title {
        font-size: 24px;
        font-weight: 700;
        margin-top: 50px;
        &:first-child {
          margin-top: 0;
        }
      }
      .word-download {
        display: flex;
        align-items: center;
        margin-top: 10px;
        .word-icon {
          width: 40px;
          height: 40px;
          background: url('../../assets/img/word-icon.svg') no-repeat 100% 100%;
          background-size: 40px 40px;
        }
        font-size: 20px;
      }
    }
    .img-wrapper {
      max-width: 677px;
      margin: 0 auto;
      img {
        width: 100%;
      }
      > div {
        font-size: 20px;
        text-align: center;
        margin-bottom: 20px;
      }
    }
    .authentic-top {
      display: flex;
      // padding-top: 20px;
      .authentic-item {
        flex: 1;
        padding: 5px;
        // border: 1px solid lightgray;
        > img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .authentic-bottom {
      .authentic-title {
        text-align: center;
        font-size: 24px;
        font-weight: 700;
        margin: 20px 0;
      }
    }
    .authentic-stamp {
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
    .authentic-content {
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
}
</style>
