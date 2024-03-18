<template>
  <Layout>
    <h1>Книги</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error doloremque omnis animi, eligendi magni a voluptatum, vitae, consequuntur rerum illum odit fugit assumenda rem dolores inventore iste reprehenderit maxime! Iusto.</p>
    <div class="book-list">
      <div v-for="book in $page.books.edges" :key="book.node.id" class="book-item" >
        <g-link :to="'/books/'+book.node.id" class="book-title">
          <g-image :alt="book.node.title" :src="'~/assets/books/' + book.node.cover" width="135" />
          <span>{{ book.node.title }}</span>
        </g-link>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query {
  books: allBooks {
    edges {
      node {
        cover
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
    title: 'Книги'
  }
}
</script>
