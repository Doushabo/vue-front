<template>
    <div>
      <el-row type="flex" justify="center">
        <el-col :span="20">
          <el-container>
            <el-header>
              <span class="H1_title">Info Generator</span>
            </el-header>
            <el-main>
              <!-- 输入区 -->
              <el-row>
                <el-col :span="24">
                  <!-- name author and levelDesigner -->
                  <el-row :gutter="20">
                    <el-col :span="8">
                      <div>
                        <el-input placeholder="请输入歌曲名字" v-model="name">
                          <template slot="prepend"><span class="error_tag" v-if="!name">*</span>name</template>
                        </el-input>
                      </div>
                    </el-col>
                    <el-col :span="8">
                      <div>
                        <el-input placeholder="请输入作者" v-model="author">
                          <template slot="prepend"><span class="error_tag" v-if="!author">*</span>author</template>
                        </el-input>
                      </div>
                    </el-col>
                    <el-col :span="8">
                      <div>
                        <el-input placeholder="请输入默认谱师" v-model="levelDesigner">
                          <template slot="prepend"><span class="error_tag" v-if="!levelDesigner">*</span>levelDesigner</template>
                        </el-input>
                      </div>
                    </el-col>
                  </el-row>
                  <!-- 场景 BPM and Tag -->
                  <el-row style="margin-top: 20px;" :gutter="20">
                    <el-col :span="8">
                      <div>
                        场景: 
                        <el-select v-model="scene" placeholder="选择场景">
                          <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                            :disabled="item.disabled">
                          </el-option>
                        </el-select>
                      </div>
                    </el-col>
                    <el-col :span="8">
                      <div>
                        BPM: 
                        <el-input-number v-model="bpm" controls-position="right" :min="1"></el-input-number>
                      </div>
                    </el-col>
                    <el-col :span="8">
                      <div>
                        <el-tag
                          :key="tag"
                          v-for="tag in searchTags"
                          size="medium"
                          closable
                          :disable-transitions="false"
                          @close="handleClose(tag)">
                          {{tag}}
                        </el-tag>
                        <el-input
                          class="input-new-tag"
                          v-if="inputVisible"
                          v-model="inputValue"
                          ref="saveTagInput"
                          size="small"
                          @keyup.enter.native="handleInputConfirm"
                          @blur="handleInputConfirm"
                        >
                        </el-input>
                        <el-button v-else class="button-new-tag" size="small" @click="showInput">添加Tag</el-button>
                      </div>
                    </el-col>
                  </el-row>
                  <!-- 萌新 高手 大触 里谱的设置 -->
                  <el-row style="margin-top: 40px;" :gutter="20">
                    <el-col :span="6">
                      <div>
                        <el-container>
                          <el-header><span class= "H1_title">萌新</span></el-header>
                          <el-main>
                            <el-row>
                              <el-col :span="24">
                                <div>
                                  <el-input placeholder="请输入谱师" v-model="leves.levelDesigner1">
                                    <template slot="prepend">谱师</template>
                                  </el-input>
                                </div>
                              </el-col>
                              <el-col style="margin-top: 10px;" :span="24">
                                <div>
                                  <el-input placeholder="请输入等级" v-model="difficultys.difficulty1">
                                    <template slot="prepend">等级</template>
                                  </el-input>
                                </div>
                              </el-col>
                            </el-row>
                          </el-main>
                        </el-container>
                      </div>
                    </el-col>
                    <el-col :span="6">
                      <div>
                        <el-container>
                          <el-header><span class= "H1_title">高手</span></el-header>
                          <el-main>
                            <el-row>
                              <el-col :span="24">
                                <div>
                                  <el-input placeholder="请输入谱师" v-model="leves.levelDesigner2">
                                    <template slot="prepend">谱师</template>
                                  </el-input>
                                </div>
                              </el-col>
                              <el-col style="margin-top: 10px;" :span="24">
                                <div>
                                  <el-input placeholder="请输入等级" v-model="difficultys.difficulty2">
                                    <template slot="prepend">等级</template>
                                  </el-input>
                                </div>
                              </el-col>
                            </el-row>
                          </el-main>
                        </el-container>
                      </div>
                    </el-col>
                    <el-col :span="6">
                      <div>
                        <el-container>
                          <el-header><span class= "H1_title">大触</span></el-header>
                          <el-main>
                            <el-row>
                              <el-col :span="24">
                                <div>
                                  <el-input placeholder="请输入谱师" v-model="leves.levelDesigner3">
                                    <template slot="prepend">谱师</template>
                                  </el-input>
                                </div>
                              </el-col>
                              <el-col style="margin-top: 10px;" :span="24">
                                <div>
                                  <el-input placeholder="请输入等级" v-model="difficultys.difficulty3">
                                    <template slot="prepend">等级</template>
                                  </el-input>
                                </div>
                              </el-col>
                            </el-row>
                          </el-main>
                        </el-container>
                      </div>
                    </el-col>
                    <el-col :span="6">
                      <div>
                        <el-container>
                          <el-header><span class= "H1_title">里谱</span></el-header>
                          <el-main>
                            <el-row>
                              <el-col :span="24">
                                <div>
                                  <el-input placeholder="请输入谱师" v-model="leves.levelDesigner4">
                                    <template slot="prepend">谱师</template>
                                  </el-input>
                                </div>
                              </el-col>
                              <el-col style="margin-top: 10px;" :span="24">
                                <div>
                                  <el-input placeholder="请输入等级" v-model="difficultys.difficulty4">
                                    <template slot="prepend">等级</template>
                                  </el-input>
                                </div>
                              </el-col>
                              <el-col style="margin-top: 10px;" :span="24">
                                <div>
                                  解锁方式: 
                                  <el-select v-model="hideBmsMode" placeholder="选择方式">
                                    <template  >
                                      <el-option
                                        v-for="item in hideOptions"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value"
                                        :disabled="item.disabled">
                                      </el-option>
                                    </template>
                                  </el-select>
                                </div>
                              </el-col>
                              <el-col style="margin-top: 10px;" :span="24">
                                <div>
                                  解锁替换等级: 
                                  <el-select v-model="hideBmsDifficulty" placeholder="选择替换等级">
                                    <template  >
                                      <el-option
                                        v-for="item in hideBmsDifficultys"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                      </el-option>
                                    </template>
                                  </el-select>
                                </div>
                              </el-col>
                              <el-col style="margin-top: 10px;" :span="24">
                                <div>
                                  <el-input placeholder="请输入显示文本" v-model="hideBmsMessage">
                                    <template slot="prepend">展示文本</template>
                                  </el-input>
                                </div>
                              </el-col>
                            </el-row>
                          </el-main>
                        </el-container>
                      </div>
                    </el-col>
                  </el-row>
                  <!-- 提交 -->
                  <el-row style="margin-top: 30px;">
                    <el-col :span="24">
                      <el-button type="primary" @click="subJson">提交</el-button>
                    </el-col>
                  </el-row>
                </el-col>
              </el-row>
              <!-- 展示区 -->
            </el-main>
          </el-container>
        </el-col>
      </el-row>
      
    </div>
