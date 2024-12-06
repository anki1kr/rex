#include <stdio.h>
#include <stdlib.h>

int main()
{
    system("cls");
    int n;
    printf("Enter a number to generate its table: ");
    scanf("%d", &n);

    for (int i = 1; i <= 10; i++)
    {
        printf("%d x %d = %d\n", n, i, n * i);
    }

    return 0;
}
