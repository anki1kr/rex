#include <stdio.h>
#include <stdlib.h>

int main() {
        system("cls");

    int key, i, n;

    printf("Enter the size of the array: ");
    scanf("%d", &n);

    // Declare the array with size n
    int a[n];

    printf("Enter the elements of the array:\n");
    for (i = 0; i < n; i++) {
        scanf("%d", &a[i]);
    }

    printf("Enter the element to search: ");
    scanf("%d", &key);

    int found = 0;
    for (i = 0; i < n; i++) {
        if (a[i] == key) {
            found = 1;
            break;
        }
    }

    if (found) {
        printf("%d is found at index %d\n", key, i);
    } else {
        printf("%d is not found\n", key);
    }

    return 0;
}
