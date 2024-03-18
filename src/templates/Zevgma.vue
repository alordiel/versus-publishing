<template>
  <Layout>
    <div>
      <h1>{{ book.title }}</h1>
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
  async mounted() {
    console.log(this.$route)
    // Fetch the book data based on the provided context
    await this.fetchBookData();
  },
  methods: {
    async fetchBookData() {
      const books = require('../assets/data/zevgma.json');
      // Fetch the book data using the slug passed in the route parameters
      const slug = this.getTheSlug();
      // Assuming $staticData.books contains the books data
      this.book = books.find(book => book.slug === slug);
    },

    getTheSlug(){
      const params = this.$route.params;
      console.log(params);
      if  (params !== undefined && params.slug !== undefined) {
        return params.slug;
      }
      const path = this.$route.path.split('/');
      return path[2];
    }
  }
}
</script>