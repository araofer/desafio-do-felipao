// Variáveis com a quantidade de experiência (XP) de um herói
let nomeHeroi = "SuperArao";
let xpHeroi = 5005;

// Estruturas nível do herói
let nivelHeroi;
      switch (true) {
       case xpHeroi < 1000:
            nivelHeroi = "Ferro";
       break;
        case xpHeroi >= 1001 && xpHeroi <= 2000:
            nivelHeroi = "Bronze";
       break;
        case xpHeroi >= 2001 && xpHeroi <= 5000:
            nivelHeroi = "Prata";
       break;
        case xpHeroi >= 5001 && xpHeroi <= 7000:
            nivelHeroi = "Ouro";
       break;
        case xpHeroi >= 7001 && xpHeroi <= 8000:
            nivelHeroi = "Platina";
       break;
        case xpHeroi >= 8001 && xpHeroi <= 9000:
            nivelHeroi = "Ascendente";
       break;
        case xpHeroi >= 9001 && xpHeroi <= 10000:
            nivelHeroi = "Imortal";
       break;
        default:
    nivelHeroi = "Radiante";
}

// Saída com a mensagem
console.log(`O Herói de nome ${nomeHeroi} está no nível de ${nivelHeroi}`);