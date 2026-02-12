export function loadFontAwesome() {
  const stylesheets = [
    'https://site-assets.fontawesome.com/releases/v7.1.0/css/fontawesome.css',
    'https://site-assets.fontawesome.com/releases/v7.1.0/css/whiteboard-semibold.css',
    'https://site-assets.fontawesome.com/releases/v7.1.0/css/utility-fill-semibold.css',
    'https://site-assets.fontawesome.com/releases/v7.1.0/css/utility-duo-semibold.css',
    'https://site-assets.fontawesome.com/releases/v7.1.0/css/utility-semibold.css',
    'https://site-assets.fontawesome.com/releases/v7.1.0/css/thumbprint-light.css',
    'https://site-assets.fontawesome.com/releases/v7.1.0/css/slab-press-regular.css',
    'https://site-assets.fontawesome.com/releases/v7.1.0/css/slab-regular.css',
    'https://site-assets.fontawesome.com/releases/v7.1.0/css/sharp-duotone-thin.css',
    'https://site-assets.fontawesome.com/releases/v7.1.0/css/sharp-duotone-solid.css',
    'https://site-assets.fontawesome.com/releases/v7.1.0/css/sharp-duotone-regular.css',
    'https://site-assets.fontawesome.com/releases/v7.1.0/css/sharp-duotone-light.css',
    'https://site-assets.fontawesome.com/releases/v7.1.0/css/sharp-thin.css',
    'https://site-assets.fontawesome.com/releases/v7.1.0/css/sharp-solid.css',
    'https://site-assets.fontawesome.com/releases/v7.1.0/css/sharp-regular.css',
    'https://site-assets.fontawesome.com/releases/v7.1.0/css/sharp-light.css',
    'https://site-assets.fontawesome.com/releases/v7.1.0/css/notdog-duo-solid.css',
    'https://site-assets.fontawesome.com/releases/v7.1.0/css/notdog-solid.css',
    'https://site-assets.fontawesome.com/releases/v7.1.0/css/jelly-fill-regular.css',
    'https://site-assets.fontawesome.com/releases/v7.1.0/css/jelly-duo-regular.css',
    'https://site-assets.fontawesome.com/releases/v7.1.0/css/jelly-regular.css',
    'https://site-assets.fontawesome.com/releases/v7.1.0/css/etch-solid.css',
    'https://site-assets.fontawesome.com/releases/v7.1.0/css/duotone-thin.css',
    'https://site-assets.fontawesome.com/releases/v7.1.0/css/duotone.css',
    'https://site-assets.fontawesome.com/releases/v7.1.0/css/duotone-regular.css',
    'https://site-assets.fontawesome.com/releases/v7.1.0/css/duotone-light.css',
    'https://site-assets.fontawesome.com/releases/v7.1.0/css/thin.css',
    'https://site-assets.fontawesome.com/releases/v7.1.0/css/solid.css',
    'https://site-assets.fontawesome.com/releases/v7.1.0/css/regular.css',
    'https://site-assets.fontawesome.com/releases/v7.1.0/css/light.css',
    'https://site-assets.fontawesome.com/releases/v7.1.0/css/brands.css',
    'https://site-assets.fontawesome.com/releases/v7.1.0/css/chisel-regular.css'
  ];

  stylesheets.forEach(item => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    
    if (typeof item === 'string') {
      link.href = item;
      link.defer = true;
      link.media = 'print';
      link.onload = function() { this.media = 'all'; };
      
      const noscript = document.createElement('noscript');
      const noscriptLink = document.createElement('link');
      noscriptLink.rel = 'stylesheet';
      noscriptLink.href = item;
      noscript.appendChild(noscriptLink);
      document.head.appendChild(noscript);
    } else {
      link.href = item.href;
      if (item.dataPurpose) link.setAttribute('data-purpose', item.dataPurpose);
      if (item.title) link.title = item.title;
    }
    
    document.head.appendChild(link);
  });

  console.log('FontAwesome loaded successfully');
}