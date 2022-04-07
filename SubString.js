function string(str){
    if(str.substr(0,3)==="Pay"){
        return str;
    }else{
        return "Pay"+str;
    }
}

console.log(string("Paying"))
console.log(string("load"))
