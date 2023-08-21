int chuveiro = 1;
int led1 = 13;
int led2 = 12;
int led3 = 11;
int led4 = 10;
int led5 = 9;
int minuto = 1000;

void setup()
{
    pinMode(chuveiro, OUTPUT);
    pinMode(led1, OUTPUT);
    pinMode(led2, OUTPUT);
    pinMode(led3, OUTPUT);
    pinMode(led4, OUTPUT);
    pinMode(led5, OUTPUT);

    digitalWrite(chuveiro, 1);
    digitalWrite(led1, 1);
    digitalWrite(led2, 1);
    digitalWrite(led3, 1);
    digitalWrite(led4, 1);
    digitalWrite(led5, 1);
    delay(minuto);

    digitalWrite(led1, 0);
    delay(minuto);

    digitalWrite(led2, 0);
    delay(minuto);

    digitalWrite(led3, 0);
    delay(minuto);

    digitalWrite(led4, 0);
    delay(minuto);
  
    digitalWrite(led5, 1);
    delay(500);
    digitalWrite(led5, 0);
    delay(500);
    digitalWrite(led5, 1);
    delay(500);
    digitalWrite(led5, 0);
    delay(500);
    digitalWrite(led5, 1);
    delay(500);
    digitalWrite(led5, 0);
    delay(500);
  
    digitalWrite(led5, 0);
    digitalWrite(chuveiro, 0);

}

void loop()
{

}