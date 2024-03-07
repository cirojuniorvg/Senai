import java.util.Scanner;

public class Triangulo {
    public static void main(String[] args){
        Scanner scan = new Scanner(System.in);

        System.out.println("Insira o tamanho do lado A:");
        Integer a = scan.nextInt();

        System.out.println("Insira o tamanho do lado B:");
        Integer b = scan.nextInt();
        
        System.out.println("Insira o tamanho do lado C:");
        Integer c = scan.nextInt();

        if (a + b > c && b + c > a && c + a > b) {
            System.out.println("É possivel formar um triângulo");
        }else{
            System.out.println("Não é possivel formar um triângulo");
        }

        scan.close();
    } 
}
