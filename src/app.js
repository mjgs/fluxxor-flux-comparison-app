import React from 'react';
import Fluxxor from 'Fluxxor';
import App from './components/App.jsx';
import Stores from './stores/Stores';
import Actions from './actions/Actions';

const flux = new Fluxxor.Flux(Stores, Actions);

flux.actions.product.getAllProducts();

flux.on("dispatch", function(type, payload) {
  console.log("Dispatched", type, payload);
});

React.render(
    React.createElement(App, { flux }),
    document.getElementById('flux-app')
);
