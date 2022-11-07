import { makeStyles } from "@material-ui/core";

import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@material-ui/core";
import { useState } from "react";
import { DataGrid } from "@material-ui/data-grid";

const useStyles = makeStyles((theme) => ({
  importantText: {
    ...theme.typography.important,
  },
}));

const columns = [
  { field: "semester", headerName: "Semester", width: 30 },
  { field: "name", headerName: "Subject Name", width: 150 },
  { field: "espb", headerName: "ECTS", width: 30 },
  { field: "date", headerName: "Date", width: 90 },
  { field: "time", headerName: "Time", width: 90 },
  { field: "professor", headerName: "Professor", width: 150 },
  { field: "colloquium", headerName: "Colloquium", width: 30 },
];

const DUMMY_SUBJECTS = [
  {
    semester: 1,
    subjects: [
      {
        id: 1,
        name: "Introduction to Programming 1",
        espb: 8,
        date: "2023-01-04",
        time: "9:00",
        professor: "John Smith",
        colloquium: 30,
        maxColloquium: 50,
      },
      {
        id: 2,
        name: "Introduction to Computer Organization and Architecture 1",
        espb: 6,
        date: "2023-02-10",
        time: "13:00",
        professor: "John Smith",
        colloquium: 27,
        maxColloquium: 30,
      },
      {
        id: 3,
        name: "Discrete Mathematics",
        espb: 6,
        date: "2023-01-05",
        time: "17:00",
        professor: "Jane Malkovic",
        colloquium: 12,
        maxColloquium: 20,
      },
    ],
  },
  {
    semester: 2,
    subjects: [
      {
        id: 4,
        name: "Analysis 1",
        espb: 8,
        date: "2023-06-04",
        time: "9:00",
        professor: "Alex Boring",
        colloquium: 30,
        maxColloquium: 50,
      },
      {
        id: 5,
        name: "Introduction to Programming 2",
        espb: 8,
        date: "2023-06-10",
        time: "13:00",
        professor: "John Smith",
        colloquium: 27,
        maxColloquium: 30,
      },
      {
        id: 6,
        name: "Discrete Mathematics 2",
        espb: 6,
        date: "2023-07-15",
        time: "17:00",
        professor: "Jane Malkovic",
        colloquium: 12,
        maxColloquium: 20,
      },
    ],
  },
  {
    semester: 3,
    subjects: [
      {
        id: 7,
        name: "Operating Systems",
        espb: 6,
        date: "2023-01-08",
        time: "9:00",
        professor: "Michael Jackson",
        colloquium: 12,
        maxColloquium: 50,
      },
      {
        id: 8,
        name: "Geometry",
        espb: 8,
        date: "2023-02-11",
        time: "13:00",
        professor: "Sean Hanks",
        colloquium: 27,
        maxColloquium: 30,
      },
      {
        id: 9,
        name: "Design and Analysis of Algorithms",
        espb: 6,
        date: "2023-01-17",
        time: "17:00",
        professor: "Tom Bale",
        colloquium: 12,
        maxColloquium: 20,
      },
    ],
  },
  {
    semester: 4,
    subjects: [
      {
        id: 10,
        name: "Object-Oriented Programming",
        espb: 6,
        date: "2023-07-08",
        time: "9:00",
        professor: "Mark Mayer",
        colloquium: 12,
        maxColloquium: 50,
      },
      {
        id: 11,
        name: "Analysis 3",
        espb: 8,
        date: "2023-06-11",
        time: "13:00",
        professor: "Susan Bracken",
        colloquium: 27,
        maxColloquium: 30,
      },
      {
        id: 12,
        name: "Introduction to Web and Internet Technologies",
        espb: 6,
        date: "2023-06-17",
        time: "17:00",
        professor: "Patrick Simpson",
        colloquium: 12,
        maxColloquium: 20,
      },
    ],
  },
  {
    semester: 5,
    subjects: [
      {
        id: 13,
        name: "Relational Databases",
        espb: 6,
        date: "2023-02-22",
        time: "9:00",
        professor: "Nicholas Petrov",
        colloquium: 26,
        maxColloquium: 50,
      },
      {
        id: 14,
        name: "Computer Graphics",
        espb: 8,
        date: "2023-01-22",
        time: "13:00",
        professor: "Stephanie Consul",
        colloquium: 27,
        maxColloquium: 30,
      },
      {
        id: 15,
        name: "Probability",
        espb: 6,
        date: "2023-06-17",
        time: "17:00",
        professor: "Mick Moron",
        colloquium: 12,
        maxColloquium: 20,
      },
    ],
  },
  {
    semester: 6,
    subjects: [
      {
        id: 16,
        name: "Artificial Intelligence",
        espb: 6,
        date: "2023-07-16",
        time: "9:00",
        professor: "Mark Goodman",
        colloquium: 26,
        maxColloquium: 50,
      },
      {
        id: 17,
        name: "Data Mining 1",
        espb: 8,
        date: "2023-07-12",
        time: "13:00",
        professor: "Emily Brown",
        colloquium: 11,
        maxColloquium: 30,
      },
      {
        id: 18,
        name: "Programming Language Paradigms",
        espb: 6,
        date: "2023-06-17",
        time: "17:00",
        professor: "Walter White",
        colloquium: 0,
        maxColloquium: 0,
      },
    ],
  },
  {
    semester: 7,
    subjects: [
      {
        id: 19,
        name: "Software Development",
        espb: 6,
        date: "2023-01-16",
        time: "9:00",
        professor: "Sasha Goodman",
        colloquium: 49,
        maxColloquium: 50,
      },
      {
        id: 20,
        name: "Computer Networks",
        espb: 8,
        date: "2023-02-13",
        time: "13:00",
        professor: "Emily Black",
        colloquium: 30,
        maxColloquium: 30,
      },
      {
        id: 21,
        name: "A course from optional block R2",
        espb: 6,
        date: "2023-01-17",
        time: "17:00",
        professor: "Walter White",
        colloquium: 0,
        maxColloquium: 0,
      },
    ],
  },
  {
    semester: 8,
    subjects: [
      {
        id: 22,
        name: "Database Design",
        espb: 6,
        date: "2023-06-28",
        time: "9:00",
        professor: "Sasha Smith",
        colloquium: 19,
        maxColloquium: 50,
      },
      {
        id: 23,
        name: "Technical and Research Methodology",
        espb: 8,
        date: "2023-07-13",
        time: "13:00",
        professor: "Kate Johnson",
        colloquium: 30,
        maxColloquium: 30,
      },
      {
        id: 24,
        name: "A course from optional block K",
        espb: 6,
        date: "2023-01-17",
        time: "17:00",
        professor: "Walter White",
        colloquium: 0,
        maxColloquium: 0,
      },
    ],
  },
];

