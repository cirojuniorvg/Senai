#include <Adafruit_LiquidCrystal.h>
int minutes = 500;
int pisca = 500;
int one = 1;
int two = 2;
int red = 3;
int green = 4;
Adafruit_LiquidCrystal lcd_1(0);

void setup()
{

lcd_1.begin(16, 2);
lcd_1.blink();
//lcd_1.noCursor();
//lcd_1.cursor();
pinMode(one, OUTPUT);
pinMode(two, OUTPUT);
pinMode(red, OUTPUT);
pinMode(green, OUTPUT);
}

void loop()
{
digitalWrite(one, 1);
digitalWrite(two, 1);
digitalWrite(red, 0);
lcd_1.setCursor(0,0);
lcd_1.print(" PORTA LOGICA E");
lcd_1.setCursor(0,1);
lcd_1.print("   V E V = V");
delay(minutes);
digitalWrite(green, 1);
delay(pisca);
digitalWrite(green, 0);
delay(pisca);
digitalWrite(green, 1);
delay(pisca);
digitalWrite(green, 0);
delay(pisca);
lcd_1.clear();

digitalWrite(one, 1);
digitalWrite(two, 0);
digitalWrite(green, 0);
lcd_1.setCursor(0,0);
lcd_1.print(" PORTA LOGICA E");
lcd_1.setCursor(0,1);
lcd_1.print("   V E F = F");
delay(minutes);
digitalWrite(red, 1);
delay(pisca);
digitalWrite(red,0 );
delay(pisca);
digitalWrite(red, 1);
delay(pisca);
digitalWrite(red,0 );
delay(pisca);
lcd_1.clear();

digitalWrite(one, 0);
digitalWrite(two, 0);
digitalWrite(green, 0);
lcd_1.setCursor(0,0);
lcd_1.print(" PORTA LOGICA E");
lcd_1.setCursor(0,1);
lcd_1.print("   F E F = F");
delay(minutes);
digitalWrite(red, 1);
delay(pisca);
digitalWrite(red,0 );
delay(pisca);
digitalWrite(red, 1);
delay(pisca);
digitalWrite(red,0 );
delay(pisca);
lcd_1.clear();

digitalWrite(one, 1);
digitalWrite(two, 1);
digitalWrite(red, 0);
lcd_1.setCursor(0,0);
lcd_1.print(" PORTA LOGICA OU");
lcd_1.setCursor(0,1);
lcd_1.print("   V OU V = V");
delay(minutes);
digitalWrite(green, 1);
delay(pisca);
digitalWrite(green, 0);
delay(pisca);
digitalWrite(green, 1);
delay(pisca);
digitalWrite(green, 0);
delay(pisca);
delay(minutes);
lcd_1.clear();

digitalWrite(one, 1);
digitalWrite(two, 0);
digitalWrite(red, 0);
lcd_1.setCursor(0,0);
lcd_1.print(" PORTA LOGICA OU");
lcd_1.setCursor(0,1);
lcd_1.print("   V OU F = V");
delay(minutes);
digitalWrite(green, 1);
delay(pisca);
digitalWrite(green, 0);
delay(pisca);
digitalWrite(green, 1);
delay(pisca);
digitalWrite(green, 0);
delay(pisca);
lcd_1.clear();

digitalWrite(one, 0);
digitalWrite(two, 0);
digitalWrite(green, 0);
lcd_1.setCursor(0,0);
lcd_1.print(" PORTA LOGICA OU");
lcd_1.setCursor(0,1);
lcd_1.print("   F OU F = F");
delay(minutes);
digitalWrite(red, 1);
delay(pisca);
digitalWrite(red,0 );
delay(pisca);
digitalWrite(red, 1);
delay(pisca);
digitalWrite(red,0 );
delay(pisca);
lcd_1.clear();
}