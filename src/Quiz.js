import React, {Component} from 'react'

let quizData = require('./quiz_data.json')

class Quiz extends Component{
  constructor(props){
    super(props)
    this.state = {
      quiz_position: 1
    }
  }
  render(){
    const question = quizData.quiz_questions[0].instruction_text
    return(
      <div>
        <div className="QuizQuestion">
          {question}
        </div>
      </div>
    )
  }
}

export default Quiz
