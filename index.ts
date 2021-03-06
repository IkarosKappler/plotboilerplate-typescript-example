
import { PlotBoilerplate, Vertex, Line } from "plotboilerplate";

window.addEventListener( 'load', () => {
    
    const vertA : Vertex = new Vertex( 100,-100);
    const vertB : Vertex = new Vertex(-100, 100);
    console.log( vertA, vertB );

    const line : Line = new Line( vertA, vertB );
    
    const pb : PlotBoilerplate = new PlotBoilerplate( {
	canvas     : '#my-canvas', // element must be an <canvas> or <svg> element
	fullSize   : true
    } );
    
    pb.add( line );

} );

