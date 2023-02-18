// geting innerhtml to get the shape name
function getName(string){
    return document.getElementById(string).parentElement.parentElement.parentElement.children[0].innerHTML;
}

// adding html element using javascript
function showResult(area, string){
    document.getElementById('list').innerHTML += "<li>" + string + " " + area + " cm<sup>2</sup>" + "</li>" + "<button class='btn btn-primary btn-sm'>Convert To m<sup>2</sup></button>";
}

// simple multiplication
function multi(num1, num2){
    let num1Value = num1.value;
    let num2Value = num2.value;
    num1Value = parseFloat(num1Value);
    num2Value = parseFloat(num2Value);
    return (num1Value*num2Value).toFixed(2);
}

// when calculate btn is clicked for triangle
document.getElementById('tribtn').addEventListener('click', function(){
    const triangleB = document.getElementById('trib');
    const triangleH = document.getElementById('trih');
    let TriArea = multi(triangleB, triangleH);
    showResult(TriArea, getName('trib'));
    console.log(TriArea);
});