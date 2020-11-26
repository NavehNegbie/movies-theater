import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/home/Home';
import MoviePage from './components/moviePage/MoviePage';
import NotFound from './components/NotFound';
import TopBar from './components/topBar/TopBar';
import { HOME, MOVIE } from './routes/routes';

const App = () => {
  return (
    <>
      <TopBar />
      <Switch>
        <Route exact path={HOME} component={Home} />
        <Route path={MOVIE} component={MoviePage} />
        <Route path="*" component={NotFound} />
      </Switch>
    </>
  );
}

export default App;
