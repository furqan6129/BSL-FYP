// Define our labelmap
const labelMap = {
    1:{name:'a', color:'red'},
    2:{name:'b', color:'yellow'},
    3:{name:'c', color:'red'},
    4:{name:'d', color:'blue'},
    5:{name:'e', color:'lime'},
    6:{name:'f', color:'green'}
}

// let scoreB=0;


// Define a drawing function
export const drawRect = (boxes, classes, scores, threshold, imgWidth, imgHeight, ctx)=>{

    for(let i=0; i<=boxes.length; i++){
        if(boxes[i] && classes[i] && scores[i]>threshold){


            // if (classes[i]==1){
            //     scoreB++;
            // }

            // Extract variables
            const [y,x,height,width] = boxes[i]
            const text = classes[i]
            
            // Set styling
            ctx.strokeStyle = labelMap[text]['color']
            ctx.lineWidth = 10
            ctx.fillStyle = 'white'
            ctx.font = '30px Arial'         
            
            // DRAW!!
            ctx.beginPath()
            ctx.fillText(labelMap[text]['name'] + ' - ' + Math.round(scores[i]*100)/100, x*imgWidth, y*imgHeight-10)
            ctx.rect(x*imgWidth, y*imgHeight, width*imgWidth/2, height*imgHeight/2);
            ctx.stroke()
        }
    }
    // console.log(scoreB);
}