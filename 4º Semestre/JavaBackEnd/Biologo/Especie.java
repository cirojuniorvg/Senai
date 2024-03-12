package Biologo;

public class Especie {
    private String nomeCientifico;
    private String nomeComum;
    private Habitat habitat;
    private String destribuicaoGeografica;
    private String caracteristicasMofologicas;

    public Especie(){
        
    }

    public Especie(String nomeCientifico, String nomeComum, Habitat habitat, String destribuicaoGeografica,
            String caracteristicasMofologicas) {
        this.nomeCientifico = nomeCientifico;
        this.nomeComum = nomeComum;
        this.habitat = habitat;
        this.destribuicaoGeografica = destribuicaoGeografica;
        this.caracteristicasMofologicas = caracteristicasMofologicas;
    }

    public String getNomeCientifico() {
        return nomeCientifico;
    }

    public void setNomeCientifico(String nomeCientifico) {
        this.nomeCientifico = nomeCientifico;
    }

    public String getNomeComum() {
        return nomeComum;
    }

    public void setNomeComum(String nomeComum) {
        this.nomeComum = nomeComum;
    }

    public Habitat getHabitat() {
        return habitat;
    }

    public void setHabitat(Habitat habitat) {
        this.habitat = habitat;
    }

    public String getDestribuicaoGeografica() {
        return destribuicaoGeografica;
    }

    public void setDestribuicaoGeografica(String destribuicaoGeografica) {
        this.destribuicaoGeografica = destribuicaoGeografica;
    }

    public String getCaracteristicasMofologicas() {
        return caracteristicasMofologicas;
    }

    public void setCaracteristicasMofologicas(String caracteristicasMofologicas) {
        this.caracteristicasMofologicas = caracteristicasMofologicas;
    }

    @Override
    public String toString() {
        return "Especie [nomeCientifico=" + nomeCientifico + ", nomeComum=" + nomeComum + ", habitat=" + habitat
                + ", destribuicaoGeografica=" + destribuicaoGeografica + ", caracteristicasMofologicas="
                + caracteristicasMofologicas + "]";
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((nomeCientifico == null) ? 0 : nomeCientifico.hashCode());
        result = prime * result + ((nomeComum == null) ? 0 : nomeComum.hashCode());
        result = prime * result + ((habitat == null) ? 0 : habitat.hashCode());
        result = prime * result + ((destribuicaoGeografica == null) ? 0 : destribuicaoGeografica.hashCode());
        result = prime * result + ((caracteristicasMofologicas == null) ? 0 : caracteristicasMofologicas.hashCode());
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
        Especie other = (Especie) obj;
        if (nomeCientifico == null) {
            if (other.nomeCientifico != null)
                return false;
        } else if (!nomeCientifico.equals(other.nomeCientifico))
            return false;
        if (nomeComum == null) {
            if (other.nomeComum != null)
                return false;
        } else if (!nomeComum.equals(other.nomeComum))
            return false;
        if (habitat != other.habitat)
            return false;
        if (destribuicaoGeografica == null) {
            if (other.destribuicaoGeografica != null)
                return false;
        } else if (!destribuicaoGeografica.equals(other.destribuicaoGeografica))
            return false;
        if (caracteristicasMofologicas == null) {
            if (other.caracteristicasMofologicas != null)
                return false;
        } else if (!caracteristicasMofologicas.equals(other.caracteristicasMofologicas))
            return false;
        return true;
    }

    
}
