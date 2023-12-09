import React from 'react'
import './MainPage.scss'
import thumbnail from '../../images/thumbnail/thumbnail.jpg'
import { PiFilmReel } from 'react-icons/pi'

const MainPage = () => {
  return (
    <div className="main-page">
        <div className='videos-container'>
            <div className='video-container'>
                <img src={thumbnail} alt="thumbnail"/>
                <div className='video-credentails'>
                    <div className='channel-icon'></div>
                    <div className="credentails">
                        <h3>Title</h3>
                        <p>Channel Name</p>
                        <p>50K views : 1 day</p>
                    </div>
                </div>
            </div>

            <div className='video-container'>
                <img src={thumbnail} alt="thumbnail"/>
                <div className='video-credentails'>
                    <div className='channel-icon'></div>
                    <div className="credentails">
                        <h3>Title</h3>
                        <p>Channel Name</p>
                        <p>50K views : 1 day</p>
                    </div>
                </div>
            </div>

            <div className='video-container'>
                <img src={thumbnail} alt="thumbnail"/>
                <div className='video-credentails'>
                    <div className='channel-icon'></div>
                    <div className="credentails">
                        <h3>Title</h3>
                        <p>Channel Name</p>
                        <p>50K views : 1 day</p>
                    </div>
                </div>
            </div>

            <div className='video-container'>
                <img src={thumbnail} alt="thumbnail"/>
                <div className='video-credentails'>
                    <div className='channel-icon'></div>
                    <div className="credentails">
                        <h3>Title</h3>
                        <p>Channel Name</p>
                        <p>50K views : 1 day</p>
                    </div>
                </div>
            </div>
            
            <div className='video-container'>
                <img src={thumbnail} alt="thumbnail"/>
                <div className='video-credentails'>
                    <div className='channel-icon'></div>
                    <div className="credentails">
                        <h3>Title</h3>
                        <p>Channel Name</p>
                        <p>50K views : 1 day</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='main-header'>
            <PiFilmReel size={30} color="red"/><h2>Shorts</h2>
        </div>
    </div>
  )
}

export default MainPage