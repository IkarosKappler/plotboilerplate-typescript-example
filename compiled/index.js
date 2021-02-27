"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var plotboilerplate_1 = require("plotboilerplate");
window.addEventListener('load', function () {
    var vertA = new plotboilerplate_1.Vertex(100, -100);
    var vertB = new plotboilerplate_1.Vertex(-100, 100);
    console.log(vertA, vertB);
    var line = new plotboilerplate_1.Line(vertA, vertB);
    var pb = new plotboilerplate_1.PlotBoilerplate({
        canvas: '#my-canvas',
        fullSize: true
    });
    pb.add(line);
});
//# sourceMappingURL=index.js.map