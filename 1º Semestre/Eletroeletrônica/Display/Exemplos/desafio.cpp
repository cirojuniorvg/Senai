#include <Adafruit_LiquidCrystal.h>

Adafruit_LiquidCrystal lcd_1(0);

void setup()
{
    lcd_1.begin(16, 2);
}

void loop()
{
    lcd_1.clear();
    lcd_1.setCursor(5,1);
    lcd_1.print("Ciro");

    delay(500);
   
    lcd_1.clear();
    lcd_1.setCursor(5,0);
    lcd_1.print("CIRO");

    delay(500);
}