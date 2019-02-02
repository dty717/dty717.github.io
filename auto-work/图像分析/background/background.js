//R: 165    G: 158    B: 148    A: 255
var testRGB={R: 215,G: 209,B: 197}
function backgroundNum(ctx){
	var r=parseInt(pic_r/4);
    var _x=0;
    var _y=0;
	var width=ctx.canvas.width;
	var height=ctx.canvas.height;
	var backgroundList=[];
    
    while(true){
        if(_y>height){
            break;
        }
        var backWidth=_x+2*r>width?(width-_x-2*r):(2*r)
        var backHeight=_y+2*r>height?(height-_y-2*r):(2*r)
        if(!backgroundColorPaint(parseInt(_x+backWidth/2),parseInt(_y+backHeight/2),parseInt(0.05*backHeight*backWidth))){
            backgroundList.push({x:_x,y:_y});
        }
        
        _x+=2*r;
        if(_x>=width){
            _x=0;
            _y+=2*r;
            console.log(_y)
        }
    }
    ctx.fillStyle='white';
    for(var i=0;i<backgroundList.length;i++){
        ctx.fillRect(backgroundList[i].x,backgroundList[i].y,2*r,2*r)
    }
    
}
function backgroundColorPaint(x,y,countDistinctAll){
    var paintX=[];
    var paintY=[];
	var r=parseInt(pic_r/4);
	var countDistinct=0;
    if(countDistinctAll===undefined){
        countDistinctAll=parseInt((4*r*r)*0.04);
    }
    for(var i=x-r;i<x+r;i++){
        if(i<0){
            continue;
        }
        for(var j=y-r;j<y+r;j++){
            if(j<0){
                continue;
            }
            if(!test(i,j,ctx)){
                paintX.push(i);
                paintY.push(j);
            }else{
                countDistinct++;
                if(countDistinct>countDistinctAll+1){
                    return true;
                }
            }
            
        }
    }
    return false;
}
function backgroundFunctionColor(event,ctx){
    backgroundNum(ctx);
    return
    var x=event.offsetX;
	var y=event.offsetY;
    var paintX=[];
    var paintY=[];
	var r=parseInt(pic_r/4);
	var countDistinctAll=parseInt((4*r*r)*0.05);
	var countDistinct=0;
    for(var i=x-r;i<x+r;i++){
        for(var j=y-r;j<y+r;j++){
            if(!test(i,j,ctx)){
                paintX.push(i);
                paintY.push(j);
            }else{
                /*countDistinct++;
                if(countDistinct>countDistinctAll+1){
                    break;
                }*/
            }
            
        }
    }
    ctx.fillStyle='white';
    /*for(var i=0;i<paintX.length;i++){
        ctx.fillRect(paintX[i], paintY[i], 1, 1);
    }*/
    console.log(paintX.length/(4*r*r));
    if(paintX.length/(4*r*r)>0.95){
        ctx.fillRect(x-r,y-r,2*r,2*r)
    }
    if(makeLine){
	//makeLine(x,y,r,ctx,image,paintX,paintY);
	}
	alert('OK')
    // body...
}
function isBackground(i,j,ctx){
    var pixelData = ctx.getImageData(i, j, 1, 1).data;
    var valBackground=(pixelData[0]-testRGB.R)*(pixelData[0]-testRGB.R)+
        (pixelData[1]-testRGB.G)*(pixelData[1]-testRGB.G)+(pixelData[2]-testRGB.B)*(pixelData[2]-testRGB.B);
    
    //console.log(valBackground);
    if(valBackground<1000){
        return true;
    }else
        return false;
}