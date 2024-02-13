import React, { useState } from 'react';
import {
  TextField,
  Button,
  Typography,
  Card,
  CardContent,
  List,
  makeStyles,
} from '@material-ui/core';
import api from '../../services/api';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 600,
    margin: 'auto',
    textAlign: 'center',
    paddingTop: theme.spacing(4),
  },
  input: {
    marginBottom: theme.spacing(2),
  },
  errorText: {
    color: 'red',
    marginBottom: theme.spacing(2),
  },
  courseList: {
    marginTop: theme.spacing(2),
  },
  card: {
    marginBottom: theme.spacing(2),
  },
  courseImage: {
    maxWidth: '100%',
    height: 'auto',
    borderRadius: theme.shape.borderRadius,
  },
}));

const StudentDashboard = () => {
  const classes = useStyles();
  const [studentId, setStudentId] = useState('');
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [error, setError] = useState('');

  const handleIdSubmit = () => {
    const enrolledStudent = api.find((course) =>
      course.students.find((s) => s.id === parseInt(studentId, 10))
    );

    if (enrolledStudent) {
      const enrolledCourses = api.filter((course) =>
        course.students.find((s) => s.id === parseInt(studentId, 10))
      );

      setEnrolledCourses(enrolledCourses);
      setError('');
    } else {
      setEnrolledCourses([]);
      setError('Invalid student ID. Please try again.');
    }
  };

  return (
    <div className={classes.root}>
      <Typography variant="h4" gutterBottom>
        Student Dashboard
      </Typography>

      <TextField
        label="Enter Your Student ID"
        type="text"
        value={studentId}
        onChange={(e) => setStudentId(e.target.value)}
        className={classes.input}
      />

      <Button variant="contained" color="primary" onClick={handleIdSubmit}>
        Submit
      </Button>

      {error && <Typography className={classes.errorText}>{error}</Typography>}

      {enrolledCourses && enrolledCourses.length > 0 && (
        <div className={classes.courseList}>
          <Typography variant="h5" gutterBottom>
            Your Enrolled Courses
          </Typography>
          <List>
            {enrolledCourses.map((course) => (
              <Card key={course.id} className={classes.card}>
                <CardContent>
                  {/* <img
                    src={course.thumbnail}
                    alt={course.name}
                    className={classes.courseImage}
                  /> */}
                  <Typography variant="h6" gutterBottom>
                    Course Name: {course.name}
                  </Typography>
                  <Typography variant="body2">
                    Instructor: {course.instructor}
                  </Typography>
                  <Typography variant="body2">
                    Due Date: {course.dueDate}
                  </Typography>
                  <Typography variant="body2">
                    Progress: {course.progress}%
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </List>
        </div>
      )}
    </div>
  );
};

export default StudentDashboard;
