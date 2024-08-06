import { useEffect, useState } from 'react';
import { store } from './store';

export const useRender = () => {
	const [render, setRender] = useState(false);

	useEffect(() => {
		const unsubscribe = store.subscribe(() => setRender(!render));
		return () => unsubscribe;
	}, [render]);
};
