import java.util.Scanner;

public class Atividade8 {
    public static void main(String[] args) {
        try {
            Scanner scan = new Scanner(System.in);

            System.out.print("Digite um dividendo: ");
            Float dividendo = scan.nextFloat();
            System.out.print("Digite um divisor: ");
            Float divisor = scan.nextFloat();

            Float resultado = dividendo / divisor;

            System.out.println("A divisão de " + dividendo + "/" + divisor + "=" + resultado);
            scan.close();

        } catch (Exception e) {
            System.out.println("Algum dos valores é invalido");
        }

    }
}