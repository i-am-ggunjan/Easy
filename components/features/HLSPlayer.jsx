// import React, { useState, useEffect, useRef, createRef } from "react";
// // import dynamic from "next/dynamic";
// import ReactHlsPlayer from "react-hls-player";
// // const ReactHlsPlayer = dynamic(() => import('react-hls-player'), { ssr: false })

// import { PauseIcon, PlayIcon, SoundIcon, SoundMuteIcon, SquarePauseIcon } from "@/utils/icons/icons";
// function formatTime(seconds) {
//     const hours = Math.floor(seconds / 3600);
//     const minutes = Math.floor((seconds % 3600) / 60);
//     const remainingSeconds = Math.floor(seconds % 60);
//     const formattedHours = String(hours).padStart(2, "0");
//     const formattedMinutes = String(minutes).padStart(2, "0");
//     const formattedSeconds = String(remainingSeconds).padStart(2, "0");
//     return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
// }

// const _currUrl =
//     "https://live-par-2-abr.livepush.io/vod/bigbuckbunny/index.m3u8";

// const ReactHLSPlayerCMP = ({ currUrl = _currUrl }) => {
//     const videoRef = useRef(null);
//     const [isPlaying, setIsPlaying] = useState(false);
//     const [muted, setMuted] = useState(false);
//     const [volume, setVolume] = useState(100);
//     const [played, setPlayed] = useState(0);
//     const [duration, setDuration] = useState(0);
//     const [fullScreen, setFullScreen] = useState(false);
//     const [showControls, setShowControls] = useState(false);
//     const [playbackRate, setPlaybackRate] = useState(1);
//     const wrapperRef = createRef(null);
//     const handlePlayPause = () => {
//         const video = videoRef.current;
//         if (isPlaying) {
//             video.pause();
//         } else {
//             video.play();
//             console.log(videoRef);
//         }
//         setIsPlaying(!isPlaying);
//     };

//     const handleStop = () => {
//         const video = videoRef.current;
//         video.pause();
//         video.currentTime = 0;
//         setIsPlaying(false);
//     };

//     const handleAudio = () => {
//         if (volume != 0) {
//             setVolume("0");
//             const video = videoRef.current;
//             video.muted = !muted;
//             setMuted(!muted);
//             console.log(volume);
//         } else {
//             setVolume("1");
//             const video = videoRef.current;
//             video.volume = "1";
//             video.muted = false;
//             setMuted(!muted);
//         }
//     };

//     const handleVolumeChange = (event) => {
//         console.log("event ::: ", event.target.value);
//         setVolume(event.target.value);
//         console.log(typeof volume);
//         const video = videoRef.current;
//         video.volume = event.target.value;
//         if (event.target.value == "0") setMuted(true);
//         else setMuted(false);
//     };

//     const handleSeekMouseDown = (e) => {
//         console.log("seeking ::: ", e);
//         // setPlayer({ ...player, seeking: true });
//     };

//     const handleSeekChange = (e) => {
//         if (videoRef && videoRef.current) {
//             const seekTime = parseFloat(e.target.value);
//             setPlayed(seekTime);
//             videoRef.current.currentTime = seekTime;
//             console.log("out" + e.target.value);
//         }
//     };
//     const handleSeekMouseUp = (e) => {
//         // setPlayer({ ...player, seeking: false });
//         if (videoRef && videoRef.current) {
//             const seekTime = parseFloat(e.target.value);
//             console.log("seek time ::: ", seekTime);
//             // videoRef.current.seekTo(seekTime);
//         }
//         // videoRef.current.seekTo(parseFloat(e.target.value));
//         // console.log("handleSeekMouseUp ::: ", e.target.value);
//     };

//     const handleFullScreenClick = () => {
//         if (!fullScreen) enterFullScreen();
//         else {
//             exitFullScreen();
//         }
//     };
//     const enterFullScreen = () => {
//         const wrapperElement = wrapperRef.current;
//         if (wrapperElement.requestFullscreen) {
//             wrapperElement.requestFullscreen();
//         } else if (wrapperElement.mozRequestFullScreen) {
//             wrapperElement.mozRequestFullScreen();
//         } else if (wrapperElement.webkitRequestFullscreen) {
//             wrapperElement.webkitRequestFullscreen();
//         } else if (wrapperElement.msRequestFullscreen) {
//             wrapperElement.msRequestFullscreen();
//         }
//         setFullScreen(!fullScreen);
//     };
//     const exitFullScreen = () => {
//         if (document.exitFullscreen) {
//             document.exitFullscreen();
//         } else if (document.mozCancelFullScreen) {
//             document.mozCancelFullScreen();
//         } else if (document.webkitExitFullscreen) {
//             document.webkitExitFullscreen();
//         } else if (document.msExitFullscreen) {
//             document.msExitFullscreen();
//         }
//         setFullScreen(!fullScreen);
//     };
//     const handleSpaceBarKeyUp = (event) => {
//         if (event.code === "Space") {
//             event.preventDefault();
//             handlePlayPause();
//         }
//     };
//     const handlePlaybackRateChange = (newRate) => {
//         setPlaybackRate(newRate);
//         videoRef.current.playbackRate = newRate;
//     };
//     useEffect(() => {
//         if (videoRef && videoRef.current) {
//             videoRef.current.addEventListener("loadedmetadata", () => {
//                 setDuration(videoRef.current.duration);
//             });
//         }
//     }, [videoRef]);

