import React, { Component } from 'react';
import {
  IconButton,
  IconMenu,
  FlatButton,
  FontIcon,
  MenuItem,
} from 'material-ui';

export default function Menu (props) {
  return (
    <div>
      <div style={{display: 'inline-block'}}>
        <MenuItem primaryText="Motocross" />
      </div>
      <div style={{display: 'inline-block'}}>
        <MenuItem primaryText="Enduro" />
      </div>
      <IconMenu
        iconButtonElement={
          (<MenuItem>
            <FontIcon
              style={{fontSize: 18}}
              className='fa fa-ellipsis-v'/>
          </MenuItem>)}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
      >
        <MenuItem primaryText="Supercross" />
        <MenuItem primaryText="Trials" />
        <MenuItem primaryText="Scooters" />
      </IconMenu>
    </div>
  );
}
