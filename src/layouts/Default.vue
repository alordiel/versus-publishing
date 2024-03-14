
<template>
  <div class="layout">
    <siteHeader></siteHeader>
    <div class="container">
      <slot/>
    </div>
    <siteFooter></siteFooter>
  </div>
</template>

<script setup>
import siteFooter from '../components/site-footer';
import siteHeader from "../components/site-header.vue";
</script>


<style>
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}

.layout {
  max-width: 1200px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}
.container {
  min-height: calc(100vh - 250px);
}
img{
  max-width: 100%;
}
</style>