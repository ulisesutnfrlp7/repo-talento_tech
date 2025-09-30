import React, { useState, useEffect } from 'react';

const DogCEOApi = () => {

    const [dog, setDog] = useState({});

    useEffect (
        () => {
            fetch("https://dog.ceo/api/breeds/image/random")
            .then((res) => res.json())
            .then((data) => {
                setDog(data)
            })
        }, []
    );

    return (
        <div>
            <h1>
                {dog.status}
            </h1>
            <img src={dog.message} />
        </div>
    )
}

export default DogCEOApi;