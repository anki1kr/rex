#include <stdio.h>
#include <stdlib.h>

int main()
{
    system("cls");
    for (int i = 0; i <= 6; i = i + 2)// ROWS
    {                               
        for (int j = 0; j < i; j++) // COLUMNS
        {
            printf("*");
        }
        printf("\n");
    }
    return 0;
}