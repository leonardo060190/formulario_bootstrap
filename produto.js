function calcular(){
    if(validaDescricao() && validaQuantidade() && validaUnitario()){
    let nTotal = quantidade.value * unitario.value;
    total.value = nTotal;
    };
   
};

function validaDescricao(){
    // Verifica se o campo está vasio
    if(descricao.value.trim() === ""){
        descricao.style.background = "yellow";
        mensagem.innerHTML = "preencha a descrição do Produto";
        $('#alerta').modal('show');
        return false;
    }else{
        descricao.style.background = "white";
        return true;
    };
};

function validaQuantidade(){
    if(quantidade.value.trim() === ""){
        quantidade.style.background = "yellow";
        mensagem.innerHTML = "preencha a quantidade do Produto";
        $('#alerta').modal('show');
        return false;
    }else{
        if(quantidade.value > 0 && quantidade.value <= 1000){
            quantidade.style.background = "white";
            return true; 
        }else{
            quantidade.style.background = "yellow";
            mensagem.innerHTML = "O valor da quantidade deve estar entre 1 e 1000!";
            $('#alerta').modal('show');
            return false;
        };
    };

};

function validaUnitario(){
    if(unitario.value.trim() === ""){
        unitario.style.background = "yellow";
        mensagem.innerHTML = "preencha o unitário do Produto";
        $('#alerta').modal('show');
        return false;
    }else{
        unitario.style.background = "white";
        return true;
    };
};