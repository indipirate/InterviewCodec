import java.util.ArrayList;
import java.util.List;

public class UnsetEvenBits {
    public static void main(final String[] args) {
        System.out.println("Input:45");
        System.out.println("output:" + unsetEvenBits(45));
    }

    static int unsetEvenBits(int x) {
        // System.out.print("Binary Of Integer:");
        // printRecusively(x);
        final List<Integer> tmp = new ArrayList();
        while (x > 0) {
            if (tmp.size() % 2 == 0) tmp.add(0); else tmp.add(x % 2);
            x = x / 2;
        }
        // System.out.print("\nNew Binary After Resetting Even bits:");
        // Collections.reverse(tmp);
        // tmp.stream().forEach(System.out::print);
        // System.out.println();
        final int res = tmp.stream().reduce(0, (e1, e2) -> ((e1 * 2) + (e2)));
        return res;
    }

    static void printRecusively(int x){
        if(x==0) return; else printRecusively(x/2);
        System.out.print(x%2);
    }
}