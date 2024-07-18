import React from "react";
import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

export default function Github() {

    const data = useLoaderData()
    
    // const [data, setData] = React.useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/abdul894')
    //     .then((response) => response.json())
    //     .then(data => {
    //         console.log(data)
    //         setData(data)
    //     })
    // }, [])
    
    return (
        <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl" >Github Followers: {data.followers}
        <img src={data.avatar_url} width={300} alt="" />
        </div>
    )
}

export const gitHubInfoLoader = async() => {
    const response = await fetch('https://api.github.com/users/abdul894')
    return response.json()
}