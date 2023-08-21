#include <Adafruit_LiquidCrystal.h>
int chuveiro = 2;
int minutes = 800;
Adafruit_LiquidCrystal lcd_1(0);

void setup()
{

lcd_1.begin(16, 2);
pinMode(chuveiro, OUTPUT);

digitalWrite(chuveiro,1);

lcd_1.setCursor(0,0);
lcd_1.print("BOA TARDE");
lcd_1.setCursor(0,1);
lcd_1.print("LINKEDIN");
delay(minutes);
lcd_1.clear();

lcd_1.setCursor(0,0);
lcd_1.print("FIZ ESSE");
lcd_1.setCursor(0,1);
lcd_1.print("DISPLAY HOJE");
delay(minutes);
lcd_1.clear();

lcd_1.setCursor(0,0);
lcd_1.print("NO SENAI");
lcd_1.setCursor(0,1);
lcd_1.print("COM MEUS");
delay(minutes);
lcd_1.clear();

lcd_1.setCursor(0,0);
lcd_1.print("AMIGOS HEITOR");
lcd_1.setCursor(0,1);
lcd_1.print("E CESAR");
delay(minutes);
lcd_1.clear();

lcd_1.setCursor(0,0);
lcd_1.print("TENHAM UMA");
lcd_1.setCursor(0,1);
lcd_1.print("BOA NOITE");
delay(minutes/2);
lcd_1.clear();

lcd_1.setCursor(0,0);
lcd_1.print("ACABOU S2");
lcd_1.setCursor(0,1);
lcd_1.print(":D");

digitalWrite(chuveiro,0);

}

void loop()
{

}