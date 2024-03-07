import java.util.Scanner;

public class ParOuImpar {
    public static void main(String[] args){
        Scanner scan = new Scanner(System.in);

        System.out.println("Digite um número:");
        Integer number = scan.nextInt();
        Boolean positivo = number >= 0;
        Boolean par = number%2 == 0;

        System.out.println("Seu número é par? " + par + "\n Seu número é Posito? " + positivo);

        scan.close();        
    }
}
