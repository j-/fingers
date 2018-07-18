import * as React from 'react';

const toString = (touch: Touch) => (
	JSON.stringify({
		clientX: touch.clientX,
		clientY: touch.clientY,
		identifier: touch.identifier,
		pageX: touch.pageX,
		pageY: touch.pageY,
		screenX: touch.screenX,
		screenY: touch.screenY,
	}, null, 2)
);

const TouchLog: React.StatelessComponent<{ touches: TouchList }> = ({ touches }) => (
	<pre className="Log">
		{Array.from(touches).map((touch) => (
			<div key={touch.identifier}>
				{toString(touch)}
			</div>
		))}
	</pre>
);

export default TouchLog;
