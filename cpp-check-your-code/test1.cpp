/**
 * test1.cpp
 *
 * The purpose of this file is to provide an example of a simple out of bounds * * error. Array A has a size of ten elements, but the indexing starts at zero.
 * So, in the for loop, when we try to index the array in the last iteration
 * (i.e., with ten), the checker will determine that an out of bounds error
 * happens.
 */

#include <iostream>
#define SIZE 10
using namespace std;

int main()
{
	int A[SIZE] = {};
	
	// Variable i reaches the value ten
	for (int i = 0; i <= 10; i += 1)	
	{	
		cout << A[i] << endl;
	}

	return 0;
}