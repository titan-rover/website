import '../css/social-media.css'
function SocialMediaComponent() {

    return (
        <div id="icon-container">
            <div className="logo">
                <img src={process.env.PUBLIC_URL + '/images/CSUF_Titans_Logo.svg-300x300.png'}
               alt="" />
            </div>
            <div>
                <a href="https://www.facebook.com/TitanRover/">
                    <img src={process.env.PUBLIC_URL + '/images/FacebookLogo.png'}
                    className="images"alt="" />
                </a>
                <a href="https://www.instagram.com/titanrover/?hl=en">
                    <img src={process.env.PUBLIC_URL + '/images/InstagramLogo.png'}
                        className="images"alt="" />
                </a>
                <a href="https://twitter.com/titan_rover?lang=en">
                    <img src={process.env.PUBLIC_URL + '/images/TwitterLogo.png'}
                        className="images"alt="" />
                </a>
                <a href="https://www.linkedin.com/company/titan-rover">
                    <img src={process.env.PUBLIC_URL + '/images/LinkedinLogo.png'}
                        className="images"alt="" />
                </a>
                <a href="https://www.youtube.com/channel/UCEAnREP_8HXmqSLfOMv6Lww?view_as=subscriber">
                    <img src={process.env.PUBLIC_URL + '/images/YoutubeLogo.png'}
                        className="images"alt="" />
                </a>
            </div>
        </div>

    )
}

export default SocialMediaComponent;