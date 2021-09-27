import React from 'react';
import AboutUs from './pages/AboutUs';
import GlobalStyle from './components/GlobalStyle';
import Nav from './components/Nav';
import ContactUs from './pages/ContactUs';
import OurWork from './pages/OurWork';
import {Switch, Route} from 'react-router-dom';
import MovieDetail from './pages/MovieDetail';


function App() {
    return (
        <div className="App">
            <GlobalStyle/>
            <Nav/>
            <Switch>
                <Route path="/" exact>
                    <AboutUs/>
                </Route>

                <Route path="/work" exact>
                    <OurWork/>
                </Route>
                <Route path="/contact">
                    <ContactUs/>
                </Route>
                <Route path="/work/:id">
                    <MovieDetail />
                </Route>
            </Switch>
        </div>
    );
}

export default App;
