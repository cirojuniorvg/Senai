#include <Adafruit_LiquidCrystal.h>
int tabela = 2;
int minutes = 800;
int red = 3;
int green = 4;
Adafruit_LiquidCrystal lcd_1(0);

void setup()
{

lcd_1.begin(16, 2);
lcd_1.blink();
//lcd_1.noCursor();
//lcd_1.cursor();
pinMode(red, OUTPUT);
pinMode(green, OUTPUT);
}

void loop()
{
digitalWrite(red, 0);
digitalWrite(green, 1);
lcd_1.setCursor(0,0);
lcd_1.print("PORTA LOGICA E");
lcd_1.setCursor(0,1);
lcd_1.print("V E V = V");
delay(minutes);
lcd_1.clear();

digitalWrite(red, 0);
digitalWrite(green, 1);
lcd_1.setCursor(0,0);
lcd_1.print("PORTA LOGICA E");
lcd_1.setCursor(0,1);
lcd_1.print("V E F = F");
delay(minutes);
lcd_1.clear();

digitalWrite(red, 1);
digitalWrite(green, 0);
lcd_1.setCursor(0,0);
lcd_1.print("PORTA LOGICA E");
lcd_1.setCursor(0,1);
lcd_1.print("F E F = F");
delay(minutes);
lcd_1.clear();

digitalWrite(red, 0);
digitalWrite(green, 1);
lcd_1.setCursor(0,0);
lcd_1.print("PORTA LOGICA OU");
lcd_1.setCursor(0,1);
lcd_1.print("V OU V = V");
delay(minutes);
lcd_1.clear();

digitalWrite(red, 0);
digitalWrite(green, 1);
lcd_1.setCursor(0,0);
lcd_1.print("PORTA LOGICA OU");
lcd_1.setCursor(0,1);
lcd_1.print("V OU F = V");
delay(minutes/2);
lcd_1.clear();

digitalWrite(red, 1);
digitalWrite(green, 0);
lcd_1.setCursor(0,0);
lcd_1.print("PORTA LOGICA OU");
lcd_1.setCursor(0,1);
lcd_1.print("F OU F = F");
lcd_1.clear();
}