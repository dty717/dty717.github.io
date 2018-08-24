class similarColor {
    constructor(r, g, b) {
        this.r = r;
        this.g = g;
        this.b = b;
    }

    area(ctx,x1,x2,y1,y2){
        ctx.fillStyle='white'
        for(var i=x1;i<x2;i++){
            for(var j=y1;j<y2;j++){
                var pixelData = ctx.getImageData(i, j, 1, 1).data;
                if(!this.similarInColor(pixelData[0],pixelData[1],pixelData[2]))
                    ctx.fillRect(i, j, 1, 1);
            }

        }

    }

    closeArea(ctx,x,y){
        this.area(ctx,x-100,x+100,y-100,y+100)

    }
    
    // Getter
    areas(ctx, x, y) {
        this.area(ctx,0,x,0,y);
        //return this.calcArea();
    }
    // Method
    similarInColor(r, g, b) {
        if (((r - this.r) * (r - this.r) + (g - this.g) * (g - this.g) + (b - this.b) * (b - this.b)) < 1000)
            return true;
        else
            return false;
    }
}



