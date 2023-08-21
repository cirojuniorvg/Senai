void setup()
{
    pinMode(13, OUTPUT);
    pinMode(12, OUTPUT);
    pinMode(11, OUTPUT);
    pinMode(10, OUTPUT);
}

void loop()
{
    digitalWrite(13, 1);
    delay(1000);
    
    digitalWrite(12, 1);
    delay(1000);
    
     digitalWrite(11, 1);
    delay(1000);
    
     digitalWrite(10, 1);
    delay(1000);

     digitalWrite(13, 0);
    delay(1000);

     digitalWrite(12, 0);
    delay(1000);

     digitalWrite(11, 0);
    delay(1000);

     digitalWrite(10, 0);
    delay(1000);

}