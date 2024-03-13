package Prova1;

import java.time.LocalDateTime;

public class Image {
    private String fileName;
    private LocalDateTime date;
    private String satelliteName;
    
    public Image(){
        
    }
    
    public Image(String fireName, LocalDateTime date, String satelliteName) {
        this.fileName = fireName;
        this.date = date;
        this.satelliteName = satelliteName;
    }

    public String getFileName() {
        return fileName;
    }

    public void setFileName(String fireName) {
        this.fileName = fireName;
    }

    public LocalDateTime getDate() {
        return date;
    }

    public void setDate(LocalDateTime date) {
        this.date = date;
    }

    public String getSatelliteName() {
        return satelliteName;
    }

    public void setSatelliteName(String satelliteName) {
        this.satelliteName = satelliteName;
    }

    @Override
    public String toString() {
        return "Image [fireName=" + fileName + ", date=" + date + ", satelliteName=" + satelliteName + "]";
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((fileName == null) ? 0 : fileName.hashCode());
        result = prime * result + ((date == null) ? 0 : date.hashCode());
        result = prime * result + ((satelliteName == null) ? 0 : satelliteName.hashCode());
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
        Image other = (Image) obj;
        if (fileName == null) {
            if (other.fileName != null)
                return false;
        } else if (!fileName.equals(other.fileName))
            return false;
        if (date == null) {
            if (other.date != null)
                return false;
        } else if (!date.equals(other.date))
            return false;
        if (satelliteName == null) {
            if (other.satelliteName != null)
                return false;
        } else if (!satelliteName.equals(other.satelliteName))
            return false;
        return true;
    }

    
}