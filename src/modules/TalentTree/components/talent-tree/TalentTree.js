import React, { Component } from 'react';
import _ from 'lodash';

import { Talent } from '../../../../global-components/talent/Talent';

import './talent-tree.scss';

/**
 * TalentTree component
 * Responsible for rendering the entirety of the tree at the top level.
 * Renders TalentBranch components and point display.
 */
export class TalentTree extends Component {
    constructor(props) {
        super(props);
        this.talentTree = _.cloneDeep(props.talentTree);
    }

    /**
     * Passes up the change to the talent tree to the parent component through a provided function property.
     * @public
     * @returns {undefined}
     */
    updateTree = () => {
        this.props.updateTalentTree(this.talentTree);
    }

    /**
     * Determines whether or not we can toggle this talent based on available points on the tree.
     * @public
     * @param {Object} talent The talent we are attempting to toggle
     * @returns {boolean} True if the talent can be toggled, otherwise false.
     */
    canToggleTalent = talent => {
        return talent.assigned || (talent.cost <= this.talentTree.points);
    }
 
    /**
     * Assignes or unassigns this talent using the talent tree points, if able.
     * Calls 'updateTree()' afterward.
     * @param {Object} talent The talent to toggle
     * @returns {undefined}
     */
    toggleTalent = talent => {
        let matchingTalent = this.getTalent(talent.id);
        if (!this.canToggleTalent(talent) || !matchingTalent) {
            return;
        }

        this.talentTree.points += talent.assigned ? talent.cost : -talent.cost;
        matchingTalent.assigned = !matchingTalent.assigned;
        
        this.updateTree();
    }

    /**
     * Grab find a talent in the talent tree
     * @param {Number} id The id of the talent to find
     * @returns {Object} the 'real' talent object
     */
    getTalent = talentId => {
        let branches = this.talentTree.branches;

        // For instead of forEach so we can exit early
        for (let i = 0; i < branches.length; i++) {
            let branch = branches[i];
            let matchingTalent = branch.talents.find(tal => { return talentId === tal.id });

            if (matchingTalent) {
                return matchingTalent;
            }
        }
    }

    render() {
        const { branches, points, pointsMax } = this.talentTree;

        const talentBranches = branches.map((branch, index) => {
            return <TalentBranch key={index} branchData={branch} toggleTalent={this.toggleTalent}/>
        });

        return (
            <div className="talent-tree">
                <h1 className="tt__heading">TitanStar Legends - Rune Mastery Loadout Talent Calculator 9000</h1>
                <div className="tt__row">
                    <div className="tt__col tt__branch-container">
                        {talentBranches}
                    </div>
                    <div className="tt__col">
                        <div className="tt__point-container">
                            <label className="tt__text tt__text">{points} / {pointsMax}</label>
                            <label className="tt__text tt__text--theme-color">Points Left</label>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

/**
 * TalentBranch Component
 * Renders Talent components and branch name.
 */
export class TalentBranch extends Component {

    /**
     * Checks to see if the talent can be toggled based on position on the branch.
     * Effectively asserts whether or not the proposed state of the branch would be valid.
     * @param {Object} talent Talent to check
     * @param {boolean} value How we are attempting to toggle said talent.
     * @returns {boolean} Whether or not the talent can be toggled.
     */
    canToggleTalent = (talent, value) => {
        if (talent.assigned === value)
            return false;

        let priorTalent = this.props.branchData.talents.find(preTal => preTal.id === talent.id - 1);
        let nextTalent = this.props.branchData.talents.find(preTal => preTal.id === talent.id + 1);

        if (!talent.assigned) {
            // First talent is always able to be toggled on
            return (!priorTalent || priorTalent.assigned);
        } else {
            // Can't break the talent tree chain!
            return (!nextTalent || !nextTalent.assigned);
        }
    }

    /**
     * Updates the value for the talent by passing it up the chain to the parent component.
     * @param {Object} talent The talent to toggle
     * @param {Object} value The new value for the talent
     * @returns {undefined}
     */
    updateTalent = (talent, value) => {
        if (this.canToggleTalent(talent, value))
            this.props.toggleTalent(talent);
    }

    render() {
        const branchData = this.props.branchData;
    
        if (branchData && branchData.talents && branchData.talents.length > 0) {
            let branchContents = branchData.talents.map((talent, index) => {
                let classes = "tt__leaf";
                if (index === branchData.talents.length - 1)
                    classes += " tt__leaf--hide-path";
                if (talent.assigned)
                    classes += " tt__leaf--active";

    
                return (
                    <div key={index} className={classes}>
                        <Talent talentData={talent} toggleTalent={this.updateTalent}/>
                    </div>
                );
            });
    
            return (
                <div className="tt__branch">
                    <div className="tt__leaf tt__branch-name">
                        <label className="tt__text">{branchData.id}</label>
                    </div>
                    {branchContents}
                </div>
            );
        } else {
            return <h1>There was an error loading Talent Tree Branches</h1>;
        }
    }
};