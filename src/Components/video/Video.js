import React, { useEffect, useRef } from 'react'
import Footer from '../footerleft/FooterLeft'
import FooterRight from '../footerRight/FooterRight'
import './Video.css'

export default function Video(props) {
	const { url, channel, description, song, likes, shares, messages } = props
	const videoRef = useRef(null)

	const onVideoPress = () => {
        if (videoRef.current.paused) {
		videoRef.current.play()
	} else {
		videoRef.current.pause()
	}
		// write toggle logic here
	}

	return (
		<div className="video">
			<video
                autoPlay={true}
				className="player"
				onClick={onVideoPress}
				isMuted={false}
                volume={1.0}
				ref={videoRef}
				loop
				src={url}
			></video>
			<div className="bottom-controls">
				<Footer channel={channel} description={description} song={song} />
				<FooterRight likes={likes} shares={shares} messages={messages} />
			</div>
		</div>
	)
}
