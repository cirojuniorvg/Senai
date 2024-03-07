import java.util.Scanner;

public class Tabuada {
    
    public static void main(String[] args){
        Scanner scan = new Scanner(System.in);

        System.out.println("Digite o número para a tabuada:");
        Integer number = scan.nextInt();
        Integer result;

        for(int i = 0; i <= 10; i++){

            result = number * i;
            System.out.println(number + " * " + i + " = " + result );
    }
        

        scan.close();
}
}