// C++ code
//
#include <Adafruit_LiquidCrystal.h>

int seconds = 0;

Adafruit_LiquidCrystal lcd_1(0);
float temperatura;
int leitura;
int tempMaxima = 28;
int tempMinima = 26;
void setup()
{
  lcd_1.begin(16, 2); 
  pinMode(A0, INPUT);
  pinMode(7, OUTPUT);
  pinMode(6, INPUT_PULLUP);
  pinMode(5, INPUT_PULLUP);
  pinMode(4, INPUT_PULLUP);
  pinMode(3, INPUT_PULLUP);
}

void loop()
{
  leitura = analogRead(A0);
  temperatura = (leitura - 100)/2;
  
  if(temperatura > tempMaxima){
    digitalWrite(7,1);
  }

  if(temperatura > tempMinima){
    digitalWrite(7,0);
  }
  
  if(digitalRead(6) == 0){
    tempMaxima--;
  }

  if(digitalRead(5) == 0){
    tempMaxima++;
  }

  if(digitalRead(4) == 0){
    tempMinima--;
  }

  if(digitalRead(3) == 0){
    tempMinima++;
  }

  lcd_1.clear();
  lcd_1.print("Max:");
  lcd_1.print(tempMaxima);
  lcd_1.print("Min:");
  lcd_1.print(tempMinima);

  lcd_1.setCursor(3,1);
  lcd_1.print(temperatura);
  delay(500);
}