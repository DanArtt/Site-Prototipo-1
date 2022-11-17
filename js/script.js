//----------------- nome ---------------------
let nome = document.querySelector('#nome')
let erroNome = document.querySelector('#erroNome')

//----------------- email --------------------
let email = document.querySelector('#email')
let erroEmail = document.querySelector('#erroEmail')

//---------------- telefone ------------------
let telefone = document.querySelector('#telefone')
let erroTelefone = document.querySelector('#erroTelefone')

//---------------- selecionar opção -------------------
let opcoes = document.querySelector('#opcoes')
let erroOpcoes = document.querySelector('#erroOpcoes')

//---------------- assunto -------------------
let assunto = document.querySelector('#assunto')
let erroAssunto = document.querySelector('#erroAssunto')

//---------------- checagem de OK ------------------
let nomeOk = false;
let emailOk = false;
let telefoneOk = false;
let opcoesOk = false;
let assuntoOk = false;
let opcaoOk = false;

//---------------- criando as funções ------------------

function validarNome(){
    if (nome.value.length < 3){
        erroNome.innerHTML = 'Nome Inválido'
        nomeOk = false;
    } else {
        erroNome.innerHTML = '';
        nomeOk = true;
    }
}

function validarEmail() {
    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        erroEmail.innerHTML = 'Email inválido'
        emailOk = false;
    }else {
        erroEmail.innerHTML = ''
        emailOk = true;
    }
}

function validarTelefone() {
    if (telefone.value.length > 13) {
        erroTelefone.innerHTML = 'Telefone inválido';
        telefoneOk = false;
    }else {
        erroTelefone.innerHTML = ''
        telefoneOk = true;
    }
}

function validarOpcoes() {
    if (opcoes.value == '0') {
        erroOpcoes.innerHTML = 'Selecione uma Opção'
        opcoesOk = false;
    }else {
        erroOpcoes.innerHTML = ''
        opcoesOk = true;
    }
}

function validarAssunto() {
    if (assunto.value.length > 100) {
        erroAssunto.innerHTML = 'Excedeu o limite (Limite de 100)'
        assuntoOk = false
    }else {
        erroAssunto.innerHTML = ''
        assuntoOk = true
    }
}

function validar() {
    if (nomeOk && emailOk && telefoneOk && opcoesOk && assuntoOk) {
        alert('Informações envidas com sucesso!')
    }else {
        alert('Por favor, preencha o campo de Informações!')
    }
}
