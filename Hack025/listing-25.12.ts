import _ from 'lodash';

const data = signal(['test'], {equal: _.isEqual});

// Obwohl es sich um eine andere Array-Instanz handelt, wird die Funktion zur tiefen Gleichheit
// die Werte als gleich betrachten, und das Signal löst keine Updates aus.
data.set(['test']);
