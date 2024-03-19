<template>
  <Layout>
    <div>
      <h1>{{ book.title }}</h1>
      <g-image :alt="book.title"  :src="`~/assets/books/${book.cover}`"/>
      <div v-html="book.content"></div>
      <!-- Display other book details as needed -->
    </div>
  </Layout>
</template>

<script>
export default {
  data() {
    return {
      book: {} // Initialize an empty object to store book data
    };
  },
  async created() {
    // Fetch the book data based on the provided context
    await this.fetchBookData();
  },
  methods: {
    async fetchBookData() {
      const books = require('../assets/data/books.json')

      // Fetch the book data using the slug passed in the route parameters
      const slug = this.$route.params.slug;
      // Assuming $staticData.books contains the books data
      this.book = books.find(book => book.slug === slug);
    }
  }
}
</script>