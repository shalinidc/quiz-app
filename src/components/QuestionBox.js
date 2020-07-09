import React, {useState, useEffect} from "react";

//converting into class component
class QuestionBank extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            options: props.options
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.options !== this.props.options){
            this.setState({
                options: this.props.options
            })
        }
    }

    render() {
        return(
            <div className='questionBox'>
                <div className='question'>
                    {this.props.question}
                </div>
                {this.state.options.map((text,index) => <button key={index} className="answerBtn" onClick={
                    ()=>{
                        this.setState({options: [text]});
                        this.props.selected(text);
                    }}>
                    {text}
                </button> )}
            </div>
        )
    }

}

/*const QuestionBank = ({question, options, selected}) => {

    const [option, setOptions] = useState(options);

    useEffect(() => { setOptions(options) }, [options]);

    return(
        <div className='questionBox'>
            <div className='question'> {question} </div>
                {option.map((text,index) =>
                <button key={index} className="answerBtn" onClick={() => {
                setOptions([text])
                selected(text)}}> {text} </button>
                )}
        </div>
    )
}*/

export default QuestionBank;