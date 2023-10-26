import React from 'react';
import style from '../titleStatrt/titleStart.module.scss';
// import QuestionsComponent from '../../QuestionsComponent/QuestionsComponent';
import Quiz from 'components/QuestionsComponent/Quiz/Quiz';
import { ImgReadContainer } from 'components/readerImg/imgReadContainer/ImgReadContainer';
import { useState } from 'react';

const TitleStart = () => {
    
    const [showQuestions, setShowQuestions] = useState(false);

    const btnhandleSubmit = () => {
      
      setShowQuestions(true);
    }

 
const handleReset = () => {
  setShowQuestions(false);
}
  return (
    <>
    
    
      {showQuestions ? (
        <>
        <div className={style.containerQuiz}>

          <Quiz  handleReset={handleReset}/> 
          
        </div>
        
        </>
        

      ) : (
        <>
        <ImgReadContainer/>
        <div className={style.container}>
          <h1 className={style.title}>Quiz starts here</h1>
          <p className={style.par}>Are You an E-Reader Expert?</p>

          <button type="button" className={style.btnStart} onClick={btnhandleSubmit}>
            Get ready
          </button>
          </div>
        </>
      )}
   
  </>
  );
};

export default TitleStart;
