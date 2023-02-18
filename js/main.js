// Set up the first 4 functions so that all I need is the clicked buttons id and the area formula

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
    num1Value = parseFloat(num1);
    num2Value = parseFloat(num2);
    return (num1Value*num2Value).toFixed(1);
}

// validate if negative or string is given as input
function validate(num1, num2){
    if(num1<0 || num2<0){
        return false;
    }else if(isNaN(num1) || isNaN(num2)){
        return false;
    }else if(num1 === '' || num2 === ''){
        return false;
    }else
        return true;
}

// when calculate btn is clicked for triangle
document.getElementById('tribtn').addEventListener('click', function(e){
    const id = e.target.id;
    const input1 = document.getElementById(id).parentElement.children[2].children[0].children[0].value;
    const input2 = document.getElementById(id).parentElement.children[2].children[2].children[0].value;
    if(validate(input1,input2)){
        const area = multi(input1, input2);
        showResult(area, getShape(id));
    }else{
        alert('Input cant be negative or string or empty!');
    }
});

// when calculate btn is clicked for rectangle
document.getElementById('rectbtn').addEventListener('click', function(e){
    const id = e.target.id;
    const input1 = document.getElementById(id).parentElement.children[2].children[0].children[0].value;
    const input2 = document.getElementById(id).parentElement.children[2].children[2].children[0].value;
    if(validate(input1,input2)){
        const area = multi(input1, input2);
        showResult(area, getShape(id));
    }else{
        alert('Input cant be negative or string or empty!');
    }
});

// when calculate btn is clicked for parallelogram
document.getElementById('parabtn').addEventListener('click', function(e){
    const id = e.target.id;
    const input1 = document.getElementById(id).parentElement.children[2].children[0].children[0].value;
    const input2 = document.getElementById(id).parentElement.children[2].children[2].children[0].value;
    if(validate(input1,input2)){
        const area = multi(input1, input2);
        showResult(area, getShape(id));
    }else{
        alert('Input cant be negative or string or empty!');
    }
});

// when calculate btn is clicked for rhombus
document.getElementById('rhombtn').addEventListener('click', function(e){
    const id = e.target.id;
    const input1 = document.getElementById(id).parentElement.children[2].children[0].children[0].value;
    const input2 = document.getElementById(id).parentElement.children[2].children[2].children[0].value;
    if(validate(input1,input2)){
        const area = 0.5*multi(input1, input2);
        showResult(area, getShape(id));
    }else{
        alert('Input cant be negative or string or empty!');
    }
});

// when calculate btn is clicked for pentagon
document.getElementById('pentbtn').addEventListener('click', function(e){
    const id = e.target.id;
    const input1 = document.getElementById(id).parentElement.children[2].children[0].children[0].value;
    const input2 = document.getElementById(id).parentElement.children[2].children[2].children[0].value;
    if(validate(input1,input2)){
        const area = 0.5*multi(input1, input2);
        showResult(area, getShape(id));
    }else{
        alert('Input cant be negative or string or empty!');
    }
});

// when calculate btn is clicked for Ellipse
document.getElementById('ellibtn').addEventListener('click', function(e){
    const id = e.target.id;
    const input1 = document.getElementById(id).parentElement.children[2].children[0].children[0].value;
    const input2 = document.getElementById(id).parentElement.children[2].children[2].children[0].value;
    if(validate(input1,input2)){
        const area = 3.1416*multi(input1, input2);
        showResult(area, getShape(id));
    }else{
        alert('Input cant be negative or string or empty!');
    }
});