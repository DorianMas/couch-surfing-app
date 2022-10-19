import { Settings } from '@mui/icons-material'
import { ListItemIcon, Menu, MenuItem } from '@mui/material'
import React from 'react'
import { useValue } from '../../context/ContextProvider'

const UserMenu = ({anchorUserMenu, setAnchorUserMenu}) => {
    const {dispatch} = useValue()
    
    const handleCloseMenu = () => {
        setAnchorUserMenu(null)
    }

  return (
    <Menu anchorEl={anchorUserMenu} open={Boolean(anchorUserMenu)} onClose={handleCloseMenu} onClick={handleCloseMenu}>
        <MenuItem>
        <ListItemIcon>
            <Settings fontSize='small'/>
        </ListItemIcon>
        Profile
        </MenuItem>
        <MenuItem onClick={() =>dispatch({type:'UPDATE_USER',payload:null})}>
        <ListItemIcon>
            <Settings fontSize='small'/>
        </ListItemIcon>
        Logout
        </MenuItem>
    </Menu>
  )
}

export default UserMenu