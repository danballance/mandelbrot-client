export interface MandlebrotStruct {
    xmin: number;
    xmax: number;
    ymin: number;
    ymax: number;
    r: number;
    rmin: number;
    rmax: number;
    j: number;
    jmin: number;
    jmax: number;
    magnification: number;
    iterations: number;
    dpi: number;
}

export interface MandlebrotInterface {
    init(size: number, r: number, j: number, magnification: number, iterations: number, dpi: number): MandlebrotStruct;
    updateR(m: MandlebrotStruct, r: number, magnification: number): MandlebrotStruct;
    updateJ(m: MandlebrotStruct, j: number, magnification: number): MandlebrotStruct;
    getNewR(m: MandlebrotStruct, y: number): number;
    getNewJ(m: MandlebrotStruct, x: number): number;
    imageClicked(m: MandlebrotStruct, x: number, y: number): MandlebrotStruct;
    zoom(m: MandlebrotStruct, multiplier: number): MandlebrotStruct; 
}

export const Mandlebrot = (): MandlebrotInterface => {
    function init(
        size: number,
        r: number,
        j: number,
        magnification: number,
        iterations: number,
        dpi: number
    ): MandlebrotStruct {
        return {
            xmin: 0.00,
            xmax: 0.00 + size,
            ymin: 0.00,
            ymax: 0.00 + size,
            r: r,
            rmin: r - (magnification / 2),
            rmax: r + (magnification / 2),
            j: j,
            jmin: j - (magnification / 2),
            jmax: j + (magnification / 2),
            magnification: magnification,
            iterations: iterations,
            dpi
        }
    }

    function updateR(m: MandlebrotStruct, r: number, magnification: number): MandlebrotStruct {
        return Object.assign({}, m, {
            r: r,
            rmin: r - (magnification / 2),
            rmax: +r + +(magnification / 2),
            magnification: magnification 
        });
    }

    function updateJ(m: MandlebrotStruct, j: number, magnification: number): MandlebrotStruct {
        return Object.assign({}, m, {
            j: j,
            jmin: j - (magnification / 2),
            jmax: +j + +(magnification / 2),
            magnification: magnification 
        });
    }

    function getNewR(m: MandlebrotStruct, y: number): number {
        return m.rmin + (((m.ymax - y) - m.ymin) / (m.ymax - m.ymin)) * m.magnification;
    }

    function getNewJ(m: MandlebrotStruct, x: number): number {
        return m.jmax - ((x - m.xmin) / (m.xmax - m.xmin)) * m.magnification;
    }

    function zoom(m: MandlebrotStruct, multiplier: number): MandlebrotStruct {
        const newMagnification = m.magnification * multiplier;
        const m2 = updateR(m, m.r, newMagnification);
        return updateJ(m2, m2.j, newMagnification);
    }

    function imageClicked(m: MandlebrotStruct, x: number, y: number): MandlebrotStruct {
        const m2 = updateR(m, getNewR(m, y), m.magnification);
        const m3 = updateJ(m2, getNewJ(m2, x), m2.magnification);
        return zoom(m3, 0.5);
    }

    return Object.freeze({
        init,
        updateR,
        updateJ,
        getNewR,
        getNewJ,
        imageClicked,
        zoom
    });
}
