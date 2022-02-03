import math  

#store the positions in a 2 dimensional array
position  = [
        [0,0,5,0,0,0,0,0,4], 
        [7,0,4,0,9,8,0,2,0], 
        [0,0,0,0,6,0,0,0,0], 
        [5,0,0,4,2,0,0,0,0], 
        [0,0,0,0,0,0,0,7,0], 
        [1,0,7,6,0,0,0,0,2], 
        [0,0,0,2,0,6,0,1,8], 
        [0,0,0,3,0,0,0,0,0], 
        [9,2,0,8,0,0,4,0,0], 
        ]


#write a function to determine if the move is possible
def validMove(x,y,number):
    for i in range(9):
        #check the row (up and down)
        if position[y][i] == number:
            return False

        #check the column (left and right)
        if position[i][x] == number:
            return False


    #gets the location of the square
    quadx = math.ceil((x+1)/3)
    quady = math.ceil((y+1)/3)

    if quadx ==1:
        quadx=0
    elif quadx == 2:
        quadx = 3
    elif quadx == 3:
        quadx = 6

    if quady ==1:
        quady=0
    elif quady == 2:
        quady = 3
    elif quady == 3:
        quady = 6

    #checks if the number is valid within the square
    for i  in range (3):
        for j in range (3):
            if position[quady+i][quadx+j] == number:
                return False

    return True

    


#write a function to call if the move is possible for each square
def solvegame():
    for indexY in range(9):
        for indexX in range(9):
            if position[indexY][indexX] == 0:
                for index in range(1,10):
                    if(validMove(indexX,indexY,index)):
                        position[indexY][indexX] = index
                        #recalls the function
                        solvegame()
                        #assuming that value doesnt let the game finish, set it to zero and try again
                        position[indexY][indexX] = 0
                return
    #print the winning result
    print(position)


solvegame()
