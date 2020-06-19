import React, { useEffect, Component } from 'react';
import { connect } from 'react-redux';

import { TalentTree } from './TalentTree';
import { fetchTalentTree, updateTalentTree } from './talentActions';

import './talent-tree.scss';

const TalentTreePage = ({ dispatch, talentTree, loading, errors }) => {
    const isInitialized = talentTree && talentTree.branches && talentTree.branches.length > 0;

    // On Page/Component load:
    useEffect(() => {
        document.title = "TS:Legends - Talent Tree";
        dispatch(fetchTalentTree());
    }, [dispatch]); // ditch redundant updates if dispatch is the same

    const updateTree = (talentTree) => {
        //updateTalentTree(talentTree);
        dispatch(updateTalentTree({...talentTree}));
    };

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

// Parsing data from state into properties for the page would be done
// This is very useful for multiple components/pages that rely on the same state
const mapStateToProps = state => {
    // state.[name specified for reducer in combineReducer].propname
    return {
        loading: state.talents.loading,
        talentTree: state.talents.talentTree,
        errors: state.talents.errors,
    };
}

export default connect(mapStateToProps)(TalentTreePage);