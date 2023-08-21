#define ligaDesliga 12
#define balcao 11
#define cozinha 10
#define banheiro 9
#define red 6
#define blue 5
int j = 0;
int i = 0;

void setup()
{
    pinMode(ligaDesliga, INPUT_PULLUP);
    pinMode(balcao, INPUT_PULLUP);
    pinMode(cozinha, INPUT_PULLUP);
    pinMode(banheiro, INPUT_PULLUP);
    pinMode(red, OUTPUT);
    pinMode(blue, OUTPUT);
    Serial.begin(9600);

}

void loop()
{

if(j == 1){

if(digitalRead(ligaDesliga) == 0){

Desativado();
Serial.print("Desligado\n");
j = 0;
delay(500);

}

if(digitalRead(balcao) == 0){

Serial.print("balcao\n");
piscaRed();

}

if(digitalRead(cozinha) == 0){

Serial.print("cozinha\n");
piscaRed();


}

if(digitalRead(banheiro) == 0){

Serial.print("banheiro\n");
piscaRed();


}


}

if(digitalRead(ligaDesliga) == 0){

greenBlue();
Serial.print("ligado\n");
j = 1;
delay(500);

}

delay(500);
}

void piscaRed(){
    
    if((digitalRead(ligaDesliga == 0))){
    for(i=0;i<20;i++){
     //while(digitalRead(ligaDesliga == 0)){
     
     digitalWrite(red, 1);
     delay(200);
     digitalWrite(red, 0);
     delay(200);

}
     
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