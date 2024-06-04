document.addEventListener("DOMContentLoaded", function() {
  var searchBox = document.querySelector('.nav-search input[type="search"]');
  if (searchBox) {
    searchBox.setAttribute('placeholder', 'Buscar...');
  }
});