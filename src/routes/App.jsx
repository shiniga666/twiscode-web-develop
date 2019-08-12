import React, { Fragment } from 'react';
import { renderRoutes } from 'react-router-config';
import Header from '../components/Header';
import Footer from '../components/Footer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { route } = this.props;
    return (
      <Fragment>
        <Header />
        {renderRoutes(route.routes)}
        <Footer />
      </Fragment>
    );
  }
}

export default App;
