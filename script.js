// ======================================================
// COCOPALM HANDBOOK
// Version 2.0
// Author : ChatGPT
// ======================================================

// ======================================================
// DOM
// ======================================================

const home = document.querySelector(".home");
const manualPage = document.getElementById("manualPage");
const manualTitle = document.getElementById("manualTitle");
const manualContent = document.getElementById("manualContent");

const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");

const menuLinks = document.querySelectorAll(".submenu a");
const homeButton = document.querySelector("[data-page='home']");
const backHome = document.getElementById("backHome");


// ======================================================
// APP
// ======================================================

const APP = {

    favorites : JSON.parse(localStorage.getItem("favorites") || "[]"),

    recent : JSON.parse(localStorage.getItem("recent") || "[]"),

    current : null,

    keyword : ""

};


// ======================================================
// HANDBOOK DATA
// ======================================================

const handbookData = [

{

id : "sale",

title : "📦 물품 판매",

category : "콜 메뉴얼",

description : "물품 판매 메뉴얼",

keywords : [

"판매",
"물품",
"씨앗",
"비료",
"호미",
"뮤직박스"

],

content : `

<h1>📦 물품 판매</h1>

<h2>판매 절차</h2>

<ol>

<li>손님의 구매 요청을 확인합니다.</li>

<li>인트라넷에서 구매 이력을 조회합니다.</li>

<li>VIP 여부를 확인합니다.</li>

<li>일일 구매 가능 수량을 확인합니다.</li>

<li>판매 가능한 경우 물품을 지급합니다.</li>

<li>지급 후 다시 한번 수량을 확인합니다.</li>

<li>거래를 마무리하고 인사를 드립니다.</li>

</ol>

<hr>

<h2>주의사항</h2>

<ul>

<li>구매 이력 확인은 필수입니다.</li>

<li>VIP 여부를 반드시 확인합니다.</li>

<li>일일 판매 제한을 초과하면 안됩니다.</li>

<li>지급 전과 지급 후 수량을 다시 확인합니다.</li>

<li>문제가 발생하면 즉시 스태프를 호출합니다.</li>

</ul>

`

},

{

id : "exchange",

title : "🚜 작물 환전",

category : "콜 메뉴얼",

description : "작물 환전",

keywords : [

"환전",
"작물",
"농작물",
"돈"

],

content : `

<h1>🚜 작물 환전</h1>

<h2>환전 절차</h2>

<ol>

<li>손님의 작물을 확인합니다.</li>

<li>총 수량을 확인합니다.</li>

<li>환전 금액을 계산합니다.</li>

<li>환전 금액을 다시 확인합니다.</li>

<li>금액을 지급합니다.</li>

<li>거래 완료 후 인사를 드립니다.</li>

</ol>

<hr>

<h2>주의사항</h2>

<ul>

<li>환전 금액을 반드시 두 번 확인합니다.</li>

<li>수량 계산 실수가 없는지 확인합니다.</li>

<li>금액 오지급이 발생하지 않도록 주의합니다.</li>

</ul>

`

},

{

id : "seed",

title : "🌱 씨앗",

category : "팩션 물품",

description : "씨앗 판매 기준",

keywords : [

"씨앗",
"전설씨앗",
"일반씨앗",
"고급씨앗",
"특수씨앗"

],

content : `
<h1>🌱 씨앗 판매 기준</h1>

<h2>일일 구매 가능 수량</h2>

<h3>일반 · 고급 · 특수 씨앗</h3>

<table class="manual-table">

<tr>

<th>등급</th>

<th>일반</th>

<th>VIP</th>

</tr>

<tr>

<td>일반 · 고급 · 특수</td>

<td>200개</td>

<td>400개</td>

</tr>

<tr>

<td>전설</td>

<td>100개</td>

<td>100개</td>

</tr>

</table>

<hr>

<h2>구매 제한</h2>

<p>

전설 씨앗은 일반 · 고급 · 특수 씨앗과 구매 한도를 공유합니다.

</p>

<p>

<b>전설 씨앗 1개 = 일반 씨앗 2개</b>

</p>

<hr>

<h2>구매 가능 예시</h2>

<h3>일반 시민</h3>

<table class="manual-table">

<tr>

<th>구매 내역</th>

<th>추가 구매 가능</th>

</tr>

<tr>

<td>전설 100개</td>

<td>일반 0개</td>

</tr>

<tr>

<td>전설 50개</td>

<td>일반 100개</td>

</tr>

<tr>

<td>전설 25개</td>

<td>일반 150개</td>

</tr>

<tr>

<td>일반 200개</td>

<td>전설 0개</td>

</tr>

</table>

<br>

<h3>VIP</h3>

<table class="manual-table">

<tr>

<th>구매 내역</th>

<th>추가 구매 가능</th>

</tr>

<tr>

<td>전설 100개</td>

<td>일반 200개</td>

</tr>

<tr>

<td>전설 50개</td>

<td>일반 300개</td>

</tr>

<tr>

<td>전설 0개</td>

<td>일반 400개</td>

</tr>

<tr>

<td>일반 400개</td>

<td>전설 0개</td>

</tr>

</table>

<hr>

<h2>주의사항</h2>

<ul>

<li>판매 전 반드시 구매 이력을 조회합니다.</li>

<li>전설 씨앗은 일반 · 고급 · 특수 씨앗과 한도를 공유합니다.</li>

<li>전설 씨앗 1개는 일반 씨앗 2개로 계산합니다.</li>

<li>일일 구매 제한을 초과하여 판매하면 안됩니다.</li>

<li>VIP 여부를 반드시 확인합니다.</li>

</ul>

`

},

{

id : "fertilizer",

title : "🧪 비료",

category : "팩션 물품",

description : "비료 판매 기준",

keywords : [

"비료",
"일반비료",
"vip비료"

],

content : `

<h1>🧪 비료 판매 기준</h1>

<h2>일일 구매 가능 수량</h2>

<table class="manual-table">

<tr>

<th>등급</th>

<th>구매 가능</th>

</tr>

<tr>

<td>일반</td>

<td>200개</td>

</tr>

<tr>

<td>VIP</td>

<td>400개</td>

</tr>

</table>

<hr>

<h2>주의사항</h2>

<ul>

<li>구매 이력을 반드시 확인합니다.</li>


<li>일일 판매 제한을 초과하면 안됩니다.</li>

<li>VIP 여부를 반드시 확인합니다.</li>

</ul>

`

},

{

id : "crop",

title : "🌾 농작물",

category : "팩션 물품",

description : "농작물 매입 기준",

keywords : [

"농작물",
"코코넛",
"두리안",
"환전"

],

content : `
<h1>🌾 농작물 매입 기준</h1>

<h2>매입 조건</h2>

<p>

농작물은 <b>총합 100개 이상</b>부터 매입 가능합니다.

</p>

<hr>

<h2>매입 가능 예시</h2>

<table class="manual-table">

<tr>

<th>농작물</th>

<th>총합</th>

<th>매입</th>

</tr>

<tr>

<td>코코넛 5개 + 두리안 100개</td>

<td>105개</td>

<td>✅ 가능</td>

</tr>

<tr>

<td>코코넛 50개 + 두리안 50개</td>

<td>100개</td>

<td>✅ 가능</td>

</tr>

<tr>

<td>코코넛 99개</td>

<td>99개</td>

<td>❌ 불가능</td>

</tr>

<tr>

<td>코코넛 20개 + 두리안 30개</td>

<td>50개</td>

<td>❌ 불가능</td>

</tr>

</table>

<hr>

<h2>주의사항</h2>

<ul>

<li>총합이 100개 이상인지 반드시 확인합니다.</li>

<li>작물 종류와 관계없이 총합 기준입니다.</li>

<li>100개 미만은 매입이 불가능합니다.</li>

<li>환전 금액을 지급하기 전에 다시 한번 확인합니다.</li>

</ul>

`

},

{

id : "hoe",

title : "⛏️ 호미",

category : "팩션 물품",

description : "호미 판매 기준",

keywords : [

"호미",
"강화호미",
"판매"

],

content : `

<h1>⛏️ 호미 판매 기준</h1>

<h2>구매 제한</h2>

<p>

호미는 <b>일일 구매 제한이 없습니다.</b>

</p>

<hr>

<h2>판매 절차</h2>

<ol>

<li>손님의 구매 요청을 확인합니다.</li>

<li>구매 수량을 확인합니다.</li>

<li>호미를 지급합니다.</li>

<li>지급 후 수량을 다시 확인합니다.</li>

</ol>

<hr>

<h2>주의사항</h2>

<ul>

<li>일일 구매 제한이 없습니다.</li>

<li>지급 수량만 정확히 확인합니다.</li>

<li>잘못 지급한 경우 즉시 회수 후 다시 지급합니다.</li>

</ul>

`

},

{

id : "musicbox",

title : "🎵 뮤직박스",

category : "팩션 물품",

description : "뮤직박스 사용법",

keywords : [

"뮤직박스",
"music",
"노래",
"1개",
"일일",
"구매제한",
"구매 가능"

],


content : `

<h1>🎵 뮤직박스</h1>

<p>

뮤직박스는 <b>일일 구매 제한이 1개 입니다. </b>
</p>


<h2>명령어</h2>

<table class="manual-table">

<tr>

<th>명령어</th>

<th>설명</th>

</tr>

<tr>

<td>/뮤직박스</td>

<td>뮤직박스 실행</td>

</tr>

<tr>

<td>/뮤직박스기간</td>

<td>남은 기간 확인</td>

</tr>

</table>

<hr>

<h2>단축키</h2>

<table class="manual-table">

<tr>

<th>키</th>

<th>기능</th>

</tr>

<tr>

<td>Y</td>

<td>뮤직박스 들기 / 내려놓기</td>

</tr>

<tr>

<td>ALT + Y</td>

<td>뮤직박스 패널 열기</td>

</tr>

<tr>

<td>PAGE UP</td>

<td>무비 크게 보기</td>

</tr>

<tr>

<td>ESC</td>

<td>패널 닫기</td>

</tr>

</table>

<hr>

<h2>주의사항</h2>

<ul>

<li>사용 기간을 확인한 후 안내합니다.</li>

<li>단축키를 모르는 경우 함께 안내합니다.</li>

<li>오작동 시 재접속 후 다시 시도하도록 안내합니다.</li>

</ul>

`

},
{

id : "mistake",

title : "📦 팩션 물품 수량 실수",

category : "응대",

description : "팩션 물품 수량 실수",

keywords : [

"수량",
"실수",
"오지급",
"회수"

],

content : `

<h1>📦 팩션 물품 수량 실수</h1>

<h2>상황</h2>

<p>

손님에게 요청한 수량보다 많이 지급하거나 적게 지급한 경우입니다.

</p>

<hr>

<h2>응대 절차</h2>

<ol>

<li>손님께 먼저 사과드립니다.</li>

<li>지급한 수량을 다시 확인합니다.</li>

<li>잘못 지급된 물품을 전량 회수합니다.</li>

<li>정확한 수량으로 다시 지급합니다.</li>

<li>스태프를 호출하여 확인을 받습니다.</li>

<li>이모지(✅) 체크를 진행합니다.</li>

<li>고간부에게 상황을 보고합니다.</li>

</ol>

<hr>

<h2>안내 멘트</h2>

<div class="notice-box">

죄송합니다.<br><br>

물품 지급 과정에서 수량 착오가 발생했습니다.<br>

회수 후 정확한 수량으로 다시 지급해드리겠습니다.

</div>

<hr>

<h2>주의사항</h2>

<ul>

<li>혼자 해결하지 않습니다.</li>

<li>반드시 스태프 확인을 받습니다.</li>

<li>회수 없이 추가 지급하면 안됩니다.</li>

<li>지급 내역을 반드시 확인합니다.</li>

</ul>

`

},

{

id : "wrong",

title : "🔄 팩션 물품 오지급",

category : "응대",

description : "다른 물품 지급",

keywords : [

"오지급",
"다른물품",
"잘못지급"

],

content : `

<h1>🔄 팩션 물품 오지급</h1>

<h2>상황</h2>

<p>

손님이 요청하지 않은 물품을 지급한 경우입니다.

</p>

<hr>

<h2>응대 절차</h2>

<ol>

<li>손님께 사과드립니다.</li>

<li>잘못 지급된 물품을 회수합니다.</li>

<li>주문한 물품을 다시 지급합니다.</li>

<li>스태프 확인을 받습니다.</li>

<li>이모지(✅) 체크를 진행합니다.</li>

<li>고간부에게 상황을 보고합니다.</li>

</ol>

<hr>

<h2>안내 멘트</h2>

<div class="notice-box">

죄송합니다.<br><br>

잘못된 물품이 지급되었습니다.<br>

회수 후 주문하신 물품으로 다시 지급해드리겠습니다.

</div>

<hr>

<h2>주의사항</h2>

<ul>

<li>잘못 지급한 물품은 반드시 회수합니다.</li>

<li>회수 전에 다시 지급하지 않습니다.</li>

<li>손님의 주문 내역을 다시 확인합니다.</li>

</ul>

`

},
{

id : "money",

title : "💰 작물 환전 금액 오지급",

category : "응대",

description : "환전 금액 오지급",

keywords : [

"환전",
"금액",
"오지급",
"돈",
"환불"

],

content : `

<h1>💰 작물 환전 금액 오지급</h1>

<h2>상황</h2>

<p>

작물 환전 과정에서 실제 지급해야 하는 금액보다 많거나 적게 지급한 경우입니다.

</p>

<hr>

<h2>응대 절차</h2>

<ol>

<li>손님께 먼저 사과드립니다.</li>

<li>환전 내역과 지급 금액을 다시 확인합니다.</li>

<li>초과 지급된 경우 금액을 회수합니다.</li>

<li>부족 지급된 경우 차액을 지급합니다.</li>

<li>스태프를 호출하여 확인을 받습니다.</li>

<li>이모지(✅) 체크를 진행합니다.</li>

<li>고간부에게 상황을 보고합니다.</li>

</ol>

<hr>

<h2>안내 멘트</h2>

<div class="notice-box">

죄송합니다.<br><br>

환전 금액 지급 과정에서 착오가 발생했습니다.<br>

확인 후 정확한 금액으로 다시 처리해드리겠습니다.

</div>

<hr>

<h2>주의사항</h2>

<ul>

<li>환전 금액을 반드시 다시 계산합니다.</li>

<li>회수 또는 추가 지급 전 스태프 확인을 받습니다.</li>

<li>거래 내역을 반드시 확인합니다.</li>

<li>고간부에게 상황을 보고합니다.</li>

</ul>

`

},

{

id : "limit",



title : "🚫 일일 판매 수량 초과",

category : "응대",

description : "판매 제한 초과",

keywords : [

"판매",
"초과",
"제한",
"VIP",
"수량"

],

content : `

<h1>🚫 일일 판매 수량 초과</h1>

<h2>상황</h2>

<p>

일일 구매 제한을 초과하여 물품을 판매한 경우입니다.

</p>

<hr>

<h2>응대 절차</h2>

<ol>

<li>손님께 먼저 사과드립니다.</li>

<li>인트라넷 구매 내역을 확인합니다.</li>

<li>초과 판매된 물품을 회수합니다.</li>

<li>결제 금액을 환불합니다.</li>

<li>스태프를 호출하여 확인을 받습니다.</li>

<li>이모지(✅) 체크를 진행합니다.</li>

<li>고간부에게 상황을 보고합니다.</li>

</ol>

<hr>

<h2>안내 멘트</h2>

<div class="notice-box">

죄송합니다.<br><br>

구매 제한 확인 과정에서 착오가 있었습니다.<br>

초과 판매된 물품을 회수한 뒤 환불을 진행해드리겠습니다.

</div>

<hr>

<h2>주의사항</h2>

<ul>

<li>구매 이력을 반드시 확인합니다.</li>

<li>VIP 여부를 다시 확인합니다.</li>

<li>회수 없이 그대로 판매를 유지하면 안됩니다.</li>

<li>반드시 스태프 확인 후 처리합니다.</li>

</ul>

`

},


{


id : "report",

title : "📝 사건 보고서 양식",

category : "사건 보고서",

description : "사건 보고서 작성 양식",

keywords : [

"사건",
"보고서",
"양식",
"오지급",
"수량실수"

],

content : `

<h1>📝 사건 보고서 양식</h1>

<div class="notice-box">

거래 중 물품 오지급, 수량 실수 등의 문제가 발생했을 경우 아래 양식에 맞게 작성하여 <b>고간부</b>에게 전달합니다.

</div>

<hr>

<h2>📋 사건 보고서 양식</h2>

<div class="notice-box">

<b>사건 보고서</b><br><br>

판매자 :<br><br>

구매자 :<br><br>

사유 :

</div>

<hr>

<h2>📌 작성 안내</h2>

<p>

거래 중 문제가 발생했을 경우 위 양식에 맞게 작성하여 고간부에게 전달합니다.

</p>

<p>

작성이 어려울 경우 아래 예시를 참고하여 작성합니다.

</p>

<hr>

<h2>📝 작성 예시</h2>

<div class="notice-box">

<b>사건 보고서 (물품 오지급)</b><br><br>

판매자 : 기자(9556)<br><br>

구매자 : 쫑(1178)<br><br>

사유 :<br><br>

구매자인 쫑(1178)님이 두리안 씨앗 200개를 요청하셔서 판매를 진행하던 중 두리안 씨앗 200개가 아닌 고추 씨앗 200개를 지급하였습니다.<br><br>

이후 잘못 지급된 고추 씨앗 200개를 전량 회수하고 두리안 씨앗 200개를 정상 지급하였습니다.<br><br>

스태프를 호출하여 이모지(✅) 체크까지 완료하였습니다.

</div>

<hr>

<h2>⚠️ 주의사항</h2>

<ul>

<li>판매자와 구매자의 닉네임 및 고유번호를 함께 작성합니다.</li>

<li>사건 내용을 시간 순서대로 상세하게 작성합니다.</li>

<li>회수, 재지급 등 처리 결과를 반드시 작성합니다.</li>

<li>스태프 확인 및 이모지(✅) 체크 여부를 작성합니다.</li>

<li>작성 완료 후 고간부에게 전달합니다.</li>

</ul>

`

}




]






