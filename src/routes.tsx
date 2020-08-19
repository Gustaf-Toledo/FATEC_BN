import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './assets/pages/page-landing';
import Academico from './assets/pages/academic';
import Cursos from './assets/pages/courses';
import Institucional from './assets/pages/institute';
import NewsPage from './assets/pages/news/';

export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/noticias" component = {NewsPage} />
                <Route path="/institucional" component= {Institucional} />
                <Route path="/cursos" component={Cursos} />
                <Route path="/academico" component={Academico} />
            </Switch>
        </BrowserRouter>
    );
}