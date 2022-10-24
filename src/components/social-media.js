import '../css/social-media.css'
function SocialMediaComponent() {

    return (
        <div id="social-media-container">
            <div id="icon-container">
                <div className="logo">
                    <img src={process.env.PUBLIC_URL + '/images/SocialMediaImages/CSUF_Titans_Logo.svg-300x300.png'}
                   alt="" />
                </div>
                <div id="social-images">
                    <a href="https://www.facebook.com/TitanRover/">
                        <img src={process.env.PUBLIC_URL + '/images/SocialMediaImages/FacebookLogo.png'}
                        className="images"alt="" />
                    </a>
                    <a href="https://www.instagram.com/titanrover/?hl=en">
                        <img src={process.env.PUBLIC_URL + '/images/SocialMediaImages/InstagramLogo.png'}
                            className="images"alt="" />
                    </a>
                    <a href="https://twitter.com/titan_rover?lang=en">
                        <img src={process.env.PUBLIC_URL + '/images/SocialMediaImages/TwitterLogo.png'}
                            className="images"alt="" />
                    </a>
                    <a href="https://www.linkedin.com/company/titan-rover">
                        <img src={process.env.PUBLIC_URL + '/images/SocialMediaImages/LinkedinLogo.png'}
                            className="images"alt="" />
                    </a>
                    <a href="https://www.youtube.com/channel/UCEAnREP_8HXmqSLfOMv6Lww?view_as=subscriber">
                        <img src={process.env.PUBLIC_URL + '/images/SocialMediaImages/YoutubeLogo.png'}
                            className="images"alt="" />
                    </a>
                </div>
            </div>
            
        </div>

    )
}

export default SocialMediaComponent;