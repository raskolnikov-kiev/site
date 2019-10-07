import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from '../Footer';
import Header from '../Header';
import ScrollToTop from '../ScrollToTop';
import NoMatch from '../NoMatch';
import Courses from '../Courses';
import Studio from '../Studio';
import Platform from '../Platform';

import Play from '../Play';
import MetaTags from '../MetaTags';

import Home from '../Home';
import About from '../About';
import Face from '../Face';
import { FACE_ROUTE } from '@/data/faces';
import { PLAY_ROUTE } from '@/data/plays';

const App = () => (
  <Router onUpdate={() => window.scrollTo(0, 0)}>
    <div className="container">
      <ScrollToTop />
      <MetaTags />
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path={PLAY_ROUTE} component={Play} />
        <Route path={FACE_ROUTE} component={Face} />
        <Route path="/courses" component={Courses} />
        <Route path="/studio" component={Studio} />
        <Route path="/platform" component={Platform} />
        <Route component={NoMatch} />
      </Switch>
      <Footer />
    </div>
  </Router>
);

export default App;
