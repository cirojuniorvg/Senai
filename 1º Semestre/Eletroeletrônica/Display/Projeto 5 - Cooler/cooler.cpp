#include <Adafruit_LiquidCrystal.h>

Adafruit_LiquidCrystal lcd_1(0);
#define cooler 13

int tempo = 300;
int segundo = 50;

void setup()
{
  pinMode(cooler,OUTPUT);
  lcd_1.begin(16, 2);

}

void loop()
{

lcd_1.clear();
lcd_1.print(tempo);
delay(segundo);
tempo--;
if(tempo == 0){
    tempo = 300;
}
if(tempo<=60){
    digitalWrite(cooler, 0);
}else{
    digitalWrite(cooler, 1);
}
}