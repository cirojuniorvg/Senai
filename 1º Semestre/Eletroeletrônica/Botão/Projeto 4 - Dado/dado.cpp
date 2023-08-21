#define bt 12
#define dx 6
#include <Adafruit_LiquidCrystal.h>
int n = 1;
int minutes = 1000;
Adafruit_LiquidCrystal lcd_1(0);

void setup(){
    lcd_1.begin(16, 2);
    lcd_1.blink();
    pinMode(bt, INPUT_PULLUP);
    Serial.begin(9600);
}

void loop(){
    if(digitalRead(bt) == 0){
        n++;
        if(n > dx){
             n=1;
        }
        Serial.print(n);
        Serial.print("\n");
    }

    
    switch(n){

    case 1:
        lcd_1.setCursor(0,0);
        lcd_1.print("1");
        delay(minutes);
        lcd_1.clear();

        break;

     case 2:
        lcd_1.setCursor(0,0);
        lcd_1.print("2");
        delay(minutes);
        lcd_1.clear();

        break;

     case 3:
        lcd_1.setCursor(0,0);
        lcd_1.print("3");
        delay(minutes);
        lcd_1.clear();

        break;
    
     case 4:
        lcd_1.setCursor(0,0);
        lcd_1.print("4");
        delay(minutes);
        lcd_1.clear();

        break;

     case 5:
        lcd_1.setCursor(0,0);
        lcd_1.print("5");
        delay(minutes);
        lcd_1.clear();

        break;

     case 6:
        lcd_1.setCursor(0,0);
        lcd_1.print("6");
        delay(minutes);
        lcd_1.clear();

        break;
   
    }
}