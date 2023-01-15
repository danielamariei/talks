package aspects;
/*
 public aspect FibonacciAroundAspect {
 
	pointcut fib() : target(fibonacci.Fibonacci) && call(public int fib(int)) && ! within(FibonacciAroundAspect);

	int around() : fib() {

		long startTime = System.nanoTime();
		proceed();
		long endTime = System.nanoTime();

		System.out.println(endTime - startTime);
		
		return 0;
	}
}
*/