/*********************************/
/*     G. Lukas J. Armstrong     */
/*          CECS 130-02          */
/*         Assignment 03         */
/*********************************/
#include <stdio.h>
#include <time.h>
#include <ctype.h>
int main() {
  int srand(), rand();
  srand(time(NULL));
  int die1, die2, dieTotal, grandTotalAttempts=0;
  char userReply;
  do{
    for(int i=1; i<100; i++){
      //I would much than use dieTotal=2+(rand()%11)
      die1=1+(rand()%6);
      die2=1+(rand()%6);
      dieTotal=die1+die2;
      if((dieTotal==7)||(dieTotal==11)){
        grandTotalAttempts += i;
        printf("You win! It took you %3d attempts to win.\n", i);
        i=100;
        do{
          printf("Do you wish to play again? Y/N ");
          scanf("%c",&userReply);
          if(toupper(userReply)=='N'){
            break;
          }
          if((toupper(userReply)!='N')&&(toupper(userReply)!='Y')){
            printf("\n");
            printf("You entered an invaid respone, please try again.\n");
          }
        }while((toupper(userReply)!='N')&&(toupper(userReply)!='Y'));
        }
      else{
      printf("You lose. The losing number was %3d. You have lost %2d games. \n", dieTotal, i);
      }
    }
  }while((toupper(userReply))=='Y');
  printf("Thank you for playing! You had a grand total attempts of %4d. \n", grandTotalAttempts);
  return 0;
}
