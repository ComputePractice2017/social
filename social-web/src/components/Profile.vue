<template>
<div class="container">
    <div class="fb-profile">
        <img align="left" class="fb-image-lg" src="http://lorempixel.com/850/280/nightlife/5/" alt="Profile image example">
        <img align="left" class="fb-image-profile thumbnail" src="http://lorempixel.com/180/180/people/9/" alt="Profile image example">
        <div class="fb-profile-text">
            <h1>First Name</h1>
            <p>Last Name</p>
            <p>Years</p>
            <p id="blok1">City</p>
        </div>
    </div>
    <div class="friends">
    <div class="container">
      <form class="form-inline">
        <label class="sr-only" for="inlineFormInput">Login</label>
        <input type="text" v-model.trim="newfriend.FirstName" class="form-control mb-2 mr-sm-2 mb-sm-0"  id="inlineFormInput" placeholder="Login">
  
        <label class="sr-only" for="inlineFormInputGroup">Password</label>
        <div class="input-group mb-2 mr-sm-2 mb-sm-0">
          
          <input type="text" v-model.trim="newfriend.LastName" class="form-control" id="inlineFormInputGroup" placeholder="Password">
        </div>
  
        <button v-on:click="addnewfriends" v-if="!edit" class="btn btn-primary">Добавить</button>
          <button v-on:click="endedit" v-if="edit" class="btn btn-warning">Сохранить</button>
      </form>
      {{newfriend}}
      <table class="table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Year</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="friendd in friends">
            <td>{{friendd.FirstName}}</td>
            <td>{{friendd.LastName}}</td>
            <td>{{friendd.year}}</td>
            <td>{{friendd.City}}</td>
            <td>
            <button v-on:click="editfriends(friendd)" v-if="!edit" class="btn btn-warning">Изменить</button>
            <button v-on:click="deletefriends(friendd)" v-if="!edit" class="btn btn-warning">удалить</button>
            </td>
          </tr>
        </tbody>
        </table>
</div> 
    </div>
</div>


</template>

<script>
export default {
  name: 'friends',
  data () {
    return {
      friends: [
        {
          'id': 1,
          'FirstName': 'Alice',
          'LastName': 'Floera'
        }
      ],
      edit: false,
      newfriend: {
        'FirstName': '',
        'LastName': ''
      }
    }
  },
  methods: {
    addnewfriends: function () {
      var obj = {
        'FirstName': '',
        'LastName': ''
      }
      obj.FirstName = this.newfriend.FirstName
      obj.LastName = this.newfriend.LastName
      this.friends.push(obj)
    },
    editfriends: function (obj) {
      this.edit = true
      this.newfriend = obj
    },
    endedit: function () {
      this.edit = false
      var obj = {
        'FirstName': '',
        'LastName': ''
      }
      this.newfriends = obj
    },
    deletefriends: function (obj) {
      var eq = function (input) {
        return input.FirstName === obj.FirstName && input.LastName === obj.LastName
      }
      var index = this.friends.findIndex(eq)
      if (index > -1) {
        this.friends.splice(index, 1)
      }
    }
  }
}

</script>
<style>
#blok1 {
 position:relative;
left:140px;


}
 body
{
    font-family: 'Open Sans', sans-serif;
}

.fb-profile img.fb-image-lg{
    z-index: 0;
    width: 100%;  
    margin-bottom: 110px;
}

.fb-image-profile
{
    margin: -220px 20px 0px 50px;
    z-index: 9;
    width: 20%; 
}

@media (max-width:768px)
{
    
.fb-profile-text>h1{
    font-weight: 700;
    font-size:16px;
}

.fb-image-profile
{
    margin: -45px 10px 0px 25px;
    z-index: 9;
    width: 20%; 
}
}

</style>
