// tailwind.config.js
module.exports = {
  mode: 'jit',           // JIT mode để build nhanh và purge tự động
  content: [
    './src/page/**/*.html',
    './src/js/**/*.js'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
