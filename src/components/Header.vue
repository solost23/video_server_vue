<script setup>
    import { logout } from "../api/user.js"
    import { useRouter } from "vue-router"

    let router = useRouter()
    function handleLogout() {
        logout({ device: "web" }).then((response) => {
            if (!response.success) {
                console.log(response.message)
                return 
            }
            localStorage.removeItem("token")
            router.push(
                {
                    name: "login", 
                }
            )
        })
    }
    
</script>

<template>
    <div class="top">
        <div class="left">
            <!--网站头像 + 网站名称-->
            <div><img src="../assets/vue.svg" alt/></div>
            <span>小米星球</span>
        </div>
        <div class="middle">
            <span>导航栏</span>
        </div>
        <div class="right">
            <!--已登录: 用户头像 + 注销-->
            <!-- 未登录: 登录 + 注册 -->
            <span>用户信息</span>
            <button @click="handleLogout">注销</button>
        </div>
    </div>
</template>

<style scoped>
    .top{
        background: white;
        display: flex;
        align-items: center;
    }
    .left{
        background: green;
        height: 100px;
        width: 300px;
    }
    .middle{
        background: white;
        height: 100px;
        width: 2000px;
    }
    .right{
        background: green;
        height: 100px;
        width: 400px;
    }
    

</style>
