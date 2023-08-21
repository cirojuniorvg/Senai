#define bt1 13
#define bt2 12
#define bt3 11
#define bt4 10

void setup(){
    pinMode(bt1, INPUT_PULLUP);
    pinMode(bt2, INPUT_PULLUP);
    pinMode(bt3, INPUT_PULLUP);
    pinMode(bt4, INPUT_PULLUP);
    Serial.begin(9600);
}

void loop(){
    if(digitalRead(bt1) == 0){
    Serial.print("\nParabéns! \nGanhou um pirulito");
    while(digitalRead(bt1) == 0){}
  }
    if(digitalRead(bt2) == 0){
    Serial.print("\nParabéns! \nGanhou uma cerveja");
    while(digitalRead(bt2) == 0){}
  }
    if(digitalRead(bt3) == 0){
    Serial.print("\nParabéns! \nGanhou uma bicicleta");
    while(digitalRead(bt3) == 0){}
  }
    if(digitalRead(bt4) == 0){
    Serial.print("\nParabéns! \nGanhou um Uno 0km");
    while(digitalRead(bt4) == 0){}
  }

} 