</template>

<script>
    export default {
        name: "infoIndex",
        data() {
          return {
            name: "",
            author: "",
            bpm: 100,
            levelDesigner: "",
            scene: "scene_01",
            options: [{
                value: 'scene_01',
                label: '太空'
              }, {
                value: 'scene_02',
                label: '都市'
              }, {
                value: 'scene_03',
                label: '城堡'
              }, {
                value: 'scene_04',
                label: '雨夜街道'
              }, {
                value: 'scene_05',
                label: '糖果森林'
              }, {
                value: 'scene_06',
                label: '和风'
              }, {
                value: 'scene_07',
                label: '一起过山车'
              }, {
                value: 'scene_08',
                label: '车万'
              }, {
                value: 'scene_09',
                label: 'DJMAX'
              }, {
                value: 'scene_10',
                label: 'MIKU',
                disabled: true
            }],
            searchTags: [],
            inputVisible: false,
            inputValue: '',
            leves: {
              levelDesigner1: "",
              levelDesigner2: "",
              levelDesigner3: "", 
              levelDesigner4: ""
            },
            difficultys: {
              difficulty1: "",
              difficulty2: "",
              difficulty3: "",
              difficulty4: ""
            },

            hideBmsMode: "CLICK",
            hideOptions: [{
              value: "CLICK",
              label: "点击解锁"
            }, {
              value: "PRESS",
              label: "长按封面"
            }, {
              value: "TOGGLE",
              label: "衔尾蛇",
              disabled: true
            }],
            hideBmsDifficulty: "0",
            hideBmsDifficultys: [{
              value: "-1",
              label: "独显示里谱"
            }, {
              value: "0",
              label: "默认"
            }, {
              value: "1",
              label: "替换萌新难度"
            }, {
              value: "2",
              label: "替换高手难度"
            }, {
              value: "3",
              label: "替换大触难度"
            }],
            hideBmsMessage: ""
          }
        },
        methods: {
          // Tag的方法
          handleClose(tag) {
            this.searchTags.splice(this.searchTags.indexOf(tag), 1);
          },
          showInput() {
            this.inputVisible = true;
            this.$nextTick(_ => {
              this.$refs.saveTagInput.$refs.input.focus();
            });
          },
          handleInputConfirm() {
            let inputValue = this.inputValue;
            if (inputValue) {
              this.searchTags.push(inputValue);
            }
            this.inputVisible = false;
            this.inputValue = '';
          },
          subJson() {
            // 以后写
            console.log("提交");
          }
        },
        computed: {
          dateLeveDiff() {
            let {levelDesigner1, levelDesigner2, levelDesigner3} = this.leves
            let {difficulty1, difficulty2, difficulty3} = this.difficultys
            return {
              levelDesigner1, 
              levelDesigner2, 
              levelDesigner3,
              difficulty1, 
              difficulty2, 
              difficulty3
            }
          }
        },
        watch: {
          dateLeveDiff: {
            deep: true,
            immediate: true,
            handler(obj) {
              let {hideOptions} = this
              let {difficulty1, difficulty2, difficulty3, 
              levelDesigner1, levelDesigner2, levelDesigner3} = obj

              if(difficulty1 != "" && 
              difficulty2 != "" && 
              difficulty3 != "" &&
              levelDesigner1 != "" &&
              levelDesigner2 != "" &&
              levelDesigner3 != "") {
                hideOptions[2].disabled = false;
              } else {
                hideOptions[2].disabled = true;
                this.hideBmsMode = "CLICK";
              }
            }
          }
        }
    }
</script>

<style scoped>
  .error_tag {
    font-size: 15px;
    color: red;
  }
  .H1_title {
    font-size: 20px;
  }
 .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  /* .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  } */
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    /* line-height: 160px; */
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }

  /* tag */
  .el-tag + .el-tag {
    margin-left: 10px;
  }
  .button-new-tag {
    margin-left: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
  }
  .input-new-tag {
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;
  }

</style>