import React from 'react';
import tw from 'twin.macro';
import {Switch, Route} from "react-router-dom";

import EventsList from "../components/EventsList";

const Welcome = React.lazy(() => import("../screens/events/Welcome"));
const CookOff = React.lazy(() => import("../screens/events/CookOff"));
const SocietyShowcase = React.lazy(() => import("../screens/events/SocietyShowcase"));
const PubQuiz = React.lazy(() => import("../screens/events/PubQuiz"));
const PendleLive = React.lazy(() => import("../screens/events/PendleLive"));
const MeetCoursemates = React.lazy(() => import("../screens/events/MeetCoursemates"));

const Container = tw.div``;

export default () => {
    return (
        <Container>
            <Switch>
                <Route path="/event/meet-coursemates" component={MeetCoursemates}/>
                <Route path="/event/welcome" component={Welcome}/>
                <Route path="/event/jcr-cook-off" component={CookOff}/>
                <Route path="/event/society-showcase" component={SocietyShowcase}/>
                <Route path="/event/quiz" component={PubQuiz}/>
                <Route path="/event/pendle-live" component={PendleLive}/>
                <Route path="/event/:id" component={Placeholder}/>
                <Route path="/" exact component={EventsList}/>
            </Switch>
        </Container>
    );
}

const Placeholder = () => {
    return (
        <div>This event hasn't been setup</div>
    );
}