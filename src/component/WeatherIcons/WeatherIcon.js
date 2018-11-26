import React from 'react';

const weahterIcons = (props) => (
    <img src={`/icons/${props.icons}.svg`} alt={props.icons} width="120px" />
);

export default weahterIcons;