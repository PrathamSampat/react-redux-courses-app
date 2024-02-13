const api = [
  {
    id: 1,
    name: "Introduction to React Native",
    instructor: "John Doe",
    description:
      "Learn the basics of React Native development and build your first mobile app.",
    enrollmentStatus: "Open",
    thumbnail: "../../images/react.png",
    duration: "8 weeks",
    schedule: "Tuesdays and Thursdays, 6:00 PM - 8:00 PM",
    location: "Online",
    prerequisites: ["Basic JavaScript knowledge", "Familiarity with React"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to React Native",
        content:
          "Overview of React Native, setting up your development environment.",
      },
      {
        week: 2,
        topic: "Building Your First App",
        content: "Creating a simple mobile app using React Native components.",
      },
    ],
    students: [
      {
        id: 101,
        name: "Alice Johnson",
        email: "alice@example.com",
        password: "admin",
      },
      {
        id: 102,
        name: "Bob Smith",
        email: "bob@example.com",
        password: "admin",
      },
    ],
    completed: false,
    dueDate: "2024-02-28",
    progress: 20,
  },
  {
    id: 2,
    name: "Advanced React Development",
    instructor: "Jane Smith",
    description: "Dive deep into advanced concepts of React development.",
    enrollmentStatus: "Open",
    thumbnail: "../../images/react.png",
    duration: "10 weeks",
    schedule: "Mondays and Wednesdays, 7:00 PM - 9:00 PM",
    location: "Online",
    prerequisites: ["Intermediate React knowledge"],
    syllabus: [
      {
        week: 1,
        topic: "State Management with Redux",
        content: "Understanding and implementing state management using Redux.",
      },
      {
        week: 2,
        topic: "React Hooks",
        content:
          "Exploring and mastering React Hooks for functional components.",
      },
    ],
    students: [
      {
        id: 103,
        name: "Charlie Brown",
        email: "charlie@example.com",
        password: "admin",
      },
      {
        id: 105,
        name: "Diana Johnson",
        email: "diana@example.com",
        password: "admin",
      },
    ],
    completed: false,
    dueDate: "2024-04-01",
    progress: 40,
  },
  {
    id: 3,
    name: "Node.js Fundamentals",
    instructor: "Sam Wilson",
    description:
      "Learn the basics of Node.js and server-side JavaScript development.",
    enrollmentStatus: "Open",
    thumbnail: "../../images/react.png",
    duration: "6 weeks",
    schedule: "Tuesdays and Thursdays, 5:00 PM - 7:00 PM",
    location: "Online",
    prerequisites: ["Basic JavaScript knowledge"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to Node.js",
        content: "Overview and setup of Node.js environment.",
      },
      {
        week: 2,
        topic: "Express.js Framework",
        content: "Building web applications with Express.js.",
      },
    ],
    students: [
      {
        id: 105,
        name: "Eva Brown",
        email: "eva@example.com",
        password: "admin",
      },
      {
        id: 106,
        name: "Frank Smith",
        email: "frank@example.com",
        password: "admin",
      },
    ],
    completed: true,
    dueDate: "2024-03-15",
    progress: 100,
  },
];

export const getCourses = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Fetched courses:", api);
      resolve(api);
    }, 1000);
  });
};

export default api;
