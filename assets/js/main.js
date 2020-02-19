function Calculadora() {
    this.display = document.querySelector('.display');
    this.inicia = () =>{
        this.capturaCliques();
        this.capturaEnter ();
    }
    this.capturaEnter = () => {
        this.display.addEventListener('keypress', e => {
            if (e.key === 'Enter'){
                this.realizaConta();
            }
        })
        
    }
    this.capturaCliques = () => {
        document.addEventListener ('click', event =>{
            const el = event.target;
            if (el.classList.contains('btn-num')) this.addNumDisplay(el);
            if (el.classList.contains('btn-clear')) this.clearDisplay();
            if (el.classList.contains('btn-del')) this.apagaUm();
            if (el.classList.contains('btn-equal')) this.realizaConta();

        });
    }

    this.addNumDisplay = el =>{
        this.display.value += el.innerText;
        this.display.focus();
    }
    this.clearDisplay = () => this.display.value = '';
    this.apagaUm = () => this.display.value = this.display.value.slice(0, -1);
    
    this.realizaConta = () => {
            try{
                let conta = eval(this.display.value)

            if(!conta) {
                alert('Conta inválida')
                return
            }
                this.display.value = conta
            } catch (e) {
                alert('Conta inválida')
                return
            }
        
    }
    
    
}




const calculadora = new Calculadora();
calculadora.inicia();
