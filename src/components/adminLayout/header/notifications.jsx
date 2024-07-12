import React, { useState, useEffect } from 'react';
import { Badge, Tooltip } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';

const Notifications = ({ email }) => {
    const [unreadEmails, setUnreadEmails] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUnreadEmails = async () => {
            try {
                const response = await fetch(`/api/unreadEmails?email=${email}`);
                if (!response.ok) {
                    throw new Error(`Error: ${response.statusText}`);
                }
                const data = await response.json();
                setUnreadEmails(data.unreadEmails);
            } catch (error) {
                setError(error.message);
            }
        };

        fetchUnreadEmails();
    }, [email]);

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (unreadEmails === null) {
        return <NotificationsIcon />;
    }
    return (
        <Tooltip title="Correos no leídos" placement="bottom">
            <Badge badgeContent={unreadEmails} color="error">
                <NotificationsIcon />
            </Badge>
        </Tooltip>
    )
}

export default Notifications;
