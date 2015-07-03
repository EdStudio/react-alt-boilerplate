jest.dontMock('../NotFound.jsx');
jest.dontMock('../../testUtils/ComponentWithRouterStub');

import React from 'react/addons';

describe('NotFound', () => {

  var TestUtils = React.addons.TestUtils;

  const NotFound = require('../NotFound.jsx');
  const NotFoundWithRouterStub = require('../../testUtils/ComponentWithRouterStub')(NotFound);

  var notFound;

  beforeEach(() => {
    notFound = TestUtils.renderIntoDocument(<NotFoundWithRouterStub />);
  });

  it('should display 404', () => {
    var h2 = TestUtils.findRenderedDOMComponentWithTag(notFound, 'h2');
    var h2Node = React.findDOMNode(h2);

    expect(h2Node.textContent).toEqual('404 Not Found');

  });

});
