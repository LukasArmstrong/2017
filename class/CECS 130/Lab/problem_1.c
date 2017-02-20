/*Lukas Armstrong
  CECS-130-02
  Lab 04*/
#include <stdio.h>

int main()
{
    int i = 1, j=1, num1, num2, factorial1 = 1, factorial2=1;
    printf("Enter an integer number: ");
    scanf("%d", &num1);

    for( ; i <= num1; i++){
         factorial1*=i;
       }

    printf("%d! = %d\n", num1, factorial1);
    printf("Lets double check that with a while statement.\n ");
    printf("Enter an integer number: ");
    scanf("%d", &num2);
    while(j<=num2){
      factorial2*=j;
      j++;
    }
    printf("%d! = %d\n", num2, factorial2);
    return 0;
  }
