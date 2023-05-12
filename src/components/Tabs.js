import React, { useState, useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import anime from 'animejs';

const Tabs = ({ items }) => {
    const [activeTab, setActiveTab] = useState(0);
    const contentRef = useRef(null);

    const handleTabClick = (index) => {
        setActiveTab(index);
        if(items[index].callback) {
            items[index].callback();
        }
    };

    useEffect(() => {
        const contentElement = contentRef.current;
        anime({
            targets: contentElement,
            opacity: [0, 1],
            duration: 500,
            easing: 'easeOutQuad',
        });
    }, [activeTab]);

return (
    <div className='tabs-container'>
        <div className="tab-headers">
            {items.map((item, index) => (
            <div key={index} className={`tab-header ${index === activeTab ? 'active' : ''}`} onClick={() => handleTabClick(index)}>
            {item.label}
        </div>
        ))}
        <div className={`active-tab-indicator ${activeTab > 0 ? 'slide' : ''}`}></div>
    </div>
    
    <div className="tab-content" ref={contentRef}>
        {items[activeTab].content}
    </div>
    </div>
    );
};

export default Tabs;