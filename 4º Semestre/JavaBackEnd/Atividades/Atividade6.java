import java.util.Scanner;

public class Atividade6 {
    public static void main(String[] args){
        Scanner scan = new Scanner(System.in);

        System.out.println("Digite uma frase:");
        String frase = scan.nextLine();
        
        String[] quantidade = frase.trim().split(" ");
        for(String quantidadePalavras: quantidade){
            System.out.println(quantidadePalavras);
        }
        System.out.println("Aquantidade de palavras é de:" + quantidade.length);

        scan.close();
    }    

}
