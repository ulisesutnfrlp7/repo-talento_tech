import React, { useEffect, useState } from 'react';

function RandomUser () {
    
    const [user, setUser] = useState(null);

    useEffect (
        () => {
            fetch("https://randomuser.me/api/")
            .then((res) => res.json())
            .then((data) => {
                setUser(data.results[0]);
            })
        }, []
    );

    return (
        <div>
            if (!user) return <p> Cargando usuario... </p>
            <img 
                src={user.picture.large} 
                alt="usuario" 
                style={{ borderRadius: "50%" }}
            />
            <h3>
                <p>
                    {user.email}
                </p>
                <p>
                    {user.location.country}
                </p>
            </h3>
        </div>
    )
}

export default RandomUser; 

// .then(()) -> CONCATENA UNA ACCIÓN AL FETCH