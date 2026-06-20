public class Wrapper {

  public static void main(String[] args) {
    int num = 7;

    // Boxing
    // Integer num1 = new Integer(num);
    // but auto-boxing is allowed and handled
    Integer num1 = num; // auto-boxing

    // Similarly
    // int num2 = num1.intValue();
    // but auto-unboxing is handled
    int num2 = num1; // auto-unboxing

    String str = "12";
    int num3 = Integer.parseInt(str);
    System.out.println(num3);
  }

}
