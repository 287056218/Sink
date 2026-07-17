<script setup lang="ts">
// 页面加载前，直接强制跳转到仪表盘
definePageMeta({
  middleware: [
    function () {
      return navigateTo('/dashboard') // 如果你的后台路径是 /admin，请改成 /admin
    }
  ]
})
</script>

<template>
  <!-- 首页直接留空，不渲染任何无用内容 -->
  <div></div>
</template>
