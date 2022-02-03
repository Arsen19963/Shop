import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import Loadable from 'react-loadable';
import { getBundles } from 'react-loadable/webpack'
import stats from '../react-loadable.json';
import Routes from '../src/router/Routes';

export default (pathname, store, context) => {

    console.log("render",pathname)
    let modules = [];
  const content = renderToString(
      <Loadable.Capture report={moduleName => modules.push(moduleName)}>
        <Provider store={store}>
          <StaticRouter location={pathname} context={context}>
            <div>{renderRoutes(Routes)}</div>
          </StaticRouter>
        </Provider>
      </Loadable.Capture>
  );

    console.log("modules",modules)
    let bundles = getBundles(stats, modules);

  return `
  <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <title>shop render</title>
          <link rel="shortcut icon" href="/style/favicon.ico">
          <link rel="stylesheet" type="text/css" href="/style/style.css"/>
          <link rel="stylesheet" type="text/css" href="/style/slik/slick.css"/>
            <link rel="stylesheet" type="text/css" href="/style/slik/slick-theme.css"/>
      </head>
      <body>
      
      <div id="root">${content}</div>
      <script>
        window.INITIAL_STATE = ${JSON.stringify(store.getState())}
      </script>
      
      <script src="/dist/vendor.js"></script>
        ${bundles.map(bundle => { return `<script src="/dist/${bundle.file}"></script>`}).join('\\n')}
       <script src="/dist/main.js"></script>
      
      </body>
      </html>
  `;
};