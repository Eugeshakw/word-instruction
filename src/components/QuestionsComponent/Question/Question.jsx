import React, { useState } from 'react';
import style from './Question.module.scss';
import img from '../../../icons/imgQuiz.png';

const Question = ({
  question,
  onAnswer,
  handleNextQuestion,
  currentQuestion,
  totalQuestions,
}) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [answered, setAnswered] = useState(false);
  const [btnhandleNext, setbtnhandleNext] = useState(true);

  const handleOptionSelect = optionIndex => {
    if (!answered) {
      setSelectedOption(optionIndex);
      const isCorrect = optionIndex === question.correctAnswerIndex;
      onAnswer(isCorrect);
      setAnswered(true);
      setbtnhandleNext(false);
    }
  };

  const resetQuestion = () => {
    setSelectedOption(null);
    setAnswered(false);
    handleNextQuestion();
    setbtnhandleNext(true);
  };
  console.log(currentQuestion + 1);
  return (
    <>
      <div className={style.containerQuestion}>
        <div className={style.conQuesText}>
          <div className={style.conQuesTextAndNumb}>

            <div className={style.tittleTextQues}>
            <h2 className={style.quesText}>{question.text}</h2>
          </div>

          <h3 className={style.currentQuestion}>
            {currentQuestion} of {totalQuestions}
          </h3>
          </div>
          
        </div>
        <div className={style.conQuestionImg}>
          <div className={style.imgcon}>
            <img src={img} alt="" width="393px" height="366px" />
          </div>
          <div className={style.conItem}>
            <ul className={style.btnitem}>
              {question.options.map((option, index) => (
                <li key={index} className={style.listBtnItem}>
                  <button
                    className={`${style.btnQuest} ${
                      answered
                        ? question.correctAnswerIndex === index
                          ? style.correctAnswer
                          : selectedOption === index
                          ? style.wrongAnswer
                          : style.defaultButton
                        : style.defaultButton
                    }`}
                    onClick={() => handleOptionSelect(index)}
                    disabled={answered}
                  >
                    {option}
                  </button>
                </li>
              ))}
            </ul>
            <div className={style.nextbtn}>
              <button onClick={resetQuestion} className={style.nextQuestionBtn} disabled={btnhandleNext}>
                NEXT
              </button>
            </div>
          </div>
        </div>

        {/* {answered && (
          <div>
            {question.correctAnswerIndex === selectedOption ? (
              <p>Правильно!</p>
            ) : (
              <p>
                Неправильно. Правильный ответ:{' '}
                {question.options[question.correctAnswerIndex]}
              </p>
            )}
          </div>
        )} */}
      </div>
    </>
  );
};

export default Question;
