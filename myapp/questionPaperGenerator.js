const _ = require("lodash");

class QuestionPaperGenerator {
  constructor(questionStore) {
    this.questionStore = questionStore;
  }

  generateQuestionPaper(totalMarks, difficultyDistribution) {
    const questionPaper = [];
    _.forEach(difficultyDistribution, (percentage, difficulty) => {
      const difficultyMarks = Math.round(totalMarks * percentage);
      const questions = this.getQuestionsByDifficulty(
        difficulty,
        difficultyMarks
      );
      questionPaper.push(...questions);
    });

    
    const shuffledQuestionPaper = _.shuffle(questionPaper);
    return shuffledQuestionPaper;
  }

  getQuestionsByDifficulty(difficulty, marks) {
    const eligibleQuestions = this.questionStore
      .getQuestions()
      .filter((question) => question.difficulty === difficulty);

    
    const selectedMarks = Math.min(marks, eligibleQuestions.length);

    const selectedQuestions = _.sampleSize(eligibleQuestions, selectedMarks);

    return selectedQuestions;
  }
}

module.exports = QuestionPaperGenerator;
