import React, { useEffect } from 'react';
import './Footer.css';

import { Grid, Slider } from '@material-ui/core';

import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import { useDataLayerValue } from './DataLayer';

function Footer({ spotify }) {
  const [{ item, playing }, dispatch] = useDataLayerValue();

  useEffect(() => {
    spotify.getMyCurrentPlaybackState().then((song) => {
      console.log(song);

      dispatch({
        type: 'SET_PLAYING',
        playing: song.is_playing,
      });

      dispatch({
        type: 'SET_ITEM',
        item: song.item,
      });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [spotify]);

  const handlePlayPause = () => {
    if (playing) {
      spotify.pause();
      dispatch({
        type: 'SET_PLAYING',
        playing: false,
      });
    } else {
      spotify.play();
      dispatch({
        type: 'SET_PLAYING',
        playing: true,
      });
    }
  };

  const skipNext = () => {
    spotify.skipToNext();
    spotify.getMyCurrentPlayingTrack().then((song) => {
      dispatch({
        type: 'SET_ITEM',
        item: song.item,
      });
      dispatch({
        type: 'SET_PLAYING',
        playing: true,
      });
    });
  };

  const skipPrevious = () => {
    spotify.skipToPrevious();
    spotify.getMyCurrentPlayingTrack().then((song) => {
      dispatch({
        type: 'SET_ITEM',
        item: song.item,
      });
      dispatch({
        type: 'SET_PLAYING',
        playing: true,
      });
    });
  };

  return (
    <div className='footer'>
      <div className='footer__left'>
        <img
          className='footer__albumLogo'
          src={item?.album.images[0].url}
          alt={item?.name}
        />
      </div>

      {item ? (
        <div className='footer__songInfo'>
          <h4>{item.name}</h4>
          <p>{item.artists.map((artist) => artist.name).join(', ')}</p>
        </div>
      ) : (
        <div className='footer__songInfo'>
          <h4>No song is playing</h4>
          <p>...</p>
        </div>
      )}

      <div className='footer__center'>
        <ShuffleIcon className=' footer__green' />
        <SkipPreviousIcon onClick={skipPrevious} className=' footer__icon' />

        {playing ? (
          <PauseCircleOutlineIcon
            onClick={handlePlayPause}
            fontSize='large'
            className='footer__icon'
          />
        ) : (
          <PlayCircleOutlineIcon
            onClick={handlePlayPause}
            fontSize='large'
            className='footer__icon'
          />
        )}
        <SkipNextIcon onClick={skipNext} className=' footer__icon' />
        <RepeatIcon className=' footer__green' />
      </div>

      <div className='footer__right'>
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider aria-labelledby='continuous-slider' />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Footer;
