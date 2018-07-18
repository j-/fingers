import * as React from 'react';
import './TouchItem.css';

export interface Props {
	touch: Touch,
}

const TouchItem: React.StatelessComponent<Props> = ({ touch }) => (
	<div
		className="TouchItem"
		style={{
			left: touch.clientX,
			top: touch.clientY,
		}}
	/>
);

export default TouchItem;
