#include <stdio.h>
#include <stdlib.h>

int main()
{
  system("cls");
  // reverse a number
  int n, r, num, res = 0;
  printf("enter the number=");
  scanf("%d", &num);
  n = num;
  while (n > 0)
  {
    r = n % 10;
    res = res * 10 + r;
    n = n / 10;
  }
  printf("reverse of %d is %d\n", num, res);

  // palindrome number
  if (num == res)
    printf("%d is a palindrome number\n", num);
  else
    printf("%d is not a palindrome number\n", num);
}
