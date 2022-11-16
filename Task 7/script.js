/* ------------------------------ TASK 7 -----------------------------------
Turimas "audi" objektas.

Parašykite funkciją "showObjectKeys", kuri kaip argumentą priims objektą 
ir grąžins visus jo "key" masyve.
-------------------------------------------------------------------------- */
const audi = {
  make: 'audi',
  model: 'A6',
  year: 2005,
  color: 'white',
};

function showObjectKeys(audi) {
  let keyArr = [];
  for (const key in audi) {
    keyArr.push(key);
  }
  
  console.log("keyArr ===", keyArr);
  return keyArr;
}
showObjectKeys(audi);
