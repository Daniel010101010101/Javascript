//@ts-check

import { Question } from "./question.js"

export class Quiz{

    questionsIndex = 0
    score = 0
    /**
     * 
     * @param {Question[]} questions 
     */

    constructor(questions){
        this.questions = questions
    }
    /**
     * 
     * @returns {Question} retorna la pregunta
     */

    getQuestionsIndex(){
        return this.questions[this.questionsIndex] 
    }

    /*para finalizar la app*/
    isEnded(){
        return this.questions.length === this.questionsIndex
    }
    /**
     * 
     * @param {string} answer 
     */

    /*Aumentar puntaje y pasar de pregunta */
    guess(answer){
        console.log(answer)
        if (this.getQuestionsIndex().correctAnswer(answer)){
            this.score++
        }
        this.questionsIndex++

    }
}
