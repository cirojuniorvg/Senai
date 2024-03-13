package Prova1;

import java.util.List;

public class CombatTeam {
    private Integer numberMembers;
    private Leader leader;
    private ParkAdress parkAdress;
    private List <User> list;

    public CombatTeam(){
        
    }

    public CombatTeam(Integer numberMembers, Leader leader, ParkAdress parkAdress, List<User> list) {
        this.numberMembers = numberMembers;
        this.leader = leader;
        this.parkAdress = parkAdress;
        this.list = list;
    }

    public Integer getNumberMembers() {
        return numberMembers;
    }

    public void setNumberMembers(Integer numberMembers) {
        this.numberMembers = numberMembers;
    }

    public Leader getLeader() {
        return leader;
    }

    public void setLeader(Leader leader) {
        this.leader = leader;
    }

    public ParkAdress getParkAdress() {
        return parkAdress;
    }

    public void setParkAdress(ParkAdress parkAdress) {
        this.parkAdress = parkAdress;
    }

    public List<User> getList() {
        return list;
    }

    public void setList(List<User> list) {
        this.list = list;
    }

    @Override
    public String toString() {
        return "CombatTeam [numberMembers=" + numberMembers + ", leader=" + leader + ", parkAdress=" + parkAdress
                + ", list=" + list + "]";
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((numberMembers == null) ? 0 : numberMembers.hashCode());
        result = prime * result + ((leader == null) ? 0 : leader.hashCode());
        result = prime * result + ((parkAdress == null) ? 0 : parkAdress.hashCode());
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
        if (leader == null) {
            if (other.leader != null)
                return false;
        } else if (!leader.equals(other.leader))
            return false;
        if (parkAdress == null) {
            if (other.parkAdress != null)
                return false;
        } else if (!parkAdress.equals(other.parkAdress))
            return false;
        if (list == null) {
            if (other.list != null)
                return false;
        } else if (!list.equals(other.list))
            return false;
        return true;
    }

    

}
