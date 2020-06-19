export const GET_TALENT_TREE = 'GET_TALENT_TREE';
export const GET_TALENT_TREE_SUCCESS = 'GET_TALENT_TREE_SUCCESS';
export const GET_TALENT_TREE_FAILURE = 'GET_TALENT_TREE_FAILURE';
export const UPDATE_TALENT_TREE = 'UPDATE_TALENT_TREE';

// Establishing the data here, as usually this would be where we reach out to another service, or API directly for data.
const BaseTalentTree = {
    branches: [
        {
            id: "Talent Path 1",
            talents: [
                { id:1, name: "Stacker", icon:"stack", branch:"Blue Magic", description: "All bonuses of the same type now stack (Without this skill, same-typed bonuses do not stack).", cost: 1, assigned: false },
                { id:2, name: "Snacker", icon:"snack", branch:"Blue Magic", description: "Get a bonus to each stat equal to the number of different type of bonus you have applied. (This does include this bonus)", cost: 1, assigned: false },
                { id:3, name: "Gourmand", icon:"cake", branch:"Blue Magic", description: "All other bonuses double in value.", cost: 1, assigned: false },
                { id:4, name: "Gluttony King", icon:"crown", branch:"Blue Magic", description: "All other bonuses quadruple in value.  This overrides Gourmand.", cost: 1, assigned: false },
            ]
        },
        {
            id: "Talent Path 2",
            talents: [
                { id:5, name: "Ship-Shape", icon:"boat", branch:"Ocean Magic", description: "Once per day, you can (as a free action) make yourself immune to sea sickness until your next short or long rest.", cost: 1, assigned: false },
                { id:6, name: "Diver", icon:"diver", branch:"Ocean Magic", description: "You can hold your breath twice as long.", cost: 1, assigned: false },
                { id:7, name: "Soul of the Eel", icon:"lightning", branch:"Ocean Magic", description: "Once per day you can activate this ability. Doing so will coat you in an electric aura, dealing 1d4 damage to any melee attackers that hit you for the next 1d8 turns.", cost: 1, assigned: false },
                { id:8, name: "Shipwreck", icon:"skull", branch:"Ocean Magic", description: "Summon a ghost of a dead sailor to fight for you.", cost: 1, assigned: false },
            ]
        }
    ],
    points: 6,
    pointsMax: 6
};

export const getTalentTree = () => ({
    type: GET_TALENT_TREE,
});

export const getTalentTreeSuccess = talentTree => ({
    type: GET_TALENT_TREE_SUCCESS,
    payload: talentTree,
});

// more of a placeholder, but this would be used if getting data from an API
export const getTalentTreeFailure = () => ({
    type: GET_TALENT_TREE_FAILURE
});

export const updateTalentTree = talentTree => {
    return {
        type: UPDATE_TALENT_TREE,
        payload: talentTree,
    }
};

export function fetchTalentTree() {
    // Not Async but would be in a real scenario
    return dispatch => {
        dispatch(getTalentTree());

        try {
            const data = BaseTalentTree; // this would be where we usually call a service or API for data
            // if not in a seperate service, do data mutation/parsing here before returning.

            dispatch(getTalentTreeSuccess(data));
        } catch (error) {
            dispatch(getTalentTreeFailure());
        }
    };
}