import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCoursesAsync } from "../../redux/Actions/courseActions";
import { NavLink } from "react-router-dom";
import { markCourseCompleted } from "../../redux/Actions/courseActions";
import { Card, CardContent, Button, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
    margin: theme.spacing(2),
  },
  completed: {
    color: 'green',
    fontWeight: 'bold',
  },
  detailsButton: {
    marginRight: theme.spacing(1),
  },
}));

const CourseList = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.course.courses);

  const handleMarkCompleted = (courseId) => {
    dispatch(markCourseCompleted(courseId));
  };

  useEffect(() => {
    dispatch(fetchCoursesAsync());
  }, [dispatch]);

  return (
    <div>
      <h2>Course Listing</h2>
      {courses.map((course) => (
        <Card key={course.id} className={classes.root}>
          <CardContent>
            <Typography variant="h5" component="h2">
              {course.name}
            </Typography>
            <Typography color="textSecondary">
              {course.description}
            </Typography>
            <NavLink to={`/courses/${course.id}`} className={classes.detailsButton}>
              <Button variant="outlined" color="primary">
                View Details
              </Button>
            </NavLink>
            {!course.completed ? (
              <Button onClick={() => handleMarkCompleted(course.id)} variant="contained" color="primary">
                Mark as Completed
              </Button>
            ) : (
              <Typography className={classes.completed}>Completed</Typography>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default CourseList;
