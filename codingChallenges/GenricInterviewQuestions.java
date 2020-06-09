import java.util.Scanner;

public class GenricInterviewQuestions {

    public static void main(String[] args) {
        // reverseString();
        swapWithoutThird();
    }

    private static void swapWithoutThird() {
        Scanner in = new Scanner(System.in);
        System.out.println("Enter A:");
        int a = in.nextInt();
        System.out.println("Enter B:");
        int b = in.nextInt();
        a = a+b;
        b = a-b;
        a = a-b;
        System.out.println("A:"+a+"B:"+b);
    }

    private static void reverseString() {
        Scanner in = new Scanner(System.in);
        System.out.println("Input Text");
        String input = in.next(), res = "";
        System.out.println(input.length());
        for (int i = input.length() - 1; i >= 0; --i)
            res += input.charAt(i);
        System.out.println(res);
    }
}