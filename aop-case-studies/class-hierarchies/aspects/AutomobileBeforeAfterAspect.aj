package aspects;

import automobile.*;

public aspect AutomobileBeforeAfterAspect {

	pointcut startEngine() : target(Automobile) && call(public void startEngine()); 
	pointcut drive() : target(Automobile) && call(public void drive()); 

	before() : startEngine() {
		System.out.println("[Aspect]Before starting the engine of an automobile " + thisJoinPoint);
	}

	after() : startEngine() {
		System.out.println("[Aspect]After starting the engine of an automobile "  + thisJoinPoint);
	}

	before() : drive() {
		System.out.println("[Aspect]Before driving an automobile " + thisJoinPoint);
	}

	after() : drive() {
		System.out.println("[Aspect]After driving an automobile " + thisJoinPoint);
	}

}
