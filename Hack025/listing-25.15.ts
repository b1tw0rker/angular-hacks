effect(() => {
 const user = currentUser();
 untracked(() => {
 // Wenn der loggingService Signals liest, werden sie nicht als
 // Abhängigkeiten dieses Effekts gezählt.
 this.loggingService.log(User set to ${user});
 });
});
    