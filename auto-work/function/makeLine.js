function makeLine(x,y,r,ctx,image,_paintX,_paintY){
    var paintX=[];
    var paintY=[];
	var mark=1;
    for(var i=x-r;i<x+r;i++){
        var start=-1;
		for(var j=y-r;j<y+r;j++){
			var pixelData = ctx.getImageData(i, j, 1, 1).data;
			if(pixelData[0]!=255){
				
				if(start==-1){
					start=j;
				}
				
			}else{
				if(start!=-1){
					if(j-start>mark){
						paintX.push(i);
						paintY.push(start);
						paintX.push(i);
						paintY.push(j);
					}
					start=-1;
				}		
			}
        }
    }
    for(var j=y-r;j<y+r;j++){
        var start=-1;
		for(var i=x-r;i<x+r;i++){
			var pixelData = ctx.getImageData(i, j, 1, 1).data;
			if(pixelData[0]!=255){
				if(start==-1){
					start=i;
				}
			}else{
				if(start!=-1){
					if(i-start>mark){
						paintX.push(start);
						paintY.push(j);
						paintX.push(i);
						paintY.push(j);
					}
					start=-1;
				}
			}
        }
    }
	ctx.fillStyle='white';
	ctx.fillRect(x-r,y-r, 2*r, 2*r);
	ctx.fillStyle='red';
	if(image)
		ctx.drawImage(image,0,0)
	
	for(var i=0;i<paintX.length;i++){
		console.log(_paintY.indexOf(paintY[i]),_paintY.indexOf(paintY[i]))

		if(_paintY.indexOf(paintY[i])!=_paintY.indexOf(paintY[i])){
			continue;
		}
		if(paintX[i]<2||paintY[i]<2)
			continue
		var nearNumber=0;
		var n=4;
		var value=8;
		var nearest=100;
		var near=-1;
		var near2=-1;

		for(var j=0;j<paintX.length;j++){
			if(paintX[i]-paintX[j]>n){
				continue;
			}
			if(paintX[j]-paintX[i]>n){
				break;
			}
			var m=(paintX[i]-paintX[j])*(paintX[i]-paintX[j])+(paintY[i]-paintY[j])*(paintY[i]-paintY[j]);
			
			if(m<value){
				nearNumber++;
				if(m<nearest){
					nearest=m;
					near2=near
					near=j;
				}
			}
		}
		if(nearNumber>n*n*0.1){
			//ctx.fillRect(paintX[i], paintY[i], 1, 1);
			//continue;
			if(near!=-1&&(near2!=-1)){
				var s=paintX[i]-paintX[near];
				if(!same(paintX[i],paintY[i],paintX[near], paintY[near],paintX[near2], paintY[near2])){
					//ctx.fillRect(paintX[i], paintY[i], 1, 1)
					//continue;
					ctx.moveTo(paintX[near], paintY[near]);
					ctx.lineTo(paintX[i], paintY[i]);
					ctx.lineTo(paintX[near2], paintY[near2]);
				}
				//console.log(paintX[i], paintY[i],paintX[near], paintY[near],nearest)
			}
		}
    }
	ctx.stroke()
}

function same(x0,y0,x1,y1,x2,y2){
	if((x0-x1)*(x0-x2)>0||(y0-y1)*(y0-y2)>0)
		return true;
	return false
}