// =====================================================
// 기본 함수
// =====================================================

function saveFavorites(){

    localStorage.setItem(

        "favorites",

        JSON.stringify(APP.favorites)

    );

}

function saveRecent(){

    localStorage.setItem(

        "recent",

        JSON.stringify(APP.recent)

    );

}

function addRecent(id){

    APP.recent = APP.recent.filter(

        item => item !== id

    );

    APP.recent.unshift(id);

    APP.recent = APP.recent.slice(0,10);

    saveRecent();

}
// =====================================================
// 메뉴 열기
// =====================================================

function setActiveMenu(id){

    document.querySelectorAll(".submenu a").forEach(link=>{

        link.classList.remove("active");

    });

    const target=document.querySelector(

        `[data-id="${id}"]`

    );

    if(target){

        target.classList.add("active");

    }

    homeButton.classList.remove("active");

}

function goHome(){

    APP.current=null;

    manualPage.style.display="none";

    home.style.display="block";

    searchResults.innerHTML="";

    searchInput.value="";

    document.querySelectorAll(".menu a").forEach(link=>{

        link.classList.remove("active");

    });

    homeButton.classList.add("active");

}

function openManual(id){

    const item=handbookData.find(

        x=>x.id===id

    );

    if(!item){

        return;

    }

    APP.current=id;

    addRecent(id);

    setActiveMenu(id);

    home.style.display="none";

    manualPage.style.display="block";

    manualTitle.innerHTML=item.title;

    manualContent.innerHTML=item.content;

    manualPage.scrollTop=0;

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

    renderFavoriteButton();

}

