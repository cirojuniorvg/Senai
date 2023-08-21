// automatico
#include "DHT.h"
#define DHTPIN 14 // Pin de data do sensor DHT
#define DHTTYPE DHT11 // DHT 11
DHT dht(DHTPIN, DHTTYPE);
float tempMax = 25; // temperatura maxima inicial
float histerese = 1; // diferenca entre temperaturas maxima e minima
float tempMinima = 24; // temperatura minima inicial
char recebido; // leitur do input de monitor
char modo; // modo exibido no monitor
const int potPin = 34; // Pin de data do potenciometro
int potValue = 0; // Valor 0 do poteciometro
float miliVolt; // miliVolt do potenciometro
float temperatura; // Temperatura relativa ao potenciometro

void setup() {
Serial.begin(9600);
delay(1000);
Serial.println(F("DHTxx test!"));
dht.begin();
pinMode(25, OUTPUT); //Pin de energia ventilador/LED
}

void loop() {
// Calculo da TempMinima - atraveis da TempMax e histerese
tempMinima = tempMax - histerese;

// Avalia o caracter recebido do monitor
if(Serial.available()){}
recebido = Serial.read();

// Entrada e troca entre os modos (m = Manual, a = Automatico, j = aJuste)
if (recebido == 'm' || recebido == 'a' || recebido == 'j' ){
modo = recebido;
}
// Manual = aciona o void manual = leitura do potenciomentro
if(modo == 'm'){
manual();
}
// Automatico = aciona o void automatico = leitura do sensor
if(modo == 'a'){
automatico();
}
// aJuste = aciona o void ajuste = mostra tempMax e tempMinima
if(modo == 'j'){
ajuste();
}

// Temperatura de acionamento do ventilador/LED = tempMax
// Incremento na tempMax
if(recebido == 'T'){
tempMax = tempMax+1;
}
// Decremento na tempMax
if(recebido == 't'){
tempMax = tempMax-1;
}

// Diferenca de temperatura Maxima e Minima = histerese
// Incremento na Histerese
if(recebido == 'H'){
histerese = histerese+1;
}
// Decremento na Histerese, Histerese minima de 1
if(recebido == 'h'){
if(histerese > 1)
histerese = histerese-1;
}
}

// Void de aJuste = mostra minima e maxima = auxilia no ajuste de tempMax e histerese
void ajuste(){
Serial.print("Temperatura Maxima: ");
Serial.println(tempMax);
Serial.print("Temperatura Minima: ");
Serial.println(tempMinima);
delay(1500);
}

// Void de leitura do potenciometro
void manual() {
potValue = analogRead(potPin);
Serial.print("Analog value: ");
Serial.println(potValue);
miliVolt = potValue;
miliVolt = potValue * 0.806;
Serial.print("MiliVolt: ");
Serial.println(miliVolt);
temperatura = miliVolt / 10;
Serial.print("Temperatura: ");
Serial.println(temperatura);

// Temperatura para acionar o ventilador/LED
if (temperatura >= tempMax) {
digitalWrite(25, 1);
}
// Temperatura para desativar o ventilador/LED
if (temperatura <= tempMinima) {
// tempMax -= 1;
digitalWrite(25, 0);
}
delay(500);
}

// Void de leitura do sensor DHT = temperatura e humidade
void automatico() {
delay(2000);
float h = dht.readHumidity(); // humidade do ar
float t = dht.readTemperature(); // temperatura no sensor DHT

// checkup do sensor DHT
if (isnan(h) || isnan(t)) {
Serial.println(F("Failed to read from DHT sensor!"));
return;
}

float hic = dht.computeHeatIndex(t, h, false);

// inprecao no monitor
Serial.print(F("Humidity: "));
Serial.print(h);
Serial.print(F("% Temperature: "));
Serial.print(t);
Serial.print(F("°C "));
Serial.print(F(" Heat index: "));
Serial.print(hic);
Serial.print(F("°C Temp.Max: "));
Serial.println(tempMax);

// Temperatura para acionar o ventilador/LED
if (t >= tempMax) {
digitalWrite(25, 1);
}
// Temperatura para desativar o ventilador/LED
if (t <= tempMinima) {
digitalWrite(25, 0);
}
}