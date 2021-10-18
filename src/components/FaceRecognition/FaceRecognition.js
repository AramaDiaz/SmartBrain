import React from "react";

const FaceRecognition = ({ imageUrl }) => {
    return (
        <div className='center'>
            <img src={imageUrl} alt={''} width={250} height={250}/>
        </div>
    );
}

export default FaceRecognition;