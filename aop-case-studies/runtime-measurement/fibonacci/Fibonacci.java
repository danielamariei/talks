package fibonacci;

public class Fibonacci {
	/**
	 * @pre n is non-negative
	 * @param n
	 *            the nth Fibonacci number to be computed
	 * @return the nth Fibonacci number
	 */
	public int fib(int n) {
		return compute(n);
	}
	
	private int compute(int n) {
		if (n < 2)
			return n;
		return compute(n - 1) + compute(n - 2);
	}

	public void measureRuntime(int from, int to) {
		int n = to - from + 1;
		for (int i = from; i <= to; ++i) {
			long startTime = System.nanoTime();
			fib(i);
			long endTime = System.nanoTime();
			
			System.out.println(endTime - startTime);
		}
	}

	public static void main(String[] args) {
		Fibonacci f = new Fibonacci();

		for (int i = 1; i <= 10; ++i) {
			System.out.println("Round " + i);
			f.measureRuntime(1, 40);
		}

	}

}
