import useFollowCard from "../hooks/useFollowCard"

export function TwitterFollowCard({username,name}) {
   const {buttonClassName,text,handleClick}=useFollowCard();
    return (

        <article className='tw-followCard' >
            <header className='tw-followCard-header'>
                <img alt='logo' src={`https://unavatar.io/${username} `}
                    className='tw-followCard-avatar'></img>
                <div className='tw-followCard-info'>
                    <strong>{name}</strong>
                    <span className='tw-followCard-infoUserName'>@{username}</span>

                </div>
            </header>

            <aside>
                <button className={buttonClassName} onClick={handleClick}>{text}</button>
            </aside>
        </article>



    )

}


