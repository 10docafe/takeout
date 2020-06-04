<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="12">
        <v-card>
          <v-row justify="center">
            <v-checkbox v-model="selected" label="野菜たっぷりタコライスコンボ" value="コンボ"></v-checkbox>
            <v-row justify="center" align="center">
              <h5 class="mr-2">セット内容</h5>
              <ul>
                <li>タコライス</li>
                <li>ポテト</li>
                <li>ロータスビスケット</li>
                <li>ドリンク</li>
              </ul>
            </v-row>
            <v-card-text>¥1,000</v-card-text>
          </v-row>
          <v-img src="../assets/combo.jpg"></v-img>
          <v-row justify="space-around">
            <v-radio-group label="お好きなドリンクを1つお選びください。" c>
              <v-radio v-model="selected" label="アイスコーヒー" value="コンボ"></v-radio>
              <v-radio v-model="selected" label="ホットコーヒー" value="コンボ"></v-radio>
              <v-radio v-model="selected" label="アイスティー" value="コンボ"></v-radio>
              <v-radio v-model="selected" label="ホットティー" value="コンボ"></v-radio>
              <v-radio v-model="selected" label="ウーロン茶" value="コンボ"></v-radio>
              <v-radio v-model="selected" label="ホットウーロン茶" value="コンボ"></v-radio>
              <v-radio v-model="selected" label="オレンジジュース" value="コンボ"></v-radio>
            </v-radio-group>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";

interface Menus {
  tab: string;
  content: string;
}

export default Vue.extend({
  name: "Menu",
  props: {}
});
</script>

<style lang="scss" scoped>
</style>