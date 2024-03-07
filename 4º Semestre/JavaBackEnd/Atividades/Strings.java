import java.util.Scanner;

public class Strings {
    public static void main(String[] args){
        Scanner scan = new Scanner(System.in);

        try{
            System.out.println("Digite um valor numerico");
            Integer numero = scan.nextInt();
            System.out.println(numero);
        }catch(Exception ex){
            System.err.println("Ocorreu um erro, número invalido");
        }

        //String string = scan.nextLine();
        //String string2 = string.toUpperCase();
        //String string3 = string.concat(string2);
        //string3 = string3.trim();
        ////char caracter = "s";
//
        //if (string.toLowerCase() == string2.toLowerCase()) {
        //    System.out.println("São iguais");
        //}
        //if (string.compareToIgnoreCase(string2)==0) {
        //    System.out.println("São iguais!");
        //}

       // String ucs = "uc1;uc2;uc3";
       // String[] listaUcs = ucs.split(";");
       // for(String uc: listaUcs){
       //     System.out.println(uc);
       // }
       // System.out.println(listaUcs.length);
    }
}
