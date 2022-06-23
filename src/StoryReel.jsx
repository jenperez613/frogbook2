import React from 'react'
import './StoryReel.css'
import Story from "./Story";


const StoryReel = () => {
        return (
            <div className="storyReel">
                <Story
                    image="https://www.dropbox.com/s/tmhv9rc40c44iix/ray-hennessy-HU-CVU67TzY-unsplash.jpg?raw=1"
                    profileSrc="https://www.dropbox.com/s/hl5fgdzsppuzfu3/jack-hamilton-EP_OHkgn1JI-unsplash.jpg?raw=1"
                    title="Jack Hamilton"
                />
                <Story
                    image="https://www.dropbox.com/s/zb436zg5fry8ir4/pic1.jpeg?raw=1"
                    profileSrc="https://www.dropbox.com/s/9iij7vrefjyd89r/adam-currie-8T7oWwnru18-unsplash.jpg?raw=1"
                    title="Bob Kensington"
                />
                <Story
                    image="https://www.dropbox.com/s/srnadqrx74xqw90/pic2.jpeg?raw=1"
                    profileSrc="https://www.dropbox.com/s/bbx2p012our2p2e/timothy-dykes-Z66JM_4wleU-unsplash.jpg?raw=1"
                    title="Lady Greenish"
                />
                <Story
                    image="https://www.dropbox.com/s/6rvuperzyy8l2yo/stephen-cook-TzoCtgxCaYs-unsplash.jpg?raw=1"
                    profileSrc="https://www.dropbox.com/s/w99a95bd4ngce2p/wallace-heng-njsOI5hXeRQ-unsplash.jpg?raw=1"
                    title="Rojelio"
                />
                <Story
                    image="https://www.dropbox.com/s/cqtjfvdcawxcdr5/david-clode-Qrsq1NKP5IQ-unsplash.jpg?raw=1"
                    profileSrc="https://www.dropbox.com/s/grook4djk5e83il/frogs.webp?raw=1"
                    title="Freja Perez"
                />

            </div>
        );
    }


 export default StoryReel
