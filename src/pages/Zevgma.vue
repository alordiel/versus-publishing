<template>
  <Layout>
    <h1>Поредица „Зевгма“</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error doloremque omnis animi, eligendi magni a voluptatum, vitae, consequuntur rerum illum odit fugit assumenda rem dolores inventore iste reprehenderit maxime! Iusto.</p>
    <div class="book-list">
      <div v-for="book in $page.books.edges" :key="book.node.id" class="book-item" >
        <g-link :to="'/zevgma/'+book.node.id" class="book-title">
          <span>{{ book.node.title }}</span>
        </g-link>
        <div class="book-date">{{ book.node.content }}</div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query {
  books: allZevgma {
    edges {
      node {
        content
        title
        id
        slug
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: 'Поредица „Зевгма“'
  }
}
</script>
