#include <Adafruit_LiquidCrystal.h>

int secadora = 2;
int minuto = 600;

Adafruit_LiquidCrystal lcd_1(0);

void setup()
{
    lcd_1.begin(16, 2);
    pinMode(secadora, OUTPUT);

        digitalWrite(secadora, 1);
        lcd_1.setCursor(5,0);
        lcd_1.print("30 MINUTOS");
        delay(minuto);
        lcd_1.clear();

        lcd_1.setCursor(5,0);
        lcd_1.print("ACABOU");
        delay(minuto);
        digitalWrite(secadora, 0);

}

void loop()
{

}