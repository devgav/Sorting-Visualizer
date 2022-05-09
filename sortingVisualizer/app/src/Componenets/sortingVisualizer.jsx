import React, { useEffect, useState } from "react";
import "./sortingVisualizer.css";
import Navbar from "./Navbar/Navbar";
import { BubbleSort } from "../algorithms/BubbleSort";
import { InsertionSort } from "../algorithms/InsertionSort";


const SortVisualizer = () => {
    const [rectangle, setRectangle] = useState([]);
    const [isSorting, setSorting] = useState(false);
    const [isSorted, setSorted] = useState(false);
    const containerRef = null;
    

    function randomNumber(max, min) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    function generateRectangle() {
        let rectangleArr = [];
        let barStyling = document.getElementsByClassName("rectangularity");
        for (let i = 0; i <= 78; i++) {
            if (barStyling[i] != null) { 
                barStyling[i].style.backgroundColor = "lightgreen";
            }
            rectangleArr.push(randomNumber(800, 10));
        }
        setRectangle(rectangleArr);
    }
    
    function accessArray(index) {
        //return the array of bars generated in our div
        const bars = containerRef.current.children;
        //get the color of our bar
        const barStyling = bars[index].style;
        //Changes to red when sorting
        setTimeout(() => { 
            //sorted color
            barStyling.backgroundColor = "red";
        }, 5);
        //changes back to original color after sorted 
        setTimeout(() => {
            //sorted color
            barStyling.backgroundColor = "";
        }, 5 * 2);
    }
    
    function animateArray() {
        //return the array of bars generated in our div
        const bars = containerRef.current.children;
        for (let i = 0; i <= 78; i++) { 
            const barStyle = bars[i].style;
            setTimeout(() => (barStyle.backgroundColor = "red"), i * 10);
        }
        setTimeout(() => { 
            setSorted(true);
            setSorting(false);
        }, bars.length * 10);
    }

    function bubbleSort() {
        const animations = InsertionSort(rectangle);
        if (isSorting) { 
            return;
        }
        setSorting(true);
        animations.forEach(([comparison, swapped], i) => { 
            setTimeout(() => {
                // no swap before and we have two elements [[indexToSwap, heightOfRectangle], swapped]
                if (!swapped) {
                    if (comparison.length === 2) {
                        const [i, j] = comparison;
                        accessArray(i);
                        accessArray(j);
                    } else { 
                        //set the [i] to the array which contains [indexToSwap, heightOfRectangle]
                        const [i] = comparison; 
                        accessArray(i);
                    }
                } else { 
                    setRectangle((prevRectangle) => { 
                        const [k, newValue] = comparison;
                        //make a copy of the previous rectangles
                        const newArr = [...prevRectangle];
                        newArr[k] = newValue;
                        return newArr;
                    });
                }
            }, (i * 10));
        });
        setTimeout(() => { 
            animateArray();
        }, 78 * 10);
        // for (let i = 0; i < animations.length; i++) {
        //     setTimeout(() => {
        //         bar1 = animations[i];
        //         bar2 = animations[i];
        //         barStyling[bar1].style.backgroundColor = "red";
        //         barStyling[bar2].style.backgroundColor = "red";
        //        
        //     }, i * 10);
        // }
    }

    useEffect(generateRectangle, []);

    return (
        <div ref={containerRef}>
            <Navbar
                // onMergeSort={mergeSort}
                // onMergeSort={mergeSort}
                onBubbleSort={bubbleSort}
                onRandomize={generateRectangle}
            />
            {rectangle.map((value, index) => (
                <div
                    className="rectangularity"
                    key={index}
                    style={{ height: `${value}px`, width: `${100/78}vw` }}>
                </div>
            ))}
        </div>
    );
};


export default SortVisualizer;