#include <Adafruit_LiquidCrystal.h>

int seconds = 0;
int minutes = 0;
int hours = 0;
int tempo = 1000;

Adafruit_LiquidCrystal lcd_1(0);

void setup()
{
  lcd_1.begin(16, 2);
  digitalWrite(seconds,1);
  digitalWrite(minutes,1);
  digitalWrite(hours,1);

}

void loop()
{
    delay(tempo);

    seconds = (seconds + 1);

    if(seconds == 60){;
        seconds = 0;
        minutes= (minutes + 1);
    }
    if(minutes == 60){;
        minutes = 0;
        hours = (hours + 1);
    }

    if(hours == 24){;
        hours=0;
    }

lcd_1.setCursor(4,0);

if(hours < 10){
    lcd_1.print('0');
}
lcd_1.print(hours);
lcd_1.print(':');

if(minutes < 10){
    lcd_1.print('0'); 
}
lcd_1.print(minutes);
lcd_1.print(':');

if(seconds < 10){
    lcd_1.print('0');
}
lcd_1.print(seconds);

}