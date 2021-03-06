import React, {useContext} from 'react';
import tw from 'twin.macro';
import {useLocation} from "react-router-dom";

import EventsContext from "../../context/eventsContext";

import Tag from "../../components/ui/Tag";
import YouTubeButton from '../../components/ui/YouTubeButton';

const Frame = tw.div`flex justify-center p-3`;
const Container = tw.div`w-full bg-white font-effra h-full shadow-md max-w-4xl p-3`;
const Title = tw.div`font-semibold pt-3 text-lg`;
const Body = tw.div`flex flex-col`;

export default () => {
    const {events} = useContext(EventsContext);
    const location = useLocation();

    const event = events.filter(item => `/event/${item.path}` === location.pathname)[0];
    const url = "https://www.youtube.com/watch?v=AHny8o3T4vU";

    return (
        <Frame>
            <Container>
                <Title>{event?.title}</Title>
                <Body>
                    {event?.description}
                    <br/><br/>
                    Click the button below to watch!

                    <YouTubeButton onClick={() => window.open(url, "_blank")}/>
                </Body>

                {event?.tags?.map((tag,i) => (
                    <Tag key={i}>{tag}</Tag>
                ))}
            </Container>
        </Frame>
  );
}
