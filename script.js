var res1 = document.getElementById('result1')
var res2 = document.getElementById('result2')
var numquant = document.getElementById('quant')
var namepass = document.getElementById('passname')
var copybtn = document.getElementById('cobyb')

let finalpass = ""

function Newpassword(){
   
if (numquant.value < 4 && numquant.value > 0) {
    alert('Sua senha é muito pequena! aumente ela um pouco. O minimo é 4.')
    return    
}

if (numquant.value > 40) {
    alert('Sua senha é muito grande! Diminua ela um pouco. O máximo é 40.')
    return
    
}
if(numquant.value === "" || numquant.value == 0){
    alert('Digite o tamanho da sua senha!');
    return
}

let carac = 'QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm=+?/\!@#$%&()+=-_;:'
if(numquant === '') {
    alert('Digite o tamanho da sua senha!')
}
var passwordname = namepass.value
let password = "";

for(var i =0, n = carac.length; i < numquant.value; ++i){
    password += carac.charAt( Math.floor( Math.random() * n ) );
}

res1.innerText = `A sua senha para a(o) ${passwordname} é:`
res2.innerText = ` ${password}`

finalpass = password

}

function Write1() {
    navigator.clipboard.writeText(finalpass)
    alert('Copiado!')
    
}

