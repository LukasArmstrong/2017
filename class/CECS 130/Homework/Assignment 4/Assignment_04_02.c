/*********************************/
/*     G. Lukas J. Armstrong     */
/*          CECS 130-02          */
/*         Assignment 04         */
/*          Problem 02           */
/*********************************/
#include <stdio.h>
int numFrom, numStop, increment;
int main(){
  printf("Please indicate what number you would like to start counting from: ");
  scanf("%2d",&numFrom);
  printf("Please indicate what number you would like to stop counting at: ");
  scanf("%2d",&numStop);
  printf("Please indicate what number you would like to count by: ");
  scanf("%2d",&increment);
  while(numFrom<(numStop+1)){
      printf("%3d",numFrom);
      numFrom += increment;
  }
}
