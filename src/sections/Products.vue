<template>
  <div class="products" id="products">
      <div class="container">
          <h1 class="text-center p-5">Our Products</h1>
          <div class="row">
              
              <div class="col-md-4">
                  <div class="card product-item">
                    <img src="/img/products/product1.jpg" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">ASUS TUF</h5>
                            <p class="card-text">
                                ASUS TUF Gaming FX505DT 15.6" FHD 120Hz Laptop GTX 1650 4GB Graphics (Ryzen 5-3550H/8GB RAM/1TB HDD/Windows 10/Gold Steel/2.20 Kg), FX505DT-AL162T
                             </p>
                            <a href="#" class="btn btn-primary">Add to Cart</a>
                        </div>
                    </div>
              </div>

              <div class="col-md-4">
                  <div class="card product-item">
                    <img src="/img/products/product2.jpg" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">LENOVO LAPTOP</h5>
                            <p class="card-text">
                               Lenovo IdeaPad S145 8th Gen Intel Core i5 15.6-inch FHD Thin and Light Laptop (8GB/1TB/Windows 10/NVIDIA MX110 2GB Graphics/Textured Black/1.85Kg), 81MV018NIN
                            </p>
                            <a href="#" class="btn btn-primary">Add to Cart</a>
                        </div>
                    </div>
              </div>

              <div class="col-md-4">
                  <div class="card product-item">
                    <img src="/img/products/product3.jpg" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">DELL LAPTOP</h5>
                            <p class="card-text">
                                    Dell Inspiron 3480 14-inch Thin & Light Laptop (8th Gen Intel Core i5-8265U/8GB/1TB HDD/Window 10 Home + MS Office/Intel UHD Graphics), Silver

                            </p>
                            <a href="#" class="btn btn-primary">Add to Cart</a>
                        </div>
                    </div>
              </div>
          </div>
      </div>
    
  </div>
</template>

<script>
export default {
  name: "Products",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .products{
        margin-top: 7rem;
        background: #f2f2f2;
        padding-bottom: 3rem;
    }
</style>