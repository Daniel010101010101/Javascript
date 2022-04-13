export class Question{


    /**
     * 
     * @param {string} text texto de la pregunta
     * @param {string[]} choices opciones de la pregunta
     * @param {string} answer  respuestas
     */
    constructor(text, choices,answer){
        this.text = text;
        this.choices = choices;
        this.answer = answer;
    }
    /* crear un metodo/funcion para saber la respuesta
    correcta*/ 
    /**
     * 
     * @param {string} choices texto para adivinar
     * @returns {boolean} retorna si la respuesta es correcta o no
     */

    correctAnswer(choices) {
        return choices === this.answer
    }
}


/*Esto permite crear multiples objetos con la misma estructura
const question = new Question()
const question2 = new Question()

console.log(question.correctAnswer());
console.log(question2.correctAnswer());
*/