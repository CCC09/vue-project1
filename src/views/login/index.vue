<template>
    <div class="container">
        <el-card class="box-card">
            <img src="../../assets/images/logo_index.png" alt="">
            <el-form :model="loginForm" :rules="loginRules" status-icon ref="loginForm">
                <el-form-item prop="mobile">
                    <el-input v-model="loginForm.mobile" placeholder="请输入手机号"></el-input>
                </el-form-item>
                <el-form-item prop="code">
                    <el-input v-model="loginForm.code" style="width:238px;margin-right:10px" placeholder="请输入验证码"></el-input>
                    <el-button>获取验证码</el-button>
                </el-form-item>
                <el-form-item>
                    <el-checkbox :value="true">我已阅读并同意用户协议和隐私条款哦</el-checkbox>
                </el-form-item>
                <el-form-item>
                    <el-button style="width:100%" type="primary" @click="submitForm()">登陆</el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>

<script>
import store from '@/store'
export default {
  data () {
    const checkMobile = (rule, value, callback) => {
      if (!/^1[3-9]\d{9}$/.test(value)) return callback(new Error('请输入正确的手机格式'))
      callback()
    }
    return {
      loginForm: {
        mobile: '18801286666',
        code: '246810'
      },
      loginRules: {
        mobile: [
          { required: true, message: '请输入手机号码', trigger: 'blur' },
          { validator: checkMobile, trigger: 'blur' }
        ],
        code: [
          { required: true, message: '请输入验证码', trigger: 'blur' },
          { len: 6, message: '请输入6位验证码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm () {
      this.$refs.loginForm.validate(async (valid) => {
        if (valid) {
          // this.$http.post('/authorizations', this.loginForm)
          //   .then(res => {
          //     store.setUser(res.data.data)
          //     this.$router.push('/')
          //   })
          //   .catch(() => {
          //     this.$message.error('手机号或验证码错误')
          //   })

          // try{可能会执行报错代码}catch(e){处理错误} 也不影响后续代码执行
          try {
            const { data: { data } } = await this.$http.post('/authorizations', this.loginForm)
            store.setUser(data)
            this.$router.push('/')
          } catch (e) {
            this.$message.error('手机号或验证码错误...哈哈哈')
          }
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
    .container {
        width: 100%;
        height: 100%;
        position: absolute;
        background: url(../../assets/images/login_bg.jpg) no-repeat center / cover;
        .box-card {
            width: 400px;
            height: 350px;
            border-radius: 16px;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%,-56%);
            img {
                width: 200px;
                display:block;
                margin: 0 auto 30px;
            }
         }
    }
</style>
