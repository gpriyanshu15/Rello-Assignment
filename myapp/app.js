const Question = require("./question");
const QuestionStore = require("./questionStore");
const QuestionPaperGenerator = require("./questionPaperGenerator");


const question1 = new Question(
  "What is the speed of light",
  "Physics",
  "Waves",
  "Easy",
  5
);
const question2 = new Question(
  "Describe the theory of relativity",
  "Physics",
  "Relativity",
  "Medium",
  10
);
const question3 = new Question(
  "Solve the quadratic equation",
  "Mathematics",
  "Algebra",
  "Medium",
  8
);
const question4 = new Question(
  "Explain the process of photosynthesis",
  "Biology",
  "Botany",
  "Hard",
  15
);
const question5 = new Question(
  "Define entropy",
  "Physics",
  "Thermodynamics",
  "Hard",
  12
);

const questionStore = new QuestionStore();
questionStore.addQuestion(question1);
questionStore.addQuestion(question2);
questionStore.addQuestion(question3);
questionStore.addQuestion(question4);
questionStore.addQuestion(question5);

const questionPaperGenerator = new QuestionPaperGenerator(questionStore);

const difficultyDistribution = {
  Easy: 0.2,
  Medium: 0.5,
  Hard: 0.3,
};

const totalMarks = 100;

const generatedPaper = questionPaperGenerator.generateQuestionPaper(
  totalMarks,
  difficultyDistribution
);


console.log("Generated Question Paper:");
generatedPaper.forEach((question) => {
  console.log(
    `Question: ${question.question}, Marks: ${question.marks}, Difficulty: ${question.difficulty}`
  );
});
