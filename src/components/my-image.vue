<template>
  <div class="container">
    <div class="img-btn" @click="openDialog()">
      <img :src="value||defaultImage" alt />
    </div>
    <el-dialog :visible.sync="dialogVisible" width="750px">
      <el-tabs v-model="activeName">
        <el-tab-pane label="素材库" name="image">
          <el-radio-group v-model="reqParams.collect" size="mini" @change="changeCollect()">
            <el-radio-button :label="false">全部</el-radio-button>
            <el-radio-button :label="true">收藏</el-radio-button>
          </el-radio-group>
          <div class="img-list">
            <div
              class="img-item"
              :class="{selected:selectImageUrl===item.url}"
              v-for="item in images"
              :key="item.id"
              @click="selectImageUrl=item.url"
              @dblclick="selectImageUrl=null"
            >
              <img :src="item.url" alt />
            </div>
          </div>
          <el-pagination
            background
            layout="prev, pager, next"
            v-if="total>reqParams.per_page"
            :total="total"
            :page-size="reqParams.per_page"
            :current-page="reqParams.page"
            @current-change="changePage"
          ></el-pagination>
        </el-tab-pane>
        <el-tab-pane label="上传本地图片" name="upload">
          <el-upload
            class="avatar-uploader"
            action="http://ttapi.research.itcast.cn/mp/v1_0/user/images"
            :show-file-list="false"
            :on-success="handleSuccess"
            :headers="headers"
            name="image"
          >
            <img v-if="uploadImageUrl" :src="uploadImageUrl" class="avatar" />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-tab-pane>
      </el-tabs>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="confirmImage()">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import store from '@/store'
import defaultImage from '@/assets/images/default.png'
export default {
  name: 'my-image',
  props: ['value'],
  data () {
    return {
      dialogVisible: false,
      activeName: 'image',
      images: [],
      total: 0,
      reqParams: {
        collect: false,
        page: 1,
        per_page: 8
      },
      selectImageUrl: null,
      uploadImageUrl: null,
      headers: {
        Authorization: `Bearer ${store.getUser().token}`
      },
      defaultImage
    }
  },
  methods: {
    confirmImage () {
      if (this.activeName === 'image') {
        this.$emit('input', this.selectImageUrl)
      } else {
        this.$emit('input', this.uploadImageUrl)
      }
      this.dialogVisible = false
    },
    handleSuccess (res) {
      this.uploadImageUrl = res.data.url
    },
    openDialog () {
      this.dialogVisible = true
      this.selectImageUrl = null
      this.uploadImageUrl = null
      this.getImages()
    },
    changePage (newPage) {
      this.reqParams.page = newPage
      this.getImages()
    },
    changeCollect () {
      this.reqParams.page = 1
      this.getImages()
    },
    async getImages () {
      const {
        data: { data }
      } = await this.$http.get('user/images', { params: this.reqParams })
      this.images = data.results
      this.total = data.total_count
    }
  }
}
</script>

<style scoped lang='less'>
.container{
  display: inline-block;
  margin-right: 20px
}
.img-btn {
  width: 160px;
  height: 160px;
  border: 1px dashed #ddd;
  img {
    width: 100%;
    height: 100%;
    display: block;
  }
}
.dialog-footer {
  text-align: center;
  width: 100%;
  display: block;
}
.img-list {
  margin-top: 10px;
  .img-item {
    width: 160px;
    height: 120px;
    border: 1px dashed #ddd;
    display: inline-block;
    margin-right: 15px;
    margin-bottom: 10px;
    position: relative;
    &.selected {
      &::after {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.3) url(../assets/images/selected.png)
          no-repeat center / 50px 50px;
      }
    }
    img {
      width: 100%;
      height: 100%;
      display: block;
      object-fit: contain;
    }
  }
}
</style>
