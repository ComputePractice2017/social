<template>
  <div class="regs">
    <div class="container">
      <form class="form-inline">
        <label class="sr-only" for="inlineFormInput">Login</label>
        <input type="text" v-model.trim="rega.FirstName" class="form-control mb-2 mr-sm-2 mb-sm-0"  id="inlineFormInput" placeholder="Login">
  
        <label class="sr-only" for="inlineFormInputGroup">Password</label>
        <div class="input-group mb-2 mr-sm-2 mb-sm-0">
          
          <input type="text" v-model.trim="rega.LastName" class="form-control" id="inlineFormInputGroup" placeholder="Password">
        </div>
  
        <button v-on:click="addnewreg" class="btn btn-primary">Регистрация</button>
      </form>
      {{rega}}
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
          <tr v-for="reg in regs">
            <td>{{reg.FirstName}}</td>
            <td>{{reg.LastName}}</td>
            <td>{{reg.year}}</td>
            <td>{{reg.City}}</td>
            <td>
              <button v-on:click="add" class="btn btn-primary">добавить</button>
            </td>
          </tr>
        </tbody>
         <table class="table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            
          </tr>
        </thead>
        <tbody>
          <tr v-for="reg2 in reg">
            <td>{{reg2.FirstName}}</td>
            <td>{{reg2.LastName}}</td>
           </tr>
        </tbody>
      </table>
      </table>
    </div>
  </div>
</template>


<script>
export default {
  name: 'regs',
  data () {
    return {
      regs: [
        {
          'id': 1,
          'FirstName': 'Alice',
          'LastName': 'Floera',
          'year': '1996',
          'City': 'Floera',
          'email': 'Bla@vla.com'
        }
      ],
      rega: {
        'FirstName': '',
        'LastName': ''
      },
      reg: {
        'FirstName': '1',
        'LastName': '1'
      }
    }
  },
  methods: {
    addnewreg: function () {
      var obj = {
        'FirstName': '',
        'LastName': ''
      }
      obj.FirstName = this.rega.FirstName
      obj.LastName = this.rega.LastName
      this.regs.push(obj)
    },
    add: function () {
      var clone = {
        'FirstName': '',
        'LastName': ''
      }
      clone.FirstName = this.reg.FirstName
      clone.LastName = this.reg.LastName
      this.reg.push(clone)
    }
  }
}
</script>

<style>

</style>
