/*********************************/
/*     G. Lukas J. Armstrong     */
/*          CECS 130-02          */
/*         Assignment 03         */
/*********************************/
#include <stdio.h>
#include <time.h>
#include <ctype.h>
#include <stdbool.h>
int main() {
  srand(time(NULL));
  int randNum, userNum;
  do{
    randNum=1+(rand()%10);
    printf("Please guess an integer number between 1 and 10: ");
    scanf("%d", &userNum);
    if((isdigit(userNum)==0)==false){
      printf("That is not a number, please try again\n");
    }
    else if((isdigit(userNum)==0)&&(userNum!=randNum)){
      printf("You guessed wrong. The correct answer was %d. Guess again\n", randNum);
    }
  }while((isdigit(userNum)==0)&&(userNum!=randNum));
    printf("You guessed right! The correct answer was %d.\n", randNum);
  return 0;
}
