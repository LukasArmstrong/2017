/*********************************/
/*     G. Lukas J. Armstrong     */
/*          CECS 130-02          */
/*         Assignment 02         */
/*********************************/
#include <stdio.h>
int main(){
  int rate, salesPrice, cost, commission;
  printf("Enter an integer value for the following values.\n");
  printf("Rate:");
  scanf("%d", &rate);
  printf("\nSales Price:");
  scanf("%d", &salesPrice);
  printf("\nCost:");
  scanf("%d", &cost);
  commission = rate*(salesPrice-cost);
  printf("With the following values for rate(%d), sales price(%d), and cost(%d).\nYour commission will be %d", rate, salesPrice, cost, commission);
  return 0;
}
