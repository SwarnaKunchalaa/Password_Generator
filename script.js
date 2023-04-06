function fun(){
    let arr = ["0123456789","abcdefghijklmnopqrstuvwxyz", "ABCDEFGHIJKLMNOPQRSTUVWXYZ", "!@#$%&"];
    let res = "";
    let length = document.getElementById("length");
    let add = document.querySelectorAll(".add")
    for(let i=0; i<4; i++){
        if(add[i].checked){
            res+=arr[i];
        }
    }
    console.log(length.value);
    let strlen = res.length;
    let result = "";
    for(let i=0;i<length.value;i++){
        result += res.charAt(Math.floor(Math.random()*strlen));
    }
    console.log(result);
    document.getElementById("answer").value = result
}