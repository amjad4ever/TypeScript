interface Car {
    manufacturer: string;
    modelName: string;
    [key: string]: any;
  }
  
  function createCar(manufacturer: string, modelName: string, ...options: any[]): Car {
    const car: Car = {
      manufacturer,
      modelName,
    };
  
    for (let i = 0; i < options.length; i += 2) {
      const key = options[i];
      const value = options[i + 1];
      car[key] = value;
    }
  
    return car;
  }
  
  const myCar = createCar("Toyota", "Camry", "color", "blue", "year", 2023);
  
  console.log(myCar);
  