import { Modal } from "./modal.js"
import { AlertError} from './alert-error.js'
import{IMC,validNumber} from './utils.js'


const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')
const btnCalculate = document.querySelector('#btnCalculate')
const buttonClose= document.querySelector('.modal-wrapper .card button')

btnCalculate.addEventListener('click', logicSofware)
buttonClose.addEventListener('click', closeScreenResul)
window.addEventListener('keydown',btnEsc)


function btnEsc (event){
    if(event.key == 'Escape'){
        closeScreenResul()
    }
}

function closeScreenResul(){
    Modal.close()
    height.value = ''
    weight.value = ''
}

function logicSofware(event){
    event.preventDefault()
    
    const weight = inputWeight.value
    const height = inputHeight.value
    
    const result = IMC(weight,height)
    const showAlertError = validNumber(weight) || validNumber(height)

    if(showAlertError){
        AlertError.open()
        return
    
    }
    AlertError.close()

    OpenScreenResult(result)
}

function OpenScreenResult(result){
    Modal.open()
    Modal.messageResult.innerHTML = `Seu IMC é de ${result}`
}

inputHeight.oninput = function(){
    AlertError.close()
}

inputWeight.oninput = function(){
    AlertError.close()
}



