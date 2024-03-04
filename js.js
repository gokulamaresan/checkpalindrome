let btn = document.querySelector("ret");
function checkPalindrome() {
    const word = document.getElementById("lname").value;
    let length = word.length;
    let count=0;
    if(length%2 == 0) return alert("not a palindrome");
    else{
        let first = word.substring(0,length/2);
        let last = word.substring(length/2+1,length);
        for(let i=0,j=last.length-(1);i<first.length;i++,j--){
            if (first[i] != last[j]){
                return alert("not a palindrome");
            }
        }
    if(count == 0)
    return alert("it is a palindrome");
}
}
