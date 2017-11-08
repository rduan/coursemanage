import React, {PropTypes, Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseForm from './courseForm';
import toastr from 'toastr';

class ManageCoursePage extends Component {

  constructor(props, context) {
    super(props,context)

    this.state = {
      course: Object.assign({}, this.props.course),
      // allAuthors: Object.assign({}, this.props.authors),
      errors: {},
      saving: false
    }

    this.updateCourseState = this.updateCourseState.bind(this);
    this.saveCourse = this.saveCourse.bind(this);
  }

  componentWillReceiveProps(nextProps){
    // console.log('cwr: ', nextProps.course);
    if(this.props.course.id !== nextProps.course.id) {
      this.setState({course: Object.assign({}, nextProps.course)});
    }
  }
  

  updateCourseState(event){
    const field= event.target.name;
    let course=this.state.course;
    course[field] = event.target.value;
    return this.setState({course});
  }

  redirect() {
    this.setState({saving: false});
    toastr.success('course saved');
    this.context.router.push('/courses');
  }

  saveCourse(event) {
    event.preventDefault();
    this.setState({saving:true});
    this.props.actions.saveCourse(this.state.course)
      .then(()=>this.redirect());
  }

  render() {
    return (
      <div>
        <h1>Mnage course</h1>
        <CourseForm 
          course={this.state.course}
          allAuthors = {this.props.authors}
          errors = {this.state.errors}
          onSave={this.saveCourse}
          onChange = {this.updateCourseState}
          saving = {this.state.saving}
           />

      </div>
    )
  }

}

ManageCoursePage.propTypes = {
  authors: PropTypes.array.isRequired,
  course: PropTypes.object.isRequired
}

//Pull in the react router context so router is available on this.context.router.
ManageCoursePage.contextTypes={
  router: PropTypes.object.isRequired
}

const getCourseById = (courses, id) => {
  return courses.find(c=>c.id === id);
}


function mapStateToProps(state, ownProps) {
  let course = {id:'',watchHref:'',title:'',authorId:'',length:'',category:''};
  
  //from path '/course/:id
  const courseId = ownProps.params.id;
  if(courseId && state.courses.length > 0) {
    course = getCourseById(state.courses, courseId);
  }
  // console.log("from mapStateProps:",state);

  const authorsFormattedForDropdown = state.authors.map(author=>{
    return {
      value: author.id,
      text: author.firstName + ' ' + author.lastName
    };
  });
  // console.log(authorsFormattedForDropdown);
  return {
    //state
    course,
    authors: authorsFormattedForDropdown
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(ManageCoursePage);

// class ManageCoursePage extends Component {
//   constructor()
// }