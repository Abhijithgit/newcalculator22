function displaydata(data){
    result.value+=data
}

function allclear(){
    result.value=""
}

function Eval(){
    result.value=eval(result.value)
}
function bckspace(){
    data=result.value
    result.value=data.slice(0,-1)
}