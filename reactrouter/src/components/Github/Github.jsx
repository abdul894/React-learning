import React from "react";
import { useEffect } from "react";

export default function Github() {
    const [data, setData] = React.useEffect([])
    useEffect(() => {
        fetch('https://api.github.com/users/abdul894')
        .then((response) => response.json)
        .then(data => {
            console.log(data)
            setData(data)
        })
    }, [])
    
    return (
        <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl" ></div>
    )
}