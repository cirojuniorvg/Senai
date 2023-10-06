void setup() {
  // put your setup code here, to run once:
  pinMode(14, INPUT);
  Serial.begin(9600);
}

void loop() {
  // put your main code here, to run repeatedly:
  Serial.println(analogRead(14));
  delay(1000);
}
