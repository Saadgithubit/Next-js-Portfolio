'use client'

import { AppBar, Box, Toolbar, Typography, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useEffect, useState } from 'react';
import SwipeableEdgeDrawer from './drawer';
import Link from 'next/link';

const menu = ['Home', 'About', 'Skills', 'Projects', 'Contact']

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [container, setContainer] = useState<HTMLElement | null>(null);

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    useEffect(() => {
        if (typeof document !== 'undefined') {
            setContainer(document.body);
        }
    }, []);

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="sticky" sx={{ background: 'linear-gradient(#000724,#010630,#012664)' }}>
                <Toolbar sx={{ color: 'white', display: 'flex', justifyContent: 'space-between', py: { xs: 2, md: 4 } }}>
                    <Typography sx={{
                        fontSize: { xs: '30px', md: '40px', fontWeight: 'bold' }
                    }} className='w-[90%] lg:w-[40%] flex lg:justify-center pl-5 lg:pl-0 lg:pr-4' variant="h6" component="div">
                        Saad Ahmed
                    </Typography>
                    <Box sx={{ width: '60%', display: { xs: 'none', md: 'block' } }}>
                        <ul className='flex justify-center text-xl font-semibold gap-x-16'>
                            {menu.map((item, index) => {
                                return (
                                    <li key={index} className='hover:text-[#0099FF] cursor-pointer hover:underline'><Link href={`#${item.toLowerCase()}`}>{item}</Link></li>
                                )
                            })}
                        </ul>
                    </Box>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        onClick={toggleDrawer(true)}
                        sx={{ mr: 2, display: { xs: 'block', md: 'none' } }}
                    >
                        <MenuIcon className='text-3xl' />
                    </IconButton>
                    <SwipeableEdgeDrawer toggleDrawer={toggleDrawer} open={open} container={container} menu={menu} />
                </Toolbar>
            </AppBar>
        </Box>
    );
}
