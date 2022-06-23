import React, {useState} from 'react'
import './MessageSender.css'
import {Avatar} from "@mui/material";
import VideocamIcon from '@mui/icons-material/Videocam';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import {useStateValue} from "./StateProvider";
import db from './firebase'
import firebase from 'firebase/compat/app'



const MessageSender = () => {
    const [{user}, dispatch] = useStateValue()
    const [input, setInput] =useState('')
    const [imageURL, setImageURL] = useState('')

    const handleSubmit = e => {
        e.preventDefault();

     db.collection('posts').add({
         message: input,
         timestamp: firebase.firestore.FieldValue.serverTimestamp(),
         profilePic: user.photoURL,
         username: user.displayName,
         image: imageURL
     })

        setInput("")
        setImageURL("")
    }

    return (
        <div className="messageSender">
            <div className="messageSender__top">
                <Avatar src={user.photoURL}/>
                <form>
                    <input
                        value={input} onChange={(e) => setInput(e.target.value)}
                        className="messageSender__input" placeholder={`What's on your mind, ${user.displayName}?`}/>
                    <input
                        value={imageURL} onChange={(e) => setImageURL(e.target.value)}
                        placeholder="image URL (Optional)"/>
                        <button onClick={handleSubmit} type="submit">Hidden submit</button>
                </form>
            </div>

            <div className="messageSender__bottom">
                <div className="messageSender__option">
                    <VideocamIcon style={{color: 'red'}}/>
                    <h3>Live Video</h3>
                </div>

                <div className="messageSender__option">
                    <PhotoLibraryIcon style={{color: 'green'}}/>
                    <h3>Photo/Video</h3>
                </div>

                <div className="messageSender__option">
                    <SentimentVerySatisfiedIcon style={{color: 'orange'}} />
                    <h3>Feeling/Activity</h3>
                </div>

                </div>
            </div>
    )
}
export default MessageSender