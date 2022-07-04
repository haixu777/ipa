<template>
  <div class="home-container">
    <div class="home-item home-shortcut">
      <div class="shortcut-item" v-for="(item, index) in shortcutList" :key="item.title">
        <template v-if="index % 2">
          <div class="shortcut-title">{{ item.title }}</div>
          <div class="shortcut-content">
            <img :src="item.img" :alt="item.title">
          </div>
        </template>
        <template v-else>
          <div class="shortcut-content">
            <img :src="item.img" :alt="item.title">
          </div>
          <div class="shortcut-title">{{ item.title }}</div>
        </template>
      </div>
    </div>
    <div class="home-item home-news">
      <div class="news-list-wrapper">
        <router-link class="more-news" to="/news">更多新闻 >>></router-link>
        <div class="news-item" v-for="news in newsList" :key="news.news_id">
          <div class="news-cover flex-center"><img :src="news.cover_img" :alt="news.news_desc"></div>
          <div class="news-content">
            <router-link :to = "`/news/${news.news_path}`" target="_blank">
              <div class="news-title">{{news.news_title}}</div>
            </router-link>
            <div class="news-desc">{{news.news_desc}}</div>
          </div>
        </div>
      </div>
      <div class="news-image flex-center">
        <img :src="require('@/assets/img/home/child-logo.png')" alt="news">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IpaHome',
  props: ['items'],
  data () {
    return {
      shortcutList: [
        { title: '师资培训', img: require('@/assets/img/home/shortcut-4.png') },
        { title: '专业教材', img: require('@/assets/img/home/shortcut-12.png') },
        { title: '考试认证', img: require('@/assets/img/home/shortcut-5.png') },
        { title: '电视栏目', img: require('@/assets/img/home/news-4.jpg') },
        { title: '专项赛事', img: require('@/assets/img/home/shortcut-11.png') },
        { title: '留学计划', img: require('@/assets/img/home/shortcut-14.png') }
      ],
      newsList: [],
      pageInfo: {
        activeName: '1',
        pagenum: 1,
        pagesize: 5,
        selectDate: ''
      }
    }
  },
  methods: {
    // 根据新闻 类型、日期 查询新闻，并按日期排序
    async getNewsItems () {
      const { data: res } = await this.$http.get('/web/newslist', { params: this.pageInfo })
      if (res.status === 200) {
        this.newsList = res.data.list
      }
    }
  },
  mounted () {
    this.getNewsItems()
  }
}
</script>

<style lang="less" scoped>
.home-container {
  padding: 50px 15vw;
  .home-item {
    margin-bottom: 100px;
    &.home-shortcut {
      display: flex;
      .shortcut-item {
        flex: 1;
        margin: 0 .5vw;
        display: flex;
        flex-direction: column;
        .shortcut-title {
          border-left: rgb(7, 55, 99) 6px solid;
          padding-left: 10px;
          font-size: 20px;
          color: #555;
          margin: 30px 0;
        }
        .shortcut-content {
          width: 100%;
          flex: 1;
          img {
            width: 100%;
            height: 90%;
          }
        }
      }
    }
    &.home-news {
      display: flex;
      justify-content: space-between;
      // background: url('../../assets/img/home/news-bg.png') no-repeat 100% 100%;
      background-size: 25% 100%;
      height: 40vh;
      overflow: hidden;
      .news-list-wrapper {
        width: 65%;
        .more-news {
          display: inline-block;
          text-align: right;
          width: 100%;
          &:hover {
            cursor: pointer;
            color: rgb(43, 171, 250);
          }
        }
        .news-item {
          display: flex;
          border-bottom: 1px solid #ccc;
          padding-bottom: 20px;
          margin-bottom: 20px;
          .news-cover {
            width: 20%;
            border: 1px solid #ccc;
            &:hover {
              border: 1px solid #f40;
            }
            img {
              width: 100%;
              height: 80%;
            }
          }
          .news-content {
            flex: 1;
            margin-left: 20px;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            .news-title,a {
              color: #000;
              font-weight: 500;
              font-size: 16px;
              &:hover {
                cursor: pointer;
                text-decoration: underline;
              }
            }
            .news-desc {
              color: #6f6f6f;
              font-size: 14px;
            }
          }
        }
      }
      .news-image {
        width: 30%;
        img {
          width: 418px;
          height: 218px;
        }
      }
    }
  }
}
</style>
