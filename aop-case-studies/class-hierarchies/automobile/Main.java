package automobile;

public class Main {
	public static void main(String[] args) {
		Automobile automobile = new Automobile();
		automobile.startEngine();
		automobile.drive();
		
		UTBTractor utbTractor = new UTBTractor();
		utbTractor.startEngine();
		utbTractor.drive();
		
		JohnDeereTractor deereTractor = new JohnDeereTractor();
		deereTractor.startEngine();
		deereTractor.drive();
	}
}
