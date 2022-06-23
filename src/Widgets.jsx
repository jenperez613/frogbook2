import React from 'react';
import './Widgets.css'

const Widgets = () => {

        return (
            <div className="widgets">
                <iframe
                    title="Barred Owl Productions"
                    src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fbarredowlproductions&tabs=timeline&width=340&height=1500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                    width="340" height="1500" style={{border: "none", overflow: "hidden"}} scrolling="no" frameBorder="0"
                    allowFullScreen={true}
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">

                </iframe>
            </div>
        );
}

export default Widgets;