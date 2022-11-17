/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite klase "Calculator", kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

class Calculator {
    sum(a, b) {
      return a + b;
    }
    subtraction(a, b) {
      return a - b;
    }
    multiplication(a, b) {
      return a * b;
    }
    division(a, b) {
      return a / b;
    }
  }

  console.log("sum  ===", sum);
  console.log("subtraction ===", subtraction);
  console.log("multiplication ===", multiplication);
  console.log("division ===", division);