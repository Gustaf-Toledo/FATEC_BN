import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './assets/pages/page-landing';
import Academico from './assets/pages/academic';
import Cursos from './assets/pages/courses';
import Institucional from './assets/pages/institute';

export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/institucional" component= {Institucional} />
                <Route path="/academico" component={Academico} />
                <Route path="/cursos" component={Cursos} />
            </Switch>
        </BrowserRouter>
    );
}