# fluxxor-flux-comparison-app

Working example of the [Fluxxor](http://fluxxor.com/) [flux-comparison](https://github.com/voronianski/flux-comparison) app that uses webpack, webpack-dev-server and has a mocha test environment configured.

## Howto

  * Clone repo: `git clone https://github.com/mjgs/flux-comparison-app-fluxxor`
  * Install dependencies: `cd flux-comparison-app-fluxxor && npm install`
  * Start dev server: `npm run dev`, browse to `http://localhost:3000`
  * Start test runner: `npm run test:watch`
  * Create `bundle.js` for deployment by running: `npm run build`
  
## Notes

  * The common folder is the code shared across all the implemented flux solutions
  * Uses React 0.13.3 since latest React 15.1.0 throws error: 
  
    app.js:15 Uncaught TypeError: _react2.default.render is not a function
 