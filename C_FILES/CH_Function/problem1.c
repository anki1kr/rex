#include <stdio.h>
#include <stdlib.h>

int main()
{
    system("cls"); // Clear the console screen (specific to Windows OS).
int i =2 ;
int* ptr=&i;
printf("value of i =%d",*ptr);
    return 0; // Indicate that the program ended successfully.
}