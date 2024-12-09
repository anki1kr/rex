#include <stdio.h>  // Include standard input/output library
#include <stdlib.h> // Include standard library for rand()

int main() {
    // Print a random number between 1 and 6, simulating a dice roll
    printf("You rolled a %d\n", (rand() % 6) + 1);
    return 0; // Return 0 to indicate successful execution
}