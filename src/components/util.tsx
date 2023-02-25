function range(n : number) : number[] {
    let res : number[] = []
    if (n < 0) {
        return res;
    }
    
    for (let i = 0; i < n; i++) {
        res.push(i)
    }
    return res;
}


function isDistinct(v : Array<any>) {
    for (let i = 0; i < v.length; i++) {
        for (let j = i + 1; j < v.length; j++) {
            if (i == j) {
                return false;
            }
        }
    }
    return true;
}

export {
    range,
}