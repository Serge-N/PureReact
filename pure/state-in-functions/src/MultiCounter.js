import React, { useState } from "react";

const MultiCounter = () => {
    const [counts, setCounts] = useState({
        countA: 0,
        countB: 0
    });

    const increaseA = () => (
        setCounts(counts => ({
            ...counts,
            countA: counts.countA + 1
        }))
    );

    const increaseB = () => (
        setCounts(counts => ({
            ...counts,
            countB: counts.countB + 1
        }))
    );

    const badIncreaseA = () => (
        setCounts({
            countA: counts.countA + 1
        })
    );

    return (
        <>
            <div>A : {counts.countA}</div>
            <div>B : {counts.countB}</div>

            <button onClick={increaseA}>
                Increase A
            </button>

            <button onClick={increaseB}>
                Increase b
            </button>

            <button onClick={badIncreaseA}>
                Increase A Badly
            </button>
        </>
    );
}

export default MultiCounter;