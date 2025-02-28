import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Tab Component
export const Tab = ({ text, id, onClick, isActive }) => {
    return (
        <li className="nav-item" key={id}>
            <Link
                className={`nav-link ${isActive ? 'active' : ''}`}
                data-bs-toggle="tab"
                onClick={() => onClick(id)}
            >
                {text}
            </Link>
        </li>
    );
};

// TabPanel Component
export const TabPanel = ({ id, children, activeTab }) => {
    return (
        <div className={`tab-pane ${activeTab === id ? 'show active' : ''}`}>
            {children}
        </div>
    );
};

// Tabs Component
export const Tabs = ({ children }) => {
    const [activeTab, setActiveTab] = useState('tab1');
    const tabs = [];
    const panels = [];

    React.Children.forEach(children, (child) => {
        if (React.isValidElement(child)) {
            if (child.type === Tab) {
                tabs.push(
                    React.cloneElement(child, {
                        onClick: setActiveTab,
                        isActive: child.props.id === activeTab,
                    })
                );
            } else if (child.type === TabPanel) {
                panels.push(React.cloneElement(child, { activeTab }));
            }
        }
    });

    return (
        <>
            <ul className="nav nav-tabs nav-tabs-solid nav-tabs-rounded nav-justified">
                {tabs}
            </ul>
            <div className="tab-content">
                {panels}
            </div>
        </>
    );
};
