import React from 'react';

import './talent.scss';

/**
 * The Talent component, responsible for rendering a clickable/right-clickable icon with a border.
 * Established as a "global component" as its likely you might reuse this on something like a 'Character Details' page when displaying acquired talents.
 * @param {Object} props The properties that will be used in the component
 * @returns {JSX} The rendered component
 */
export const Talent = props => {
    const toggleTalent = props.toggleTalent;
    let talent = props.talentData;
    let buttonClasses = "tt-talent__button tt-talent__button--" + talent.icon;
    let wrapperClasses = "tt-talent";

    if (talent.assigned)
        wrapperClasses += " tt-talent--active";

    const contextMenu = (event) => {
        event.preventDefault();
        toggleTalent(props.talentData, false);
    }

    return (
        <div className={wrapperClasses}>
            <button className={buttonClasses} onClick={() => {toggleTalent(props.talentData, true);}} onContextMenu={contextMenu}/>
        </div>
    );
};