const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://bioseguridad.godoycordoba.com", // Reemplaza con la URL real
    viewportWidth: 1366,
    viewportHeight: 768,
    video: false,
    screenshotsFolder: 'evidencias',
    video: false
  },
});
