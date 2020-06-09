public class DifferentInterfaceSameMethod implements A  {
    public static void main(String[] args) {
        A a = new DifferentInterfaceSameMethod();
        System.out.println("A:");
        a.doSomething();
        // B b = new DifferentInterfaceSameMethod();
        // C c = new DifferentInterfaceSameMethod();
        // System.out.println("B:");
        // b.doSomething();
        // System.out.println("C:");
        // c.doSomething();
    }
}

interface A {
     public default void doSomething(){
         System.out.println("Iam From Interface A.");
     };
}

interface B {
     public void doSomething();
}

abstract class C implements A,B{
    @Override
    public abstract void doSomething();
}