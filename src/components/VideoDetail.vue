<script setup>
    import { getVideoInfo } from "../api/video.js"
    import { getComments } from "../api/comment.js"
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

    let commentList = ref([{
        id: 0, 
        content: "", 
        parentId: 0, 
        ISThumb: "", 
        createdAt: "", 
        updatedTime: "", 
        creatorId: 0, 
        creatorAvatar: "",     
    }])

    let avatar = ref(localStorage.getItem("avatar"))

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

    // 初始化评论数据
    let loadComments = function loadComments() {
        let videoId = route.params.id
        getComments({videoId: videoId}).then((response) => {
            if (!response.success) {
                console.log(response.message)
                return 
            }
            commentList.value = response.data.records
            console.log(commentList.value)
        })
    }
    loadComments()
</script>

<template>
    <div id="videoDetail">
        <div class="videoHead">
            <h3>{{ videoDetail.title }}</h3>
            <br/>
            <span>视频创建时间: {{ videoDetail.updatedAt }}</span>
        </div>
        <div class="video"> 
            <video controls :src="videoDetail.videoUrl"></video>
        </div>
        <div class="videoBottom">
            <span><img class="thumb" src="../assets/thumb.png" alt/>{{ videoDetail.thumbCount }}</span>&nbsp;&nbsp;&nbsp;&nbsp;<span><img class="comment" src="../assets/comment.png" alt/>{{ videoDetail.commentCount }}</span>
            <hr/>
            <p>{{ videoDetail.introduce }}</p>
        </div>
        <div class="comment">
            <div>
                <img v-bind:src="avatar" alt/>
                <span>输入你的评论: </span><input type="text" />
            </div>
            <div class="commentList">
                <!-- 评论列表 -->
            </div>
        </div>
    </div>
</template>

<style scoped>
    video {
        width: 750px;
        height: auto;
    }
    .thumb{
        width: 30px;
        height: 30px;
    }
    .comment{
        width: 30px;
        height: 30px;
    }
</style>
