let mix = require("laravel-mix");
mix
  .js("frontend/js/app.js", "theme/static/")
  .sass("frontend/scss/app.scss", "theme/static/")
  .browserSync({
    proxy: "http://localhost:8000",
    reload:true,
    files: [
      "./theme/static/*",
      "./frontend/js/**/*.js",
      "./frontend/scss/**/*.scss",
      "./frontend/img/**/*.+(png|jpg|svg)",
      "./theme/**/*.+(html|php)",
      "./theme/views/**/*.+(html|twig)"
    ]
  });
