//import java.util.ArrayList;
//import java.util.List;
//import java.util.Scanner;
//
//
//public class Lista {
//    public static void main(String[] args){
//        Scanner scan = new Scanner(System.in);
//        List<Integer> list = new ArrayList<>();
//        for(int i=0; i<4; i++){
//            System.out.println("Digite o valor "+ (i+1) + ":");
//            list.add(scan.nextInt());
//        }
//        System.out.println(list.toString());
//        scan.close();
//    }
//}

import java.util.Arrays;
import java.util.List;

public class Lista {
    public static void main(String[] args){
        List<Integer> list = Arrays.asList(1, 5, 6);
        Integer soma = list.stream()
        .reduce((n1, n2) -> (n1 + n2))
        .orElse(0);
        System.out.println(soma);
        };
    }