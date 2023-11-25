class QuestionStore {
  constructor() {
    this.questions = [];
  }

  addQuestion(question) {
    this.questions.push(question);
  }

  getQuestions() {
    return this.questions;
  }
}

module.exports = QuestionStore;
