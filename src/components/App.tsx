import React from 'react';
import ReactDOM from 'react-dom';
import {
  getMuiTheme,
  MuiThemeProvider,
} from 'material-ui/styles';
import {
  AppBar,
  FlatButton,
} from 'material-ui';
import Cardgrid from 'components/Cardgrid';
import Header from 'components/Header';
import Menu from 'components/Menu';
import Search from 'components/Search';

const muiTheme = getMuiTheme({
  fontFamily: '"Roboto", "Helvetica Neue", Helvetica, Arial, sans-serif',
  appBar: {
    textColor: 'black',
    color: 'white',
  },
  // custom styles
  container: 900,
  raido: {
    color: '#AD000D',
    fontFamily: 'Junicode'
  }
});

export default function App() {
  return (
    <MuiThemeProvider muiTheme={muiTheme}>
      <div>
        <AppBar
          zDepth={0} // switch off box-shadow
          title="&#5809;"
          titleStyle={muiTheme.raido}
          showMenuIconButton={false}
          iconElementRight={(<Menu />)}
        />
        <Header />
        <Search />
        <Cardgrid />
      </div>
    </MuiThemeProvider>
  );
}
