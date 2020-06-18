import * as actions from './talentActions';

export const initialState = {
    talentTree: {},
    loading: false,
    errors: false
}

export default function talentTreeReducer(state = initialState, action) {
    switch (action.type) {
        case actions.GET_TALENT_TREE:
            return { ...state, loading: true };
        case actions.GET_TALENT_TREE_SUCCESS:
            return { talentTree: action.payload, loading: false, errors: false };
        case actions.GET_TALENT_TREE_FAILURE:
            return { ...state, loading: false, errors: true };
        case actions.UPDATE_TALENT_TREE:
            console.log(state);
            console.log(action.payload);
            return { ...state, talentTree:action.payload };
        default:
            return state;
    }
}