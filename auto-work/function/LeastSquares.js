
class LeastSquares {
    constructor(x,y,a) {
        this.x=x;
        this.y=y;
        this.a=a;
        this.ax = 0;
        this.ay = 0;
        this.xy = 0;
        this.xx = 0;
        this.yy = 0;
    }
    observe(x,y,a){
        this.ax+=(a-this.a)*(x-this.x);
        this.ay+=(a-this.a)*(y-this.y);
        this.xy+=(x-this.x)*(y-this.y);
        this.xx+=(x-this.x)*(x-this.x);
        this.yy+=(y-this.y)*(y-this.y);
    }
    //M*x+N*y=a
    caculateM(){
        return (this.ax*this.yy-this.xy*this.ay)/(this.xx*this.yy-this.xy*this.xy)
    }
    caculateN(){
        return (this.ay*this.xx-this.xy*this.ax)/(this.xx*this.yy-this.xy*this.xy)
    }
}

function test(x,y,ctx){
    var pixelData = ctx.getImageData(x, y, 1, 1).data;
    var leastred = new LeastSquares(x, y, pixelData[0]);
    var leastgreen = new LeastSquares(x, y, pixelData[1]);
    var leastblue= new LeastSquares(x, y, pixelData[2]);
    var x1=x-3;
    var x2=x+3;
    var y1=y-3;
    var y2=y+3;
    for (var i = x1; i < x2; i++) {
        for (var j = y1; j < y2; j++) {
            var pixelData = ctx.getImageData(i, j, 1, 1).data;
            leastred.observe(i,j,pixelData[0])
            leastgreen.observe(i,j,pixelData[1])
            leastblue.observe(i,j,pixelData[2])
        }
    }
    /* console.log(leastred.caculateM()*leastred.caculateM()+leastred.caculateN()*leastred.caculateN(),
    leastgreen.caculateM()*leastgreen.caculateM()+leastgreen.caculateN()*leastgreen.caculateN(),
    leastblue.caculateM()*leastblue.caculateM()+leastblue.caculateN()*leastblue.caculateN())
     */
    if(leastred.caculateM()*leastred.caculateM()+leastred.caculateN()*leastred.caculateN()+
        leastgreen.caculateM()*leastgreen.caculateM()+leastgreen.caculateN()*leastgreen.caculateN()+
        leastblue.caculateM()*leastblue.caculateM()+leastblue.caculateN()*leastblue.caculateN()>20)
        return true;


	//ctx.fillRect(x, y, 1, 1);
    return false;
}

var pic_r=80;

function test2(x,y,ctx,image){
    var paintX=[];
    var paintY=[];
	var r=pic_r;
    for(var i=x-r;i<x+r;i++){
        for(var j=y-r;j<y+r;j++){
            if(!test(i,j,ctx)){
                paintX.push(i);
                paintY.push(j);
            }
        }
    }
    ctx.fillStyle='white';
    for(var i=0;i<paintX.length;i++){
        ctx.fillRect(paintX[i], paintY[i], 1, 1);
    }
    if(makeLine){
		makeLine(x,y,r,ctx,image,paintX,paintY);
	}
	alert('finish')
}











