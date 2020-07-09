import React from "react";
import "./index.css";
import ReactDom from "react-dom";

import quizService from "./service/quiz"
import QuestionBank from "./components/QuestionBox";
import Results from "./components/Results";

class Quiz extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            questions: [],
            score: 0,
            total: 0
        }
    }

    getQuestions() {
        quizService().then(question => {
            this.setState({
                questions: question
            })
        })
    }

    selectAnswer(answer, correct){
        if(answer === correct){
            this.setState({
                score: this.state.score + 1
            })
        }
        this.setState({
            total : this.state.total < 5 ? this.state.total +1 : 5
        })

    }

    playAgain = () => {
        this.getQuestions();
        this.setState({
            score: 0,
            total: 0
        })
    }

    componentDidMount() {
        this.getQuestions();
    }


    render() {
        return(
            <div className='container'>
                <div className='title'> Quizz app </div>
                {this.state.questions.length > 0 &&
                this.state.total <5 &&
                this.state.questions.map( ({question, answers, correct, questionID}) =>
                    <QuestionBank
                        question={question}
                        options={answers}
                        selected={(answer) => this.selectAnswer(answer, correct)}
                    />)}
                {this.state.total === 5 ? (<Results score={this.state.score} playAgain={this.playAgain}/>) : null}
            </div>
        )
    }
}

ReactDom.render(<Quiz/>, document.getElementById('root'))