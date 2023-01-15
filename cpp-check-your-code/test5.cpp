/**
 * test5.cpp
 *
 * We augment the previous example with a configuration file that will restrict
 * us to using initialized memory. Moreover. we will not be able to use NULL
 * parameters as arguments to copyMemory.
 *
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
	copyString(NULL, fromString, SIZE);
	
	return 0;
}