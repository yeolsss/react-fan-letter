import dumyData from '../../../common/fakeData.json';

const LETTER_LOCAL_STORAGE_KEY = 'fan_letter';

export const ADD_LETTER = 'letter/ADD_LETTER';
export const DELETE_LETTER = 'letter/DELETE_LETTER';
export const UPDATE_LETTER = 'letter/UPDATE_LETTER';

export const addLetter = (payload) => ({ type: ADD_LETTER, payload });
export const deleteLetter = (payload) => ({ type: DELETE_LETTER, payload });
export const updateLetter = (payload) => ({ type: UPDATE_LETTER, payload });

// ! localStorage get data
// ! 빈 값일 경우 dumyData로 초기화
const initialState =
  JSON.parse(localStorage.getItem(LETTER_LOCAL_STORAGE_KEY)) || dumyData;

const letter = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LETTER:
      return (state = [...state, action.payload]);
    case DELETE_LETTER:
      return (state = state.filter((letter) => letter.id !== action.payload));
    case UPDATE_LETTER:
      state = state.map((letter) => {
        if (letter.id === action.payload.id) {
          letter.content = action.payload.content;
        }
        return letter;
      });
      localStorage.setItem(LETTER_LOCAL_STORAGE_KEY, JSON.stringify(state));
      return state;
    default:
      return state;
  }
};

export default letter;
