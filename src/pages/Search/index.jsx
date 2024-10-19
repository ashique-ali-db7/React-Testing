import React from "react";
import { useEffect, useState } from "react"
import Result from "./result";

const Search = () => {

    const [list, setList] = useState([])
    const [serchResult, setSearchResult] = useState([])
    const [value, setValue] = useState("")
    useEffect(() => {
        const sampleApiResonse = [
            {
                name: "shirt",
                price: 1000

            },
            {
                name: "pant",
                price: 1000

            }
        ]
        // Could be GET or POST/PUT/PATCH/DELETE
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(json => {
                setList(json.products)

                setSearchResult(json.products)
            });

        /* { status: 'ok', method: 'GET' } */
    }, [])
    const clickHandler = () => {

        if (!value) {
            setSearchResult(list)
        } else {
            const values = list?.filter((val => value === val.brand))
            setSearchResult(values || [])
        }

    }
    return <>

        <div style={{ marginTop: "10px" }}>
            <input type="text" value={value} onChange={(e) => setValue(e.target.value)} data-testid="searchInput" />
            <button onClick={clickHandler}>Search</button>
            {/* <input type="text" onChange={} /> */}
            <Result searchResult={serchResult} />

        </div >
    </>
}

export default Search