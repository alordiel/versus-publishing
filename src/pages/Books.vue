<template>
  <Layout>
    <h1>Книги</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error doloremque omnis animi, eligendi magni a voluptatum, vitae, consequuntur rerum illum odit fugit assumenda rem dolores inventore iste reprehenderit maxime! Iusto.</p>
    <div class="book-list">
      <div v-for="book in books" :key="book.slug" class="book-item" >
        <g-link :to="'/books/'+book.slug" class="book-title">
          <g-image :alt="book.title" src="~/assets/banners/Premiera.jpg" width="135" />
          <span>{{ book.title }}</span>
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
        title
        slug
        cover
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: 'Книги'
  },
  data() {
    return {
      books: [] // Initialize an empty object to store book data
    };
  },
  async beforeMount() {
    console.log(this.$page.books.edges[0].node.cover)
    // Fetch the book data based on the provided context
    await this.fetchBookData();
  },
  methods: {
    async fetchBookData() {

      this.$page.books.edges.forEach(book => {
        this.books.push({
          title: book.node.title,
          cover:  '~/assets/books/' + book.node.cover,
          slug: book.node.slug
        })
      })
    },
  }
}
</script>
