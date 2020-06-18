import React from 'react';

export const Talent = props => {
    let talent = props.talentData;
    const toggleTalent = props.toggleTalent;
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
}