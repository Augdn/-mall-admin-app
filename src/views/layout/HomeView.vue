<template>
  <div class="home">
    <rightMenu />
    <div :class="{ 'main-app': true, 'menu-unfold': $store.state.collapsed }">
      <sildeNav />
    </div>
  </div>
</template>

<script>
import rightMenu from '@/views/layout/components/rightMenu.vue';
import sildeNav from '@/views/layout/components/sildeNav.vue';

export default {
  name: 'HomeView',
  data() {
    return {

    };
  },
  components: {
    rightMenu,
    sildeNav,
  },

};
</script>
<style lang="less">
@import url('~@/assets/css/home.less');
</style>
