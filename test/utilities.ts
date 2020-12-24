export function deepClone<T>(value: T): T {
    // This is about half the speed of the other option below
    const n = new Notification("", { data: value, silent: true });
    n.onshow = n.close.bind(n);
    return n.data;
  }
  export function deepCloneJSON<T>(value: T): T {
    return JSON.parse(JSON.stringify(value));
  }