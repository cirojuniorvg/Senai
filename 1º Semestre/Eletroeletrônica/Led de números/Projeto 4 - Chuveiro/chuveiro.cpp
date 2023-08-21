int chuveiro = 0;
int tempo = 3000;

void setup()
{
    pinMode(chuveiro, OUTPUT);
    digitalWrite(chuveiro, 1);
    delay(tempo);
    digitalWrite(chuveiro, 0);
}

void loop()
{
    
}