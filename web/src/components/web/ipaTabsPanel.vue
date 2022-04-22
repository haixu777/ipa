<template>
  <div class="ipa-tab-panel" v-show="active">
   <div class="ipa-tab-panel-content">
     <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ipa-tab-panel',
  props: ['name'],
  computed: {
    active: function () {
      return this.$parent.activeTab === this.name
    }
  },
  data () {
    return {
    }
  },
  mounted () {
    console.log(this.active)
  }
}
</script>
