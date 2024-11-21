"use client";
import React, { useState, useEffect } from "react";
// Predefined shapes with borderRadius styles
const shapes = [
    { borderRadius: "0 0 75% 0", name: "Left Side Rounded" },
    { borderRadius: "0  0  0 75%", name: "Right Side Rounded" },
    { borderRadius: "0 0 100% 100%", name: "Bottom Right Rounded" },
];
const colors = ["#FDE68A", "#BFDBFE", "#FCA5A5", "#A7F3D0", "#DDD6FE"]; // Light colors
const RandomShapeGenerator = () => {


    // Predefined colors


    // State for random shape and color
    const [shape, setShape] = useState<{ borderRadius: string; name: string } | null>(null);
    const [color, setColor] = useState<string | null>(null);

    useEffect(() => {
        // Select a random shape and color on component mount
        setShape(shapes[Math.floor(Math.random() * shapes.length)]);
        setColor(colors[Math.floor(Math.random() * colors.length)]);
    }, []);

    if (!shape || !color) {
        return null; // Render nothing until both shape and color are set
    }

    return (
        <div className="">
            <div
                style={{
                    borderRadius: shape.borderRadius,
                    backgroundColor: color,
                    width: "100%", 
                    height: "650px", 
                }}
            >
            </div>
        </div>
    );
};

export default RandomShapeGenerator;
