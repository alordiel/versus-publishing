// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/
// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function (api) {

  // creating the sources
  api.loadSource( ( actions ) => {
    const allBooks = require('./src/assets/data/books.json')
    const collection = actions.addCollection({typeName:'Books'})
    for (const book of allBooks) {
      collection.addNode({
        id: book.slug,
        slug: book.slug,
        title: book.title,
        content: book.content,
        cover: book.cover,
        coverArtist: book.coverArtist,
        ISBN: book.ISBN,
        publishingInfo: book.publishingInfo,
        coverType: book.coverType,
        price: book.price
      })
    }

    const zevgma = require('./src/assets/data/zevgma.json')
    const zCollection = actions.addCollection({typeName:'Zevgma'})
    for (const book of zevgma) {
      zCollection.addNode({
        id: book.slug,
        slug: book.slug,
        title: book.title,
        content: book.content,
        cover: book.cover,
        coverArtist: book.coverArtist,
        ISBN: book.ISBN,
        publishingInfo: book.publishingInfo,
        coverType: book.coverType,
        price: book.price
      })
    }
  });

  // Adding pages
  api.createPages(({ createPage }) => {
    createPage({
      path: '/books/:slug',
      component: './src/templates/Book.vue',
    })

    createPage({
      path: '/zevgma/:slug',
      component: './src/templates/Zevgma.vue',
    })
  });
}
