<template>
  <v-app>
    <main class="mt-9">
      <v-row justify="center">
        <v-col cols="9">
          <h1 class="text-center">10°TAKEOUT</h1>
          <v-row justify="center">
            <v-col cols="8">
              <h3 class="text-center mt-4">ご使用方法</h3>
            </v-col>
            <ol>
              <li class="mb-2">チェックボックスをタップするとカートに商品が入ります</li>
              <li class="mb-2">カートを確認の上、注文ボタンを押してください</li>
              <li class="mb-2">注文ボタン押下後、スタッフがお料理完成時間をラインでご連絡致します。</li>
              <li>ご注文後のキャンセルはラインにてご連絡ください。</li>
            </ol>
          </v-row>
          <p></p>
        </v-col>
      </v-row>

      <v-container>
        <v-row justify="center">
          <v-col cols="12">
            <v-card>
              <v-tabs v-model="tab" grow color="white">
                <v-tab v-for="menu in menus" :key="menu">{{ menu }}</v-tab>
              </v-tabs>

              <v-tabs-items v-model="tab">
                <!--メイン-->
                <v-tab-item>
                  <v-card flat>
                    <Main @addItem="addMain"></Main>
                  </v-card>
                </v-tab-item>

                <!--サイド-->
                <v-tab-item>
                  <v-card flat>
                    <Side @addSide="addSide"></Side>
                  </v-card>
                </v-tab-item>

                <!--ドリンク-->
                <v-tab-item>
                  <v-card flat>
                    <Drink :drinks="drinkData" @addDrink="addDrink"></Drink>
                  </v-card>
                </v-tab-item>
              </v-tabs-items>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
      <Cart @err="catchErr" :mainsProp="mains" :sidesProp="sides" :drinksProp="drinks"></Cart>
    </main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Main from "../components/Main.vue";
import Drink from "../components/Drink.vue";
import Side from "../components/Side.vue";
import Cart from "../components/Cart.vue";

import { drinkData } from "../db/drink";

interface Main {
  price: number;
  mainfood: string;
  drink: string;
  ketchup: string | undefined;
  big: string | undefined;
}
interface SideDrink {
  name: string;
  price: number;
}
interface DrinksFromDB {
  genre: string;
  data: SideDrink[];
}
interface ToCart {
  main: Main[];
  side: SideDrink[];
  drink: SideDrink[];
}
interface Data {
  tab: string;
  menus: string[];
  drinkData: DrinksFromDB[];
  mains: Main[];
  sides: SideDrink[];
  drinks: SideDrink[];
  toCart?: ToCart;
}

export default Vue.extend({
  name: "Home",
  components: { Main, Drink, Side, Cart },
  data(): Data {
    return {
      tab: "tab",
      menus: ["MAIN FOODS", "SIDE FOODS", "DRINK"],
      drinkData: drinkData,
      mains: [],
      sides: [],
      drinks: []
    };
  },
  methods: {
    addMain(main: Main): void {
      this.mains.push(main);
    },
    addSide(side: SideDrink): void {
      this.sides.push(side);
    },
    addDrink(drink: SideDrink): void {
      this.drinks.push(drink);
    },
    catchErr(err: any) {
      alert(`エラーが発生いたしました。
      もう一度ご注文をお願い致します。
      ${err}`);
    }
  }
});
</script>

<style>
.v-tabs:not(.v-tabs--vertical):not(.v-tabs--right)
  > .v-slide-group--is-overflowing.v-tabs-bar--is-mobile:not(.v-tabs-bar--show-arrows):not(.v-slide-group--has-affixes)
  .v-slide-group__prev {
  display: none !important;
  visibility: hidden;
}
.v-slide-group__content {
  background: linear-gradient(
    rgba(19, 84, 122, 0.5),
    rgba(128, 208, 199, 0.8)
  ) !important;
}
.v-item-group {
  background: linear-gradient(
    rgba(19, 84, 122, 0.5),
    rgba(128, 208, 199, 0.8)
  ) !important;
}
.v-slide-group {
  background: linear-gradient(
    rgba(19, 84, 122, 0.5),
    rgba(128, 208, 199, 0.8)
  ) !important;
}
</style>

<style scoped>
h1,
h3 {
  font-family: "Big Shoulders Display", cursive;
  border-bottom: solid 3px #cce4ff;
  position: relative;
}
h1:after,
h3::after {
  position: absolute;
  content: " ";
  display: block;
  border-bottom: solid 3px #5472cd;
  bottom: -3px;
  width: 20%;
}
</style>
