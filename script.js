let count=0;

increment=()=>{
    count++
    document.getElementById('count').innerText=count
}
decrement=()=>{
    count--;
    document.getElementById("count").innerText=count
}