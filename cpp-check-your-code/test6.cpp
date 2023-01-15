/**
 * In this example, the checkers alert us that we mus free the buffer after we
 * are done using it. When we have user defined functions we have situations 
 * were we would like to specify the valid range for certain arguments. 
 * In order to achieve this, we will use a configuration file.
 *
 */

 
#define SIZE 512

char * allocCharBuffAndInit(int num, int val)
{
	char * buffer = (char*) malloc(num);
	
	for (int i = 0; i < num; i += 1)
	{
		buffer[i] = val;
	}
	
	return buffer;
}


int main()
{
	char * buffer = allocCharBuffAndInit(2 * SIZE, -1);
	buffer[SIZE] = 'A';
	

	return 0;
}