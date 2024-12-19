import React from 'react';

const AnnouncementBar = () => {
    return (
        <div className="announcement-bar">
            <div className="marquee-container">
                <div className="marquee-content">
                    <strong className="title-bold">BOOK YOUR SESSION TODAY →</strong>&nbsp;&nbsp;&nbsp;&nbsp;
                    <strong className="title-bold">BOOK YOUR SESSION TODAY →</strong>&nbsp;&nbsp;&nbsp;&nbsp;
                    <strong className="title-bold">BOOK YOUR SESSION TODAY →</strong>&nbsp;&nbsp;&nbsp;&nbsp;
                    <strong className="title-bold">BOOK YOUR SESSION TODAY →</strong>&nbsp;&nbsp;&nbsp;&nbsp;
                </div>
                <div className="marquee-content" aria-hidden="true">
                    <strong className="title-bold">BOOK YOUR SESSION TODAY →</strong>&nbsp;&nbsp;&nbsp;&nbsp;
                    <strong className="title-bold">BOOK YOUR SESSION TODAY →</strong>&nbsp;&nbsp;&nbsp;&nbsp;
                    <strong className="title-bold">BOOK YOUR SESSION TODAY →</strong>&nbsp;&nbsp;&nbsp;&nbsp;
                    <strong className="title-bold">BOOK YOUR SESSION TODAY →</strong>&nbsp;&nbsp;&nbsp;&nbsp;
                </div>
            </div>
        </div>
    );
};

export default AnnouncementBar;
