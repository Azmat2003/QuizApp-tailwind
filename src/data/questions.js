const questions = [
  {
    id: 0,

    question: "Are you guys ready for the quiz Level 1?",

    image: "",

    options: [
      "Yes"
    ],

    answer: "Yes",

    timer: 10
  },

  {
    id: 1,

    question: `Consider the following 3 × 3 array:

let arr = [
  [10, 20, 30],
  [40, 50, 60],
  [70, 80, 90]
];

What is the value of arr[1][2]?`,

    image: "",

    options: [
      "30",
      "50",
      "60",
      "80"
    ],

    answer: "60",

    timer: 30
  },

  {
    id: 2,

    question: "What is the time complexity of Binary Search?",

    image: "",

    options: [
      "O(1)",
      "O(n)",
      "O(log n)",
      "O(n²)"
    ],

    answer: "O(log n)",

    timer: 30
  },

  {
    id: 3,

    question: "Where are JavaScript arrays generally stored in memory?",

    image: "",

    options: [
      "Stack",
      "Heap",
      "CPU register",
      "Cache memory"
    ],

    answer: "Heap",

    timer: 45
  },

  {
    id: 4,

    question: "What is the Big O time complexity of 5n² + 3n?",

    image: "",

    options: [
      "O(1)",
      "O(n)",
      "O(n²)",
      "O(n³)"
    ],

    answer: "O(n²)",

    timer: 30
  },

  {
    id: 5,

    question: "Which method is used to assign a key-value pair in a JavaScript Map Data Structure?",

    image: "",

    options: [
      "add()",
      "set()",
      "push()",
      "insert()"
    ],

    answer: "set()",

    timer: 20
  },

  {
    id: 6,

    question: "Which method is used to insert an element into a JavaScript Set Data Structure?",

    image: "",

    options: [
      "set()",
      "push()",
      "add()",
      "insert()"
    ],

    answer: "add()",

    timer: 30
  },

  {
    id: 7,

    question: "What is the worst-case time complexity of Bubble Sort?",

    image: "",

    options: [
      "O(n)",
      "O(log n)",
      "O(n log n)",
      "O(n²)"
    ],

    answer: "O(n²)",

    timer: 30
  },
  
  {
    id: 8,

    question: "What is the output?",

    // image: 'q8.png', => public
    image : 'src/assets/q8.png', // => assets folder

    options: [
      "2",
      "3",
      "4",
      "5"
    ],

    answer: "3",

    timer: 30
  },

];

export default questions;