function nextManual(){

    if(!APP.current){

        return;

    }

    const index=handbookData.findIndex(

        x=>x.id===APP.current

    );

    if(index==-1){

        return;

    }

    if(index>=handbookData.length-1){

        return;

    }

    openManual(

        handbookData[index+1].id

    );

}

function prevManual(){

    if(!APP.current){

        return;

    }

    const index=handbookData.findIndex(

        x=>x.id===APP.current

    );

    if(index<=0){

        return;

    }

    openManual(

        handbookData[index-1].id

    );

}


// =====================================================
// 즐겨찾기
// =====================================================

function isFavorite(id){

    return APP.favorites.includes(id);

}

function toggleFavorite(id){

    if(isFavorite(id)){

        APP.favorites=APP.favorites.filter(

            item=>item!==id

        );

    }

    else{

        APP.favorites.push(id);

    }

    saveFavorites();

    renderFavoriteButton();

}

function renderFavoriteButton(){

    if(!APP.current){

        return;

    }

    let btn=document.getElementById(

        "favoriteButton"

    );

    if(btn){

        btn.remove();

    }

    btn=document.createElement("button");

    btn.id="favoriteButton";

    btn.className="favorite-btn";

    btn.innerHTML=isFavorite(APP.current)

    ?

    "⭐ 즐겨찾기 해제"

    :

    "☆ 즐겨찾기";

    btn.onclick=()=>{

        toggleFavorite(APP.current);

    };

    manualTitle.after(btn);

}
// =====================================================
// 검색 엔진
// =====================================================

