<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="12">
        <v-card class="mt-2 mb-2 pa-4">
          <v-row justify="center">
            <v-col cols="3" offset="8">
              <v-btn @click="addItem('フライドポテト', 450)" class="mb-2 mr-2">追加</v-btn>
            </v-col>
            <span>フライドポテト ¥450</span>
          </v-row>
          <v-img src="../assets/friedpoteto.jpg"></v-img>
        </v-card>

        <v-card class="mt-2 mb-2 pa-4">
          <v-row justify="center">
            <v-col cols="3" offset="8">
              <v-btn @click="addItem('タコミートポテト', 650)" class="mb-2 mr-2">追加</v-btn>
            </v-col>
            <span>タコミートチーズポテト ¥650</span>
          </v-row>
          <v-img src="../assets/cheesepoteto.jpg"></v-img>
        </v-card>

        <v-card class="mt-2 mb-2 pa-4">
          <v-row justify="center">
            <v-col cols="3" offset="8">
              <v-btn @click="addItem('ハニーマスタードポテト', 550)" class="mb-2 mr-2">追加</v-btn>
            </v-col>
            <span>ハニーマスタードポテト ¥550</span>
          </v-row>
          <v-img src="../assets/honey.jpg"></v-img>
        </v-card>

        <v-card class="mt-2 mb-2 pa-4">
          <v-row justify="center">
            <v-col cols="9">
              <span>
                生ハムのシーザーサラダ
                <br />
              </span>
              <span>¥600</span>
            </v-col>
            <v-col cols="3">
              <v-btn @click="addItem('生ハムのシーザーサラダ', 600)" class="mr-2">追加</v-btn>
            </v-col>
          </v-row>
        </v-card>

        <v-card class="mt-2 mb-2 pa-4">
          <v-row justify="center">
            <v-col cols="3" offset="8">
              <v-btn @click="addItem('イチゴのガーデンサラダ', 750)" class="mb-2 mr-2">追加</v-btn>
            </v-col>
            <span>イチゴのガーデンサラダ ¥750</span>
          </v-row>
          <v-img src="../assets/strosalada.jpg"></v-img>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";

interface Menus {
  tab: string;
  content: string;
}

export default Vue.extend({
  name: "Side",
  data() {
    return {
      selected: []
    };
  },
  methods: {
    addItem(name: string, price: number): void {
      this.$emit("addSide", { name, price });
    }
  }
});
</script>

<style lang="scss" scoped>
</style>