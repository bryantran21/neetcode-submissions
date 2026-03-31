class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {

        let islandCount = 0

        const dfs = (i, j) => {
            if(i < 0 || j < 0 || i >= grid.length || j >= grid[0].length || grid[i][j] === '0'){
                return
            }

            grid[i][j] = '0';

            dfs(i+1, j);
            dfs(i-1, j);
            dfs(i, j+1);
            dfs(i, j-1);
        }


        for(var i = 0; i < grid.length; i++){
            for(var j = 0; j < grid[0].length; j++){
                if(grid[i][j] === '1'){
                    //do i need to make a function called dfs?
                    islandCount++;
                    dfs(i,j);
                }

                if(grid[i][j] === '0'){
                }
                //how do i set the value of something to '0'         
            }
        }
        return islandCount;
    }
}
