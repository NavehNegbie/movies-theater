import { ThemeProvider } from '@material-ui/core';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/homePage/HomePage';
import MoviePage from './components/moviePage/MoviePage';
import NotFound from './components/notFound/NotFound';
import TopBar from './components/topBar/TopBar';
import { HOME, MOVIE } from './routes/routes';
import { theme } from './Theme';

const App = () => {
  return (
    <>
    <ThemeProvider theme={theme}>
      <TopBar />
      <Switch>
        <Route exact path={HOME} component={Home} />
        <Route path={MOVIE} component={MoviePage} />
        <Route path="*" component={NotFound} />
      </Switch>
    </ThemeProvider>
    </>
  );
}

export default App;
