class ProductService {
    constructor() {
      this.products = [
        {
          id: "1",
          name: "Product 1",
          price: 333,
          amount: 12
        },
        {
          id: "2",
          name: "Product 2",
          price: 355,
          amount: 12
        },
      ];
    }
  
    getAll() {
      return this.products;
    }
  
    singleProduct(id){
      const product = this.products.find((e)=> e.id==id);
      return product
    }

    incrementProduct(id){
      const toPlus = this.products.map((e)=>{
        if(e.id == id){
          e.amount++;
        }
        return e;
      })
      this.products = toPlus;
      return toPlus;
    }

    decrementProduct(id){
      const toMinus = this.products.map((e)=>{
        if(e.id == id){
          if(e.amount > 0){
            e.amount--;
          }
        }
        return e;
      })
      this.products = toMinus;
      return toMinus;
    }
  
  }
  
  export default new ProductService();
  