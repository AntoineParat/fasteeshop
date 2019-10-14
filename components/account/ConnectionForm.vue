<template>
  <a-form
    id="components-form-demo-normal-login"
    :form="form"
    class="login-form"
    @submit="handleSubmit"
  >
    <a-form-item>
      <a-input
        v-decorator="[
          'email',
          {
            rules: [{
              type: 'email', required :true, message: 'Vous devez renseigner un email valide',
            }]
          }
        ]">
        <a-icon
          slot="prefix"
          type="user"
          style="color: rgba(0,0,0,.25)"
        />
      </a-input>
    </a-form-item>
    <a-form-item>
      <a-input
        v-decorator="[
          'password',
          { rules: [{ required: true, min : 6, max : 12, message: 'Le mot de passe doit faire entre 6 et 12 charactères.' }] }
        ]"
        type="password"
        placeholder="Mot de passe"
      >
        <a-icon
          slot="prefix"
          type="lock"
          style="color: rgba(0,0,0,.25)"
        />
      </a-input>
    </a-form-item>
    <a-form-item>
      <a
        class="login-form-forgot"
        href=""
      >
        Mot de passe oublié ?
      </a>
      <a-button
      type="primary"
        html-type="submit"
        class="login-form-button"
      >
        me connecter
      </a-button>
    </a-form-item>
  </a-form>
</template>

<script>

export default {
  beforeCreate () {
    this.form = this.$form.createForm(this);
  },
  methods: {
    handleSubmit (e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log(values);
        }
      });
    },
  },
};
</script>
<style>
#components-form-demo-normal-login .login-form {
  max-width: 300px;
}
#components-form-demo-normal-login .login-form-forgot {
  float: right;
}
#components-form-demo-normal-login .login-form-button {
  width: 50%;
  text-transform: uppercase;
}
</style>