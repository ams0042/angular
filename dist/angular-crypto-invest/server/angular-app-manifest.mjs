
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/about"
  },
  {
    "renderMode": 2,
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "route": "/news"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1091, hash: 'ac9cb558e9d424f818d358755168a4fb8c1aa14ffecdadb106fa14dce4aaef0d', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1016, hash: '042c0a708d41471f3055504a56bb12dd9dd840b4dd91ce4686679a0be6bff8c7', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 12421, hash: 'dc12eb983df22b9a7e374bd073cd137c451607afd28bddfe99d30005e2b59449', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 7747, hash: 'b0a348400120230b2c431593b47b96b749315716ba317e00db9637e7044232cc', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'news/index.html': {size: 5681, hash: 'ed53b4b354d6d2f42424a26be9eb67088ed43df5d0c712bdd348d41e479b9978', text: () => import('./assets-chunks/news_index_html.mjs').then(m => m.default)},
    'index.html': {size: 14922, hash: '9cfe43971d22cf158c8485828979df028b88a89a85b3ba5a7f5d7361c77a6009', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-JFBGFMGJ.css': {size: 1817, hash: 'Q8Tv93PdPOs', text: () => import('./assets-chunks/styles-JFBGFMGJ_css.mjs').then(m => m.default)}
  },
};
