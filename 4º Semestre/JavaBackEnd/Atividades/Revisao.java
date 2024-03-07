import java.util.ArrayList;
import java.util.InputMismatchException;
import java.util.List;
import java.util.Scanner;

public class Revisao {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        // Entrada de Dados
       // System.out.println("Digite seu nome:");
       // String nomeUsuario = input.nextLine();
//
       // //Saida de Dados
       // System.out.println("Hello" + nomeUsuario);
    }

    public void helloWord(){
        try{
        Scanner input = new Scanner(System.in);

        System.out.println("Digite um numero");
        Integer numero1 = input.nextInt();

        System.out.println("Digite outro numero");
        Integer numero2 = input.nextInt();

        Integer soma = numero1 + numero2;
        Integer sub = numero1 - numero2;
        Integer mul = numero1 * numero2;
        Integer div = numero1 / numero2;
        Integer resto = numero1 % numero2;

        System.out.printf("%d, %d, %d, %d, %d", soma, sub, mul, div, resto);
        input.close();
        }catch(InputMismatchException ex){
            System.out.println("O valor degitado nao é um numero");

        }

        if(numero1 % 2 == 0){
            System.out.printf("%d é par", numero1);
        }else{
            System.out.printf("%d é impar", numero1);
        }

        // Laços
        // LISTAS

        List<String> lista = new ArrayList<>();

        System.out.println("DIGITE QUANTAS PALAVRAS VOCE QUER ADICIONAR:");
        Integer numeroPalavras = input.nextInt();

        String palavra;

        for(int i = 0; i< numeroPalavras; i++){
        System.out.printf("Digite a palavra %d", i + 1);
        palavra = input.nextLine();
        lista.add(palavra);

    }

    lista.forEach(item -> System.out.println(item));

    for(String item: lista){
    System.out.println(item);
}
}
}