/*********************************/
/*     G. Lukas J. Armstrong     */
/*          CECS 130-02          */
/*         Assignment 05         */
/*          Problem 01           */
/*********************************/
#include <stdio.h>
#include <stdlib.h>

int main(void)

{

    int  iNumbers[10];
    int  iEntry=0;
    int  x=0;

    printf("Enter 10 numbers\n");


    for (x=0; x<=9; x++) {
        scanf("%d", &iNumbers[x]);
        printf("\n\t%d iNumbers\n", iNumbers[x]);
        printf("\n\t%d X\n", x);
    }

    printf("\n\nWhich order would you like to see your numbers?");
    printf("\n1)\tAscending\n");
    printf("\n2)\tDescending\n");
    scanf("%d", &iEntry);
    printf("\n\t%d iEntry\n\n", iEntry);
    switch(iEntry)  {
        case 1:
        printf("\n\n%d\t%d\t%d\t%d\t%d\t%d\t%d\t%d\t%d\t%d\n\n",iNumbers[0],iNumbers[1],iNumbers[2],iNumbers[3],iNumbers[4],iNumbers[5],iNumbers[6],iNumbers[7],iNumbers[8],iNumbers[9]);
        break;
        case 2:
        printf("\n\n%d\t%d\t%d\t%d\t%d\t%d\t%d\t%d\t%d\t%d\n\n",iNumbers[9],iNumbers[8],iNumbers[7],iNumbers[6],iNumbers[5],iNumbers[4],iNumbers[3],iNumbers[2],iNumbers[1],iNumbers[0]);
        break;
        }
    return 0;
}
