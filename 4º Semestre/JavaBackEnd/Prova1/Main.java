package Prova1;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        User user = new User("Teste", "Testando", "teste@mail.com", "teste123");
        Leader leader = new Leader(true, "Team Bomb");
        ParkAdress parkAdress = new ParkAdress("Floripa", "SC", "BR", "Rio Vermelho", 27.5f, 48.42f);
        List<User> lista = new ArrayList<User>();
        lista.add(leader);
        lista.add(user);
        CombatTeam combatTeam = new CombatTeam(2, lista);
        Image image = new Image("link", LocalDateTime.now(), "Satélite Flamengo");
        Sensor sensor = new Sensor(-27.5f, 48.42f, SensorStatus.OPERATIONAL, "Temperatura Sensor");
        SensorRead sensorRead = new SensorRead(22.4f, LocalDateTime.now());
        FireSpot fireSpot = new FireSpot(LocalDateTime.now(), LocalDateTime.now(), "Indefinido", Identification.SATELLITE, Intensity.LOW);

        System.out.println(user.toString());
        System.out.println(leader.toString());
        System.out.println(parkAdress.toString());
        System.out.println(image.toString());
        System.out.println(combatTeam.toString());
        System.out.println(sensor.toString());
        System.out.println(sensorRead.toString());
        System.out.println(fireSpot.toString());
    }
}
