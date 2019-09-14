<template>
  <div class="language-menu">
      <div @click="handleToOpen" class="current-language">
          {{ curreutLanguage }}
      </div>
      <ul v-if="menuShow" class="other-languages">
          <!-- <li v-for="(item,index) in otherLanguages" :key="index">{{ item.text }}</li> -->
          <router-link :to="'/'+item.name" tag="li" v-for="(item,index) in otherLanguages" :key="index">{{ item.text }}</router-link>
      </ul>
  </div>
</template>

<script>
export default {
    name : 'Menu',
    data(){
        return {
            menuShow :  false,
            languages : [
                { name : 'zh_CN' , text : '简体中文'},
                { name : 'en_US' , text : 'English'},
                { name : 'es_MX' , text : 'espanol'},
                { name : 'de_DE' , text : 'Deutsch'},
            ]
        }
    },
    methods : {
        handleToOpen(){
            this.menuShow = true;
        }
    },
    computed : {
        curreutLanguage(){
            return this.languages.filter((item)=> item.name === this.$router.history.current.name)[0].text || '';
        },
        otherLanguages(){
            return this.languages.filter((item)=> item.name !== this.$router.history.current.name);
        }
    }
}
</script>

<style>
    .language-menu{
        position: absolute;
        top: 15px;
        right: 10px;
        min-width: 80px;
        cursor: pointer;
        background-color: #35bbc8;
        padding: 0 4px;
        border-radius: 5px;
        text-align: center;
    }
    .other-languages{
        margin: 15px 0;
    }
    .other-languages li{
        padding: 3px 0;
    }
</style>