// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Издателство "Версус"',
  plugins: [],
  templates: {
    Books: [
      {
        path: (node) => {
          return `/books/${node.slug}`
        }
      }
    ],
    Zevgma: [
      {
        path: (node) => {
          return `/zevgma/${node.slug}`
        }
      }
    ],
  }
}
