/**
 * test3.cpp
 *
 * This example build on the previous one in order to provide an example of a 
 * unused function and variable errors. Here, variable x is declared but never
 * used. The same situation is true for the function compouteDouble.
 * 
 */

 
#include <iostream>
using namespace std;

void printSum(int a, int b)
{
	cout << "The sum is " << a + b << endl;
}

int computeDouble(int x)
{
	return x + x;
}

int main()
{
	int a, b, x;

	cout << "Enter a and b: ";
	
	printSum(a, b);	
	
	return 0;
}