/* =========================================================
   因為，需要感謝的人太多了 — 活動設定
   只要改這個檔案，學生頁和投影牆都會一起更新。
   ========================================================= */

/* 1. Apps Script 部署後拿到的網址貼在這裡（結尾是 /exec）。
      留空的話是「試玩模式」：資料只存在這台裝置，方便先測流程。 */
window.SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxS39XBlIcIw9IC3QJXjNSh9PT6zNSkcrS1D-YF7JsJ3OQFI32s-4RW2sF6PxwuUZe7xQ/exec";

/* 2. 街景任務。照格式複製一段就能加題，刪掉一段就少一題。
      map   ：學生按「打開街景」會去的地方，預設是下面的共同起點 START_MAP。
              想讓某題直接開到特定街景，在 Google 地圖按「分享」→「複製連結」，
              用 "網址" 取代那題的 START_MAP。
      photo ："required" 一定要截圖、"optional" 可以不附、"none" 不收截圖
      hint  ：給學生的小提示，可以留空 "" */
/* 所有題目的「打開街景」都從同一個起點出發，學生要自己找到題目的學校。
   想改起點，改這裡的座標（緯度,經度）就好。 */
var START_MAP = "https://www.google.com/maps/@?api=1&map_action=map&center=22.994252%2C120.217602&zoom=17";

window.MISSIONS = [
  {
    title: "南大附中的阿伯",
    place: "南大附中",
    question: "南大附中門口的阿伯，騎的機車是什麼顏色？",
    map: START_MAP,
    photo: "optional",
    hint: "校門在中山南路上，沿著校門口找找看。"
  },
  {
    title: "家齊看板下的人",
    place: "家齊高中",
    question: "站在家齊高中校門口看板底下的人，穿什麼顏色的衣服？",
    map: START_MAP,
    photo: "optional",
    hint: "校門在健康路一段上。"
  },
  {
    title: "一中的老師",
    place: "臺南一中",
    question: "在街景裡找到一位台南一中的老師，把他截圖下來。",
    map: START_MAP,
    photo: "required",
    hint: "校門口、民族路、勝利路都可以繞繞看。"
  },
  {
    title: "高商對面的關東旗",
    place: "臺南高商",
    question: "台南高商校門口對面的補習班，門口插了幾支關東旗？",
    map: START_MAP,
    photo: "optional",
    hint: "先站到高商校門口，再轉身看馬路對面。"
  },
  {
    title: "二中的榜單",
    place: "臺南二中",
    question: "台南二中的周Ｏ盈同學，考上哪所大學？",
    map: START_MAP,
    photo: "optional",
    hint: "校門在北門路二段上，看看門口的紅榜。"
  },
  {
    title: "南女的馬賽克",
    place: "臺南女中",
    question: "台南女中活動中心牆上的馬賽克拼貼，是什麼表情？",
    map: START_MAP,
    photo: "optional",
    hint: "沿著學校外圍的街道繞一圈，找活動中心的外牆。"
  }
];
