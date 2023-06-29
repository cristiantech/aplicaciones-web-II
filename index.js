// Variables de entorno
let tokenApi = process.env.APITOKEN || "sin Token";
let tajeta = process.env.TARJETA || "sin Token";


myBool = false;
console.log(tokenApi)
console.log(`My bool is: ${myBool ? "Aprobado": "Reprobado"}`) //If en una sola linea Ternarios

//OOP
class Date{

  constructor(year, month, day){
    this._year = this.validateYear(year);
    this._month = this.validateMonth(month);
    this._day = this.validateDay(day);
  }
  validateYear(year){
    if(year < 0){
      throw new Error("This year is not valid");
    }
    return year;
  }
  validateMonth(month){
    if(month < 1 || month > 12){
      throw new Error("This month is not valid");
    }
    return month;
  }

  validateDay(day){

   if (day == 29 && this._month ==2 && this.isLeapYear(this._year)) {
    return day
   }

   // Validar Los demas meses

   if((day >= 1 && day <= 28 && this.month == 2) ||
   (day >= 1 && day <= 30 && this.month == 4)){

   }

   throw new Error("This day is not valid");
  }

  isLeapYear(year){
    return year % 400 == 0 || year % 4 == 0 && year % 100 != 0
  }

  Print(){
    return `${this._year}/${this._month}/${this._day}`;
  }


}

// let fecha1 = new Date(2023,5,4);
let fecha2 = new Date(2028,2,29);


console.log(fecha2.Print());

