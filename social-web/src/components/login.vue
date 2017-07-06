<template>

<form class="form-inline">
  <label class="sr-only" for="inlineFormInput">Name</label>
  <input type="text" class="form-control mb-2 mr-sm-2 mb-sm-0" id="inlineFormInput" placeholder="Login">

  <label class="sr-only" for="inlineFormInputGroup">Username</label>
  <div class="input-group mb-2 mr-sm-2 mb-sm-0">
  
    <input type="Password" class="form-control" id="inlineFormInputGroup" placeholder="Password">
  </div>

 
<div id="blok1" >
    <a href="Profile.vue">
  <button type="submit" class="btn btn-primary" >Вход</button>
    </a>
  </div>
  <div id="blok3">
      <h1>Авторизация</h1>
  </div>
  
</form>

</template>

<script>

</script>
<style> 
#inlineFormInput{
    position:relative;
left:550px;
top:250px;
}
#inlineFormInputGroup{
    position:relative;
left:550px;
top:250px;
}
#blok1{
    position:relative;
left:550px;
top:250px;
}

#blok3{
    position:relative;
left:120px;
top:170px;
}

</style>

