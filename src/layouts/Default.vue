
<template>
  <div class="layout">
    <header class="header">
      <strong>
        <g-link to="/">{{ $static.metadata.siteName }}</g-link>
      </strong>
      <nav class="nav">
        <g-link class="nav__link" to="/">За нас</g-link>
        <g-link class="nav__link" to="/news/">Новини</g-link>
        <g-link class="nav__link" to="/books/">Книги</g-link>
        <g-link class="nav__link" to="/zevgma/">Поредица „Зевгма“</g-link>
        <g-link class="nav__link" to="/laboratory/">Лаборатория</g-link>
      </nav>
    </header>
    <slot/>
    <siteFooter></siteFooter>
  </div>
</template>

<script>
import siteFooter from '../components/site-footer';
export default {
  name: "HomePage",
  components: {
    siteFooter,
  },
}
</script>
<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.nav__link {
  margin-left: 20px;
}
</style>
<script setup>
import SiteFooter from "../components/site-footer.vue";
</script>