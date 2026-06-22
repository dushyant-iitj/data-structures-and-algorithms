public class LambdaExpressions {

    public static void main(String[] args) {

        // // Java 7:
        // A obj = new A() {
        // public void show() {
        // System.out.println("in anonymous show");
        // }
        // };

        // // Java 8:
        A objA = () -> System.out.println("in anonymous show");

        objA.show();

        B objB = (name) -> System.out.println("Hi " + name);

        objB.greet("Nest");

        /*
         * Note:
         * On compiling, lambda expressions don't create class files, unlike anonymous
         * classes which do by $x notations
         */

        C objC = (x, y) -> x + y;

        System.out.println(objC.add(1.2, 2.6));
    }

}

@FunctionalInterface
interface A {
    void show();
}

@FunctionalInterface
interface B {
    void greet(String name);
}

@FunctionalInterface
interface C {
    double add(double num1, double num2);
}