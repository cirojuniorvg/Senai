package AtividadesPOO;

public class Main {
    public static void main(String[] args){
        Pessoa pessoa = new Pessoa("Ciro", 23, 75, 'M');
        Pessoa pessoa2 = new Pessoa();
        Pessoa pessoa3 = new Pessoa("Ciro", 23, 100, 'M');

        System.out.println(pessoa.toString());
        System.out.println(pessoa2.toString());
        System.out.println(pessoa3.toString());

        if(pessoa.equals(pessoa2)){
            System.out.println("Pessoa 1 e Pessoa 2 são iguais");
        }else{
            System.out.println("Pessoa 1 e Pessoa 2 são diferentes");
        }

        if(pessoa2.equals(pessoa3)){
            System.out.println("Pessoa 2 e Pessoa 3 são iguais");
        }else{
            System.out.println("Pessoa 2 e Pessoa 3 são diferentes");
        }

        if(pessoa3.equals(pessoa)){
            System.out.println("Pessoa 3 e Pessoa 1 são iguais");
        }else{
            System.out.println("Pessoa 3 e Pessoa 1 são diferentes");
        }

        if(pessoa==(pessoa2)){
            System.out.println("Pessoa 1 e Pessoa 2 são iguais");
        }else{
            System.out.println("Pessoa 1 e Pessoa 2 são diferentes");
        }

        if(pessoa2==(pessoa3)){
            System.out.println("Pessoa 2 e Pessoa 3 são iguais");
        }else{
            System.out.println("Pessoa 2 e Pessoa 3 são diferentes");
        }

        if(pessoa3==(pessoa)){
            System.out.println("Pessoa 3 e Pessoa 1 são iguais");
        }else{
            System.out.println("Pessoa 3 e Pessoa 1 são diferentes");
        }
    }
}
