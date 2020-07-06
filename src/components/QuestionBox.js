import React, {useState} from "react";

const QuestionBank = ({question, options}) => {

    const [option, setOptions] = useState(options);

    return(
        <div className='questionBox'>
            <div className='question'> {question} </div>
                {option.map((text,index) =>
                <button key={index} className="answerBtn" onClick={() => setOptions([text])}> {text} </button>
                )}
        </div>
    )
}

export default QuestionBank;