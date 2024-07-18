import classes from './loginInicialStyles.module.css'
import Image from 'next/image';
import perfil from '../../../../public/img/favicon/profile-1.jpg'
import Button from '@mui/material/Button';
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/system';
export default function LoginInicial() {
    const MyInput = styled('input')({
        width: 40,
        height: 45,
        // border-radius: '12px',
        // border-style: 'solid',
        // border-color: '#E6E6E6',
        // border-width: '1px',
        // margin-bottom: '2em',
        // padding-inline: '1em',
        // font-weight: '530',
        // color: '#4E4E4E',
    });
    return (
        <>
            <TextField id="standard-basic" label="Standar"
            sx={{
                width:'10ch',
                borderColor: '#0000',
            }}/>
        </>
    );
}