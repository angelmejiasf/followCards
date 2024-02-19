import { useState } from "react";

function useFollowCard(){
const [isFollowing, setIsFollowing] = useState(false);
    const text = isFollowing ? "Siguiendo" : "Seguir";
    const buttonClassName = isFollowing ? "tw-followCard-button is-following" : "tw-followCard-button"

    
    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    return {text,buttonClassName,handleClick}
}

export default useFollowCard

