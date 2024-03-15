// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function (api) {
  api.loadSource( ( actions ) => {
    const books = require('./src/assets/books.json')
    const collection = actions.addCollection({typeName:'Books'})
    for (const book of books) {
      collection.addNode({
        id: book.slug,
        slug: book.slug,
        title: book.title,
        content: book.content,
        //author: book.author,
        //coverImage: book.coverImage // You may need to adjust this depending on where your images are stored
      })
    }
  })

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
     createPage({
      path: '/books/:slug',
      component: './src/templates/Book.vue',
    })
  })
}
