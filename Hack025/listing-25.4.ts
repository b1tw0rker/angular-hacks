const todos = signal([{title: 'Lerne Signals', done: false}]);

todos.mutate(value => {
// Ändert das erste TODO im Array zu 'done: true' ohne es zu ersetzen.
value[0].done = true;
});
