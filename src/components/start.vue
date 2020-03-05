<template>
    <div class="container-fluid p-0 start">
        <div class="container-fluid p-0 h-100 max-width:100%">
          <div class="row h-100 justify-content-center align-items-center">
            <div class="col-md-6">
              <div class="start-content">
                <h1 class="start-title"  >
                  Vue Shop 
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos numquam tempora, iure delectus totam minus quam aperiam ratione dolores magni voluptates ut necessitatibus odio ipsum fuga, voluptas ab praesentium nihil?
                </p>
                <div class="start-btn mt-7">
                    <button class="btn custom-btn btn-info mr-4">Explore</button>
                    <button class="btn custom-btn btn-outline-secondary">Products</button>
                </div>
              </div>
            </div>
            <div class="col-md-6">
                <div class="graphic">
                  <img src="/img/svg/848.jpg" alt="" width='600' height='400'>
                </div>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "start",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .start{
    padding-top: 15rem;
    width: 75%;
    height: 500px;
    text-align:left;
    
    
  }
 </style>