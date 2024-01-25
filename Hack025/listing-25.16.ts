effect((onCleanup) => {
const user = currentUser();

const timer = setTimeout(() =>
 console.log(`Vor 1 Sekunde wurde der Benutzer ${user}`);
}, 1000);

onCleanup(() => {
   clearTimeout(timer);
});
});
    