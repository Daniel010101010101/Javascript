

export class UI {
    constructor() { }

    /**
     * 
     * @param {string} text pregunta a renderizar
     */

    /*Para mostrar las preguntas */


    showQuestion(text) {
        const questionTitle = document.getElementById('question')/*Para llamar los id's del html*/
        questionTitle.innerText = text;


    }

    /*Para mostrar las opciones*/

    /**
     * 
     * @param {string[]} choices muestra las opciones
     */

    showChoice(choices, callback){
        const choicesContainer = document.getElementById('choice')
        choicesContainer.innerHTML = ''

        for (let i = 0; i < choices.length; i++){
            const button = document.createElement('button')
            button.innerText = choices[i];
            button.className = 'button';
            button.addEventListener('click', () => callback(choices[i]));

            choicesContainer.append(button)
        }
    }
    /**
     * 
     * @param {number} score 
     */

    showScore(score){
        const quizEndHTML =`
        <h1>Result</h1>
        <h2>Your Score: ${score}</h2>
        `
        const element = document.getElementById('quiz')
        element.innerHTML = quizEndHTML;

    }
    /**
     * 
     * @param {number} currentIndex 
     * @param {number} total 
     */
    showProgress(currentIndex,total){
        const element = document.getElementById('progress')
        element.innerHTML = `Question ${currentIndex} of ${total}`;
    }
        
}