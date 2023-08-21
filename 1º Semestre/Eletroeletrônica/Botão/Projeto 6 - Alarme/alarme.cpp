#define ligaDesliga 12
#define balcao 11
#define cozinha 10
#define banheiro 9
#define red 6
#define blue 5
int j = 0;

void setup()
{
    pinMode(ligaDesliga, INPUT_PULLUP);
    pinMode(balcao, INPUT_PULLUP);
    pinMode(cozinha, INPUT_PULLUP);
    pinMode(banheiro, INPUT_PULLUP);
    pinMode(red, OUTPUT);
    pinMode(blue, OUTPUT);

}

void loop()
{

if(j == 1){

if(digitalRead(ligaDesliga) == 0){
    
Desativado();
j = 0;
delay(500);

}

if(digitalRead(balcao) == 0){

piscaRed();

}

if(digitalRead(cozinha) == 0){

piscaRed();

}

if(digitalRead(banheiro) == 0){

piscaRed();

}


}

if(j == 0){
if(digitalRead(ligaDesliga) == 0){

greenBlue();
j = 1;
delay(500);

}
}
}


void piscaRed(){
    

        while(digitalRead(ligaDesliga == 0)){

        digitalWrite(red, 1);
        delay(200);
        digitalWrite(red, 0);
        delay(200);
}
}

void greenBlue(){

    digitalWrite(blue, 1);
    digitalWrite(red, 0);
}

void Desativado(){

    if(digitalRead(ligaDesliga) == 0){

    digitalWrite(blue, 0);
    digitalWrite(red, 0);
    }
    

}