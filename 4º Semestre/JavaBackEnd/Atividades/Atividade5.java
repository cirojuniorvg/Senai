import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Atividade5 {
    public static void main(String[] args){
        Scanner scan = new Scanner(System.in);
        System.out.println("Escolha a quantidade de números:");
        Integer tamanho = scan.nextInt();
        List<Integer> list = new ArrayList<>();
        for(int i=0; i<tamanho; i++){
            System.out.println("Digite o valor "+ (i+1) + ":");
            list.add(scan.nextInt());
        }
        System.out.println(list.toString());
        scan.close();

        Integer somaTotal = list.stream()
        .reduce((n1, n2) -> (n1 + n2))
        .orElse(0);
        System.out.println("A soma de todos os vetores é de: " + somaTotal);

        Integer somaPar = list.stream()
        .filter(n -> n%2==0)
        .reduce((n1, n2) -> (n1 + n2))
        .orElse(0);
        System.out.println("A soma números pares é de: " + somaPar);

        Integer somaImpar = list.stream()
        .filter(n -> n%2!=0)
        .reduce((n1, n2) -> (n1 + n2))
        .orElse(0);
        System.out.println("A soma números impares é de: " + somaImpar);
        };
    }