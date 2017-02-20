/*********************************/
/*     G. Lukas J. Armstrong     */
/*          CECS 130-02          */
/*         Assignment 04         */
/*          Problem 01           */
/*********************************/
#include <stdio.h>
int i;
int main(){
  for(i=100;i>0;i-=10){
    printf("%2d \n",i);
  }
  if(i==0){
    printf("1\n");
  }
  return 0;
}
