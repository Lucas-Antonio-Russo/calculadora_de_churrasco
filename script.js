function valor_range(valor, idElemento) {
    let elemento;
    switch (idElemento) {
        case 'rangeHomem':
            elemento = 'qtdHomem';
            break;
        case 'rangeMulher':
            elemento = 'qtdMulher';
            break;
        case 'rangeCrianca':
            elemento = 'qtdCrianca';
            break;
        default:
            return;
    }
    document.getElementById(elemento).textContent = valor;
}

const resultado = document.getElementById('resultado');
function abrirResultado(){
    if (erro == true){
    }else{
        document.getElementById("msg_erro").textContent = "";
        resultado.style.zIndex = '1';
        resultado.style.opacity = '1';
    }

}

function fecharResultado(){
    resultado.style.opacity = '0';
    setTimeout(() => {
        resultado.style.zIndex = '-1';
    }, 800);
}

let erro = false;
function calculaChurrasco(){
    let qtdHomem = parseInt(document.getElementById('qtdHomem').textContent,10);
    let qtdMulher = parseInt(document.getElementById('qtdMulher').textContent,10);
    let qtdCrianca = parseInt(document.getElementById('qtdCrianca').textContent,10);

    if(Number.isInteger(qtdHomem) && Number.isInteger(qtdMulher) && Number.isInteger(qtdCrianca)){
        if(qtdHomem>0 || qtdMulher>0 || qtdCrianca>0){
            let qtdCarne = ((0.5 * qtdHomem)+(0.3 * qtdMulher)+(0.2 * qtdCrianca)).toFixed(1);
            let qtdFrango = ((0.2 * qtdHomem)+(0.2 * qtdMulher)+(0.1 * qtdCrianca)).toFixed(1);
            let qtdLinguica = ((0.2 * qtdHomem)+(0.2 * qtdMulher)+(0.2 * qtdCrianca)).toFixed(1);
            let qtdRefrigerante = ((0.3 * qtdHomem)+(0.4 * qtdMulher)+(0.2 * qtdCrianca)).toFixed(1);
            let qtdCerveja = ((0.8 * qtdHomem)+(0.5*qtdMulher)).toFixed(1);
        
            document.getElementById('qtdCarne').textContent = qtdCarne + ' Kg';
            document.getElementById('qtdFrango').textContent = qtdFrango + ' Kg';
            document.getElementById('qtdLinguica').textContent = qtdLinguica + ' Kg';
            document.getElementById('qtdRefri').textContent = qtdRefrigerante + ' L';
            document.getElementById('qtdCerveja').textContent = qtdCerveja + ' L';
    
            erro = false;
        }else{
            document.getElementById("msg_erro").textContent = "Por favor, insira um valor maior que zero!";
            erro = true;
        }
    }else{
        document.getElementById("msg_erro").textContent = "Por favor, insira um valor inteiro!";
        erro = true;
    }
}

function somaValores(idElemento) {
    switch (idElemento) {
        case 'btn_soma_homem':
            let somaHomem = Number(document.getElementById('qtdHomem').textContent) + 1;
            document.getElementById('qtdHomem').textContent = somaHomem;
            document.getElementById('rangeHomem').value = somaHomem;    
            break;
        case 'btn_menos_homem':
            if(Number(document.getElementById('qtdHomem').textContent) >= 1){
                let menosHomem = Number(document.getElementById('qtdHomem').textContent)  - 1;
                document.getElementById('qtdHomem').textContent = menosHomem;
                document.getElementById('rangeHomem').value = menosHomem; 
            }
            break;
        case 'btn_soma_mulher':
            let somaMulher = Number(document.getElementById('qtdMulher').textContent) + 1;
            document.getElementById('qtdMulher').textContent = somaMulher;
            document.getElementById('rangeMulher').value = somaMulher;    
            break;
        case 'btn_menos_mulher':
            if(Number(document.getElementById('qtdMulher').textContent) >=1){
                let menosMulher = Number(document.getElementById('qtdMulher').textContent) - 1;
                document.getElementById('qtdMulher').textContent = menosMulher;
                document.getElementById('rangeMulher').value = menosMulher; 
            }
            break;
        case 'btn_soma_crianca':
            let somaCrianca = Number(document.getElementById('qtdCrianca').textContent) + 1;
            document.getElementById('qtdCrianca').textContent = somaCrianca;
            document.getElementById('rangeCrianca').value = somaCrianca;    
            break;
        case 'btn_menos_crianca':
            if(Number(document.getElementById('qtdCrianca').textContent) >=1){
                let menosCrianca = Number(document.getElementById('qtdCrianca').textContent) - 1;
                document.getElementById('qtdCrianca').textContent = menosCrianca;
                document.getElementById('rangeCrianca').value = menosCrianca; 
            }
            break;
        default:
            return;
    }
}

function aoMudar(idElemento) {
    switch (idElemento) {
        case 'qtdHomem':
            document.getElementById('rangeHomem').value = Number(document.getElementById('qtdHomem').textContent);
        break;
        case 'qtdMulher':
            document.getElementById('rangeMulher').value = Number(document.getElementById('qtdMulher').textContent);
        break;
        case 'qtdCrianca':
            document.getElementById('rangeCrianca').value = Number(document.getElementById('qtdCrianca').textContent);
        break;
    }
}