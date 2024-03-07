import java.util.Scanner;

public class Temperatura {

    public static void main (String[] args){
        Scanner scan = new Scanner(System.in);

        System.out.println("Digite a temperatura em Celsius para obter em Fahrenheit:");
        Float celsius=scan.nextFloat();
        Float fahrenheit = (celsius * 9/5) + 32;

        System.out.println("Sua temperatura em Fahrenheit é de " + fahrenheit + " ºF");

        scan.close();
    }
}