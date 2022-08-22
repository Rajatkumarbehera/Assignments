// Find minimum steps to reach the end of an array

function minJumps(arr) {
    let jumps = 0, currentJump = 0, maxSoFar = 0;

    for(let i=0; i<arr.length-1; i++) {
        maxSoFar = Math.max(maxSoFar, i+arr[i]);
        
        if(i === currentJump) {
            jumps++;
            currentJump = maxSoFar;
        }
    }
    
    return jumps;
}

let arr = [2, 3, 1, 1, 4];

console.log(minJumps(arr));