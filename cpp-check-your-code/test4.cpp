/**
 * test4.cpp
 *
 * This is an example where the checkers do not detect that a buffer overflow is
 * possible. Moreover, we would like the checker do detect that the from buffer
 * is uninitialized.
 */

 
#define SIZE 100;

void copyString(char * to, char * from, int length)
{
	// This buffer overflow error should be detected at runtime
	for (int i = 0; i <= length; i += 1)
	{
		to[i] = from[i];
	}
}

int main()
{
	char fromString[SIZE];
	char toString[SIZE];
	
	copyString(toString, fromString, SIZE);
	
	return 0;
}