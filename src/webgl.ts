const createShader = (gl: WebGL2RenderingContext, type: number, source: string): WebGLShader | void => {
    let shader = gl.createShader(type);
    if (!shader) {
        console.error('could not create shader');
        return;
    }

    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        return shader;
    }

    gl.deleteShader(shader);
}

const createProgram = (gl: WebGL2RenderingContext, vertexShader: WebGLShader, fragmentShader: WebGLShader): WebGLProgram | void => {
    let program = gl.createProgram();
    if (!program) {
        console.error('could not create program');
        return;
    }

    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    if (gl.getProgramParameter(program, gl.LINK_STATUS)) {
        return program;
    }

    gl.deleteProgram(program);
}

const resizeCanvasToDisplaySize = (canvas: HTMLCanvasElement): boolean => {
    const displayWidth = canvas.clientWidth, displayHeight = canvas.clientHeight,
        needResize = canvas.width !== displayWidth || canvas.height !== displayHeight;

    if (needResize) {
        canvas.width = displayWidth;
        canvas.height = displayHeight;
    }

    return needResize;
}

export {
    createShader,
    createProgram,
    resizeCanvasToDisplaySize,
}