//     useEffect(() => {
//         let timeoutId;

//         const handleMouseMove = () => {
//             setShowControls(true);
//             clearTimeout(timeoutId);
//             timeoutId = setTimeout(() => {
//                 setShowControls(false);
//             }, 3000);
//         };

//         document.addEventListener("mousemove", handleMouseMove);

//         return () => {
//             document.removeEventListener("mousemove", handleMouseMove);
//             clearTimeout(timeoutId);
//         };
//     }, []);

//     useEffect(() => {
//         // Attach the event listener when the component mounts
//         document.addEventListener("keydown", handleSpaceBarKeyUp);

//         // Clean up the event listener when the component unmounts
//         return () => {
//             document.removeEventListener("keydown", handleSpaceBarKeyUp);
//         };
//     });
//     useEffect(() => {
//         const video = videoRef.current;
//         const handleLoadedMetadata = () => {
//             setDuration(video.duration);
//         };
//         const handleTimeUpdate = () => {
//             setPlayed(video.currentTime);
//         };
//         video.addEventListener("loadedmetadata", handleLoadedMetadata);
//         video.addEventListener("timeupdate", handleTimeUpdate);
//         return () => {
//             video.removeEventListener("loadedmetadata", handleLoadedMetadata);
//             video.removeEventListener("timeupdate", handleTimeUpdate);
//         };
//     }, []);

//     return (
//         <>
//             <div
//                 className="livePlayerButtonContainer"
//                 ref={wrapperRef}
//                 onKeyDown={handleSpaceBarKeyUp}
//             >
//                 <ReactHlsPlayer
//                     className="video w-full"
//                     src={currUrl}
//                     autoPlay={false}
//                     onMouseMove={() => {
//                         if (!showControls) {
//                             setShowControls(true);
//                         }
//                     }}
//                     onMouseLeave={() => {
//                         setShowControls(false);
//                     }}
//                     controls={false}
//                     playerRef={videoRef}
//                     onClick={handlePlayPause}
//                 // onRef={(ref) => (videoRef.current = ref)}
//                 />

//                 {/* <div className="centreButton"> {isPlaying ? <PlayIcon /> : <PauseIcon />} </div> */}
//                 {showControls && (
//                     <div className="positonBottom">
//                         <div className="controlsContainer visibilityController">
//                             <div className="lengthBarContainer">
//                                 <input
//                                     className="videolengthBar w-full"
//                                     type="range"
//                                     min={0}
//                                     max={duration}
//                                     step="any"
//                                     value={played}
//                                     onMouseDown={handleSeekMouseDown}
//                                     onChange={handleSeekChange}
//                                     onMouseUp={handleSeekMouseUp}
//                                 />
//                             </div>

//                             <div className="buttonsContainer flex items-center gap-24 justify-between">
//                                 <div className="playPauseStopMuteContainer flex items-center gap-2">
//                                     <button onClick={handlePlayPause}>{isPlaying ? <PauseIcon /> : <PlayIcon />}</button>

//                                     <button onClick={handleStop}><SquarePauseIcon w={16} h={16} /></button>

//                                     <button onClick={handleAudio}>{muted ? <SoundMuteIcon w={16} h={16} /> : <SoundIcon w={16} h={16} />}   </button>

//                                     <div style={{ color: "black" }}><span> {formatTime(played)}</span></div>

//                                     <div className="speedControlContainer">
//                                         <select id="speedSelect" value={playbackRate}
//                                             onChange={(e) => handlePlaybackRateChange(parseFloat(e.target.value))}
//                                         >
//                                             <option value={0.5}>Speed 0.5x</option>
//                                             <option value={1}>Speed 1x</option>
//                                             <option value={1.25}>Speed 1.25x</option>
//                                             <option value={1.5}>Speed 1.5x</option>
//                                             <option value={2}>Speed 2x</option>
//                                         </select>
//                                     </div>
//                                 </div>

//                                 <div className="volumeScreenContainer flex items-center gap-4">
//                                     <span className="volIcon" onClick={handleAudio}>
//                                         {muted ? <SoundMuteIcon w={16} h={16} /> : <SoundIcon w={16} h={16} />}
//                                     </span>
//                                     <input
//                                         className="volume videolengthBar"
//                                         type="range"
//                                         min="0"
//                                         max="1"
//                                         step="0.01"
//                                         value={volume}
//                                         onChange={handleVolumeChange}
//                                     />
//                                     {/* <div className="screenSizing">
//                                         <button
//                                             className="fullScreenButton"
//                                             onClick={handleFullScreenClick}
//                                         >
//                                             {" "}
//                                             {fullScreen ? (
//                                                 <BiExitFullscreen className="screenicons" />
//                                             ) : (
//                                                 <BiFullscreen className="screenicons" />
//                                             )}{" "}
//                                         </button>
//                                     </div> */}
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 )}
//             </div>
//         </>
//     );
// };

// export default ReactHLSPlayerCMP;

import React from 'react'

const HLSPlayer = () => {
    return (
        <div>HLSPlayer</div>
    )
}

export default HLSPlayer
