#include <stdio.h>
#include <stdlib.h>

int main() {
        system("cls");
    int a[5]={1,3,2,3,1};
    
    for(int i=0;i<5;i++){
        int count = 0;
        int printed = 0;
    
        // Check if number was already printed
        for(int k=0;k<i;k++){
            if(a[i]==a[k]){
                printed = 1;
                break;
            }
        }
        
        if(!printed){  // Only count and print if not already printed
            for(int j=0;j<5;j++){
                if(a[i]==a[j]){
                    count++;
                }
            }
             printf("%d occurs %d times\n", a[i], count);
        }
    }
    return 0;
}