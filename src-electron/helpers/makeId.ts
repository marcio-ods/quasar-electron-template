const alphabetic = ['a', 'b', 'c', 'd']

const getChar = () => {
  const idx = Math.floor(Math.random() * (alphabetic.length - 1))
  return alphabetic[idx] || 'n'
}

let txt = '';

function* genId() {
  let n1 = 0
  // n2 = 5;
  // while (true) yield `${getChar()}-${txt}-${++n1}-${(n2 = n2 * n1)}}`;
  while (true) yield `${txt}-${getChar()}-${Math.floor(Math.random() * (100))}-${Date.now()}-${++n1}`.toLocaleLowerCase();
}

const gen = genId();

export const makeId = (str: string | number = 'id') => {
  txt = `${str}`;
  return gen.next(str).value || `${Date.now()}`;
};

// await new Promise((fnc_resolve) => setTimeout(fnc_resolve, milliseconds));
// https://www.youtube.com/watch?v=P1hjyq7nOP0


export const UniqueId = (() => makeId('uniqueId'))()

// let _uniqueId: string | undefined = undefined
// export const getUniqueId = () => {
//   if (!_uniqueId) _uniqueId = makeId('uniqueId')
//   return _uniqueId
// }
