package POO;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class Carro {
    private Cor cor;
    private String marca;
    private String modelo;
    private Integer velocidadeMaxima;
    private LocalDate ultimaRevisao;
    private LocalDateTime criacao = LocalDateTime.now() ;

    public Carro(){}

    public Carro(Cor cor, String marca, String modelo, Integer velocidadeMaxima ){
        this.cor = cor;
        this.marca = marca;
        this.modelo = modelo;
        this.velocidadeMaxima = velocidadeMaxima;
    }
    
    public void setCor(Cor cor){
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

    public Cor getCor(){
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

        public LocalDate getUltimaRevisao() {
        return ultimaRevisao;
    }

    public void setUltimaRevisao(LocalDate ultimaRevisao) {
        this.ultimaRevisao = ultimaRevisao;
    }

    public LocalDateTime getCriacao() {
        return criacao;
    }

    public void setCriacao(LocalDateTime criacao) {
        this.criacao = criacao;
    }

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
            DateTimeFormatter formatter = DateTimeFormatter.ofPattern(
                "dd/MM/yyyy HH:mm:ss"
                );
                String criacaoString = formatter.format(criacao);

            return "Carro [cor=" + cor + 
                    ", marca=" + marca + 
                    ", modelo=" + modelo + 
                    ", velocidadeMaxima="+ velocidadeMaxima + 
                    ", ultimaRevisao=" + ultimaRevisao +
                    ", criacao=" + criacaoString + "]";
        }

       // public String toString(){
       //     return "Cor: %s --- Modelo: %s --- Velocidade %d --- Marca %s\n".format(cor, modelo, velocidadeMaxima, marca);
       // }

        
    }