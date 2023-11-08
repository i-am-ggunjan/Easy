import React, { useRef, useEffect } from 'react';
import Hls from 'hls.js';

const Player = ({ url, playable }) => {
    const videoRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current;

        if (Hls.isSupported()) {
            const hls = new Hls();
            hls.loadSource(url);
            hls.attachMedia(video);
        } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
            video.src = url;
        }
    }, [url]);

    return (
        <div>
            <video ref={videoRef} controls={playable} />
        </div>
    );
};

export default Player
