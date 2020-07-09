import React from "react";

class Results extends React.Component {

    render() {
        return(
            <div className='score-board'>
                <div className='score'>
                    You scored {this.props.score} / 5 correct answers
                </div>
                <button className='playBtn' onClick={this.props.playAgain}>Play Again!</button>
            </div>
        )
    }

}

export default Results;