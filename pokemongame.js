const paragraph = document.getElementById('paragraph');
const raibaru = document.getElementById('raibaru');
const kusa = document.getElementById('kusa');
const hono = document.getElementById('hono');
const mizu = document.getElementById('mizu');
const denki = document.getElementById('denki');
const iwa = document.getElementById('iwa');
const result = document.getElementById('result');
const restart = document.getElementById('restart');
const score = document.getElementById('score');
const retray = document.getElementById('retray')
const bagu = document.getElementById('bagu');
const aisho = document.getElementById('aisho');
const gamearea = document.getElementById('gamearea');
const header = document.getElementById('header');
const gamelogo = document.getElementById('gamelogo');
const aite = document.getElementById('aite');
const zanki = document.getElementById('zanki');
const over = document.getElementById('over');
const kachi = document.getElementById('kachi')
const take2 = document.getElementById('take2')
const good = document.getElementById('good')

let endFlag = false;
let gamestop = false;

let win = 0;
let lose = 0;
let draw = 0;

let mylife = 0;

let tekihp = 0;

function game (nun){
    if(gamestop){
        return
    }

    if(endFlag){
        return
    }
    endFlag = true;
    paragraph.innerText='相性は...!'

if(nun === 0){
    hono.classList.add('hide');
    mizu.classList.add('hide');
    denki.classList.add('hide')
    iwa.classList.add('hide');
}else if(nun === 1){
    kusa.classList.add('hide');
    mizu.classList.add('hide');
    iwa.classList.add('hide');
    denki.classList.add('hide');
}else if(nun === 2){
    kusa.classList.add('hide');
    hono.classList.add('hide');
    denki.classList.add('hide');
    iwa.classList.add('hide');
}else if(nun === 3){
    kusa.classList.add('hide');
    hono.classList.add('hide');
    mizu.classList.add('hide');
    denki.classList.add('hide');
}else if (nun === 4){
    kusa.classList.add('hide');
    hono.classList.add('hide');
    mizu.classList.add('hide');
    iwa.classList.add('hide');
}

    const randomNum = Math.floor(Math.random() * 5)
  
if(randomNum === 0){
raibaru.src='visual.png'
}else if(randomNum === 1){
    raibaru.src='visual (1).png';
}else if(randomNum === 2){
    raibaru.src='kuwassu.png'
}else if(randomNum === 3){
    raibaru.src='kojio.webp'
}else{
    raibaru.src='pamo.png'
}

    if(nun === randomNum){
        result.innerText='効果は普通だ'
        draw++; tekihp = tekihp + 150; mylife =mylife + 150;
    }else if(nun === 0 && randomNum ===2 ){
        result.innerText='効果は抜群だ';
        win++; tekihp=tekihp + 200; mylife=mylife+ 100

    }else if(nun === 0 && randomNum === 3){
        result.innerText='効果は抜群だ';
        win++; tekihp=tekihp + 200; mylife=mylife + 100;
    }else if(nun === 1 && randomNum === 0){
        result.innerText='効果は抜群だ';
        win++; tekihp=tekihp + 200; mylife=mylife + 100;
    }else if(nun === 1 && randomNum === 4){
        result.innerText='効果は普通だ';
        win++; tekihp=tekihp + 150; mylife=mylife + 150;
    }else if(nun === 2 && randomNum === 1){
        result.innerText='効果は抜群だ'
        win++; tekihp=tekihp + 200; mylife=mylife + 100;
    }else if(nun === 2 && randomNum === 3){
        result.innerText='効果は抜群だ'
        win++; tekihp=tekihp + 200; mylife=mylife + 100;
    }else if(nun === 3 && randomNum === 1){
        result.innerText='効果は抜群だ'
        win++; tekihp=tekihp + 200; mylife=mylife + 100;
    }else if(nun === 3 && randomNum === 4){
        result.tekilife ='効果は普通だ'
        win++;  tekihp=tekihp + 150; mylife=mylife + 150;
    }else if(nun === 4 && randomNum === 2){
        result.innerText='効果は抜群だ'
        win++; tekihp=tekihp + 200; mylife=mylife + 100;
    }else if(nun === 4 && randomNum === 3){
        result.innerText='効果は普通だ'
        win++; tekihp=tekihp + 150; mylife=mylife + 150;
    }else if(nun === 4 && randomNum === 1){
    result.innerText='効果は普通だ'
    win++; tekihp=tekihp+150; mylife=mylife  + 150;
}else{
result.innerText='効果は今ひとつだ....'
lose++; tekihp=tekihp + 100; mylife= mylife+ 200;
}
restart.classList.remove('hide')
retray.classList.add('hide')
result.classList.remove('hide')
aisho.classList.add('hide')

let tekilife = 1000 - tekihp;
let seizon = 1000 - mylife
aite.innerText= '相手の体力 ' + tekilife
zanki.innerText= '自分の体力 ' + seizon


if(tekilife > 0){
good.classList.remove('hide')
}else{
    good.classList.add('hide')
    restart.classList.remove('hide')
}


if(seizon > 0){
    kachi.classList.remove('hide')
}else{
    over.classList.remove('hide')
    gamestop=true;
    result.innerText=' '
    restart.classList.add('hide')
    retray.classList.add('hide')
    raibaru.src='sports_baseball_man_asia.png'
    kachi.classList.add('hide')
    raibaru.classList.add('hide')
    gamelogo.classList.add('hide')
    paragraph.classList.add('hide')
    aite.classList.add('hide')
    zanki.classList.add('hide')
    take2.classList.remove('hide')
}
}

restart.onclick = () => {
    paragraph.innerText='自分が使いたいポケモンを選択してください';
    kusa.classList.remove('hide');
    hono.classList.remove('hide');
    mizu.classList.remove('hide');
    denki.classList.remove('hide');
    iwa.classList.remove('hide')

    result.innerText=' '
  
    restart.classList.add('hide')
    retray.classList.add('hide')
    raibaru.src='sports_baseball_man_asia.png'
    kachi.classList.add('hide')
    good.classList.add('hide')


    endFlag = false;
}



