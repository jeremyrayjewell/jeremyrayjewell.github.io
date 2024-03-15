// vite.config.js
const { defineConfig } = require('vite')

module.exports = defineConfig({
    base: '/', // set base path
    server: {
        port: 8080, // set server port
        open: true, // open browser on server start
    },
    build: {
        outDir: 'dist', // specify output directory
    },
})