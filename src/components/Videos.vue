<script setup>
    import { getVideos } from "../api/video.js"
    import { useRouter } from "vue-router"
    import { ref } from "@vue/reactivity"

    let router = useRouter()
    let token = localStorage.getItem("token")
    if (token === "" || token === null) {
        // 跳转登录路由
        router.push(
            {
                name: "login", 
            }
        )
    }

    let video = ref({
        keyword: "", 
        videoInfos: [
            {
                categoryId: 0, 
                categoryName: "", 
                commentCount: 0, 
                id: 0, 
                imageUrl: "",
                introduce: "", 
                thumbCount: 0, 
                title: "", 
                userId: 0, 
                userName: "",
                videoUrl: "", 
            }
        ], 
    })

    // 初始化视频列表数据
    let loadVideos = function loadVideos() {
        let keyword = video.value.keyword
        getVideos({keyword: keyword, page: 1, size: 50}).then((response) => {
            if (!response.success) {
                alert(response.message)
                return 
            }
            // 拿到数据，展示数据
            video.value.videoInfos = response.data.records
        })
    }
    loadVideos()

    function toVideoDetailPage(videoId) {
        router.push(
            {
                path: `/videos/detail/${videoId}`, 
            }
        )
    }
</script>

<template>
    <div id="index">
        <!-- 放个搜索框 -->
        <div class="search">
            <input type="text" placeholder="搜索" v-model="video.keyword" @keyup.enter="loadVideos"/>
        </div>
        <!-- 视频列表 -->
        <div class="videoList">
            <ul>
               <li v-for="videoInfo in video.videoInfos" v-bind:key="videoInfo.id" @click="toVideoDetailPage(videoInfo.id)">
                    <video controls :src="videoInfo.videoUrl"></video>
                    <!-- <img :src="videoInfo.imageUrl"/> -->
                    <br/>
                    <div class="videoBaseInfo">
                        <h3>{{ videoInfo.title }}</h3>
                        <p>{{ videoInfo.introduce }}</p>
                    </div>
                </li> 
            </ul>
        </div>
    </div>
</template>

<style scoped>
    ul {
        list-style-type: none;
        background: green;
    }
    img {
        width: 200px;
        height: 200px; 
    }
</style>
