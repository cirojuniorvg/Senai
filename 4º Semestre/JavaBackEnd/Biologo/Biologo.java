package Biologo;

public class Biologo extends Usuario {
    private String universidade;
    private String companhia;
    private Integer codigo;

    public Biologo(){

    }

    public Biologo(String universidade, String companhia, Integer codigo) {
        this.universidade = universidade;
        this.companhia = companhia;
        this.codigo = codigo;
    }
    public Biologo(String nome, String email, String senha, Boolean admin, String universidade, String companhia,
            Integer codigo) {
        super(nome, email, senha, admin);
        this.universidade = universidade;
        this.companhia = companhia;
        this.codigo = codigo;
    }

    public String getUniversidade() {
        return universidade;
    }

    public void setUniversidade(String universidade) {
        this.universidade = universidade;
    }

    public String getCompanhia() {
        return companhia;
    }

    public void setCompanhia(String companhia) {
        this.companhia = companhia;
    }

    public Integer getCodigo() {
        return codigo;
    }

    public void setCodigo(Integer codigo) {
        this.codigo = codigo;
    }

    @Override
    public String toString() {
        return "Biologo [universidade=" + universidade + ", companhia=" + companhia + ", codigo=" + codigo + "]";
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((universidade == null) ? 0 : universidade.hashCode());
        result = prime * result + ((companhia == null) ? 0 : companhia.hashCode());
        result = prime * result + ((codigo == null) ? 0 : codigo.hashCode());
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
        Biologo other = (Biologo) obj;
        if (universidade == null) {
            if (other.universidade != null)
                return false;
        } else if (!universidade.equals(other.universidade))
            return false;
        if (companhia == null) {
            if (other.companhia != null)
                return false;
        } else if (!companhia.equals(other.companhia))
            return false;
        if (codigo == null) {
            if (other.codigo != null)
                return false;
        } else if (!codigo.equals(other.codigo))
            return false;
        return true;
    }

}