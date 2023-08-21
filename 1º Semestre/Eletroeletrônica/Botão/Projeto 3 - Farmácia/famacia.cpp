#define sensor 12
#define lampada 3
int i = 0;

void setup()
{
    pinMode(sensor, INPUT_PULLUP);
    pinMode(lampada, OUTPUT);
    Serial.begin(9600);

}

void loop()
{
    if(digitalRead(sensor) == 0){
        Serial.print("Chegou alguem!\n");

        Serial.print(i);
        for(i = 0; i < 51; i++){
            piscaLampada();

        }
    }
}

void piscaLampada(){
    digitalWrite(lampada, 1);
    delay(100);
    digitalWrite(lampada, 0);
    delay(100);
}