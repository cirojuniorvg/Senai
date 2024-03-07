package POO;

public class Main {
    public static void main(String[] args) {
        // Utilizando o construtor parcial
        Carro corsa = new Carro("Amarelo", "Corsa","Chevorlet", 100);
       // corsa.setCor("Amarelo");
       // corsa.setModelo("Corsa");
       // corsa.setVelocidadeMaxima(100);
       // System.out.printf(
       //     "Cor: %s --- Modelo: %s\n", 
       //     corsa.getCor(), 
       //     corsa.getModelo(),
       //     corsa.getMarca(), 
       //     corsa.getVelocidadeMaxima()
       //     );
        System.out.println(corsa.toString());

        // Utilizando o construtor vazio
        Carro celta = new Carro();

        // Atribuindo os valores ao objeto

        celta.setCor("Amarelo");
        celta.setModelo("Corsa");
        celta.setVelocidadeMaxima(100);
        System.out.printf(
            "Cor: %s --- Modelo: %s\n", 
            celta.getCor(), 
            celta.getModelo(),
            celta.getVelocidadeMaxima()
            );
        
            if(corsa.equals(celta)){
                System.out.println("São iguais");
            }else{
                System.out.println("São diferentes");
            }
    }
}