function normalize(text){

    return String(text)

    .toLowerCase()

    .replace(/\s+/g," ")

    .trim();

}

function getPlainText(html){

    const div=document.createElement("div");

    div.innerHTML=html;

    return div.innerText;

}

function makeSnippet(text,keyword){

    const lower=text.toLowerCase();

    const index=lower.indexOf(

        keyword.toLowerCase()

    );

    if(index==-1){

        return text.substring(0,120)+"...";

    }

    let start=index-45;

    let end=index+75;

    if(start<0){

        start=0;

    }

    if(end>text.length){

        end=text.length;

    }

    return "..."+text.substring(start,end)+"...";

}

function highlight(text,keyword){

    if(!keyword){

        return text;

    }

    const reg=new RegExp(

        keyword,

        "gi"

    );

    return text.replace(

        reg,

        match=>`<mark>${match}</mark>`

    );

}

function searchManual(keyword){

    keyword=normalize(keyword);

    APP.keyword=keyword;

    if(keyword===""){

        renderResults([]);

        return;

    }

    const result=[];

    handbookData.forEach(item=>{

        const title=normalize(item.title);

        const category=normalize(item.category);

        const desc=normalize(item.description);

        const body=normalize(

            getPlainText(item.content)

        );

        const keywords=item.keywords.join(" ").toLowerCase();

        let score=0;

        if(title.includes(keyword)) score+=100;

        if(category.includes(keyword)) score+=40;

        if(desc.includes(keyword)) score+=30;

        if(keywords.includes(keyword)) score+=20;

        if(body.includes(keyword)) score+=10;

        if(score>0){

            result.push({

                ...item,

                score

            });

        }

    });

    result.sort((a,b)=>{

        return b.score-a.score;

    });

    renderResults(result);

}


