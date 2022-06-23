import React from 'react'
import './Sidebar.css'
import SidebarRow from "./SidebarRow";
import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags'
import PeopleIcon from '@mui/icons-material/People'
import BookmarkIcon from '@mui/icons-material/Bookmark';
import StorefrontIcon from '@mui/icons-material/Storefront'
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary'
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';

import GroupsIcon from '@mui/icons-material/Groups';
import CoronavirusIcon from '@mui/icons-material/Coronavirus';
import {useStateValue} from "./StateProvider";


const Sidebar = ()=> {
    const [{user}, dispatch] = useStateValue()

        return (
            <div className="sidebar">
                <SidebarRow src={user.photoURL} title={user.displayName} />
                <SidebarRow Icon={CoronavirusIcon} title="COVID-19 Information Center" />
                    <SidebarRow Icon={PeopleIcon} title="Find friends" />
                    <SidebarRow Icon={GroupsIcon} title="Groups"/>
                <SidebarRow Icon={StorefrontIcon} title="Shop" />
                <SidebarRow Icon={VideoLibraryIcon} title="Watch" />
                <SidebarRow Icon={BookmarkIcon} title="Saved" />
                <SidebarRow Icon={EmojiFlagsIcon} title="Pages" />



                <SidebarRow Icon={ ExpandMoreOutlinedIcon} title="See more" />

            </div>
        );

}

export default Sidebar
