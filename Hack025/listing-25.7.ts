const showCount = signal(false);
const count = signal(0);
const conditionalCount = computed(() => {
if (showCount()) {
 return Der Zählerstand ist ${count()}.;
} else {
 return 'Nichts zu sehen hier!';
}
});
