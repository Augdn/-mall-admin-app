<template>

      <div class="main-header">
        <a-button type="primary" style="margin-bottom: 16px" @click="toggleCollapsed">
          <a-icon :type="$store.state.collapsed ? 'menu-unfold' : 'menu-fold'" />
        </a-button>
        <div class="breadcrumb">
          <a-breadcrumb>
            <a-breadcrumb-item>首页</a-breadcrumb-item>
            <a-breadcrumb-item><a href="">统计</a></a-breadcrumb-item>
          </a-breadcrumb>
        </div>
        <ul class="use-info">
            <li>{{$store.state.user.username}}
              <a-icon type="down"></a-icon>
            </li>
            <li @click="logout" @KeyDown=xxx>退出1</li>
        </ul>
      </div>
</template>

<script>
export default {
  methods: {
    toggleCollapsed() {
      this.$store.dispatch('changeCollapsed');
    },
    logout() {
      this.$router.push({
        name: 'Login',
      });
      this.$store.dispatch('loginOut');
    },
  },
};
</script>

<style>

</style>
