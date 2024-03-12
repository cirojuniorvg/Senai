package Biologo;

import java.time.LocalDate;

public class Registro {
    private Biologo biologo;
    private Especie especie;
    private LocalDate dataRegistro;
    private String localizacao;
    private MetodoColeta metodoDeColeta;

    public Registro(){

    }
    
    public Registro(Biologo biologo, Especie especie, LocalDate dataRegistro, String localizacao,
            MetodoColeta metodoDeColeta) {
        this.biologo = biologo;
        this.especie = especie;
        this.dataRegistro = dataRegistro;
        this.localizacao = localizacao;
        this.metodoDeColeta = metodoDeColeta;
    }

    public Biologo getBiologo() {
        return biologo;
    }

    public void setBiologo(Biologo biologo) {
        this.biologo = biologo;
    }

    public Especie getEspecie() {
        return especie;
    }

    public void setEspecie(Especie especie) {
        this.especie = especie;
    }

    public LocalDate getDataRegistro() {
        return dataRegistro;
    }

    public void setDataRegistro(LocalDate dataRegistro) {
        this.dataRegistro = dataRegistro;
    }

    public String getLocalizacao() {
        return localizacao;
    }

    public void setLocalizacao(String localizacao) {
        this.localizacao = localizacao;
    }

    public MetodoColeta getMetodoDeColeta() {
        return metodoDeColeta;
    }

    public void setMetodoDeColeta(MetodoColeta metodoDeColeta) {
        this.metodoDeColeta = metodoDeColeta;
    }

    @Override
    public String toString() {
        return "Registro [biologo=" + biologo + ", especie=" + especie + ", dataRegistro=" + dataRegistro
                + ", localizacao=" + localizacao + ", metodoDeColeta=" + metodoDeColeta + "]";
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((biologo == null) ? 0 : biologo.hashCode());
        result = prime * result + ((especie == null) ? 0 : especie.hashCode());
        result = prime * result + ((dataRegistro == null) ? 0 : dataRegistro.hashCode());
        result = prime * result + ((localizacao == null) ? 0 : localizacao.hashCode());
        result = prime * result + ((metodoDeColeta == null) ? 0 : metodoDeColeta.hashCode());
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
        Registro other = (Registro) obj;
        if (biologo == null) {
            if (other.biologo != null)
                return false;
        } else if (!biologo.equals(other.biologo))
            return false;
        if (especie == null) {
            if (other.especie != null)
                return false;
        } else if (!especie.equals(other.especie))
            return false;
        if (dataRegistro == null) {
            if (other.dataRegistro != null)
                return false;
        } else if (!dataRegistro.equals(other.dataRegistro))
            return false;
        if (localizacao == null) {
            if (other.localizacao != null)
                return false;
        } else if (!localizacao.equals(other.localizacao))
            return false;
        if (metodoDeColeta != other.metodoDeColeta)
            return false;
        return true;
    }

    
    
}
