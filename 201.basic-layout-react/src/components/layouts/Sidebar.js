import React, { useState } from 'react';
import { Button, Modal} from '@material-ui/core';

function CreateChannel() {
    return (
        <>
            <Button color="primary">+</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>
        </>
    );
}

function Sidebar() {
    let teamName = 'Finko-Dev'
    let topLinks = [
        'All unreads',
        'Threads',
    ]
    let channels = [
        'random', 'general', '코딩교육', 'techy'
    ]
    return (
        <aside className="sidebar">
            <div className="sidebar-header">
                {teamName}
            </div>
            <div className="sidebar-section">
                {topLinks.map(v => (
                    <div className="sidebar-item">
                        {v}
                    </div>
                ))}
            </div>
            <div className="sidebar-section">
                <div className="sidebar-menu-label sidebar-item">
                    Channels <CreateChannel />
                </div>
                <ul className="sidebar-menu">
                    {channels.map(c => <li># {c}</li>)}
                </ul>
            </div>
        </aside>
    );
}
export default Sidebar;