package Biologo;

import java.time.LocalDate;

public class Main {
    public static void main(String[] args) {
        Usuario usuario = new Usuario("Ciro", "ciro@gmail.com", "12345", true);
        Estudante estudante = new Estudante("Cesar", "cesar@hotmail.com", "9876", false, "SENAI");
        Biologo biologo = new Biologo("Luigi", "luigi@yahoo.com", "!@#!#", true, "UDESC", "FIESC", 9090);
        Especie especie = new Especie("Pescies Pingussos", "Peixe Pinga", Habitat.aquatico, "Cerrado", "Cego");
        Registro registro = new Registro(biologo, especie, LocalDate.now(), "Goias", MetodoColeta.inLoco);

        System.out.println(usuario.toString());
        System.out.println(estudante.toString());
        System.out.println(biologo.toString());
        System.out.println(especie.toString());
        System.out.println(registro.toString());
    }
}