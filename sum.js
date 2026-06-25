function sum(a, b) {
  return a + b;
}

// dark mode preference helper
function isDarkMode() {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches;
}

module.exports = { sum, isDarkMode };
