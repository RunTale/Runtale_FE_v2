# 🏃 RunTale

- **RunTale**은 **스토리텔링**과 함께하는 **러닝** 서비스입니다.  
- **RunTale**은 **모바일**에서 쉽게 사용할 수 있는 **웹 어플리케이션** 서비스입니다.

<img src="https://i.imgur.com/Ef52lMm.png" />

# 목차

- [🕹️ 기능](#️-기능)
- [👣 시작하기](#-시작하기)
- [🔧 기술](#-기술)
- [🗂️ 프로젝트 구조](#%EF%B8%8F-프로젝트-구조)

# 📄 프로젝트 개요

| 항목       | 내용                                          |
|------------|---------------------------------------------|
| 프로젝트 소개 | 이야기와 함께하는 즐거운 러닝의 시작 [Runtale]  |
| 개발 인원    | 6명 (PM 1명 + 디자인 1명 + 프론트엔드 2명 + 백엔드 2명) |
| 개발 기간    | 2024. 07. 05 ~ 2024. 09. 20               |

# 🕹️ 기능

- ***시나리오*** : **시나리오를 선택**하여 러닝을 시작하세요! 진행 상황에 따라 적절한 **사운드**가 제공되어 마치 그 상황에 처한 듯한 동기부여를 받을 수 있습니다.
- ***실시간 피드백*** : **지도**에서 현재 **위치**와 지금까지 지나온 **경로**를 확인할 수 있으며, 실시간 **페이스**와 **달린 거리** 등 통계를 확인할 수 있습니다.
- ***러닝 목표 달성*** : 러닝이 끝난 후 **평균 페이스, 총 달린 거리, 소요 시간** 등 상세 정보를 확인할 수 있습니다. 또한 시작하기 전에 **목표 페이스**를 설정하고 달성해볼 수 있습니다.
- ***이달의 기록*** : 한 달 간 달린 거리, 러닝 횟수, 목표 페이스 달성 횟수 등, **이달의 기록**을 숫자와 그래프로 확인해볼 수 있습니다.
- ***티어*** : 독자적이고 귀여운 **티어** 시스템으로 러닝이 더욱 즐거워집니다!

# 👣 시작하기

## 1. 런테일 서비스에 접속, 로그인

[런테일 서비스를 만나보세요.](https://runtale.vercel.app/)

<img src="https://i.imgur.com/w4o10Gr.png" alt="디폴트 페이지" loading="lazy" height="400px" />

런테일 서비스에 접속하고, **로그인**합니다.  
아직 회원이 아니라면, **회원가입**을 진행합니다.  

## 2. 홈 화면

<img src="https://i.imgur.com/prjFS7f.png" alt="홈 화면" loading="lazy" height="500px" />


홈 화면에서는 본인의 **랭킹, 대략적인 기록** 등을 확인할 수 있으며,

아래 튜토리얼에서 런테일을 어떻게 사용하는 지 알 수 있습니다.


## 3. 시나리오 선택, 러닝 진행

<img src="https://i.imgur.com/0D8vF06.png" alt loading="lazy" height="400px"/>

하단의 **Story** 탭에서 시나리오를 선택하세요.  
물론 시나리오 없이도 러닝을 시작할 수 있습니다!

<img src="https://i.imgur.com/NF0wOhn.png" alt loading="lazy" height="400px"/>

시나리오를 선택했다면, 목표 페이스를 설정해보세요.  
목표 페이스를 설정했다면, **시나리오 시작!** 버튼을 눌러 러닝을 시작합니다.

<img src="https://i.imgur.com/yEQ0Ipa.png" alt loading="lazy" height="400px" />

먼저 각 시나리오별 등장인물에 대한 간단한 소개가 시작되고,  
이후 러닝을 시작하면 됩니다.

<div style="display: flex;">
  <img src="https://i.imgur.com/bZlnPdR.png" alt loading="lazy" height="400px" />
  <img src="https://i.imgur.com/ZNFAWd7.png" alt loading="lazy" height="400px" />
</div>

러닝을 시작하면 시나리오 화면 또는 지도를 확인 가능하고, 지도에서는 사용자의 실시간 러닝 경로가 표시됩니다.

시나리오별로 적절한 음성이 지속적으로 재생 되어 보다 몰입감 있는 러닝이 가능합니다!

<img src="https://i.imgur.com/hIJb29l.png" alt loading="lazy" height="400px" />

러닝이 종료되면 종료화면에서 총 러닝 거리, 시간, 평균페이스 및 처음에 설정했던 목표 페이스에 도달 했는지 못했는지를 알 수 있습니다.

## 4. 이달의 기록
<img src="https://i.imgur.com/Wnxe4Av.png" alt loading="lazy" height="400px" />

하단의 Record 탭을 선택하면 이달의 기록을 확인 할 수 있습니다.

해당 탭에서는 **시나리오 완수 횟수, 평균 페이스**등이 확인이 가능해 사용자의 한 달 성과를 한눈에 볼 수 있습니다.

## 5. 활동
<img src="https://i.imgur.com/m6cmzpL.png" alt loading="lazy" height="400px" />

Activities 탭에서는 현재 사용자의 코스와, 전체 코스를 확인할 수 있습니다.

총 코스는 **5개**이며, **Lv 0부터 5**까지 산책코스, 도전코스, 열정코스, 하프코스, 풀코스로 구성하여 사용자들이 서비스에 대한 동기를 부여 받을 수 있도록 하였습니다.



# 🔧 기술

- **React** - 사용자 인터페이스를 구축하기 위한 JS 프레임워크.
- **TypeScript** - 자바스크립트에 정적 타입을 명시할 수 있게 하는, 자바스크립트 슈퍼셋 프로그래밍 언어.
- **Vite** : 웹 프론트엔드 빌드 도구.
- **Material UI** - 리액트 컴포넌트 라이브러리를 이용한 스타일링.
- **React Router** - 클라이언트 사이드 라우팅을 위한 라이브러리.
- **Recoil** - 전역 상태 관리 라이브러리.
- **React Query (TanStack Query React)** - 서버 상태를 불러오고, 캐싱, 동기화, 업데이트하기 위한 라이브러리 
- **Kakao Map Api** - 위치 기반 지도 서비스에 카카오맵 사용.
- **Recharts** - 리액트 차트 라이브러리
- **Vercel** - 배포

[배포에 관한 글을 썼어요](https://sungpaks.github.io/deploy-your-project-with-vercel/)  
[실시간 위치 기반 러닝 트래커 개발에 대해서도 썼어요](https://sungpaks.github.io/til/geolocation-based-running-tracker-improvement/)  
[audio 기능과 음량을 전역상태로 관리하기](https://sungpaks.github.io/til/html-audio-volume-control-with-recoil/)

# 🗂️ 프로젝트 구조

```plaintext
RunTale_FE/
│
├── public/                 # 정적 파일
├── src/                    # 소스 코드
│   ├── assets/
│   ├── api/                # api
│   ├── components/         # 재사용 가능한 컴포넌트들
│   ├── constants/          # 상수
│   ├── pages/              # 각 페이지별 컴포넌트들
│   ├── layouts/            # 레이아웃
│   ├── context/            # 컨텍스트와 Recoil 전역상태
│   ├── hooks/              # 커스텀 훅
│   ├── utils/              # 유틸 함수들
│   ├── App.js              # 애플리케이션 진입점
│   └── index.js            # ReactDOM 렌더링
│
├── .gitignore              # Git 무시 파일 설정
├── package.json            # 프로젝트 종속성 및 스크립트
└── README.md               # 프로젝트 정보
```

# 🧑‍💻 프론트엔드 담당


<table>
    <tr align="center">
        <td><B>조성훈</B></td>
        <td><B>김도윤</B></td>
    </tr>
    <tr align="center">
        <td>
            <img src="https://github.com/sungpaks.png?size=100" width="100">
            <br>
            <a href="https://github.com/sungpaks"><I>sungpaks</I></a>
        </td>
        <td>
            <img src="https://github.com/doyun5565.png?size=100" width="100">
            <br>
            <a href="https://github.com/doyun5565"><I>doyun5565</I></a>
        </td>
    </tr>
</table>
