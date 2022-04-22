<template>
  <div class="ipa-tabs">
    <div class="ipa-tab-navbar flex-center-col">
      <div v-for="tab in tabList" :key="tab.val" :class="['ipa-tab-navbar-item', {active: tab.val == activeTab}]" @click="handleItemClick(tab)">
        {{tab.text}}
      </div>
    </div>
    <div class="ipa-tab-content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ipa-tabs',
  data () {
    return {
      activeTab: this.tabList[0].val
    }
  },
  props: {
    tabList: {
      type: Array,
      required: true
    }
  },
  computed: {
  },
  methods: {
    handleItemClick (item) {
      this.activeTab = item.val
    }
  },
  mounted () {
    console.log(123)
  }
}
</script>

<style lang="less" scoped>
.ipa-tabs {
  display: flex;
  .ipa-tab-navbar {
    width: 15vw;
    .ipa-tab-navbar-item {
      &.active,&:hover {
        cursor: pointer;
        color: rgb(14, 154, 241);
      }
    }
  }
  .ipa-tab-content {
    flex: 1;
  }
}
</style>
