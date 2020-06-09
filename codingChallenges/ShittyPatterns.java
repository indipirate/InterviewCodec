public class ShittyPatterns {
    public static void main(String[] args) {
        // print("*", 5);
        print("*", 5);
        print180("*",5);
    }

    private static void print(String pattern, int i) {
        if (i > 0)
            print(pattern, i - 1);
        while (i > 0) {
            printPattern(pattern);
            --i;
        }
        System.out.println();
    }

    private static void print180(String pattern, int i) {
        int j = i;
        while (j > 0) {
            printPattern(pattern);
            --j;
        }
        System.out.println();
        if (i > 0)
            print180(pattern, i - 1);
    }

    private static void printPattern(String pattern) {
        System.out.print(pattern);
    }

}