import React from 'react';

const MideSildeCom = ({ books }) => {

    const { title, author, imageLink, year } = books;


    return (
        <div className='text-center'>
            <div>
                <img src={imageLink ? imageLink : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/832px-No-Image-Placeholder.svg.png"} alt={title} style={{ marginTop: 10 , height: 100 }}/>
                    <div>
                        <h5 className="card-title text-primary">{title}</h5>
                        <strong className="card-text text-secondary">Author: <span className="text-success">{author}</span></strong>
                        <p className="text-secondary fw-bolder">{Math.abs(year)}</p>
                    </div>
            </div>
        </div>
    );
};

export default MideSildeCom;
