import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { TalentTree } from './components/talent-tree/TalentTree';
import { fetchTalentTree, updateTalentTree } from './talentActions';

/**
 * Talent Tree Page
 * @returns {JSX} The entire talent tree page
 */
const TalentTreePage = ({ dispatch, talentTree, loading, errors }) => {
    const isInitialized = talentTree && talentTree.branches && talentTree.branches.length > 0;

    // On Page/Component load:
    useEffect(() => {
        document.title = "TS:Legends - Talent Tree";
        dispatch(fetchTalentTree());
    }, [dispatch]); // ditch redundant updates if dispatch is the same

    /**
     * Dispatch an action to update the state with the new talent tree.
     * @private
     * @param {Object} talentTree The talent tree in full
     * @returns {undefined}
     */
    const updateTree = (talentTree) => {
        dispatch(updateTalentTree({...talentTree}));
    };

    /**
     * Renders the talent tree, or an error/loading message.
     * @private
     * @returns {undefined}
     */
    const renderTree = () => {
        if (loading) 
            return <h2>Loading talent tree...</h2>
        if (errors)
            return <h2>Unable to display talent tree.</h2>
        if (isInitialized) {
            return <TalentTree talentTree={talentTree} updateTalentTree={updateTree}/>;
        }

        return <h2 style={{color:'white'}}>Unable to display talent tree.</h2>
    }

    return (
        <section>
            {renderTree()}
        </section>
    );
};

/**
 * Parsing data from state into properties for the page would be done
 * This is very useful for multiple components/pages that rely on the same state, but use the data in different ways
 * @public
 * @param {*} state 
 */
const mapStateToProps = state => {
    // state.[name specified for reducer in combineReducer].[prop name]
    return {
        loading: state.talents.loading,
        talentTree: state.talents.talentTree,
        errors: state.talents.errors,
    };
}

export default connect(mapStateToProps)(TalentTreePage);