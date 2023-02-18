// Set up the first 3 functions so that all I need is the clicked buttons id and the area formula

// geting innerhtml to get the shape name
function getShape(string){
    return document.getElementById(string).parentElement.children[0].innerHTML;
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
    return (num1Value*num2Value).toFixed(1);
}

// when calculate btn is clicked for triangle
document.getElementById('tribtn').addEventListener('click', function(e){
    const id = e.target.id;
    const triangleB = document.getElementById(id).parentElement.children[2].children[0].children[0];
    const triangleH = document.getElementById(id).parentElement.children[2].children[2].children[0];
    let TriArea = multi(triangleB, triangleH);
    showResult(TriArea, getShape(id));
});

// when calculate btn is clicked for rectangle
document.getElementById('rectbtn').addEventListener('click', function(e){
    const id = e.target.id;
    const triangleB = document.getElementById(id).parentElement.children[2].children[0].children[0];
    const triangleH = document.getElementById(id).parentElement.children[2].children[2].children[0];
    let TriArea = multi(triangleB, triangleH);
    showResult(TriArea, getShape(id));
});

// when calculate btn is clicked for parallelogram
document.getElementById('parabtn').addEventListener('click', function(e){
    const id = e.target.id;
    const triangleB = document.getElementById(id).parentElement.children[2].children[0].children[0];
    const triangleH = document.getElementById(id).parentElement.children[2].children[2].children[0];
    let TriArea = multi(triangleB, triangleH);
    showResult(TriArea, getShape(id));
});

// when calculate btn is clicked for rhombus
document.getElementById('rhombtn').addEventListener('click', function(e){
    const id = e.target.id;
    const triangleB = document.getElementById(id).parentElement.children[2].children[0].children[0];
    const triangleH = document.getElementById(id).parentElement.children[2].children[2].children[0];
    let TriArea = 0.5*multi(triangleB, triangleH);
    showResult(TriArea, getShape(id));
});

// when calculate btn is clicked for pentagon
document.getElementById('pentbtn').addEventListener('click', function(e){
    const id = e.target.id;
    const triangleB = document.getElementById(id).parentElement.children[2].children[0].children[0];
    const triangleH = document.getElementById(id).parentElement.children[2].children[2].children[0];
    let TriArea = 0.5*multi(triangleB, triangleH);
    showResult(TriArea, getShape(id));
});

// when calculate btn is clicked for Ellipse
document.getElementById('ellibtn').addEventListener('click', function(e){
    const id = e.target.id;
    const triangleB = document.getElementById(id).parentElement.children[2].children[0].children[0];
    const triangleH = document.getElementById(id).parentElement.children[2].children[2].children[0];
    let TriArea = 3.1416*multi(triangleB, triangleH);
    showResult(TriArea, getShape(id));
});