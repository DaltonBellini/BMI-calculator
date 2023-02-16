export  const Modal = { 
    modalWrapper: document.querySelector('.modal-wrapper'),
    messageResult: document.querySelector('.message'),
    


open(){
    Modal.modalWrapper.classList.add('open')
},
close(){
    Modal.modalWrapper.classList.remove('open')
    }

}




