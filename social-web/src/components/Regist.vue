<template>
    <form class="form-inline">
        <label class="sr-only" for="inlineFormInput">Name</label>
        <input type="text" class="form-control " id="inlineFormInput" placeholder="Login">
    
        <label class="sr-only" for="inlineFormInputGroup">Password</label>
        <div class="input-group ">
            <input type="Password" class="form-control" id="inlineFormInputGroup" placeholder="Password">
        </div>
        <label class="sr-only" for="inlineFormInputGroup">Years</label>
        <div class="input-group ">
            <input type="text" class="form-control" id="inlineFormInputGroup1" placeholder="Years">
        </div>
        <label class="sr-only" for="inlineFormInputGroup">City</label>
        <div class="input-group ">
            <input type="text" class="form-control" id="inlineFormInputGroup2" placeholder="City">
        </div>
        <div id="blok1">
        <button type="submit" class="btn btn-primary">Регистрация</button>
        </div>
        <div id="blok2">
            <h1>Регистрация</h1>
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
#inlineFormInputGroup1{
    position:relative;
left:110px;
top:300px;
}
#inlineFormInputGroup2{
    position:relative;
left:110px;
top:300px;
}
#blok1{
    position:relative;
left:-170px;
top:350px;
}
#blok2{
    position:relative;
right:350px;
top:170px;
}
</style>
