# HaRang_MVP

**작성자 : 강문혁 (Sean)**

---------

HaRang_MVP입니다!

Language 

**Front-End** : React Native (Java Script : 100% / Type Script : 0%)

**Back-End** : Google Firebase (RealTime DataBase)

<u>**외부에 유출 시 불이익을 얻을 수 있습니다! 외부 유출을 최대한 조심해주세요!**</u>

**본 프로젝트는 Expo-CLI로 작업했습니다. Node.js 설치 후 Expo-CLI를 설치해서 이용해주세요**



보안을 위해 Firebase 주소는 지웠으며 추후 따로 Firebase를 이용해 서버를 열고 API-Key, DB 이름 등을 직접 입력해주셔야 작동합니다.



**혹시 이해 안돼는 부분은 연락주시면 상세하게 설명해드리겠습니다.**





## Firebase DB 데이터

JSON 형식 입니다.



{
  "markers" : [ null, {
    "backImg" : "https://www.paris.co.kr/wp-content/uploads/paris_baguette_opengraph_3.jpg",
    "company" : "파리바게트",
    "coordinate" : {
      "latitude" : 37.449642,
      "longitude" : 127.127142
    },
    "description" : "파리바게트 가천대점",
    "img" : "https://t1.daumcdn.net/cfile/blog/2579853B589A8D8F2B",
    "index" : 1,
    "menu" : {
      "1" : {
        "id" : 1,
        "mImg" : "https://ww.namu.la/s/8ca9da263088fa751047c683bd04a5037105ab0ae8b048b3b6ab8a94de24a493cf56cb2638ecd24122fa382856833423c32feeb186012dd989c607df0de056c6960df35049b9459caafed349c8849c42d5e85757954e6846f3f3c92dd4fc36fde6fa2360989baf4cb0dc289b946d7739",
        "mName" : "크루와상",
        "mPrice" : "3000원"
      },
      "2" : {
        "id" : 2,
        "mImg" : "https://ww.namu.la/s/8ca9da263088fa751047c683bd04a5037105ab0ae8b048b3b6ab8a94de24a493cf56cb2638ecd24122fa382856833423c32feeb186012dd989c607df0de056c6960df35049b9459caafed349c8849c42d5e85757954e6846f3f3c92dd4fc36fde6fa2360989baf4cb0dc289b946d7739",
        "mName" : "크림빵",
        "mPrice" : "1000원"
      },
      
    },
    "price" : "3000원",
    "title" : "크로와상"
  }, {
    "backImg" : "http://img.khan.co.kr/news/2019/08/04/2019080501000376100029561.jpg",
    "company" : "세븐일레븐",
    "coordinate" : {
      "latitude" : 37.451299,
      "longitude" : 127.129404
    },
    "description" : "세븐일레븐 가천대점",
    "img" : "https://www.mpps.co.kr/kfcs_api_img/KFCS/goods/DL_2174223_20200903093553622.PNG",
    "index" : 2,
    "menu" : [ null, {
      "id" : 1,
      "mName" : "치킨너겟",
      "mPrice" : "1000원"
    } ],
    "price" : "1000원",
    "title" : "치킨너겟"
  }, {
    "backImg" : "https://www.paxetv.com/news/photo/202003/88196_59893_1450.jpg",
    "company" : "CU",
    "coordinate" : {
      "latitude" : 37.448789,
      "longitude" : 127.1271
    },
    "description" : "CU 가천대점",
    "img" : "https://image.auction.co.kr/itemimage/12/36/f2/1236f20cb6.jpg",
    "index" : 3,
    "menu" : [ null, {
      "id" : 1,
      "mName" : "코카콜라",
      "mPrice" : "1000원"
    } ],
    "price" : "1000원",
    "title" : "코카콜라"
  } ]
}





## Update Note

### Github

- Commit 할 때 마다 카카오워크에 알림이 갈 수 있게 수정 완료 :D



### 개발 현황

**Bold : 현재 코드 작성 중**

~~Cancel_Line~~: 구현 완료



- ~~Tab Navigator 구현~~

- ~~Google Maps 구현~~

- ~~Firebase에서 받아오는 Json 데이터로 Marker Rendering~~

- Profile / Wallet Front-End - 일단 초안 완성 추후 추가로 디자인 수정예정

- **Tooltip 눌렀을 때 매장 정보 화면 구현 중...**

  

- #### 21.03.03 Update Note

  - 2021.3.3 기준 매장 메인 화면 구축 완료

  - 메뉴가 없을 시 없다고 노출 / 추후 FlatList추가로 메뉴 화면 제작

  - 상단 Header에 이미지 추가 완료(추후 Image Slider를 추가해 여러 이미지를 등록할 수 있게 수정할 예정)

  - 매장 정보에서 운영시간 작성예정

  - TOSS 입금 API 관련 Research 중...

  - ScreenShots(매장 정보)

    ![](https://ewr1.vultrobjects.com/harscreenshots/210303%20details%201.PNG)
  
    ![](https://ewr1.vultrobjects.com/harscreenshots/210303%20details%202.PNG)





- #### **21.03.06 Update Note**

  - 일부 버그 수정
  - Back-End Json 수정 (FlatList 대응)
  - FlatList Front-End 작업... ~~(이놈이 제일 문제...)~~
  - 안드로이드 기기에 이미지 로딩이 안돼는 경우가 있어 async image load 기능 추가 //useNativeDriver 이슈
  - Image slider npm 패키지 추가해야함

## Reference

**HaRang_MVP를 만드는데 도움을 준 레퍼런스 자료 모음입니다.**

https://brunch.co.kr/@supims/605

http://www.mobileflow.co.kr/main/blog/220828691505

https://deep-wide-studio.tistory.com/39 USER FLOW

https://deep-wide-studio.tistory.com/38 USER FLOW DIAGRAM

https://blog.joon-lab.com/168 google maps 클러스터 링

https://www.youtube.com/watch?v=WKS8cCbnyHQ&ab_channel=Kistanto google maps marker Tutorial

https://github.com/rgommezz/react-native-scroll-bottom-sheet bottom sheet

https://yannichoongs.tistory.com/165 firebase

https://github.com/osdnk/react-native-reanimated-bottom-sheet/issues/60

https://snack.expo.io/@tom2020/react-native-modal-example modal example

https://github.com/ilovepku/biao map modal 예제… 중에 제일참고할 만한것

https://toss.im/transfer-web/linkgen/request-apikey TOSS 입금 API beta

https://nolboo.kim/blog/2013/10/06/github-for-beginner/ Gitcmd 사용방법

https://github.com/ZXVentures/react-native-async-image-animated load async image

https://medium.com/@harshita.arun.1/firebase-to-flatlist-react-native-5281718969ab Firebase flatlist

https://snack.expo.io/@adamjnav/firebase-flatlist-example Firebase flatlist example

