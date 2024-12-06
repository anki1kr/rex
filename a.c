#include <stdio.h>
#include <stdlib.h>

int main() {
        system("cls");
    int a[5]={2,5,3,2,3};
    int i,j,count=0;
    for(i=0;i<5;i++){
        for(j=i+1;j<5;j++){
            if(a[i]==a[j]){
                count++;
            }
        }
        if(count>=2){
printf("%d is occured %d times",a[i],count);
    printf("\n");}
    }
    return 0;
}
