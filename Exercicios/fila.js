let fila = [];
let senhaComum = 1;
let senhaPrioridade = 1;

function imprimirNovaSenha(){
    let senha = {tipo: "Comum", numero: senhaComum};
    fila.push(senha);
    console.log(`Senha comum gerada:  ${senhaComum}`);
        senhaComum++;
    
}

function imprimirNovaSenhaPrioridade(){
    let senha = {tipo: "Prioridade", numero: senhaPrioridade};
    fila.push(senha);
    console.log(`Senha prioritária gerada: ${senhaPrioridade}`);
        senhaPrioridade++;
}

function mostrarFila(){
    if(fila.length === 0) {
        console.log("A fila está vazia!")
    } else{
        console.log("Fila de atendimento")
        for (let i = 0; i< fila.length; i++) {
            console.log(`${i + 1}. Tipo: ${fila[i].tipo}, Número: ${fila[i].numero}`);
        }
    }
}

function atenderPaciente() {
    if (fila.length === 0) {
        console.log("Não há pacientes na fila!");
        return; // Sai da função se a fila estiver vazia
    }

    let pacienteAtendido = null;

    // Tenta atender um paciente de prioridade primeiro
    for (let i = 0; i < fila.length; i++) {
        if (fila[i].tipo === "Prioridade") {
            pacienteAtendido = fila.splice(i, 1)[0]; // Remove e atende o paciente de prioridade
            console.log(`Atendendo paciente de prioridade: Tipo: ${pacienteAtendido.tipo}, Número: ${pacienteAtendido.numero}`);
            return; // Sai da função após atender um paciente de prioridade
        }
    }

    // Se não houver pacientes de prioridade, atende o primeiro paciente da fila
    pacienteAtendido = fila.shift(); // Remove e atende o primeiro paciente da fila
    console.log(`Atendendo paciente comum: Tipo: ${pacienteAtendido.tipo}, Número: ${pacienteAtendido.numero}`);
}



   


function exibirMenu(){
    let opcao = prompt ("Escolha uma opção:\n1 - imprimar nova senha\n2 - imprimar senha (prioridade)\n3 - Mostrar fila de atendimento\n4 - Atender paciente\n5 - sair");
    

    switch(opcao){

        case "1":
            imprimirNovaSenha();
            break;
        case "2": 
            imprimirNovaSenhaPrioridade();
            break;
        case "3":
            mostrarFila();
            break;
        case "4":

             atenderPaciente();
            break;
        case "5": 
            console.log("Saindo...")
            return;
        default:
            console.log("Opção inválida, tente novamente");
            break;
    }
    exibirMenu();
}
exibirMenu();





