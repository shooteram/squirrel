import { createProgram, createShader, resizeCanvasToDisplaySize } from "./webgl.js";

(async () => {
    console.log('ello');

    const canvas = document.createElement('canvas');
    document.body.appendChild(canvas);

    const gl = canvas.getContext('webgl2');
    if (!gl) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    var vertexShader = createShader(gl, gl.VERTEX_SHADER, `attribute vec2 a_position;
uniform vec2 u_resolution;

void main() {
    // convert the position from pixels to 0.0 to 1.0
    vec2 zeroToOne = a_position / u_resolution;

    // convert from 0->1 to 0->2
    vec2 zeroToTwo = zeroToOne * 2.0;

    // convert from 0->2 to -1->+1 (clip space)
    vec2 clipSpace = zeroToTwo - 1.0;

    gl_Position = vec4(clipSpace, 0, 1);
}`);
    if (!vertexShader) {
        return;
    }

    var fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, `precision mediump float;
void main() {
    gl_FragColor = vec4(1, 0, 0.5, 1); // return reddish-purple
}`);
    if (!fragmentShader) {
        return;
    }

    var program = createProgram(gl, vertexShader, fragmentShader);
    if (!program) {
        return;
    }

    var positionAttributeLocation = gl.getAttribLocation(program, "a_position");

    var positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

    var positions = [
        0, 0,
        0, 0.5,
        0.7, 0,
    ];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

    resizeCanvasToDisplaySize(gl.canvas as HTMLCanvasElement);

    // This tells WebGL the -1 +1 clip space maps to 0 <-> gl.canvas.width for x and 0 <-> gl.canvas.height for y.
    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

    // Clear the canvas
    gl.clearColor(0, 0, 0, 0);
    gl.clear(gl.COLOR_BUFFER_BIT);

    // Tell it to use our program (pair of shaders)
    gl.useProgram(program);

    gl.enableVertexAttribArray(positionAttributeLocation);

    // Bind the position buffer.
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

    // Tell the attribute how to get data out of positionBuffer (ARRAY_BUFFER)
    let size = 2,          // 2 components per iteration
        type = gl.FLOAT,   // the data is 32bit floats
        normalize = false, // don't normalize the data
        stride = 0,        // 0 = move forward size * sizeof(type) each iteration to get the next position
        offset = 0;        // start at the beginning of the buffer
    gl.vertexAttribPointer(positionAttributeLocation, size, type, normalize, stride, offset);

    let primitiveType = gl.TRIANGLES,
        count = 6;
    gl.drawArrays(primitiveType, offset, count);

    let resolutionUniformLocation = gl.getUniformLocation(program, "u_resolution");

    var positions = [
        10, 20,
        80, 20,
        10, 30,
        10, 30,
        80, 20,
        80, 30,
    ];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

    gl.uniform2f(resolutionUniformLocation, gl.canvas.width, gl.canvas.height);
})();
