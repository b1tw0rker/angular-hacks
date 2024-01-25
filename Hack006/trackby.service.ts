// Define DemoArray Interface (Must be outside the class)
 interface DemoArray {
  id: number;
  name: string;
}

// The starting Array
 public obst: DemoArray[] = [
  { id: 0, name: 'Apfel' },
  { id: 1, name: 'Mango' },
  { id: 2, name: 'Birne' },
];

// The loading Array
 public addObst(): void {
this.obst = [
  { id: 0, name: 'Apfel' },
  { id: 1, name: 'Mango' },
  { id: 2, name: 'Birne' },
  { id: 3, name: 'Kiwi' },
  { id: 4, name: 'Mandarine' },
  { id: 5, name: 'Banane'},
];
}

// the custom TrackBy function
trackByFn(index: any, item: { id: any }) {
  return item ? item.id : undefined;
}
