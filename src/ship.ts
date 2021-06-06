export class Ship {
    private context: CanvasRenderingContext2D;
    public friendly?: boolean;
    public fixed: boolean = false;
    public direction: number = 0;
    public x: number = window.innerWidth / 2;
    public y: number = window.innerHeight / 2;
    public username: string;
    public size: number = 5;
    public hitbox: number = 10;
    public focus: boolean = false;

    constructor(
        context: CanvasRenderingContext2D,
        principal: boolean,
        username: string,
        x?: number,
        y?: number,
        direction: number = 0,
        friendly: boolean = false,
    ) {
        this.context = context;

        if (principal) {
            this.fixed = true;
        } else {
            if (undefined === x || undefined === y) {
                throw new Error('could not initialize normal ships without their coordinates');
            }

            this.x = x;
            this.y = y;
            this.friendly = friendly;
        }

        this.username = username;
        this.direction = direction;
    }

    display() {
        this.context.beginPath();
        this.context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        this.context.strokeStyle = this.color();
        this.context.fillText(this.username, this.x, this.y + 20);
        this.context.stroke();
        this.context.closePath();
    }

    toggleFocus() {
        if (this.focus) {
            this.context.canvas.style.cursor = 'default';

            this.context.clearRect(this.x - this.size, this.y - this.size, this.size + this.size, this.size + this.size);

            this.context.beginPath();
            this.context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            this.context.strokeStyle = this.color();
            this.context.stroke();
            this.context.closePath();

            this.focus = false;
        } else {
            this.context.canvas.style.cursor = 'pointer';

            this.context.beginPath();
            this.context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            this.context.fillStyle = this.color();
            this.context.fill();
            this.context.closePath();

            this.focus = true;
        }
    }

    color() {
        return this.fixed ? 'black' : (this.friendly ? 'blue' : 'red');
    }
}
