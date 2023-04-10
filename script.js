class Car {
  constructor(brand, model, year, color) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.color = color;
  }

  displayInfo() {
    const carDiv = document.createElement('div');
    carDiv.innerHTML = `
      <h2>${this.brand} ${this.model}</h2>
      <ul>
        <li>Year: ${this.year}</li>
        <li>Color: ${this.color}</li>
      </ul>
    `;
    document.body.appendChild(carDiv);
  }
}

const car1 = new Car('BMW', 'X5', 2019, 'black');
const car2 = new Car('Tesla', 'Model S', 2020, 'white');
const car3 = new Car('Toyota', 'Camry', 2018, 'blue');

car1.displayInfo();
car2.displayInfo();
car3.displayInfo();
