package POO;

public class Carro {
    private String cor;
    private String marca;
    private String modelo;
    private Integer velocidadeMaxima;

    public Carro(){}

    public Carro(String cor, String marca, String modelo, Integer velocidadeMaxima){
        this.cor = cor;
        this.marca = marca;
        this.modelo = modelo;
        this.velocidadeMaxima = velocidadeMaxima;
    }
    
    public void setCor(String cor){
        this.cor = cor;
    }

    public void setMarca(String marca){
        this.marca = marca;
    }

    public void setModelo(String modelo){
        this.modelo = modelo;
    }
    
    public void setVelocidadeMaxima(Integer velocidadeMaxima){
        this.velocidadeMaxima = velocidadeMaxima;
    }

    public String getCor(){
        return cor;
    }

    public String getMarca(){
        return marca;
    }

    public String getModelo(){
        return modelo;
    }

    public Integer getVelocidadeMaxima(){
        return velocidadeMaxima;
    }

    // @Override
    
    // public int hashCode(){}

        public boolean equals(Carro carro){
            if (carro.getMarca() == this.marca &&
            carro.getCor() == this.cor &&
            carro.getModelo() == this.modelo &&
            carro.getVelocidadeMaxima() == this.velocidadeMaxima){
                return true;
            }else{
                return false;
            }
        }

        @Override
        public String toString() {
            return "Carro [cor=" + cor + ", marca=" + marca + ", modelo=" + modelo + ", velocidadeMaxima="
                    + velocidadeMaxima + "]";
        }

       // public String toString(){
       //     return "Cor: %s --- Modelo: %s --- Velocidade %d --- Marca %s\n".format(cor, modelo, velocidadeMaxima, marca);
       // }

        
    }