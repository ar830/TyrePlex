import React from 'react';
import '../Style/Question.css';

function Question(){
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-8">
                    <h2 className="Que">Have a question about Tyres?</h2>
                  

                    <h2 className="txt">Get an answer in 24 hours from our experts.</h2>

                    <input type="text" className="placeholder" placeholder="Ask or search your question?" />

                </div>

                <div className="col-md-4">

                <img src="../images/haveQuestion-bg.webp" alt="Question Background" />

                </div>
            </div>
    
        </div>
    )

}

export default Question;