import {
  FETCH_COURSES,
  FETCH_COURSES_ERROR,
  MARK_COURSE_COMPLETED,
} from "../Actions/courseActionTypes";

const initialState = {
  courses: [],
};

const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COURSES:
      return {
        ...state,
        courses: action.payload,
      };

    case MARK_COURSE_COMPLETED:
      const updatedCourses = state.courses.map((course) => {
        if (course.id === action.payload) {
          return { ...course, completed: true };
        }
        return course;
      });

      return {
        ...state,
        courses: updatedCourses,
      };

    case FETCH_COURSES_ERROR:
      console.error(action.payload);
      return state;

    default:
      return state;
  }
};

export default courseReducer;
