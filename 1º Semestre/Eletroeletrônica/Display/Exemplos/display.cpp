#include <Adafruit_LiquidCrystal.h>

int seconds = 0;

Adafruit_LiquidCrystal lcd_1(0);

void setup()
{
  lcd_1.begin(16, 2);

  lcd_1.print("flamengo");
}

void loop()
{
    lcd_1.setCursor(5,1);
    lcd_1.print("Campeao                ");

    lcd_1.setCursor(2,1);
    lcd_1.print("Libertadores           ");

    lcd_1.clear();
    delay(500);

//  lcd_1.setCursor(0, 1);
//  lcd_1.print(seconds);
//  lcd_1.setBacklight(1);
//  delay(500); // Wait for 500 millisecond(s)
//  lcd_1.setBacklight(0);
//  delay(500); // Wait for 500 millisecond(s)
//  seconds += 9;
}