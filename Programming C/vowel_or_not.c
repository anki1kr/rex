#include <stdio.h>
#include<stdlib.h>
int main() {
  system("cls");
  char ch;
    
    // Ask the user to input a character
    printf("Enter a Alphabet: ");
    scanf("%c", &ch);
    // Check if the character is a vowel using switch statement
    switch (ch) {
        case 'a': case 'A':  case 'E': case 'I':case 'O':
        case 'U': case 'e': case 'i':case 'o': case 'u':
            printf("%c is a vowel.\n", ch);
            break;
        default:
            printf("%c is not a vowel.\n", ch);
    }
    
    return 0;
}
