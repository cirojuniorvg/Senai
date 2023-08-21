const int potPin = 34;
int potValue = 0;
float miliVolt;
float temperatura;

void setup(){
  Serial.begin(115200);
  delay(1000);
}

void loop(){
  potValue = analogRead(potPin);
  Serial.print("Analog value: ");
  Serial.println(potValue);
  delay(500);
  miliVolt = potValue;
  miliVolt = potValue * 0.806;
  Serial.print("miliVolt: ");
  Serial.println(miliVolt);
  temperatura = miliVolt / 10;
  Serial.print("Temperatura: ");
  Serial.println(temperatura);
  delay(500);
}