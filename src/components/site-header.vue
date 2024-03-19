<script>
export default {
  name: "site-header"
}
</script>

<template>
<header class="header">

      <g-link to="/" class="logo">
        <g-image alt="Издателство Версус" src="~/assets/images/brand/logo.png" width="60" />
      </g-link>

      <nav class="nav">
        <g-link class="nav__link" to="/">За нас</g-link>
        <g-link class="nav__link" to="/news/">Новини</g-link>
        <g-link class="nav__link" to="/books/">Книги</g-link>
        <g-link class="nav__link" to="/zevgma/">Поредица „Зевгма“</g-link>
        <g-link class="nav__link" to="/laboratory/">Лаборатория</g-link>
      </nav>
    </header>
</template>
