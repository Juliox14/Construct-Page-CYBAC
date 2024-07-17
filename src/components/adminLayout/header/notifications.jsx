import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Badge, Tooltip } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import classes from './notifications.module.scss';

const Notifications = ({ email }) => {
    const [unreadEmails, setUnreadEmails] = useState(null);
    const [error, setError] = useState(null);
    const [viewEmailsPreview, setViewEmailsPreview] = useState(false);
    const [emailsPreview, setEmailsPreview] = useState([{ subject: '', nombre: '', correo: '', mensaje: '' }]);

    useEffect(() => {
        const fetchUnreadEmails = async () => {
            try {
                const response = await fetch('/api/unreadEmailsBadge');
                if (!response.ok) {
                    throw new Error(`Error: ${response.statusText}`);
                }
                const data = await response.json();
                setUnreadEmails(data.notifications);


            } catch (error) {
                setError(error.message);
            }
        };

        fetchUnreadEmails();
    }, [email]);

    useEffect(() => {
        const fetchEmailsPreview = async () => {
            try {
                const response = await fetch('/api/unreadEmails');
                if (!response.ok) {
                    throw new Error(`Error: ${response.statusText}`);
                }
                const data = await response.json();
                setEmailsPreview(data);
            } catch (error) {
                setError(error.message);
            }
        }

        fetchEmailsPreview();
    }, [unreadEmails]);


    if (error) {
        return <NotificationsIcon />;
    }

    if (unreadEmails === null) {
        return <NotificationsIcon />;
    }

    const onClickHandler = async () => {
        setViewEmailsPreview(!viewEmailsPreview);
    };

    return (
        <div>
            <div onClick={onClickHandler} className={classes.notis}>
                <Badge badgeContent={unreadEmails} color="error">
                    <NotificationsIcon />
                </Badge>
            </div>
            {viewEmailsPreview && (
                <div className={classes.containerEmails}>
                    <Link href={'https://ecobrush.com.mx:2096/cpsess7741058131/3rdparty/roundcube/index.php?_task=mail&_mbox=INBOX'} target='_blank'>
                        <svg className={classes.logo} xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mailbox" width="25" height="25" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ADA479" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M10 21v-6.5a3.5 3.5 0 0 0 -7 0v6.5h18v-6a4 4 0 0 0 -4 -4h-10.5" />
                            <path d="M12 11v-8h4l2 2l-2 2h-4" />
                            <path d="M6 15h1" />
                        </svg>
                    </Link>
                    <div className={classes.emailsPreview}>
                        {emailsPreview.map((email, index) => (
                            <div className={classes.emailPreview} key={index}>
                                <div className={classes.emailPreview_asunto}>{email.subject}</div>

                                <div className={classes.emailPreview_texto}>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user-filled" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M12 2a5 5 0 1 1 -5 5l.005 -.217a5 5 0 0 1 4.995 -4.783z" stroke-width="0" fill="currentColor" />
                                    <path d="M14 14a5 5 0 0 1 5 5v1a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-1a5 5 0 0 1 5 -5h4z" stroke-width="0" fill="currentColor" />
                                    </svg> Nombre del cliente: {email.nombre}
                                </div>
                                
                                <div className={classes.emailPreview_texto}>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mail-filled" width="15" height="15" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffec00" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M22 7.535v9.465a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-9.465l9.445 6.297l.116 .066a1 1 0 0 0 .878 0l.116 -.066l9.445 -6.297z" stroke-width="0" fill="currentColor" />
                                    <path d="M19 4c1.08 0 2.027 .57 2.555 1.427l-9.555 6.37l-9.555 -6.37a2.999 2.999 0 0 1 2.354 -1.42l.201 -.007h14z" stroke-width="0" fill="currentColor" />
                                    </svg> Email: {email.correo}
                                </div>

                                <div className={classes.emailPreview_texto}>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-telegram" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4" />
                                    </svg> 
                                    Mensaje: {email.mensaje}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

export default Notifications;
