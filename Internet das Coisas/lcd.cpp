// C++ code
//
#include <Adafruit_LiquidCrystal.h>

int seconds = 0;

Adafruit_LiquidCrystal lcd_1(0);

int leitura;
double valor;

void setup()
{
    lcd_1.begin(16, 2);
    pinMode(A0, INPUT);
    pinMode(13, OUTPUT);
    lcd_1.setCursor(3,0);
    lcd_1.print("VOLTIMETRO");
}

void loop()
{
leitura = analogRead(A0);
if(valor >= 4){
    digitalWrite(13, 1);
}else{
    digitalWrite(13,0);
}
valor = leitura * 0.005;

lcd_1.setCursor(6,1);
lcd_1.print(valor);

lcd_1.print("V");
delay(500);

}