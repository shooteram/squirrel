interface Coordinates {
    x: number,
    y: number,
}

const randomCoordinates = (maxx: number = window.innerWidth, maxy: number = window.innerHeight): Coordinates => {
    return { x: Math.floor(Math.random() * maxx), y: Math.floor(Math.random() * maxy) };
}

export {
    randomCoordinates,
}
