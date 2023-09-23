import React from "react";
export function Propobj({person,size}){
    return(
        <img
        className="minion"
        src={getImageUrl(person)}
        alt={person.name}
        width={size}
        height={size}
        />
    )
}