int butao;
int butao2;
void setup()
{
  pinMode(13, OUTPUT);
  pinMode(12, INPUT);
  pinMode(11, INPUT);
}
//0: pressionado
//1: solto
void loop()
{
    butao = digitalRead(12);
    if(butao == 0){
        digitalWrite(13, 1);
    }
    butao2 = digitalRead(11);
    if(butao2 == 0){
        digitalWrite(13, 0);
}
}