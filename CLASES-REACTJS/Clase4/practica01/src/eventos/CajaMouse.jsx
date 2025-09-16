import { useState } from "react";

const CajaMouse = () => {

    const [color, setColor] = useState("lightGray");

    return(
        <div style={{ margin:"20px", width:"100px", height:"25px", backgroundColor:color, textAlign: "center", borderRadius:"4px", cursor:"pointer" }} onMouseOver={() => setColor("lightblue")} onMouseOut={() => setColor("lightGray")}>
            CAJAMOUSE
        </div>
    )

}

export default CajaMouse;