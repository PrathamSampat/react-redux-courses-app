import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  makeStyles,
} from '@material-ui/core';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 600,
    margin: 'auto',
    marginTop: theme.spacing(2),
  },
  heading: {
    fontSize: theme.typography.pxToRem(20),
    fontWeight: theme.typography.fontWeightRegular,
  },
  prerequisites: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  syllabusItem: {
    marginTop: theme.spacing(1),
    paddingLeft: theme.spacing(2),
    borderLeft: `2px solid ${theme.palette.primary.main}`,
  },
}));

const CourseDetails = () => {
  const classes = useStyles();
  const { id } = useParams();
  const courseId = parseInt(id, 10);
  const course = useSelector((state) =>
    state.course.courses.find((c) => c.id === courseId)
  );

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <div className={classes.root}>
      <Typography variant="h4" gutterBottom>
        {course.name}
      </Typography>
      <Typography variant="body1" className={classes.heading}>
        Instructor: {course.instructor}
      </Typography>
      <Typography variant="body1" className={classes.heading}>
        Description: {course.description}
      </Typography>
      <Typography variant="body1" className={classes.heading}>
        Enroll status: {course.enrollmentStatus}
      </Typography>
      <Typography variant="body1" className={classes.heading}>
        Duration: {course.duration}
      </Typography>
      <Typography variant="body1" className={classes.heading}>
        Schedule: {course.schedule}
      </Typography>
      <Typography variant="body1" className={classes.heading}>
        Location: {course.location}
      </Typography>

      <div className={classes.prerequisites}>
        <Typography variant="h6">Prerequisites:</Typography>
        <ul>
          {course.prerequisites.map((prerequisite, index) => (
            <li key={index}>{prerequisite}</li>
          ))}
        </ul>
      </div>

      {course.syllabus && (
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography variant="h6">Syllabus</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              {course.syllabus.map((item) => (
                <div key={item.week} className={classes.syllabusItem}>
                  <Typography variant="subtitle1">
                    Week {item.week}: {item.topic}
                  </Typography>
                  <Typography>{item.content}</Typography>
                </div>
              ))}
            </Typography>
          </AccordionDetails>
        </Accordion>
      )}
    </div>
  );
};

export default CourseDetails;
