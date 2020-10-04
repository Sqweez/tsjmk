<template>
<div>
    <!-- Login Wrapper Area-->
    <div class="login-wrapper d-flex align-items-center justify-content-center text-center">
      <!-- Background Shape-->
      <div class="background-shape"></div>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 col-sm-9 col-md-7 col-lg-6 col-xl-5"><img class="big-logo" src="./../assets/logow.svg" alt="">
            <!-- Register Form-->
            <div class="register-form mt-5 px-4">
              <form action="#" method="get">
                <div class="form-group text-left mb-4">
                  <span>Телефон</span>
                  <div class="d-flex position-relative">
                    <span class="phone-prefix">+7</span>
                    <input class="form-control"
                           id="username"
                           type="number"
                           :maxlength="10"
                           placeholder="(***) *** ** **"
                           v-model="phone"
                           aria-label="телефон">
                  </div>
                </div>
                <div class="form-group text-left mb-4"><span>Пароль</span>
                  <label for="password"><i class="lni lni-lock"></i></label>
                  <input class="form-control" id="password" type="password" placeholder="********************">
                </div>
                <button class="btn btn-success btn-lg w-100" type="submit" @click.prevent="$router.push('/home')">Вход</button>
              </form>
            </div>
            <!-- Login Meta-->
            <div class="login-meta-data"><a class="forgot-password d-block mt-3 mb-1" href="#">Забыли пароль?</a>
              <p class="mb-0">Нет аккаунта?<router-link class="ml-1" to="/register">Зарегистрируйтесь</router-link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
</template>

<script>
  export default {
    data: () => ({
      phone: '',
      password: '',
    }),
    mounted() {

    },
    watch: {
      phone() {
        if (this.phone.length > 10) {
          this.phone = this.phone.slice(0, 10);
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .phone-prefix {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 1%;
  }

  .big-logo {
    max-width: 10em;
  }
</style>