// =====================================================
// 검색 결과 출력
// =====================================================

function renderResults(list){

    searchResults.innerHTML="";

    if(list.length===0){

        searchResults.innerHTML=`

        <div class="result-card">

            <h3>검색 결과가 없습니다.</h3>

            <p>다른 검색어를 입력해주세요.</p>

        </div>

        `;

        return;

    }

    list.forEach(item=>{

        const card=document.createElement("div");

        card.className="result-card";

        const preview=makeSnippet(

            getPlainText(item.content),

            APP.keyword

        );

        card.innerHTML=`

            <h3>

                ${highlight(item.title,APP.keyword)}

            </h3>

            <span>

                ${item.category}

            </span>

            <p>

                ${highlight(preview,APP.keyword)}

            </p>

        `;

        card.onclick=()=>{

            openManual(item.id);

            searchResults.innerHTML="";

            searchInput.value="";

        };

        searchResults.appendChild(card);

    });

}
// =====================================================
// 검색 이벤트
// =====================================================

searchInput.addEventListener("input",function(){

    searchManual(this.value);

});

searchInput.addEventListener("keydown",function(e){

    if(e.key==="Enter"){

        const first=document.querySelector(

            ".result-card"

        );

        if(first){

            first.click();

        }

    }

});


// =====================================================
// Ctrl + K 검색
// =====================================================

