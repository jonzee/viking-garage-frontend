import React from 'react'
import ReactDOM from 'react-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import FlatButton from 'material-ui/FlatButton';
import AppBar from 'material-ui/AppBar';

import Cardgrid from 'components/Cardgrid';
import Search from 'components/Search';

const muiTheme = getMuiTheme({
  appBar: {
    textColor: 'black',
  },
});

const App = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <div>
      <AppBar
        style={{backgroundColor: 'white'}}
        title="Viking Garage"
        iconElementRight={<FlatButton label="Motocross" />}
      />
      <Search />
      <Cardgrid />
    </div>
  </MuiThemeProvider>
);

export default () => <App />