const ExamsPage = (props) => {
  const classes = useStyles();

  const [semester, setSemester] = useState(0);
  const [term, setTerm] = useState(0);

  return (
    <Grid container direction="row" style={{ marginBottom: 1000 }}>
      {/*register*/}
      <Grid item>
        <Grid container direction="column">
          <Grid item>
            <Grid container direction="column">
              <Grid item>
                <Typography variant="h4">Exam Registration</Typography>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1">
                  Hi, choose the desired exam from the corresponding semester
                  and the term in which you want to take it!
                </Typography>
              </Grid>
              <Grid item>
                <Typography>
                  Be careful, you{" "}
                  <span className={classes.importantText}>CANNOT</span> choose
                  exams for which you have not passed the pre-exam requirements.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container>
              <Grid item>
                <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
                  <InputLabel id="select-semester-label">Semester</InputLabel>
                  <Select
                    labelId="select-semester-label"
                    id="select-semester"
                    value={semester}
                    onChange={(event) => {
                      setSemester(event.target.value);
                    }}
                  >
                    <MenuItem value={0}>
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={1}>First</MenuItem>
                    <MenuItem value={2}>Second</MenuItem>
                    <MenuItem value={3}>Third</MenuItem>
                    <MenuItem value={4}>Fourth</MenuItem>
                    <MenuItem value={5}>Fifth</MenuItem>
                    <MenuItem value={6}>Sixth</MenuItem>
                    <MenuItem value={7}>Seventh</MenuItem>
                    <MenuItem value={8}>Eighth</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item>
                <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
                  <InputLabel id="select-term-label">Term</InputLabel>
                  <Select
                    labelId="select-term-label"
                    id="select-term"
                    value={term}
                    onChange={(event) => {
                      setTerm(event.target.value);
                    }}
                  >
                    <MenuItem value={0}>
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={1}>January</MenuItem>
                    <MenuItem value={2}>February</MenuItem>
                    <MenuItem value={3}>June</MenuItem>
                    <MenuItem value={4}>July</MenuItem>
                    <MenuItem value={5}>September</MenuItem>
                    <MenuItem value={6}>October</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </Grid>
          <Grid item style={{ width: "100%" }}>
            <DataGrid
              rows={DUMMY_SUBJECTS.filter(
                (dsubj) => dsubj.semester === semester
              ).map((dsubj) => dsubj.subjects)}
              columns={columns}
              pageSize={5}
              checkboxSelection
              disableSelectionOnClick
            ></DataGrid>
          </Grid>
        </Grid>
      </Grid>
      {/*  notificaitons*/}
    </Grid>
  );
};

export default ExamsPage;
