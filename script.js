window.onscroll = function(){MinhaFuncao()};

function MinhaFuncao(){
    let ScrollJanela = document.body.scrollTop || document.documentElement.scrollTop;
    
    let Altura = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    let passado = (ScrollJanela / Altura) * 100;

    document.getElementById("minha-barra").style.width = passado + "%";
}