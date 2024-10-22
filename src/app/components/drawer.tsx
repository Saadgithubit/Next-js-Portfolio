'use client'

import * as React from 'react';
import { Global } from '@emotion/react';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { grey } from '@mui/material/colors';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Link from 'next/link';

const drawerBleeding = 56;

interface Props {
    container: HTMLElement | (() => HTMLElement) | null | undefined;
    open: boolean;
    toggleDrawer: (newOpen: boolean) => () => void;
    menu: string[]
}

const Root = styled('div')(({ theme }) => ({
    height: '100%',
    backgroundColor: 'transparent',
    ...theme.applyStyles('dark', {
        backgroundColor: theme.palette.background.default,
    }),
}));

const StyledBox = styled('div')(({ theme }) => ({
    backgroundColor: 'transparent',
    ...theme.applyStyles('dark', {
        backgroundColor: grey[800],
    }),
}));

export default function SwipeableEdgeDrawer({ toggleDrawer, open, container, menu }: Props) {

    return (
        <Root>
            <CssBaseline />
            <Global
                styles={{
                    '.MuiDrawer-root > .MuiPaper-root': {
                        height: `calc(50% - ${drawerBleeding}px)`,
                        overflow: 'visible',
                    },
                }}
            />
            <SwipeableDrawer
                container={container}
                anchor="bottom"
                open={open}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
                swipeAreaWidth={drawerBleeding}
                disableSwipeToOpen={false}
                ModalProps={{
                    keepMounted: true,
                }}
            >
                <StyledBox sx={{ px: 2, pb: 2, height: '100%', overflow: 'auto', background: 'linear-gradient(to right,#090444, #0d0d0d)', color: 'white' }}>
                    <div className='w-full py-6'>
                        <ul className='text-xl font-semibold space-y-6 pl-6'>
                            {menu.map((item, index) => {
                                return (
                                    <li key={index} className='hover:text-[#0099FF] cursor-pointer hover:underline'>
                                        <Link onClick={toggleDrawer(false)} href={`#${item.toLowerCase()}`}>{item}</Link></li>
                                )
                            })}
                        </ul>

                    </div>
                </StyledBox>
            </SwipeableDrawer>
        </Root>
    );
}
