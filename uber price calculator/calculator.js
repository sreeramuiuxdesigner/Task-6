class UberPriceCalculator {
    constructor(baseFare, costPerKm, costPerMinute) {
      this.baseFare = baseFare;
      this.costPerKm = costPerKm;
      this.costPerMinute = costPerMinute;
    }
  
    calculatePrice(distanceInKm, durationInMinutes) {
      const price = this.baseFare + (distanceInKm * this.costPerKm) + (durationInMinutes * this.costPerMinute);
      return price;
    }
  }
  
  
  const calculator = new UberPriceCalculator(5, 1.5, 0.2);
  const distance = 10; 
  const duration = 20; 
  const totalPrice = calculator.calculatePrice(distance, duration);
  console.log(`Total price: $${totalPrice.toFixed(2)}`);
  