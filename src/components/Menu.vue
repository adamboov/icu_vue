<template>
  <div class="language-menu">
      <div @click="handleToOpen" class="current-language">
          {{ curreutLanguage }}
      </div>
      <ul v-if="menuShow" class="other-languages">
          <li>English</li>
          <li>espanol</li>
          <li>Deutsch</li>
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
        background-color: #de335e;
        padding: 0 4px;
    }
    .other-languages{
        margin: 15px 0;
    }
    .other-languages li{
        padding: 3px 0;
    }
</style>