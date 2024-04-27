class ArrayUtils {
    constructor() {
        throw new Error('ArrayUtils cannot be instantiated.');
    }
    
    static average(array) {
        if (array.length === 0) throw new Error('Array cannot be empty.')
        let idx = 0;
        for (let i = 0; i < array.length; i++) {
            idx += array[i];
        }
        idx = idx / array.length;
        return idx;
    }
    static max(array) {
        let idx = 0;
        let place = 0;
        for (let i = 0; i < array.length; i++) {
            idx = array[i];
            if (idx > place) place = idx;
        }
        return place;
    }
}