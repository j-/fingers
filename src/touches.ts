import { merge, fromEvent } from 'rxjs';
import { tap, map } from 'rxjs/operators';

const touchstart$ = fromEvent<TouchEvent>(window, 'touchstart');
const touchend$ = fromEvent<TouchEvent>(window, 'touchend');
const touchmove$ = fromEvent<TouchEvent>(window, 'touchmove');
const touchcancel$ = fromEvent<TouchEvent>(window, 'touchcancel');

export const touches$ = merge(touchstart$, touchend$, touchmove$, touchcancel$).pipe(
	tap((event) => event.preventDefault()),
	map((event) => event.touches),
);
