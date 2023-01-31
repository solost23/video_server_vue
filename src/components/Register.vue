<script setup>
    import { register } from "../api/user.js"
    import { useRouter } from "vue-router"
    import { ref } from "@vue/reactivity"
    let router = useRouter()
    let user = ref(
        {
            msg: "", 
            username: "", 
            password: "", 
        }
    )

    function toLoginPage() {
        router.push(
            {
                name: "login", 
            }
        )
    }

    function handleRegister() {
        let username = user.value.username 
        let password = user.value.password
        if (username === "" || password === "") {
            user.value.msg = "用户名或密码不为空"
            return 
        }
        register({ userName: username, password: password, device: "web", role: "USER"}).then((response) => {
            if (!response.success) {
                user.value.msg = response.message
                return 
            }
            // 跳转登录路由
            router.push(
                {
                    name: "login", 
                }
            )
        })
    }

</script>

<template>
    <div id="register">
        <table>
            <tr>
                <th>账号:</th>
                <td><input type="text" placeholder="请输入账号" v-model="user.username"/></td>
            </tr>
            <tr>
                <th>密码:</th>
                <td><input type="password" placeholder="请输入密码" v-model="user.password"/></td>
            </tr>
            <tr>
                <th style="width: max-content"></th>
                <td><span stype="color: red; font-size: smaller;">{{ user.msg }}</span></td>
            </tr>
            <tr>
                <th style="width: max-content;"></th>
                <td><button @click="toLoginPage">登录</button>&nbsp;&nbsp;&nbsp;&nbsp;<button id="registerBut" @click="handleRegister">注册</button></td>
            </tr>
        </table>
    </div>
</template>

<style scoped>

</style>
