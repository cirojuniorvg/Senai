package Prova1;

import java.util.List;

public class CombatTeam {
    private Integer numberMembers;
    private List <User> list;

    public CombatTeam(){
        
    }

    public CombatTeam(Integer numberMembers, List<User> list) {
        this.numberMembers = numberMembers;
        this.list = list;
    }

    public Integer getNumberMembers() {
        return numberMembers;
    }

    public void setNumberMembers(Integer numberMembers) {
        this.numberMembers = numberMembers;
    }

    public List<User> getList() {
        return list;
    }

    public void setList(List<User> list) {
        this.list = list;
    }

    @Override
    public String toString() {
        return "CombatTeam [numberMembers=" + numberMembers + ", list=" + list + "]";
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((numberMembers == null) ? 0 : numberMembers.hashCode());
        result = prime * result + ((list == null) ? 0 : list.hashCode());
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
        CombatTeam other = (CombatTeam) obj;
        if (numberMembers == null) {
            if (other.numberMembers != null)
                return false;
        } else if (!numberMembers.equals(other.numberMembers))
            return false;
        if (list == null) {
            if (other.list != null)
                return false;
        } else if (!list.equals(other.list))
            return false;
        return true;
    }
    
    

}
