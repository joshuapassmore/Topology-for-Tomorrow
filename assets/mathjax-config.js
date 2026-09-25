// Both this file and MathJax use defer, so the rendered Markdown is available.
// Convert Kramdown's math elements to delimiters understood by MathJax 4.
document.querySelectorAll('script[type^="math/tex"]').forEach(function (source) {
  var display = /mode\s*=\s*display/.test(source.type);
  var replacement = document.createElement(display ? 'div' : 'span');
  replacement.textContent = (display ? '\\[' : '\\(') + source.textContent + (display ? '\\]' : '\\)');
  source.replaceWith(replacement);
});

window.MathJax = {
  tex: {
    inlineMath: [['\\(', '\\)'], ['$', '$']],
    displayMath: [['\\[', '\\]'], ['$$', '$$']],
    processEscapes: true,
    tags: 'ams'
  },
  svg: { fontCache: 'global' },
  options: {
    skipHtmlTags: ['script', 'noscript', 'style', 'textarea', 'pre', 'code'],
    enableMenu: true
  }
};
