//public class HelloWorld{
//    public static void imprimirEmTela(){
//        System.out.println("OI MUNDO");
//    }
//
//    public int soma(){
//        return 1 + 2; 
//    }
//
//    public boolean isAdmin(){
//        return true;
//    }
//
//    public static void main(){
//
//    }
//}

//import java.util.Scanner;
//
//public class HelloWorld{
//    public static void main(String[] args){
//        Scanner scan = new Scanner(System.in);
//        String nome = scan.nextLine();
//        System.out.println("Hello, " + nome + "!");
//        scan.close();
//    }
//}

import java.util.Scanner;

public class HelloWorld{
    public static void main(String[] args){
        Scanner scan = new Scanner(System.in);
        
        System.out.println("Digite o primeiro valor: ");
        Float a = scan.nextFloat();
        System.out.println("Digite o segundo valor: ");
        Float b = scan.nextFloat();
        Float soma = a + b;

        System.out.println("a + b = " + soma + "!");
        scan.close();
    }
}