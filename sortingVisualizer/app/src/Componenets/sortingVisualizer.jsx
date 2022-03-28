import React, { useEffect, useState } from "react";
import "./sortingVisualizer.css";
import Navbar from "./Navbar/Navbar";
import { BubbleSort } from "../algorithms/BubbleSort";


const SortVisualizer = () => {
    const [rectangle, setRectangle] = useState([]);

    function randomNumber(max, min) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    function generateRectangle() {
        let rectangleArr = [];
        let barStyling = document.getElementsByClassName('rectangularity');
        console.log(barStyling);
        for (let i = 0; i <= 78; i++) {
            rectangleArr.push(randomNumber(800, 10));
        }
        setRectangle(rectangleArr);
    }

    function bubbleSort() {
        console.log("entered bubblesort")
        const animations = BubbleSort(rectangle);
        const barStyling = document.querySelectorAll('.rectangularity');
        barStyling[1].style.backgroundColor = "red";
        barStyling[2].style.backgroundColor = "black";
        let bar1;
        let bar2;
        for (let i = 0; i < animations.length; ++i) {
            bar1 = animations[i].i;
            bar2 = animations[i].j;
            console.log(barStyling[bar1].style.backgroundColor = "orange");
            console.log(barStyling[bar2]);
        }
        // setTimeout(() => {
        //     barStyling[bar1].style.backgroundColor = "green";
        //     barStyling[bar2].style.backgroundColor = "green";
        // }, 2 * 2);
    }

    useEffect(() => {
        generateRectangle();
    }, []);

    return (
        <div>
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
                    style={{ height: `${value}px` }}>
                </div>
            ))}
        </div>
    );
};


export default SortVisualizer;