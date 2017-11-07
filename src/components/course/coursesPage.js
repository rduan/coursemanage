import React, {PropTypes} from 'react';
import {Link, IndexLink, browserHistory} from 'react-router';
import {connect} from 'react-redux';
import * as courseActions from '../../actions/courseActions'; 
import {bindActionCreators} from 'redux';
import CourseList from './courseList';

class CoursePage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      course: {title: ""}
    };
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave= this.onClickSave.bind(this);
    this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
  }

  onTitleChange(event){
    const course = this.state.course;
    course.title = event.target.value;
    this.setState({course});

  }

  onClickSave(){
    // if no mapDispatchToProps, connect will auto inject the dispatch function
    // this.props.dispatch(courseActions.createCourse(this.state.course));

    //defined function in mapDispatchToProps,
    this.props.createCourse(this.state.course);
  }

  courseRow(course, index) {
    return <div key={index}>{course.title}</div> ;
  }

  redirectToAddCoursePage() {
    browserHistory.push('/course');
  }
  render() {

    const {courses} =this.props; 
    return (
      <div>
        <h1>Courses</h1>
        <input type="submit"
              value="Add"
              className="btn btn-primary"
              onClick={this.redirectToAddCoursePage} 
        />
        <CourseList courses={courses}></CourseList>
        {/* 
        {this.props.courses.map(this.courseRow)}
        <h2>Add course</h2>
        <input
          type="text"
          onChange={this.onTitleChange}
          value={this.state.course.title}
          />
        <input
          type="submit"
          value="Save"
          onClick={this.onClickSave} /> */}
      </div>
    );
  }

}

// dispatch is auto injected by connect if there is no mapDispatchToProps fefined. no createCourse then
//if defined mapDispatchToProps, will has createCourse, no dispatch 
CoursePage.propTypes = {
  //dispatch: React.PropTypes.func.isRequired,
  courses: React.PropTypes.array.isRequired
  // createCourse: React.PropTypes.func.isRequired
}

function mapStateToProps(state,ownProps) {
  // console.log(state);
  return {
    courses: state.courses
  };
}


function mapDispatchToProps(dispatch) {
  return {
    //when not using bindActionCreators
    // createCourse: course=> dispatch(courseActions.createCourse(course))

    // using bindActionCreators to map all actions in courseActions , 
    actions: bindActionCreators(courseActions, dispatch)

    //using bindActionCreators to map specific actions
    // createCourse: bindActionCreators(courseActions.createCourse, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursePage);