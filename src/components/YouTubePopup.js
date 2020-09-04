import React, { useEffect, useState } from 'react';
import tw, {styled} from 'twin.macro';

const Container = tw.div`fixed w-full h-screen flex items-center justify-center top-0 left-0`;
const Frame = styled.div`
    ${tw`w-11/12 shadow-lg bg-black z-50 left-0 mx-auto relative`}
`;
const Player = tw.iframe`w-full h-full absolute top-0 left-0 border-none`;
const Cover = tw.div`absolute w-full h-full bg-black opacity-75 top-0 left-0`;

export default ({id, close, autoplay=true}) => {
    const [size, setSize] = useState([0,0]);

    useEffect(() => {
        const videoRatio = 16/9;
        let screenRatio = window.innerWidth / window.innerHeight;
        let fraction = 0.9;

        if(screenRatio < videoRatio) {
            //Tall
            setSize([window.innerWidth*fraction, window.innerWidth/videoRatio])
        } else {
            //Wide
            setSize([window.innerHeight*videoRatio, window.innerHeight*fraction])
        }

    }, []);

    return (
        <>
            <Cover />
            <Container onClick={close}>
                <Frame style={{width: size[0], height: size[1]}}>
                    <Player src={`https://www.youtube.com/embed/${id}?autoplay=${autoplay ? "1" : "0"}&controls=1&fs=1`} allow="accelerometer; autoplay; modestbranding; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></Player>
                </Frame>
            </Container>
        </>
  );
}