document.addEventListener("keydown",function(e){

    if(e.ctrlKey && e.key.toLowerCase()==="k"){

        e.preventDefault();

        goHome();

        searchInput.focus();

        searchInput.select();

    }

});


// =====================================================
// ESC 홈
// =====================================================

document.addEventListener("keydown",function(e){

    if(e.key==="Escape"){

        goHome();

    }

});


// =====================================================
// 최근 본 문서
// =====================================================

function renderRecent(){

    const old=document.getElementById("recentBox");

    if(old){

        old.remove();

    }

    if(APP.recent.length===0){

        return;

    }

    const box=document.createElement("div");

    box.id="recentBox";

    box.className="recent-box";

    box.innerHTML=`<h3>🕒 최근 본 문서</h3>`;

    APP.recent.forEach(id=>{

        const item=handbookData.find(

            x=>x.id===id

        );

        if(!item){

            return;

        }

        const btn=document.createElement("button");

        btn.className="recent-item";

        btn.innerHTML=item.title;

        btn.onclick=()=>{

            openManual(id);

        };

        box.appendChild(btn);

    });

    home.appendChild(box);

}


// =====================================================
// 즐겨찾기 목록
// =====================================================

function renderFavorites(){

    const old=document.getElementById("favoriteBox");

    if(old){

        old.remove();

    }

    if(APP.favorites.length===0){

        return;

    }

    const box=document.createElement("div");

    box.id="favoriteBox";

    box.className="favorite-box";

    box.innerHTML=`<h3>⭐ 즐겨찾기</h3>`;

    APP.favorites.forEach(id=>{

        const item=handbookData.find(

            x=>x.id===id

        );

        if(!item){

            return;

        }

        const btn=document.createElement("button");

        btn.className="favorite-item";

        btn.innerHTML=item.title;

        btn.onclick=()=>{

            openManual(id);

        };

        box.appendChild(btn);

    });

    home.appendChild(box);

}


