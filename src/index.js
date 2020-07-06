import React from "react";
import "./index.css";
import ReactDom from "react-dom";

import quizService from "./service/quiz"
import QuestionBank from "./components/QuestionBox";

class Quiz extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            questions: []
        }
    }

    getQuestions() {
        quizService().then(question => {
        this.setState({
            questions: question
        })
        })
    }

    componentDidMount() {
        this.getQuestions();
    }


    render() {
        return(
            <div className='container'>
                <div className='title'> Quizz app </div>
                {this.state.questions.length > 0 && this.state.questions.map( ({question, answers, correct, questionID}) =>
                    <QuestionBank question={question} options={answers} />)}
            </div>
        )
    }
}

ReactDom.render(<Quiz/>, document.getElementById('root'))