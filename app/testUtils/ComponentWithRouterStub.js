import React from 'react';

function RouterStub() {}

Object.assign(RouterStub, {
  makePath: function() {},
  makeHref: function() {},
  transitionTo: function() {},
  replaceWith: function() {},
  goBack: function() {},
  getCurrentPath: function() {},
  getCurrentRoutes: function() {},
  getCurrentPathname: function() {},
  getCurrentParams: function() {},
  getCurrentQuery: function() {},
  isActive: function() {},
  getRouteAtDepth: function() {},
  setRouteComponentAtDepth: function() {}
});

export default function (Component, props, stubs) {

  return class ComponentWithRouterStub extends React.Component {

    static childContextTypes = {
      router: React.PropTypes.func,
      routeDepth: React.PropTypes.number
    }

    getChildContext() {
      return {
        router: Object.assign(RouterStub, stubs),
        routeDepth: 0
      };
    }

    render() {
      return React.createElement(Component, props);
    }

  };

}
