<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="12">
        <v-row justify="center">
          <h3 class="mb-4">メインフードの注文</h3>
          <ol>
            <li>メインフードを選択</li>
            <li>オプションの選択</li>
            <li>ドリンクセットの選択</li>
          </ol>
        </v-row>
        <v-radio-group v-model="mainfood" class="mb-4">
          <h3>1.メインフード選択(選択必須)</h3>
          <v-card class="mt-2 mb-2">
            <v-row justify="center" class="mb-4 mt-4">
              <v-radio label="野菜たっぷりタコライスコンボ" value="タコライスコンボ"></v-radio>
            </v-row>
            <v-img src="../assets/combo.jpg"></v-img>
            <v-card-text>¥1,000</v-card-text>
          </v-card>

          <v-card class="mt-2 mb-2">
            <v-row justify="center" class="mb-4 mt-4">
              <v-radio label="野菜たっぷりタコライス" value="タコライス"></v-radio>
            </v-row>
            <v-img src="../assets/taco.jpg"></v-img>
            <v-card-text>¥8,00</v-card-text>
          </v-card>

          <v-card class="mt-2 mb-2 pt-3 pb-3">
            <v-row justify="center">
              <v-radio label="チーズたっぷりタコライス ¥850" value="チーズタコライス"></v-radio>
            </v-row>
          </v-card>
        </v-radio-group>

        <template v-if="mainfood">
          <h3>2.オプション選択</h3>
          <v-card class="mb-4">
            <v-card class="mb-2 mt-2">
              <v-row justify="center">
                <v-checkbox v-model="big" label="ご飯大盛り ¥100" value="ご飯大盛"></v-checkbox>
              </v-row>
            </v-card>
            <v-card>
              <v-row justify="center">
                <v-checkbox v-model="ketchup" label="ケチャップ変更 無料" value="ケチャップ変更"></v-checkbox>
                <span>＊タコソースは辛いのでご注意ください</span>
              </v-row>
            </v-card>
          </v-card>
        </template>

        <template v-if="mainfood">
          <h3>3.ドリンクセット(選択必須)</h3>
          <span>タコライスコンボはドリンク付きです。</span>
          <span>通常のタコライスは+100円です。</span>
          <v-radio-group v-model="drink">
            <v-card class="mt-1 mb-1" v-for="set in sets" :key="set.name">
              <v-row justify="center" class="mb-2 mt-2">
                <v-radio :label="set.name" :value="set.name"></v-radio>
              </v-row>
            </v-card>
          </v-radio-group>
        </template>
        <v-row justify="center" v-if="finish">
          <v-col cols="6">
            <v-btn @click="addItem" class="mb-2">セットを追加する</v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import { drinkset } from "../db/drink";

interface Menus {
  tab: string;
  content: string;
}

export default Vue.extend({
  name: "Main",
  data() {
    return {
      mainfood: "",
      sets: drinkset,
      ketchup: "",
      big: "",
      drink: ""
    };
  },
  computed: {
    //ボタンの表示
    finish(): boolean {
      if (this.drink && this.mainfood) return true;
      else return false;
    }
  },
  methods: {
    addItem() {
      const mainfood = this.mainfood;
      let price = 0;

      //メインフードの料金計算
      if (mainfood === "タコライスコンボ") price += 1000;
      else if (mainfood === "タコライス") price += 800;
      else if (mainfood === "温卵タコライス") price += 850;
      else if (mainfood === "チーズタコライス") price += 850;

      //大盛なら＋100円
      if (this.big) price += 100;

      if (mainfood === "タコライスコンボ") {
        const data = {
          price,
          mainfood,
          drink: this.drink,
          ketchup: this.ketchup,
          big: this.big
        };
        this.$emit("addItem", data);
      } else {
        //ドリンクがあるなら
        if (this.drink !== "なし") price += 100;
        const data = {
          price,
          mainfood,
          drink: this.drink,
          ketchup: this.ketchup,
          big: this.big
        };
        this.$emit("addItem", data);
      }
      //フォームをクリア
      this.mainfood = "";
      this.ketchup = "";
      this.big = "";
      this.drink = "";
    }
  }
});
</script>

<style lang="scss" scoped>
h3 {
  font-family: "Big Shoulders Display", cursive;
  border-bottom: solid 3px #cce4ff;
  position: relative;
}
h3:after {
  position: absolute;
  content: " ";
  display: block;
  border-bottom: solid 3px #5472cd;
  bottom: -3px;
  width: 20%;
}
</style>