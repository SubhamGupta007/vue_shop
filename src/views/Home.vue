<template>
  <div class="home container max-width:2400px">
    <navbar></navbar>
      <start/>
      <Products/>
      <login/>

      <div class="container h-200 w-200">
        <div class="row p-5 h-100 justify-content-center align-items-center">
          <div class="col-md-3">
            <img src="/img/svg/product.svg" alt="" width="400">
          </div>
          <div class="col-md-7">
            <h3>Learn More About us</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quaerat voluptate iusto? Nihil voluptas vitae veritatis magnam reprehenderit, reiciendis ex? Libero quasi natus veniam voluptatum, voluptas exercitationem ratione consectetur et!
            </p>
             <button class="btn custom-btn btn-outline-primary mr-4">Browse Products</button>
          </div>
        </div>
      </div>

  </div>
</template>


<script>
  import start from "@/components/start.vue";
  import Products from "@/sections/Products.vue";
  import login from '@/components/login.vue'

export default {
  name: "home",
  components: {
    start,Products,login
  }
};
</script>
<style scoped lang="scss">
    .home{
        margin-top: 1rem;
        background: #f2f2f2;
        padding-bottom: 3rem;
        width:100%;
        text-align:left;
    }
</style>
