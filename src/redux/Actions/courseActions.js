import { getCourses } from "../../services/api";
import { FETCH_COURSES, FETCH_COURSES_ERROR } from "./courseActionTypes";

export const fetchCourses = (courses) => ({
  type: FETCH_COURSES,
  payload: courses,
});

export const fetchCoursesError = (error) => ({
  type: FETCH_COURSES_ERROR,
  payload: error,
});

export const fetchCoursesAsync = () => async (dispatch) => {
  try {
    const coursesData = await getCourses();
    if (Array.isArray(coursesData)) {
      dispatch({
        type: FETCH_COURSES,
        payload: coursesData,
      });
    } else {
      dispatch(fetchCoursesError("Invalid data format"));
    }
  } catch (error) {
    dispatch(fetchCoursesError(error));
  }
};

export const markCourseCompleted = (courseId) => ({
  type: "MARK_COURSE_COMPLETED",
  payload: courseId,
});
