const exams = [
  {
    semester: 1,
    id: 1,
    name: "Introduction to Programming 1",
    ects: 8,
    date: "2023-01-04",
    time: "9:00",
    professor: "John Smith",
    colloquium: 30,
    maxColloquium: 50,
  },
  {
    semester: 1,
    id: 2,
    name: "Introduction to Computer Organization and Architecture 1",
    ects: 6,
    date: "2023-02-10",
    time: "13:00",
    professor: "John Smith",
    colloquium: 27,
    maxColloquium: 30,
  },
  {
    semester: 1,
    id: 3,
    name: "Discrete Mathematics",
    ects: 6,
    date: "2023-01-05",
    time: "17:00",
    professor: "Jane Malkovic",
    colloquium: 12,
    maxColloquium: 20,
  },

  {
    semester: 2,
    id: 4,
    name: "Analysis 1",
    ects: 8,
    date: "2023-06-04",
    time: "9:00",
    professor: "Alex Boring",
    colloquium: 30,
    maxColloquium: 50,
  },
  {
    semester: 2,
    id: 5,
    name: "Introduction to Programming 2",
    ects: 8,
    date: "2023-06-10",
    time: "13:00",
    professor: "John Smith",
    colloquium: 27,
    maxColloquium: 30,
  },
  {
    semester: 2,
    id: 6,
    name: "Discrete Mathematics 2",
    ects: 6,
    date: "2023-07-15",
    time: "17:00",
    professor: "Jane Malkovic",
    colloquium: 12,
    maxColloquium: 20,
  },

  {
    semester: 3,
    id: 7,
    name: "Operating Systems",
    ects: 6,
    date: "2023-01-08",
    time: "9:00",
    professor: "Michael Jackson",
    colloquium: 12,
    maxColloquium: 50,
  },
  {
    semester: 3,
    id: 8,
    name: "Geometry",
    ects: 8,
    date: "2023-02-11",
    time: "13:00",
    professor: "Sean Hanks",
    colloquium: 27,
    maxColloquium: 30,
  },
  {
    semester: 3,
    id: 9,
    name: "Design and Analysis of Algorithms",
    ects: 6,
    date: "2023-01-17",
    time: "17:00",
    professor: "Tom Bale",
    colloquium: 12,
    maxColloquium: 20,
  },

  {
    semester: 4,
    id: 10,
    name: "Object-Oriented Programming",
    ects: 6,
    date: "2023-07-08",
    time: "9:00",
    professor: "Mark Mayer",
    colloquium: 12,
    maxColloquium: 50,
  },
  {
    semester: 4,
    id: 11,
    name: "Analysis 3",
    ects: 8,
    date: "2023-06-11",
    time: "13:00",
    professor: "Susan Bracken",
    colloquium: 27,
    maxColloquium: 30,
  },
  {
    semester: 4,
    id: 12,
    name: "Introduction to Web and Internet Technologies",
    ects: 6,
    date: "2023-06-17",
    time: "17:00",
    professor: "Patrick Simpson",
    colloquium: 12,
    maxColloquium: 20,
  },

  {
    semester: 5,
    id: 13,
    name: "Relational Databases",
    ects: 6,
    date: "2023-02-22",
    time: "9:00",
    professor: "Nicholas Petrov",
    colloquium: 26,
    maxColloquium: 50,
  },
  {
    semester: 5,
    id: 14,
    name: "Computer Graphics",
    ects: 8,
    date: "2023-01-22",
    time: "13:00",
    professor: "Stephanie Consul",
    colloquium: 27,
    maxColloquium: 30,
  },
  {
    semester: 5,
    id: 15,
    name: "Probability",
    ects: 6,
    date: "2023-06-17",
    time: "17:00",
    professor: "Mick Moron",
    colloquium: 12,
    maxColloquium: 20,
  },

  {
    semester: 6,
    id: 16,
    name: "Artificial Intelligence",
    ects: 6,
    date: "2023-07-16",
    time: "9:00",
    professor: "Mark Goodman",
    colloquium: 26,
    maxColloquium: 50,
  },
  {
    semester: 6,
    id: 17,
    name: "Data Mining 1",
    ects: 8,
    date: "2023-07-12",
    time: "13:00",
    professor: "Emily Brown",
    colloquium: 11,
    maxColloquium: 30,
  },
  {
    semester: 6,
    id: 18,
    name: "Programming Language Paradigms",
    ects: 6,
    date: "2023-06-17",
    time: "17:00",
    professor: "Walter White",
    colloquium: 0,
    maxColloquium: 0,
  },

  {
    semester: 7,
    id: 19,
    name: "Software Development",
    ects: 6,
    date: "2023-01-16",
    time: "9:00",
    professor: "Sasha Goodman",
    colloquium: 49,
    maxColloquium: 50,
  },
  {
    semester: 7,
    id: 20,
    name: "Computer Networks",
    ects: 8,
    date: "2023-02-13",
    time: "13:00",
    professor: "Emily Black",
    colloquium: 30,
    maxColloquium: 30,
  },
  {
    semester: 7,
    id: 21,
    name: "A course from optional block R2",
    ects: 6,
    date: "2023-01-17",
    time: "17:00",
    professor: "Walter White",
    colloquium: 0,
    maxColloquium: 0,
  },

  {
    semester: 8,
    id: 22,
    name: "Database Design",
    ects: 6,
    date: "2023-06-28",
    time: "9:00",
    professor: "Sasha Smith",
    colloquium: 19,
    maxColloquium: 50,
  },
  {
    semester: 8,
    id: 23,
    name: "Technical and Research Methodology",
    ects: 8,
    date: "2023-07-13",
    time: "13:00",
    professor: "Kate Johnson",
    colloquium: 30,
    maxColloquium: 30,
  },
  {
    semester: 8,
    id: 24,
    name: "A course from optional block K",
    ects: 6,
    date: "2023-01-17",
    time: "17:00",
    professor: "Walter White",
    colloquium: 0,
    maxColloquium: 0,
  },
];

export default exams;
