import * as React from 'react';
import TouchItem from './TouchItem';
import TouchLog from './TouchLog';
import './TouchApp.css';

export interface Props {

}

interface State {
	touches: TouchList | null;
	debug: boolean;
}

export default class Touches extends React.Component<Props, State> {
	state: State = {
		touches: null,
		debug: true,
	}

	componentDidMount () {
		window.addEventListener('touchstart', this.updateTargetTouches);
		window.addEventListener('touchmove', this.updateTargetTouches);
		window.addEventListener('touchend', this.updateTargetTouches);
	}

	componentWillUnmount () {
		window.removeEventListener('touchstart', this.updateTargetTouches);
		window.removeEventListener('touchmove', this.updateTargetTouches);
		window.removeEventListener('touchend', this.updateTargetTouches);
	}

	render () {
		const { touches, debug } = this.state;
		if (!touches) {
			return null;
		}
		const children = Array.from(touches).map((touch) => (
			<TouchItem key={touch.identifier} touch={touch} />
		));
		return (
			<div className="TouchApp">
				{debug && <TouchLog touches={touches} />}
				{children}
			</div>
		);
	}

	private updateTargetTouches = (e: TouchEvent) => {
		e.preventDefault();
		this.setState({
			touches: e.targetTouches,
		});
	}
}
