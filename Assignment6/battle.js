const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
//Player Class
class Player{
    constructor(name, weapons){
        this.name=name;
        this.weapons=weapons;
        this.health=10;
        this.strength=2;
    }
    //The function takes as input an integer and subtracts that amount of points from the players health property.
    applyDamage(a){
        this.healt1h=this.health-a;
    }
    //This function checks if the players health value is greater than 0 and returns true if it is and false if it isn’t.
    isAlive(){
        if(this.health>0){
            return true;
        }
        else{
            return false;
        }
    }
    //This function should use a random number between 7 and 0, to select a weapon from the weapons array property, at that index and returns that weapon. 
    attackWith(){
        let a=random(0,8);
        return this.weapons[a];
    }
}
//Enemy Class
class Enemy{
    constructor(){
        this.name="Enemy";
        this.health=5;
        this.strength=2;
    }
    //The function takes as input an integer and subtracts that amount of points from the Enemys health property
    applyDamage(a){
        this.health=this.health-a;
    }
    //This function checks if the Enemys health value is greater than 0 and returns true if it is and false if it isn’t.
    isAlive(){
        if(this.health>0){
            return true;
        }
        else{
            return false;
        }
    }
    //This function takes as input a player and calls the applyDamage of the player, using the Enemys strength as the input. 
    attack(player){
        player.applyDamage(this.strength);
    }
}
//Weapon class
class Weapon{
    constructor(name){
        this.name=name;
        this.damage=random(1,6);
    }
    attack(player, enemy){
        while(player.isAlive() && enemy.isAlive()){
            let damage=this.damage*player.strength;
            enemy.applyDamage(damage);
            if(enemy.isAlive()){
                enemy.attack(player);
            }
            else{
                break;
            }
        }
    }
}
//BattleSimulation Class
class BattleSimulation{
    constructor(){
        this.players=[];
        this.enemies=[];
    }
    //Creates enemy objects and adds them to enemies list
    createEnemies(){
        for(let x =0; x<20;x++){
            this.enemies.push(new Enemy());
        }
    }
    createPlayers(){
        let weaponNames=['sword','dagger','axe','hammer','mace','crossbow','wood','shuriken'];
        var weaponsCache=[];
        for(const element in weaponNames){
            weaponsCache.push(new Weapon(weaponNames[element]));
        }
        let playerNames=['Malenia','Solaire','Patches','Yhorm','Renna'];
        for(const element in playerNames){
            this.players.push(new Player(playerNames[element], weaponsCache));
        }
    }
    run(){
        console.log("Simulating Battle");
        this.createEnemies();
        this.createPlayers();
        do{
            let a=random(0, this.players.length);
            let b=random(0, this.enemies.length);
            let attackWith=this.players[a].attackWith();
            attackWith.attack(this.players[a], this.enemies[b]);
            if(!this.players[a].isAlive()){
                this.players.splice(a, 1);
            }
            if(!this.enemies[b].isAlive()){
                this.enemies.splice(b, 1);
            }
        }while(this.players.length>0 && this.enemies.length>0)
        if(this.players.length>0){
            for(const element in this.players){
                console.log(this.players[element].name+" has survived with "+ this.players[element].health + " health remaining.")
            }
            console.log("Congratulations, you have defeated Scarlet Byte");
        }
        else{
            console.log("Sorry, Scarlet Byte has defeated you and conquered the free world.");
        }
    }
}
var sim=new BattleSimulation();
sim.run();