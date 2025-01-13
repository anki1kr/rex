#include <stdio.h>
#include <stdlib.h>

int main()
{
    system("cls");
    char a;  // Add a semicolon to complete the declaration

    printf("enter your name =");


    for (int i = 0; i < 10; i++)
    {
        scanf(" %c", &a);  
       
// Use %c for character input and add a space before %c to consume any leftover newline characters
    }
         printf("you have entered = %c", a);
    return 0;
}