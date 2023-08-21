int led = 13

void setup()
{
    pinMode(led, OUTPUT);
}

void loop()
{
    digitalWrite(13, 1);
    delay(2000);
    digitalWrite(13, 0);
    delay(1000);
}