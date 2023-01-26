import React from 'react';

import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu } from './container';
import { Navbar } from './components';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import Signin from './views/auth/signin';

const App = () => (
  <Provider store={store}>
    <div>
      <Signin/>
      <Navbar />
      <Header />
      <AboutUs />
      <SpecialMenu />
      <Chef />
      <Intro />
      <Laurels />
      <Gallery />
      <FindUs />
      <Footer />
    </div>
  </Provider>
);

export default App;
