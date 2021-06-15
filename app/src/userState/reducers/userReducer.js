import { 
  LOG_IN_USER,
  LOG_OUT_USER
} from '../actions/userAction';


const initialState = {
  species: "gray whale",
  loading: false,
  error: "",
  isLoggedIn: false
}

// userReducer with all state management functions related to the user
export const userReducer = (state = initialState, action) => {
  console.log("userReducer: ", action);
  switch (action.type) {

        case LOG_IN_USER:
          console.log("log out user fires from reducer");
          return { ...state, isLoggedIn: action.payload }

        case LOG_OUT_USER:
          console.log("log out user fires from reducer");
          return { ...state, isLoggedIn: action.payload }



      // case SELECT_SPECIES:
      //   console.log("select species fires from reducer");
      //     return { ...state, species: action.payload }
      // case FETCH_SPECIES_START:
      //     console.log("fetch species start fires from reducer")
      //     console.log("log payload: ", action.payload)
      //     return { ...state, loading: true, species: action.payload }
      
      // case FETCH_SPECIES_SUCCESS:
      //   console.log("fetch species success fires from the reducer")
      //     return { ...state, loading: false, sightings: action.payload }
      // case FETCH_SPECIES_FAILURE:
      //   console.log("fetch species failure fires from reducer")
      //     return { ...state, loading: false, error: action.payload }
      
      default:
          console.log("Error: unknown action type in User Reducer", action.type);
          return state;  
  }
};



