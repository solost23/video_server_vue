<script setup>
    import { getVideoInfo } from "../api/video.js"
    import { ref } from "@vue/reactivity"
    import { useRoute, useRouter } from "vue-router"

    let route = useRoute()
    let router = useRouter()
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
        updatedAt: "", 
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
        <div class="videoHead">
            <h3>{{ videoDetail.title }}</h3>
            <br/>
            <span>{{ videoDetail.updatedAt }}</span>
        </div>
        <div class="video"> 
            <video controls :src="videoDetail.videoUrl"></video>
        </div>
        <div class="videoBottom">
            <span>{{ videoDetail.thumbCount }}</span>&nbsp;&nbsp;&nbsp;&nbsp;<span>{{ videoDetail.commentCount }}</span>
            <hr/>
            <p>{{ videoDetail.introduce }}</p>
        </div>
    </div>
</template>

<style scoped>
    video {
        width: 750px;
        height: auto;
    }
</style>
