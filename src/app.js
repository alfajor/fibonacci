const fiboSequence = (numLimit) => {
    let sequenceArr = [0, 1];
    
    if(numLimit > 2) {
        for(let n = 0; n < numLimit - 2; n++) {
            sequenceArr.push(sequenceArr[sequenceArr.length - 1] + sequenceArr[sequenceArr.length - 2]);
        }
    } else if(numLimit == 1) {
        sequenceArr = [0];
    }
    return sequenceArr;
}

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const proportion = {
    x: canvas.width, 
    y: canvas.height
};
const endpoint = {
    x: proportion.x / 2,
    y: proportion.y / 2
}
const fibonacci = fiboSequence(25);

const fiboCircle = (xPos, yPos, radius) => {
    ctx.beginPath();
    ctx.arc(xPos, yPos, radius, Math.PI / 4, 3 * Math.PI / 4);

    ctx.strokeStyle = '#D4AF37';
    ctx.lineWidth = 8;
    ctx.stroke();
    ctx.closePath();
}

const renderSpiral = () => {
    ctx.save();
    ctx.translate(endpoint.x, endpoint.y)
    for(let f = 0; f < fibonacci.length; f++) {
        fiboCircle((fibonacci[f] * 1.4142 * 1) / 2, - (fibonacci[f] * 1.4142 * 1) / 2, fibonacci[f] * 1);

        endpoint.x = fibonacci[f];
        endpoint.y = 0;

        ctx.translate(endpoint.x * 1.4142 * 1, endpoint.y);
        ctx.rotate(Math.PI / 180 * -90);
    }

    ctx.restore();
}

renderSpiral();
