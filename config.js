/* =========================================================
   因為，需要感謝的人太多了 — 活動設定
   只要改這個檔案，學生頁和投影牆都會一起更新。
   ※ 正確答案不寫在這裡（這個檔案學生看得到），寫在 Code.gs 的 ANSWERS。
   ========================================================= */

/* 1. Apps Script 部署後拿到的網址貼在這裡（結尾是 /exec）。
      留空的話是「試玩模式」：資料只存在這台裝置，方便先測流程。 */
window.SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxS39XBlIcIw9IC3QJXjNSh9PT6zNSkcrS1D-YF7JsJ3OQFI32s-4RW2sF6PxwuUZe7xQ/exec";

/* 每題搶答結束後，給大家寫謝謝的秒數（倒數計時用，時間到後還是可以送）。 */
window.THANKS_SECONDS = 60;

/* 排行榜計分：每一題（有正確答案的題目）答對的隊伍，照答對先後給分。
   POINTS 是第 1、2、3 名的分數；第 4 名以後答對的都拿 CORRECT_POINTS 分。
   同分時，依序比：拿過幾次第一名、各題名次加總、答對時間加總（越快越前面）。 */
window.POINTS = [5, 4, 3];
window.CORRECT_POINTS = 2;

/* 所有題目的「打開街景」都從同一個起點出發，學生要自己找到地方。
   想改起點，改這裡的座標（緯度,經度）就好。 */
var START_MAP = "https://www.google.com/maps/@?api=1&map_action=map&center=22.994252%2C120.217602&zoom=17";

/* 2. 街景任務，照順序一題一題進行。
      id        ：題目代號，要跟 Code.gs 的 ANSWERS 對得上（有寫答案的題目才會排名次）
      practice  ：true 表示試玩題，畫面上顯示「試玩題」，不佔題號
      map       ：學生按「打開街景」會去的地方，預設是共同起點 START_MAP
      photo     ："required" 一定要截圖、"optional" 可以不附、"none" 不收截圖
      askAnswer ：寫 false 就不顯示「你的答案」欄（只要截圖的題目）
      hint      ：給學生的小提示，可以留空 ""
      thanksLead：搶答結束後的引導句，帶學生想到某個人
      thanksTo  ：這題要學生寫一句謝謝給誰 */
window.MISSIONS = [
  {
    id: "practice",
    practice: true,
    title: "校契的鐵門",
    question: "校契的鐵門是什麼顏色？",
    map: START_MAP,
    photo: "optional",
    hint: "先熟悉一下：打開街景、找到答案、回來送出。",
    thanksLead: "你今天是怎麼來到這裡的？",
    thanksTo: "邀請你、帶你來聚會的人"
  },
  {
    id: "jiaqi",
    title: "家齊看板下的人",
    question: "站在家齊高中校門口看板底下的人，穿什麼顏色的衣服？",
    map: START_MAP,
    photo: "optional",
    hint: "校門在健康路一段上。",
    thanksLead: "校門口總有人站著、等著。你也有一直在等你的人嗎？",
    thanksTo: "校門口的警衛、導護志工，或總是等你一起放學的朋友"
  },
  {
    id: "nanda",
    title: "南大附中的雙載阿伯",
    question: "南大附中「校門口的雙載」阿伯的機車是什麼顏色？",
    map: START_MAP,
    photo: "optional",
    hint: "校門在中山南路上，沿著校門口找找看。",
    thanksLead: "阿伯雙載著人到學校。你有沒有被誰載過、陪過一段上學的路？",
    thanksTo: "載過你、陪你走過上學路的人（家人、司機、同學、交通導護都可以）"
  },
  {
    id: "nanshang",
    title: "南商對面的關東旗",
    question: "南商校門口對面的補習班，門口插了幾支關東旗？",
    map: START_MAP,
    photo: "optional",
    hint: "先站到南商校門口，再轉身看馬路對面。",
    thanksLead: "補習班門口好熱鬧。誰陪你撐過那些難懂的題目？",
    thanksTo: "補習班老師，或常常教你課業的同學"
  },
  {
    id: "erzhong",
    title: "二中的榜單",
    question: "台南二中的周Ｏ盈同學，考上哪所大學？",
    map: START_MAP,
    photo: "optional",
    hint: "校門在北門路二段上，看看門口的紅榜。",
    thanksLead: "學長姐的名字掛在榜上。有沒有哪個學長姐給過你方向？",
    thanksTo: "帶過你、給你建議的學長姐"
  },
  {
    id: "nannv",
    title: "南女的馬賽克",
    question: "台南女中活動中心牆上的馬賽克拼貼，是什麼表情？",
    map: START_MAP,
    photo: "optional",
    hint: "沿著學校外圍的街道繞一圈，找活動中心的外牆。",
    thanksLead: "牆上的那張臉，讓你想起誰的表情？",
    thanksTo: "在你難過的時候陪著你、逗你笑的朋友"
  },
  {
    id: "yizhong",
    title: "一中的老師",
    question: "在街景裡找到一位台南一中的老師，把他截圖下來。",
    map: START_MAP,
    photo: "required",
    askAnswer: false,
    hint: "校門口、民族路、勝利路都可以繞繞看。",
    thanksLead: "老師找到了。你心裡也有一位想謝謝的老師嗎？",
    thanksTo: "教過你、影響你的老師"
  }
];
