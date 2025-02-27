/*let nota, continuar;
do{
nota = prompt("Digite um número maior que 0: ");
if(nota<=0){
    alert("Numero deve ser maior que 0")
}
}while(nota <= 0){

}*/

class Consultorio {
    constructor() {
        this.fila = [];
        this.senhaNumero = 1;
        this.senhaPrioridade = 1;
    }

    // Gerar uma nova senha comum
    imprimirNovaSenha() {
        this.fila.push({ tipo: 'Comum', numero: this.senhaNumero });
        console.log(`Senha comum gerada: ${this.senhaNumero}`);
        this.senhaNumero++;
    }

    // Gerar uma nova senha de prioridade
    imprimirNovaSenhaPrioridade() {
        this.fila.push({ tipo: 'Prioridade', numero: this.senhaPrioridade });
        console.log(`Senha de prioridade gerada: ${this.senhaPrioridade}`);
        this.senhaPrioridade++;
    }

    // Mostrar o relatório da fila de atendimento
    mostrarFila() {
        if (this.fila.length === 0) {
            console.log("A fila está vazia.");
        } else {
            console.log("Fila de Atendimento:");
            this.fila.forEach((senha, index) => {
                console.log(`${index + 1}. Tipo: ${senha.tipo}, Número: ${senha.numero}`);
            });
        }
    }

    // Atender um paciente
    atenderPaciente() {
        // Primeiro, procura pela senha de prioridade (se houver)
        let pacienteAtendido = null;
        for (let i = 0; i < this.fila.length; i++) {
            if (this.fila[i].tipo === 'Prioridade') {
                pacienteAtendido = this.fila.splice(i, 1)[0];  // Remove e atende o paciente
                break;  // Sai do loop após atender um paciente prioritário
            }
        }

        if (pacienteAtendido === null) {
            // Caso não haja paciente de prioridade, atende o primeiro da fila
            if (this.fila.length === 0) {
                console.log("Não há pacientes na fila.");
            } else {
                pacienteAtendido = this.fila.shift(); // Remove e atende o primeiro paciente
            }
        }

        // Exibe o paciente atendido, se houver
        if (pacienteAtendido !== null) {
            console.log(`Atendendo paciente: Tipo: ${pacienteAtendido.tipo}, Número: ${pacienteAtendido.numero}`);
        }
    }

    // Opções do menu
    exibirMenu() {
        console.clear(); // Limpa o console para exibir um menu atualizado
        console.log("\nEscolha uma opção:");
        console.log("1 – Imprimir nova senha");
        console.log("2 – Imprimir nova senha (prioridade)");
        console.log("3 – Relatório: Mostrar fila de atendimento");
        console.log("4 – Atender paciente");
        console.log("5 – Sair");
    }
}

const consultorio = new Consultorio();

function iniciar() {
    let opcao;

    do {
        consultorio.exibirMenu();
        opcao = prompt("Digite o número da opção:");

        switch (opcao) {
            case '1':
                consultorio.imprimirNovaSenha();
                break;
            case '2':
                consultorio.imprimirNovaSenhaPrioridade();
                break;
            case '3':
                consultorio.mostrarFila();
                break;
            case '4':
                consultorio.atenderPaciente();
                break;
            case '5':
                alert("Saindo...");
                break;
            default:
                alert("Opção inválida. Tente novamente.");
                break;
        }

        if (opcao !== '5') {
            // Aguarda o usuário clicar em "OK" para continuar o fluxo
            prompt("Pressione OK para continuar...");
        }
    } while (opcao !== '5');
}

// Inicia o programa
iniciar();
