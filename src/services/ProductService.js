class ProductService {
    constructor() {
      this.products = [
        {
          id: "1",
          name: "Product 1",
          price: 333
        },
        {
          id: "2",
          name: "Product 2",
          price: 355
        },
      ];
    }
  
    getAll() {
      return this.products;
    }
  
    singleProduct(id){
      const customer = this.customers.find((e)=> e.id==id);
      return customer
    }
  
  }
  
  export default new ProductService();
  