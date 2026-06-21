public class Enum {
  public static void main(String[] args) {
    Status s = Status.Pending;
    System.out.println(s);
    System.out.println(s.ordinal()); // position

    Status[] statuses = Status.values();
    for (Status status : statuses) {
      System.out.println(status.ordinal() + " : " + status);
    }

    String statusValue;
    switch (s) {
      case Running:
        statusValue = "All good";
        break;
      case Failed:
        statusValue = "Request Failed..";
        break;
      case Pending:
        statusValue = "Request Pending..";
        break;
      case Success:
        statusValue = "Done";
        break;

      default:
        statusValue = "enum error?";
        break;
    }
    System.out.println("Status: " + statusValue);
  }
}

enum Status { // Status is a class
  Running, Failed, Pending, Success // and these are objects of class
}