import React from 'react';
import { Route } from 'react-router-dom';

import {Header, LeftSidebar} from './components';
import RightSidebar from './components/RightSidebar';
import {MainPage} from './pages';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="App__main">
        <LeftSidebar />
        <Route path="/main" component={MainPage} exact />
        <RightSidebar />
      </div>
    </div>
  );
}

export default App;
