global.document = require('jsdom').jsdom('<body></body>', {
  features: {
    FetchExternalResources: ['img']
  }
});
global.window = document.defaultView;
global.navigator = window.navigator;
