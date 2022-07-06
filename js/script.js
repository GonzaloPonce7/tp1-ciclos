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

if(ingresar){
    let hp = 100;
    const shoot = 20;
    const molotov = 40;
    const axe = 40;
    let action = prompt ("Chose your action: \n1 - shoot. \n2 - molotov. \n3 - axe. \n Press x to run away, you chicken");

    while(action != 'x' && action != 'X' && hp <= 0){
        switch (action) {
            case '1':
                function s (hp, shoot){
                    return hp - shoot;
                    alert ("Vecna's hp = " + hp);
                }
                break;

            case '2':
                function m (hp, molotov) {
                    return hp - molotov;
                    alert ("Vecna's hp = " + hp);
                }
                break;

            case '3':
                function a (hp, molotov) {
                    return hp - axe;
                    alert ("Vecna's hp = " + hp);
                }
                break;
        
            default:
                alert('Wrong choice')
                break;
        }
        let action = prompt ("Chose your action: \n1 - shoot. \n2 - molotov. \n3 - axe. \n Press x to run away, you chicken");
    }

} else{
    alert('look behind you, demogorgon is comming')
}