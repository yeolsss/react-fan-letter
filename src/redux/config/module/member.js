import { getMembers } from '../../../common/util';

export const SetCurrentMember = 'member/SetCurrentMember';

export const setCurrentMember = (payload) => ({
  type: SetCurrentMember,
  payload,
});

const initialState = {
  getMembers,
  currentMember: getMembers[0].id,
};

const member = (state = initialState, action) => {
  switch (action.type) {
    case SetCurrentMember:
      return { ...state, currentMember: action.payload };
    default:
      return state;
  }
};

export default member;
