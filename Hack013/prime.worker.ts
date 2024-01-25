self.addEventListener('message', (event) => {
 const limit = event.data;
 const primes = findPrimes(limit);
 postMessage(primes);
});

function findPrimes(limit: number): number[] {
 const primes = [];
 for(let i = 2; i <= limit; i++) {
 if (isPrime(i)) {
     primes.push(i);
  }
 }
 return primes;
}

function isPrime(num: number): boolean {
  for(let i = 2; i < num; i++) {
  if(num % i === 0) {
      return false;
    }
  }
  return num !== 1 && num !== 0;
}
    