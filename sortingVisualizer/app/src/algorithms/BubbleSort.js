import { swap } from "./Swap";

export function BubbleSort(rectangleArr) { 
    let animations = [];
    for(let i = 0; i < rectangleArr.length; i++) { 
        for(let j=0; j < rectangleArr.length-i-1; j++) { 
            if(rectangleArr[j] > rectangleArr[j + 1]) { 
                animations.push([[i, j], true]);
                animations.push([[i, j], true]);
                swap(i, j, rectangleArr);
            }
        }
    }
    return animations;
}