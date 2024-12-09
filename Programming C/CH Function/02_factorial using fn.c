#include <stdio.h>
#include <stdlib.h>
int factorial(int); // fn PROTOTYPE
int main()
{
    system("cls");
    int num;

    printf("Enter a number: ");
    scanf("%d", &num);

    if (num < 0)
    {
        printf("Factorial of a negative number is not defined.\n");
    }
    else
    {
        printf("Factorial of %d is %d.\n", num, factorial(num));//function call
    }

    return 0;
}

// Recursive function to calculate factorial
int factorial(int n) // FUNCTION DEFINATION
{
    if (n == 0 || n == 1)
    {
        return 1; // Base case: factorial of 0 or 1 is 1
    }
    return factorial(n - 1) * n; // Recursive case
}
