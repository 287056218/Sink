<script setup lang="ts">
// 在路由解析的第一时间，阻止渲染当前页，直接跳转到仪表盘
definePageMeta({
  middleware: [
    function () {
      return navigateTo('/dashboard', { redirectCode: 302 })
    }
  ]
})
</script>

<template>
  <!-- 保持完全空白，不触发任何 404 渲染 -->
  <div></div>
</template>
