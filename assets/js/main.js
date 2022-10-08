function criaCalculadora() {
    return {
        display: document.querySelector('.display'),
        historico: document.querySelector('.text-historico'),


        inicia(){
            this.cliqueBotoes();
            this.pressionaEnter();
        },

        pressionaEnter() {
            this.display.addEventListener('keyup', e => {
                if (e.keyCode === 13) {
                    this.realizaConta();
                }
            });
        },

        realizaConta() {
            let conta = this.display.value;
            let num = this.display.value;
            this.display.value = eval(this.display.value);
            let elementPai = this.historico;
            let p = document.createElement("p");
            // let texto = document.createTextNode(`${num} = ${this.display.value}`);
            p.appendChild(document.createTextNode(`${num} = ${this.display.value}`));
            elementPai.appendChild(p);
        },
        
        clearDisplay() {
            this.display.value = '';
        },

        apagaUm() {
            this.display.value = this.display.value.slice(0, -1);
        },

        cliqueBotoes() {
            document.addEventListener('click', function(e){
                const el = e.target;
                if(el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);
                }
                if(el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }
                if(el.classList.contains('btn-del')) {
                    this.apagaUm();
                }
                if(el.classList.contains('btn-eq')) {
                    this.realizaConta();
                }
            }.bind(this));

        },

        btnParaDisplay(valor) {
            this.display.value += valor;
        }
    };
}

const calculadora = criaCalculadora();
calculadora.inicia();