export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  //token:
  //'BQDDm7QhcqBT3QXdklefHKmGROaBjjN6s4WKPmOHw4JiiE9ZN8mpY4KM20SdcnhtJqdwsHuHbzlTay7CE7K3Xe_Erd6ZkQjHBJ_edFwXw3dQFXtdmSA5YITtsK89JGAmwgnY1f2OLBhTjo79T3UAKBTGkKkmD9Ge',
  //Set token initial value to user token for debugging
  //! Remove after Developing is finished
};

const reducer = (state, action) => {
  //console.log(action);

  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.user,
      };

    case 'SET_PLAYING':
      return {
        ...state,
        playing: action.playing,
      };

    case 'SET_ITEM':
      return {
        ...state,
        item: action.item,
      };

    case 'SET_SPOTIFY':
      return {
        ...state,
        spotify: action.spotify,
      };

    case 'SET_TOKEN':
      return {
        ...state,
        token: action.token,
      };

    case 'SET_PLAYLISTS':
      return {
        ...state,
        playlists: action.playlists,
      };

    case 'SET_DISCOVER_WEEKLY':
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    case 'SET_TOP_ARTISTS':
      return {
        ...state,
        top_artists: action.top_artists,
      };

    default:
      return state;
  }
};

export default reducer;
