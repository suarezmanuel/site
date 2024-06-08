type Vector = [number, number];

export function draw (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, layer_count: number, grid_size: number) {
    const rand_pseudo_seed = Math.random() * 10000;
    var id = ctx.createImageData(1,1);
    var d = id.data;
    let c = 255*0.5;

    for (let x=0; x < canvas.width; x++) {
        for (let y=0; y < canvas.height; y++) {

            let amp = 1;
            let freq = 1;
            let val = 0;
            
            for (let i=0; i < layer_count; i++) {
                val += perlin(rand_pseudo_seed, x*freq/grid_size ,y*freq/grid_size, ) * amp;
                freq *= 2;
                amp /= 2;
            }

            val *= 1.2
            val = Math.min(1, Math.max(-1, val));

            // convert range [-1, 1] to [0, 255]
            d[0] = (val+1) * c;
            d[1] = d[0];
            d[2] = d[0];
            d[3] = 255;
            ctx.putImageData(id, x, y);
        }
    }
}

export function perlin(seed: number, x: number, y: number) {
    let x0 = Math.floor(x);
    let x1 = Math.ceil(x);
    let y0 = Math.floor(y);
    let y1 = Math.ceil(y);

    let v00: Vector = [x0-x, y0-y];
    let v10: Vector = [x1-x, y0-y];
    let v01: Vector = [x0-x, y1-y];
    let v11: Vector = [x1-x, y1-y];

    let t1 = cubic_interpolate(dot_product(v00, get_random_vec(x0,y0,seed)), dot_product(v10, get_random_vec(x1,y0,seed)), x-x0);
    let t2 = cubic_interpolate(dot_product(v01, get_random_vec(x0,y1,seed)), dot_product(v11, get_random_vec(x1,y1,seed)), x-x0);

    return cubic_interpolate(t1, t2, y-y0);
}

// we want the same points to get the same randoms
// other than that, its completely random
export function get_random_vec (x: number, y: number, seed: number): Vector {
    const hash = seed + x*3284157443 + seed + y*1911520717;
    const angle = seeded_random(hash) * 2*Math.PI;
    return [Math.cos(angle), Math.sin(angle)];
}

export function seeded_random (hash: number) {
    let x = Math.sin(hash) * 10000;
    return  x - Math.floor(x);
}

// imagine being on the unit circle
export function get_unit_vector (theta: number) {
    let x = Math.cos(theta); 
    let y = Math.sin(theta);
    return [x,y];
}

// dot product = inner product in R^2
export function dot_product (v: Vector, u: Vector) {
    return v[0]*u[0] + v[1]*u[1];
}

// smooth step
export function cubic_interpolate (a: number, b: number, w: number) {
    return (b - a) * (3.0 - w * 2.0) * w * w + a;
}