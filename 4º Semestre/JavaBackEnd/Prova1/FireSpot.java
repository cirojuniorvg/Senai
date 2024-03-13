package Prova1;

import java.time.LocalDateTime;

public class FireSpot {
    private LocalDateTime start;
    private LocalDateTime end;
    private String cause;
    private Status status;
    private Identification identification;
    private Intensity intensity;
    private ParkAdress parkAdress;
    private Image image;
    private Sensor sensor;
    private User user;


    public FireSpot(){
        
    }


    public FireSpot(LocalDateTime start, LocalDateTime end, String cause, Identification identification,
            Intensity intensity, ParkAdress parkAdress, Image image, Sensor sensor, User user, Status status) {
        this.start = start;
        this.end = end;
        this.cause = cause;
        this.identification = identification;
        this.intensity = intensity;
        this.parkAdress = parkAdress;
        this.image = image;
        this.sensor = sensor;
        this.user = user;
        this.status = status;
    }

    public Status getStatus() {
        return status;
    }


    public void setStatus(Status status) {
        this.status = status;
    }

    public LocalDateTime getStart() {
        return start;
    }


    public void setStart(LocalDateTime start) {
        this.start = start;
    }


    public LocalDateTime getEnd() {
        return end;
    }


    public void setEnd(LocalDateTime end) {
        this.end = end;
    }


    public String getCause() {
        return cause;
    }


    public void setCause(String cause) {
        this.cause = cause;
    }


    public Identification getIdentification() {
        return identification;
    }


    public void setIdentification(Identification identification) {
        this.identification = identification;
    }


    public Intensity getIntensity() {
        return intensity;
    }


    public void setIntensity(Intensity intensity) {
        this.intensity = intensity;
    }


    public ParkAdress getParkAdress() {
        return parkAdress;
    }


    public void setParkAdress(ParkAdress parkAdress) {
        this.parkAdress = parkAdress;
    }


    public Image getImage() {
        return image;
    }


    public void setImage(Image image) {
        this.image = image;
    }


    public Sensor getSensor() {
        return sensor;
    }


    public void setSensor(Sensor sensor) {
        this.sensor = sensor;
    }


    public User getUser() {
        return user;
    }


    public void setUser(User user) {
        this.user = user;
    }


    @Override
    public String toString() {
        return "FireSpot [start=" + start + ", end=" + end + ", cause=" + cause + ", identification=" + identification
                + ", intensity=" + intensity + ", parkAdress=" + parkAdress + ", image=" + image + ", sensor=" + sensor
                + ", user=" + user + "status=" + status + "]";
    }


    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((start == null) ? 0 : start.hashCode());
        result = prime * result + ((end == null) ? 0 : end.hashCode());
        result = prime * result + ((cause == null) ? 0 : cause.hashCode());
        result = prime * result + ((identification == null) ? 0 : identification.hashCode());
        result = prime * result + ((intensity == null) ? 0 : intensity.hashCode());
        result = prime * result + ((parkAdress == null) ? 0 : parkAdress.hashCode());
        result = prime * result + ((image == null) ? 0 : image.hashCode());
        result = prime * result + ((sensor == null) ? 0 : sensor.hashCode());
        result = prime * result + ((user == null) ? 0 : user.hashCode());
        result = prime * result + ((status == null) ? 0 : status.hashCode());
        return result;
    }


    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null)
            return false;
        if (getClass() != obj.getClass())
            return false;
        FireSpot other = (FireSpot) obj;
        if (start == null) {
            if (other.start != null)
                return false;
        } else if (!start.equals(other.start))
            return false;
        if (end == null) {
            if (other.end != null)
                return false;
        } else if (!end.equals(other.end))
            return false;
        if (cause == null) {
            if (other.cause != null)
                return false;
        } else if (!cause.equals(other.cause))
            return false;
        if (identification != other.identification)
            return false;
        if (intensity != other.intensity)
            return false;
        if (parkAdress == null) {
            if (other.parkAdress != null)
                return false;
        } else if (!parkAdress.equals(other.parkAdress))
            return false;
        if (image == null) {
            if (other.image != null)
                return false;
        } else if (!image.equals(other.image))
            return false;
        if (sensor == null) {
            if (other.sensor != null)
                return false;
        } else if (!sensor.equals(other.sensor))
            return false;
        if (user == null) {
            if (other.user != null)
                return false;
        } else if (!user.equals(other.user))
            return false;
        if (status == null) {
            if (other.status != null)
                return false;
        } else if (!status.equals(other.status))
            return false;
        return true;
    }

    
    
}
