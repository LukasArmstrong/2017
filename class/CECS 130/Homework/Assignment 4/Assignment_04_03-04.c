/*********************************/
/*     G. Lukas J. Armstrong     */
/*          CECS 130-02          */
/*         Assignment 04         */
/*         Problem 03/04         */
/*********************************/
#include <stdio.h>
void divider(void);
void larger(void);
void atm(void);
int main(){
  atm();
  larger();
  divider();
}
void divider(void){
  printf("************************************************\n");
  printf("\t\tDivider\n");
  printf("************************************************\n");
  int num1 =0, num2=0 , num3=0;
  printf("Please enter the two numbers you would like to divide and get the remainder for: ");
  scanf("%d,%d",&num1,&num2);
  num3 = num1%num2;
  printf("your remainder is %d \n\n",num3);
}
void larger(void){
  printf("************************************************\n");
  printf("\t\tLarger\n");
  printf("************************************************\n");
  int num1=0, num2=0;
  printf("Please enter two integer numbers that you would live to figure out which number is lager: ");
  scanf("%d,%d,",&num1,&num2);
  if(num1>num2){
    printf("%d is larger \n\n",num1);
  }
  else if(num1==num2){
    printf("You enter two numbers that are equalivent, the program will exit now. \n x");
  }
  else{
    printf("%d is larger\n",num2);
  }
}
void atm(void){
  printf("************************************************\n");
  printf("\tSelect a transaction\n");
  printf("************************************************\n");
  printf("(1)\tTransfer\n");
  printf("(2)\tDesposit Money\n");
  printf("(3)\tWithdraw Money\n");
  printf("(4)\tPIN Change\n");
  printf("(5)\tBalance Enquiry\n\n");
}
