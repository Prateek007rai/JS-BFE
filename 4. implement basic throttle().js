// Before throttling we have following series of calls.
// ─ A ─ B ─ C ─ ─ D ─ ─ ─ ─ ─ ─ E ─ ─ F ─ G

// After throttling at wait time of 3 dashes, it becomes like this.
// ─ A ─ ─ ─ C ─ ─ ─ D ─ ─ ─ ─ E ─ ─ ─ G 

function throttle(func, wait) {
  let timer = null;
  let stashed = null;

  const check = () => {
    timer = null;

    if (stashed !== null) {
      // 1. Run the stashed call
      func.apply(stashed[0], stashed[1]);
      stashed = null;
      // 2. Immediately start a new "cooling" period
      timer = setTimeout(check, wait);
    }
  };

  return function(...args) {             // FIX 1: Capture args using rest operator
    if (timer !== null) {
      stashed = [this, args];            // Correctly store context and args
    } else {
      func.apply(this, args);            // FIX 2: Apply correctly captured args
      timer = setTimeout(check, wait);
    }
  };
}