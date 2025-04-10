function ProfileCard ({title, handle, image}) {
    return (
        <div>
            <img src={image} alt="pda logo" />
            <div>Title is {title}</div>
            <div>handle is {handle}</div>
        </div>
    );
}

export default ProfileCard;