import React, { Component } from 'react';

import { Talent } from './Talent';

export class TalentBranch extends Component {
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
    
                return (
                    <div key={index} className={classes}>
                        <Talent talentData={talent} toggleTalent={this.updateTalent}/>
                    </div>
                );
            });
    
            return (
                <div className="tt__branch">
                    <div className="tt__leaf tt__leaf--hide-path">
                        <label className="tt__text tt__text--small tt__text--left-align">{branchData.id}</label>
                    </div>
                    {branchContents}
                </div>
            );
        } else {
            return <h1>There was an error loading Talent Tree Branches</h1>;
        }
    }
}

export class TalentTree extends Component {
    updateTree = () => {
        this.props.updateTalentTree(this.props.talentTree);
    }

    canToggleTalent = talent => {
        return talent.assigned || (talent.cost <= this.props.talentTree.points);
    }
 
    toggleTalent = talent => {
        if (this.canToggleTalent(talent)) {
            this.props.talentTree.points += talent.assigned ? talent.cost : -talent.cost;
            talent.assigned = !talent.assigned;
            this.updateTree();
        }
    }

    render() {
        const { branches, points, pointsMax } = this.props.talentTree;

        const talentBranches = branches.map((branch, index) => {
            return <TalentBranch key={index} branchData={branch} toggleTalent={this.toggleTalent}/>
        });

        return (
            <div className="talent-tree">
                <h1 className="tt__heading">TitanStar Legends - Talent Display</h1>
                <div className="tt__row">
                    <div className="tt__col tt__col--quad-size tt__col--stretch">
                        {talentBranches}
                    </div>
                    <div className="tt__col">
                        <div className="tt__point-container">
                            <label className="tt__text">{points} / {pointsMax}</label>
                            <label className="tt__text tt__text--theme-color">Points Spent</label>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}