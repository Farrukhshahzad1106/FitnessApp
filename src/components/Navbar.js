import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';  //The stack component manages the layout of its immediate children along the vertical or horizontal axis,
                                        //with optional spacing and dividers between each child.
import Logo from '../assets/images/Logo.png'



const Navbar = () => {
  return (
    <Stack direction='row' justifyContent='space-around' sx={{gap:{sm: '122px', xs: '40px'}, mt:{ sm:'32px', xs:'20px'}, justifyContent:'none'}} px='20px'>
        <Link to='/'>
            <img src={Logo} alt='logo' 
                 style={{width:'48px' , height : '48px' , margin : '0 20px'}}/>
        </Link>
        <Stack direction='row' gap='40px' fontSize='24px' alignItems='flex-end'>
            <Link to='/' style={{textDecoration: 'none' , color:'#3a1212', borderBottom:'3px solid #FF2625'}}>
                Home
            </Link>
            <a href='#exercises' style={{
                textDecoration: 'none' , color: '#3A1212'
            }}>
                Exercises
            </a>
        </Stack>
    </Stack>
  )
}

export default Navbar;

//STack component in Material UI.
//Stack acts as a generic container wrapping elements to be arranged.
//We use the spacing prop to control the spacing between children. The spacing can be any number, including decimals or a string. (The prop is converted into a CSS property using the theme.spacing() helper)
//By default Stack arranges items vertically in a column. We use the direction prop to position items horizontally in a row.
/*
    <Stack spacing={2} direction='row'>
        <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item>
    </Stack>
*/
//direction = 'row' will make the elements arrange horizontally in a row.
//We can switch the direction and spacing values based on active breakpoints (xs, sm, md)
//we use the divider prop to insert an element between eachchild. This works particularly well with the <Divider> component.
/*
    <Stack
    direction="row"
    divider={<Divider orientation="vertical" flexItem />}
    spacing={{ xs: 1, sm: 2, md: 4 }}
    >
    <Item>Item 1</Item>
    <Item>Item 2</Item>
    <Item>Item 3</Item>
    </Stack>
*/