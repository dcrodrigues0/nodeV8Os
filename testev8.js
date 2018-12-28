const os = require("os");
var arquiteturaSistema = os.arch();
var qtdprocessadoresLogicos = os.cpus().length;
var tempoLigado = os.uptime();

if(os.platform() === 'win32'){
    var sistemaOperacional = 'Windows';
}else{
    var sistemaOperacional = os.platform();
}

var date = new Date(null);
date.setSeconds(tempoLigado); // specify value for SECONDS here
var result = date.toISOString().substr(11, 8);



const http = require("http");
const porta = 3000;
const server = http.createServer((req,res) =>{
    res.end(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <title>Document</title>
    <style>
    body{
        overflow-x: hidden;
        
    }
    *{
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    }
    .v8{
        transition:1s;
        display: flex;
        align-content: center;
        vertical-align: center;
        justify-content: center;
    }
    
    .v8:hover{
        transition: 1s;
        transform: scale(1.15);
    }
    </style>
    </head>
    <body>
    <div class="v8">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/V8_JavaScript_engine_logo_2.svg/220px-V8_JavaScript_engine_logo_2.svg.png" alt="v8">
    </div>
    <script>
    var v8 = document.querySelector(".v8");
    var audio1 = new Audio();
    v8.addEventListener("click",function(){
        Swal(
            'Suas configurações de sistema são',
            'Arquitetura do sistema: <strong>${arquiteturaSistema}</strong>, <br> Quantidade de processadores Lógicos: <strong>${qtdprocessadoresLogicos} </strong>, <br> Sistema Operacional: <strong>${sistemaOperacional}</strong> <br> Total de memória Ram: <strong>${os.totalmem()}</strong> <br> Tempo de atividade da máquina: <strong>${result}</strong> <br> Modelo: <strong>${os.cpus()[1].model}</strong> <br> Nome de usuário: <strong>${os.hostname()}</strong>',
            
            'success'
            )
        });
        </script>
        <script src="https://cdn.jsdelivr.net/npm/sweetalert2@7.33.1/dist/sweetalert2.all.min.js"></script>
        </body>
        </html>
        `);
    }).listen(porta);
    console.log(`O servidor está rodando na porta: ${porta}`);
    