public class ThreadStates {
  /*
   * New, Runnable, Running, Waiting, Dead
   * 
   * New >
   * 
   * start() > Runnable
   * 
   * run() > Running
   * 
   * sleep() or wait() > Waiting
   * with wait() we also need to notify() > Runnable
   * 
   * stop() > Dead // don't use, it's deprecated. can be used to stop thread
   */
}
