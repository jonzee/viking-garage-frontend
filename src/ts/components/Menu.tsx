import React, { Component } from 'react';
import {
  IconButton,
  IconMenu,
  FlatButton,
  FontIcon,
  MenuItem,
} from 'material-ui';

export default function Menu (props) {

  const iconButtonElement = (
    <MenuItem>
      <FontIcon
        style={{fontSize: 18}}
        className='fa fa-ellipsis-v'/>
    </MenuItem>);

  const anchorOrigin = {horizontal: 'right', vertical: 'top'};
  const targetOrigin = {horizontal: 'right', vertical: 'top'};

  return (
    <div>
      <div className="inline">
        <MenuItem primaryText="Motocross" />
      </div>
      <div className="inline">
        <MenuItem primaryText="Enduro" />
      </div>
      <IconMenu
        iconButtonElement={iconButtonElement}
        anchorOrigin={anchorOrigin}
        targetOrigin={targetOrigin}
      >
        <MenuItem primaryText="Supercross" />
        <MenuItem primaryText="Trials" />
        <MenuItem primaryText="Scooters" />
      </IconMenu>
    </div>
  );
}
