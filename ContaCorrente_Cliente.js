class Cliente {
    nome;
    cpf;
}

class ContaCorrente {
    agencia;
    cliente;
    _saldo = 0;


    saldo() {
        let _saldo = this._saldo;
        console.log(`ð Seu saldo atual Ã© de R$ ${_saldo}!`);
    }

    sacar(valor) {
        if (valor <= this._saldo) {
            console.log(`ð³ Saldo antigo: R$ ${this._saldo}\n`);

            this._saldo -= valor;
            console.log(`_____________________________\n|ð° Saque feito com Sucesso!|\n|___________________________|\n\nð² Valor sacado: R$ ${valor} \nð³ Valor atual no saldo: R$ ${this._saldo}`);
        } else {
            console.log(`â ï¸ Valor indisponivel para saque. \nð³ VocÃª possui R$ ${this._saldo}`);//â 
        }
        return valor;
    }

    depositar(valor) {
        if (valor <= 0) {
            return;
        }
        console.log(`ð Valor de R$ ${valor} depositado com sucesso!`)
        this._saldo += valor;

    }
    transferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
        console.log(`ð¦ Valor R$ ${valorSacado} transferido com sucesso!`)
    }
}

const cliente = new Cliente();
cliente.nome = 'Jorge';
cliente.cpf = 1234578;

const cliente1 = new Cliente();
cliente1.nome = 'Alice';
cliente1.cpf = 333334444;

const contaCJorge = new ContaCorrente();
contaCJorge._saldo = 0;
contaCJorge.agencia = 1001;
contaCJorge.cliente = cliente;

const contaCAlice = new ContaCorrente();
contaCAlice._saldo = 0;
contaCAlice.agencia = 1002;
contaCAlice.cliente = cliente1;

contaCJorge.saldo()

contaCJorge.depositar(100)
contaCJorge.sacar(50)
contaCJorge.transferir(50, contaCAlice)
contaCAlice.saldo()
