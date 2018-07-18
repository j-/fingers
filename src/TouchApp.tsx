import * as React from 'react';
import { Subscription } from 'rxjs';
import { touches$ } from './touches';
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
	private touches$: Subscription;

	state: State = {
		touches: null,
		debug: true,
	}

	componentDidMount () {
		this.touches$ = touches$.subscribe((touches) => (
			this.setState({
				touches,
			})
		));
	}

	componentWillUnmount () {
		this.touches$.unsubscribe();
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
}
