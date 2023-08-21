#include <Adafruit_LiquidCrystal.h>

int chuveiro = 2;
int minuto = 60000;

Adafruit_LiquidCrystal lcd_1(0);

void setup()
{
    lcd_1.begin(16, 2);
    pinMode(chuveiro, OUTPUT);

        digitalWrite(chuveiro, 1);
        lcd_1.print("5 MINUTOS");
        delay(minuto);
        lcd_1.clear();
        lcd_1.print("4 MINUTOS");
        delay(minuto);
        lcd_1.clear();
        lcd_1.print("3 MINUTOS");
        delay(minuto);
        lcd_1.clear();
        lcd_1.print("2 MINUTOS");
        delay(minuto);
        lcd_1.clear();
        lcd_1.print("1 MINUTO");
        delay(minuto/2);
        lcd_1.clear();
        lcd_1.print("30 SEGUNDOS!!!");
        delay(minuto/2);
        lcd_1.clear();
        lcd_1.print("ACABOU");

        digitalWrite(chuveiro, 0);

}

void loop()
{

}