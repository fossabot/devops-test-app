function sum(a, b) {
  return a + b;
}

// dark mode preference helper — auth API redesigned
function isDarkMode() {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches;
}

module.exports = sum;
// fix: null pointer patch
