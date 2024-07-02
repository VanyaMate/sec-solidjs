import { createSignal, onCleanup } from 'solid-js';
import { Store } from '@vanyamate/sec';


export const useStore = function <T> (store: Store<T>) {
    const [ state, setState ] = createSignal(store.get());
    const unsubscribe         = store.subscribe(() => setState(() => store.get()));
    onCleanup(unsubscribe);
    return state;
};