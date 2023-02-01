<script setup>
    import { getVideoInfo } from "../api/video.js"
    import { ref } from "@vue/reactivity"
    import { useRoute } from "vue-router"
import { onMounted } from "@vue/runtime-core"

    let route = useRoute()
    let token = localStorage.getItem("token")
    if (token === "" || token === null) {
        router.push(
            {
                name: "login", 
            }
        )
    }
    let videoDetail = ref({
        categoryId: 0, 
        categoryName: "", 
        commentCount: 0, 
        id: 0, 
        imageUrl: "",
        thumbCount: 0, 
        title: "", 
        userId: 0, 
        userName: "",
        videoUrl: "", 
    })

    // 初始化视频数据
    let loadVideoDetail = function loadVideoDetail() {
        // 获取参数中id
        let videoId = route.params.id
        getVideoInfo(videoId).then((response) => {
            if (!response.success) {
                console.log(response.message)
                return 
            }
            videoDetail.value = response.data
            console.log(videoDetail)
        })
    }
    loadVideoDetail()
</script>

<template>
    <div id="videoDetail">
        <div class="videoTitle">
            <h3>{{ videoDetail.title }}</h3>
        </div>
        <div class="video"> 
            <video controls :src="videoDetail.videoUrl"></video>
        </div>
        <div>
            <p>{{ videoDetail.introduce }}</p>
        </div>
    </div>
</template>

<style scoped>
    video {
        width: 650px;
        height: 600px;
    }
</style>
