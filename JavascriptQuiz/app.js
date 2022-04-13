//@ts-check

import { question } from "./Data/questions.js"; /*siempre debe ir la extensión, en este caso es js*/
import { Quiz } from "./models/Quiz.js";
import {UI} from "./models/UI.js"

/**
 * 
 * @param {Quiz} quiz Objeto quiz
 * @param {UI} ui Objeto ui
 */


const renderPage = (quiz,ui) =>{
    if(quiz.isEnded()){
        console.log(quiz.score)
        ui.showScore(quiz.score)
    }else{
        ui.showQuestion(quiz.getQuestionsIndex().text);
    ui.showChoice(quiz.getQuestionsIndex().choices,(currentChoice)=>{
        quiz.guess(currentChoice)
    renderPage(quiz,ui);

    });
    ui.showProgress(quiz.questionsIndex + 1, quiz.questions.length)
    }
    
    
     
}

function  main(){
    const quiz = new Quiz(question);
    const ui = new UI();

    renderPage(quiz, ui)

}
main();