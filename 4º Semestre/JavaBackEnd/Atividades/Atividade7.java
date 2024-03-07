import java.util.Scanner;

public class Atividade7 {
    public static void main(String[] args){
        Scanner scan = new Scanner(System.in);

        System.out.println("Digite um número");
        Integer numero = scan.nextInt();
        if(numero>0){
        System.out.println(String.format("1. Seu valor em decimal: %d \n2. Seu valor em hexadecimal: %x \n3. Seu valor em octal: %o \n4. Seu valor convertido em caractere: %c.", numero, numero, numero, numero));
        scan.close();
        }else{
            System.out.println("Digitou um número negativo");
        }
    }
}
