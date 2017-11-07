import React, {PropTypes, Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseForm from './courseForm';

class ManageCoursePage extends Component {

  constructor(props, context) {
    super(props,context)

    this.state = {
      course: Object.assign({}, this.props.course),
      // allAuthors: Object.assign({}, this.props.authors),
      errors: {}
    }

    this.updateCourseState = this.updateCourseState.bind(this);
    this.saveCourse = this.saveCourse.bind(this);
  }

  updateCourseState(event){
    const field= event.target.name;
    let course=this.state.course;
    course[field] = event.target.value;
    return this.setState({course});
  }

  saveCourse(event) {
    event.preventDefault();
    this.props.actions.saveCourse(this.state.course);
    this.context.router.push('/courses');
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

function mapStateToProps(state, ownProps) {
  // console.log("from mapStateProps:",state);
  let course = {id:'',watchHref:'',title:'',authorId:'',length:'',category:''};

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