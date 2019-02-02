function closePoint(x, y, ctx) {
    var pixelData0 = ctx.getImageData(x, y, 1, 1).data;
    var similar = new similarColor(pixelData0[0], pixelData0[1], pixelData0[2]);
    ctx.fillStyle='black'
    
    for (var i =x - 10; i < x + 10; i++) {
        for (var j = y - 10; j < y + 10; j++) {
            var pixelData = ctx.getImageData(i, j, 1, 1).data;
            if (similar.similarInColor(pixelData[0], pixelData[1], pixelData[2])) {
                ctx.fillRect(i, j, 1, 1);
            }
        }

    }
    
}