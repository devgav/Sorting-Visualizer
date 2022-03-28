export function BubbleSort(rectangleArr) { 
    let animations = [];
    for(let i = 0; i < rectangleArr.length; i++) { 
        for(let j=0; j < rectangleArr.length-i-1; j++) { 
            if(rectangleArr[j] > rectangleArr[j + 1]) { 
                animations.push({i, j});
                swap(i, j, rectangleArr);
            }
        }
    }
    
    function swap(i, j, arr) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
    }
    return animations;
}