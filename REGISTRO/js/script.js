class Validator {

    constructor() {
        this.validation = ['data-min-length',]
    }

    // Iniciar a validação de todos os campos
    validate(form) {
        //Pega os inpts
        let inputs = form.getElementByTagName('input');

        //HTMLCollection -> array
        let inputsArray = [...inputs];

        //Loop nos inputs e validação mediante ao que for encontrado
        inputsArray.forEach(function(input) {
            //Loop em todas as validações existentes
            for(let i = 0; this.validations.length > i; i++) {
                //Verifica se a validação atual existe no input
                if(input.getAttribute(this.validations[i]) != null) {
                    //Limpando a string para virar um metodo
                    let method = this.validation[i].replace('data-','').replace('-', '');

                    //Valor do input
                    let value = input.getAttribute(this.validations[i]);

                    //Invorcar metodo
                    this[method](input, value);
                }
            }
        }, this);
    }

    //Verificar se um input tem um numero minimo de caracteres
    minlength(input, value) {
        let inputLength = input.value.length;

        let errorMessage = `O campo precisa ter pelo menos ${minValue} caracteres`;

        if(inputLength < minValue) {

            this.printMessage(input, erroMessage);
            
        }
    }

    //Método para imprimir mensagens de erro na tela
    printMessage(input, msg) {
        let template = document.querySelector('.error-validation').cloneNode(true);
        
        template.textContent = msg;
        
        let inputParent = input.parentNode;
        
        template.classList.remove('template');

        inputParent.appendChild(template);

    }

}


let form = document.getElementById("register-form");
let submit = documet.getElementById("btn-submit");

let validation = new Validator();

// Evento que dispara as validações
submit.addEventListener('click', function(e) {

    e.preventDefault();

    validator.validate(form);

});