// Check a string pallindrome or not

function pallindrome(str) {
    if(str.length === 1) {
        return true;
    }
    
    let newStr = str.replace(/[^A-Za-z]/g, "").toLowerCase();

    let i = 0;
    let j = newStr.length - 1;

    while(i < j) {
        let ch1 = newStr.charAt(i);
        let ch2 = newStr.charAt(j);

        if(ch1 !== ch2) {
            return false;
        }

        i++;
        j--;
    }

    return true;
}

let str = "A man, a plan, a canal:Panama";

console.log(pallindrome(str));