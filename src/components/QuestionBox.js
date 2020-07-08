import React from "react";

//converting into class component
class QuestionBox extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            options: this.props.options
        }
    }

    render() {
        return(
            <div className='questionBox'>
                <div className='question'>
                    {this.props.question}
                </div>
                {this.state.options.map((text,index) => <button key={index} className="answerBtn" onClick={()=>this.setState({options: [text]})}>
                    {text}
                </button> )}
            </div>
        )
    }

}

/*const QuestionBank = ({question, options}) => {

    const [option, setOptions] = useState(options);

    return(
        <div className='questionBox'>
            <div className='question'> {question} </div>
                {option.map((text,index) =>
                <button key={index} className="answerBtn" onClick={() => setOptions([text])}> {text} </button>
                )}
        </div>
    )
}*/

export default QuestionBox;