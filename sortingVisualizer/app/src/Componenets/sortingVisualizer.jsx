import React, { useEffect, useState } from "react";
import "./sortingVisualizer.css";
import Navbar from "./Navbar/Navbar";
import 'semantic-ui-css/semantic.min.css';
import { BubbleSort } from "../algorithms/BubbleSort";
import { InsertionSort } from "../algorithms/InsertionSort";
import { MergeSort } from "../algorithms/MergeSort";
import { QuickSort } from "../algorithms/QuickSort";


const SortVisualizer = () => {
    let viewportWidth = (window.innerWidth / 45);
    const [rectangle, setRectangle] = useState([]);

    function randomNumber(max, min) {
        return Math.floor(Math.random() * (max - min) + min);
    }
    function generateRectangle() {
        let rectangleArr = [];
        let barStyling = document.getElementsByClassName("rectangularity");
        for (let i = 0; i <= viewportWidth; i++) {
            if (barStyling[i] != null) {
                barStyling[i].style.backgroundColor = "lightgreen";
            }
            rectangleArr.push(randomNumber(800, 10));
        }
        setRectangle(rectangleArr);
    }

    function bubbleSort() {
        const animations = BubbleSort(rectangle);
        animateSort(animations);
    }

    function insertionSort() {
        const animations = InsertionSort(rectangle);
        animateSort(animations);
    }

    function mergeSort() {
        const animations = MergeSort(rectangle);
        animateSort(animations);
    }

    function quickSort() {
        const animations = QuickSort(rectangle);
        animateSort(animations);
    }

    function animateSort(animations) {
        animations.forEach(([comparison, swapped], i) => {
            if (!swapped) {
            } else {
                setTimeout(() => {
                    setRectangle((prevRectangle) => {
                        const [rectangleIndex, rectangleValue] = comparison;
                        //make a copy of the previous rectangles
                        const sortedArr = [...prevRectangle];
                        sortedArr[rectangleIndex] = rectangleValue;
                        return sortedArr;
                    });
                }, (i * 10));
            }
        });
    }

    useEffect(generateRectangle, []);

    return (
        <div>
            <Navbar
                onQuickSort={quickSort}
                onMergeSort={mergeSort}
                onInsertionSort={insertionSort}
                onBubbleSort={bubbleSort}
                onRandomize={generateRectangle}
            />
            <div className="center">
                {rectangle.map((value, index) => (
                    <div
                        className="rectangularity"
                        key={index}
                        style={{ height: `${value}px` }}>
                    </div>
                ))}
            </div>
        </div>
    );
};


export default SortVisualizer;