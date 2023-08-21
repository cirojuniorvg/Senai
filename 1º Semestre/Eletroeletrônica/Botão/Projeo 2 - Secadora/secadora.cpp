#define bt 12
#define secadora 7
#define btDesliga 4
int tempo = 0;
int minuto = 1000; //60000;
void setup()
{
    Serial.begin(9600);
    pinMode(bt,INPUT_PULLUP);
    pinMode(btDesliga,INPUT_PULLUP);
    pinMode(secadora, OUTPUT);

}

void loop()
{
    while (tempo > 0){
        digitalWrite(secadora, 1);
        Serial.print(tempo);
        Serial.print("\n");
        tempo--;
        delay(minuto);
        lerBotao();
    }
    digitalWrite(secadora, 0);
    
    lerBotao();
}

void lerBotao(){
    if(digitalRead(bt) == 0){
        tempo = 30;
    }
    if(digitalRead(btDesliga) == 0){
        tempo = 0;
    }
}