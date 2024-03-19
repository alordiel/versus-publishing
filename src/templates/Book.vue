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
   metaInfo() {
    return {
      title: this.book.title,
      meta: [
        {
          name: "description",
          content: this.book.description,
        },
        {
          name: "twitter:description",
          content: this.book.description,
        },
        {
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          name: "twitter:title",
          content: this.book.title,
        },
        {
          name: "twitter:creator",
          content: "@terabytetiger",
        },
        {
          name: "twitter:site",
          content: "@terabytetiger",
        },
        {
          name: "og:description",
          content: this.book.description,
        },
        {
          name: "og:title",
          content: this.book.title,
        },
        {
          name: "og:image",
          content: this.$static.metadata.baseURL + this.book.cover,
        },
      ],
      link: [
        {
          rel: "canonical",
          content: this.$static.metadata.baseURL + this.book.path,
        },
      ],
    };
  },
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
      this.book.description = "";
    }
  }
}
</script>

<static-query>
query {
  metadata {
    baseURL
  }
}
</static-query>