let savedPass = "Masterofpuppets";
let ingresar = false;

for (let i = 2; i >= 0; i--) {
    let userPass = prompt("Sign in. You have "+(i+1)+" attempts");
    if (savedPass == userPass) {
        alert("Welcome to the upside down. Vecna is waiting");
        ingresar = true;
        break;
    } else {
        alert("Fail. You have " + i + " attempts left. Try not to die doing it");
    }
}

// if(ingresar){
//     let hp = 100;
//     const shootDamage = 20;
//     const molotovDamage = 40;
//     const axeDamage = 40;
//     let action = prompt ("Chose your action: \n1 - shoot. \n2 - molotov. \n3 - axe. \n Press x to run away, you chicken");

//     while(action != ('x' || 'X') && hp > 0){ 
//         console.log('estoy en el while. hp = ' + hp)
//         switch (action) {
//             case '1':
//                     hp -= shootDamage
//                     alert ("Vecna's hp = " + hp);
//                 break;

//             case '2':
//                     hp -= molotovDamage
//                     alert ("Vecna's hp = " + hp);
//                 break;

//             case '3':
//                     hp -= axeDamage
//                     alert ("Vecna's hp = " + hp);
//                 break;
        
//             default:
//                 alert('Wrong choice')
//                 break;
//         }
//         action = prompt ("Chose your action: \n1 - shoot. \n2 - molotov. \n3 - axe. \n Press x to run away, you chicken");
//     }
//     alert ('Vecna is over... for now')

// } else{
//     alert('look behind you, demogorgon is comming')
// }


if(ingresar){
    let hp = 100;
    const shootDamage = 20;
    const molotovDamage = 40;
    const axeDamage = 40;
    let action ;

    do{ 
        action = prompt ("Chose your action: \n1 - shoot. \n2 - molotov. \n3 - axe. \n Press x to run away, you chicken");
        switch (action) {
            case '1':
                    hp -= shootDamage
                    alert ("Vecna's hp = " + hp);
                break;

            case '2':
                    hp -= molotovDamage
                    alert ("Vecna's hp = " + hp);
                break;

            case '3':
                    hp -= axeDamage
                    alert ("Vecna's hp = " + hp);
                break;

            case 'x' || 'X':
                alert ('You flee the batlle... your friends are dead now');
                break;
            default:
                alert('Wrong choice')
                break;
        }
        
    } while(action != ('x' || 'X') && hp > 0);
    if(hp <= 0){
        alert ('Vecna is over... for now')
    }    

} else{
    alert('look behind you, demogorgon is comming');
}