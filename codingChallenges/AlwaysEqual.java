public class AlwaysEqual {

    private String name;

    @Override
    public boolean equals(Object obj) {
        AlwaysEqual acmp = (AlwaysEqual) obj;
        return acmp.name.contains(this.name);
    }

    public AlwaysEqual(String name) {
        this.name = name;
    }

    @Override
    public int hashCode() {
        return super.hashCode();
    }

    public static void main(String[] args) {
        AlwaysEqual aone = new AlwaysEqual("Cognizant");
        AlwaysEqual atwo = new AlwaysEqual("Cognizant Tech Solutions");
        AlwaysEqual athree = new AlwaysEqual("Wipro");
        System.out.println(aone.equals(atwo));
        System.out.println(aone.equals(athree));
        System.out.println(aone + "\t" + atwo + "\t" + athree);
    }

    @Override
    public String toString() {
        super.equals(new Object());
        // TODO Auto-generated method stub
        System.out.println(super.toString());
        return this.getClass().getName()+"#"+super.hashCode();
    }
}