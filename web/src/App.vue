<template>
  <div id = "app">
    <router-view></router-view>
    <el-backtop :bottom = "80" :right = "60" :visibility-height = "280">
      <svg class = "icon" aria-hidden = "true">
        <use xlink:href = "#icon-huojian"></use>
      </svg>
    </el-backtop>
  </div>
</template>

<script>
export default {
  name: 'index',
  components: {},
  data () {
    return {
    }
  },
  methods: {
  },

  created () {
  },

  mounted () {
    // var scale = window.outerWidth / 1200
    // var meta = document.createElement('meta')
    // meta.name = 'viewport'
    // meta.content = `width=1200, initial-scale=${scale}, maximum-scale=${scale}, user-scalable=0">`
    // document.getElementsByTagName('head')[0].appendChild(meta)
  }

}
</script>

<style lang = "less" scoped>
#app {
  min-width: 1200px;
}
.icon {
  width: 1.3em;
  height: 1.3em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}

.el-backtop {
  width: 48px;
  height: 48px;
  box-shadow: 0 0 6px rgba(0, 0, 0, .2);
}
</style>
