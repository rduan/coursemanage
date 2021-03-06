import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import HomePage from './components/home/homePage';
import AboutPage from './components/about/aboutPage';
import CoursePage from './components/course/coursesPage';
import ManageCoursePage from './components/course/manageCoursePage'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}></IndexRoute>
    <Route path="courses" component={CoursePage}></Route>
    <Route path="course" component={ManageCoursePage}></Route>
    <Route path="course/:id" component={ManageCoursePage}></Route>
    <Route path="about" component={AboutPage}></Route>
  </Route>
);


