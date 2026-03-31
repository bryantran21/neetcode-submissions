class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
isValid(s) {
        let stack = [];
        let closeToOpen = {
            ')' : '(',
            ']': '[',
            '}': '{',
        };
        
        for(let i of s){
            console.log("----");
            console.log("Current char:", i);
            console.log("Stack BEFORE:", stack);

            if(closeToOpen[i]){
                console.log("It's a closing bracket");

                if(stack.length > 0 && stack[stack.length - 1] === closeToOpen[i])
                {
                    console.log("Match found → popping:", stack[stack.length - 1]);
                    stack.pop();
                } else {
                    console.log("No match / empty stack");
                    return false;
                }
            }
            else{
                console.log("Opening bracket → pushing:", i);
                stack.push(i);
            }

            console.log("Stack AFTER:", stack);
        }

        console.log("Final stack:", stack);
        return stack.length === 0;
    }
}
