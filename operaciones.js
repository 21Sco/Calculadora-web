var cifra="";
var acumulado=0;
var sumar=false, restar=false, p_operacion=true, multi=false;

function displayNumero(numero){
    document.getElementById("display").value=cifra+numero;
    cifra=document.getElementById("display").value;
}

function suma(){
    if(restar){
        acumulado=acumulado-parseInt(cifra);
        document.getElementById("display").value=acumulado;
    }else{
        acumulado=acumulado+parseInt(cifra);
        document.getElementById("display").value=acumulado;
    }
    cifra="";
    sumar=true;
    multi=false;
    restar=false;
    p_operacion=false;
}

function resta(){
    if(p_operacion==false){
        if(sumar){
            acumulado=acumulado+parseInt(cifra);
            document.getElementById("display").value=acumulado;
        }else{
            acumulado=acumulado-parseInt(cifra);
            document.getElementById("display").value=acumulado;
        }
    }else{
        acumulado=parseInt(cifra);
        p_operacion=false;
    }
    cifra="";
    sumar=false;
    multi=false;
    restar=true;
}

function producto(){
    if(p_operacion==false){
        acumulado=acumulado*parseInt(cifra);
        document.getElementById("display").value=acumulado;
    }else{
        acumulado=parseInt(cifra);
        p_operacion=false;
    }
    cifra="";
    sumar=false;
    restar=false;
    multi=true;
}

function cociente(){
    if(p_operacion==false){
        acumulado=acumulado/parseInt(cifra);
        document.getElementById("display").value=acumulado
    }else{
        acumulado=parseInt(cifra);
        p_operacion=false;
    }
}

function resultado(){
    if(sumar){
        document.getElementById("display").value=acumulado+parseInt(cifra);
    }else if(restar){
        document.getElementById("display").value=acumulado-parseInt(cifra);
    }else if(multi){
        document.getElementById("display").value=acumulado*parseInt(cifra);
    }
    acumulado=parseInt(document.getElementById("display").value);
    cifra=0;
}