// =====================================================
// 홈 갱신
// =====================================================

function refreshHome(){

    renderRecent();

    renderFavorites();

}
// =====================================================
// 검색 결과 방향키 이동
// =====================================================

let selectedIndex = -1;

document.addEventListener("keydown",function(e){

    const cards=document.querySelectorAll(".result-card");

    if(cards.length===0){

        return;

    }

    if(e.key==="ArrowDown"){

        e.preventDefault();

        selectedIndex++;

        if(selectedIndex>=cards.length){

            selectedIndex=0;

        }

        updateSearchSelection(cards);

    }

    if(e.key==="ArrowUp"){

        e.preventDefault();

        selectedIndex--;

        if(selectedIndex<0){

            selectedIndex=cards.length-1;

        }

        updateSearchSelection(cards);

    }

    if(e.key==="Enter" && selectedIndex>-1){

        cards[selectedIndex].click();

    }

});

function updateSearchSelection(cards){

    cards.forEach(card=>{

        card.classList.remove("selected");

    });

    if(cards[selectedIndex]){

        cards[selectedIndex].classList.add("selected");

        cards[selectedIndex].scrollIntoView({

            behavior:"smooth",

            block:"nearest"

        });

    }

}


// =====================================================
// 메뉴 클릭
// =====================================================

menuLinks.forEach(link=>{

    link.addEventListener("click",function(e){

        e.preventDefault();

        openManual(this.dataset.id);

    });

});


// =====================================================
// 홈 버튼
// =====================================================

homeButton.addEventListener("click",function(e){

    e.preventDefault();

    goHome();

    refreshHome();

});


// =====================================================
// 뒤로가기
// =====================================================

backHome.addEventListener("click",function(){

    goHome();

    refreshHome();

});


// =====================================================
// 페이지 애니메이션
// =====================================================

function fadeIn(element){

    element.style.opacity=0;

    element.style.transform="translateY(20px)";

    requestAnimationFrame(()=>{

        element.style.transition="0.3s";

        element.style.opacity=1;

        element.style.transform="translateY(0px)";

    });

}

const originalOpenManual=openManual;

openManual=function(id){

    originalOpenManual(id);

    fadeIn(manualPage);

};

const originalGoHome=goHome;

goHome=function(){

    originalGoHome();

    fadeIn(home);

};


// =====================================================
// 스크롤 위치 저장
// =====================================================

window.addEventListener("beforeunload",function(){

    localStorage.setItem(

        "scrollY",

        window.scrollY

    );

});

window.addEventListener("load",function(){

    const y=localStorage.getItem("scrollY");

    if(y){

        window.scrollTo(

            0,

            Number(y)

        );

    }

});


// =====================================================
// 최근 본 문서 자동 생성
// =====================================================

refreshHome();


// =====================================================
// 초기 화면
// =====================================================

goHome();


// =====================================================
// 콘솔
// =====================================================

console.log(

    "%cCOCOPALM HANDBOOK Loaded",

    "color:#3cb371;font-size:16px;font-weight:bold;"

);

console.log(

    "Version 2.0"

);
