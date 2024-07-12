import React from 'react'
import "./video.css"
import Playvideo from '../../../components/Playvideo/Playvideo'
import Recommended from '../../../components/Recomended/Recommended'
import { useParams } from 'react-router-dom'

const Video = () => {

  const {videoId, categoryId} = useParams();
  return (
    <div className='play-container'>
      <Playvideo videoId={videoId} />
      <Recommended categoryId={categoryId}/>
    </div>
  )
}

export default Video
