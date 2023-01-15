/**
 * test2.cpp
 *
 * The purpose of this file is to provide an example of a simple uninitialized 
 * variable error. Variables a and b are not initialized by default before passing
 * them as argument to the printSum function. As such, the checker will determine
 * and uninitialized variable error for both a and b.
 * 
 */


#include <iostream>
using namespace std;

void printSum(int a, int b)
{
	cout << "The sum is " << a + b << endl;
}

int main()
{
	int a, b;

	cout << "Enter a and b: ";
	
	printSum(a, b);	
	
	return 0;
}