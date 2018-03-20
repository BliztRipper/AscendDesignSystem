//@prepros-prepend ../../node_modules/babel-polyfill/dist/polyfill.min.js


window.addEventListener('load', e => {
  updateNews();
});

async function updateNews(){
  const res = await fetch(`https://newsapi.org/v2/everything?q=bitcoin&sortBy=publishedAt&apiKey=969b8578330f41b4bca27888e1175ed2`)
  console.log(res);
}   