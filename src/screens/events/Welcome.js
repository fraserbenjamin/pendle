import React, {useContext, useState} from 'react';
import tw, {styled} from 'twin.macro';
import {useLocation} from "react-router-dom";

import EventsContext from "../../context/eventsContext";

import Tag from "../../components/ui/Tag";
import PendleCollege from "../../assets/pendle-college-quad.webp";
import {useAnalytics} from "../../components/Firebase";
import YouTubePopup from '../../components/YouTubePopup';
import YouTubeButton from "../../components/ui/YouTubeButton";

const Frame = tw.div`flex justify-center p-3`;
const Container = tw.div`w-full bg-white font-effra h-full shadow-md max-w-4xl p-3`;
const Banner = styled.div`
    background: url(${PendleCollege}) no-repeat;
    ${tw`w-full h-64 bg-cover bg-center bg-no-repeat`}
`;
const Title = tw.div`font-semibold pt-3 text-lg`;
const Body = tw.div`my-2 mb-8`;

export default () => {
    const {events} = useContext(EventsContext);
    const location = useLocation();
    const analytics = useAnalytics();
    const [videoActive, setVideoActive] = useState(false);

    analytics.logEvent('page_view', {
        page_title: 'Welcome',
    });

    return (
        <Frame>
            <Container>
                <Banner/>

                <Title>Welcome</Title>
                <Body>
                Here at Pendle, we have a strong sense of our traditions and our students often develop a strong sense of loyalty and college identity.
                <br/><br/>
                Our standard room residence blocks surround three sides of a grassy quad, used for such annual open-air events as Extrav Night. Our social centre, Pendle Rooms, creates the fourth side, bringing together all aspects of college life. The large ground floor, complete with a performance stage, hosts Pendle Live nights, lunchtime talks and a wide range of student-organised events. There is also a first-floor games room with a communal area and meeting rooms. Our ensuite accommodation nestles with its own quad on South West campus along with our studio apartment block.
                <br/><br/>
                We're sociable, friendly and fun, but we also have a strong sense of commitment – to the College, to your degree, and to making a contribution locally, nationally and internationally, where we believe we should make a difference and do so because we can.
                <br/><br/>
                If you’re the sort of student who likes to be involved, Pendle’s where you belong!
                </Body>

                Be sure to watch our welcome talk at 18:15 on YouTube.

                <YouTubeButton onClick={() => setVideoActive(true)}/>
                {videoActive && <YouTubePopup id="x7ONmPOQF9s" close={() => setVideoActive(false)}/>}

                {events.filter(item => `/event/${item.path}` === location.pathname)[0]?.tags?.map((tag,i) => (
                    <Tag key={i}>{tag}</Tag>
                ))}
            </Container>
        </Frame>
  );
}
