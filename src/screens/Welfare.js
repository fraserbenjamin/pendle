import React from 'react';
import tw from 'twin.macro';

import {useAnalytics} from "../components/Firebase";

import WelfarePoster from '../assets/welfare-poster.png';
import WelfareGuide from '../assets/welfare-guide.pdf';

const Frame = tw.div`flex justify-center p-3`;
const Container = tw.div`w-full bg-white font-effra h-full shadow-md max-w-4xl p-3`;
const Title = tw.div`font-semibold pt-3 text-lg`;
const Body = tw.div`my-2 mb-3`;
const Poster = tw.img`w-full`;
const Download = tw.a`relative flex justify-center w-full mt-3 text-center underline`;
const Button = tw.button`flex-grow bg-pendle-green text-white rounded py-2 my-3`;

export default () => {
    const analytics = useAnalytics();

    analytics.logEvent('page_view', {
        page_title: 'Welfare',
    });

    return (
        <Frame>
            <Container>
                <Title>Welfare</Title>
                <Body>
                Have a look at this handy guide to see what support is available to you at Lancaster.<br/>
                Or checkout our full guide below with lots of fantastic advice.

                <a href={WelfareGuide} without rel="noopener noreferrer" target="_blank" tw="flex">
                    <Button label="Advice PDF">
                        Full Advice PDF
                    </Button>
                </a>
                </Body>

                <Poster src={WelfarePoster} alt="Welfare Poster"/>

                <Download href={WelfarePoster} download="Welfare Poster">
                    Click here to download
                </Download>
            </Container>
        </Frame>
  );
}
