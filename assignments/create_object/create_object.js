function CreateObject(arr) {
    // Write your code here
    const person = {}
    for(var i=1; i<arr.length;i+=2){
    person[arr[i-1]]=arr[i]
}
return person
}

module.exports = CreateObject;
