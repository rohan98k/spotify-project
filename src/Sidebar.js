import React from 'react';
import './Sidebar.css';
import SidebarOptions from './SidebarOptions';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import { useDataLayerValue } from './DataLayer';

function Sidebar() {
  const [{ playlists }] = useDataLayerValue();
  return (
    <div className='sidebar'>
      <img
        className='sidebar__logo'
        src='https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Green.png'
        alt='spotifylogo'
      />
      <SidebarOptions Icon={HomeIcon} title='Home' />
      <SidebarOptions Icon={SearchIcon} title='Search' />
      <SidebarOptions Icon={LibraryMusicIcon} title='Your Library' />

      <br />
      <strong className='sidebar__title'>Playlists</strong>
      <hr />
      {playlists?.items?.map((playlist) => (
        <SidebarOptions title={playlist.name} />
      ))}
    </div>
  );
}

export default Sidebar;
