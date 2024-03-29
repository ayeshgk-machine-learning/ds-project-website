import React, { useEffect } from "react";

const _404 = () => {
  (() => {
    const max_stars = 100;
    const stars = [];

    for (let i = 0; i < max_stars; i++) {
      const star = document.createElement("span");
      const size = Math.floor(Math.random() * 3) + 1;
      star.className = "star";
      star.style.width = size + "px";
      star.style.height = size + "px";
      star.style.background = `rgba(255, 255, 177, ${Math.random()})`;
      star.style.top = Math.ceil(Math.random() * 100) + "%";
      star.style.left = Math.ceil(Math.random() * 100) + "%";
      stars.push(star);
      document.body.appendChild(star);
    }

    for (let j = 0; j < max_stars * 0.6; j++) {
      const star = stars[j];
      star.style.animationName = "glow";
      star.style.animationDelay = Math.floor(Math.random() * 6) + 1 + "s";
      star.style.animationDuration = Math.floor(Math.random() * 6) + 1 + "s";
    }
  })();
  // body {
  //   margin: 0;
  //   height: 100%;
  //   background: linear-gradient(#0f1a2b, #411d63);
  //   overflow: hidden; 
  // }



  return (
    <div class="not-found-container">

      <div class="not-found" >
        <span>4</span>
        <div class="moon">
          <span class="crater"></span>
          <span class="crater"></span>
          <span class="crater"></span>
          <span class="crater"></span>
        </div>
        <span>4</span>
      </div>
      <div class="ground">
        <div class="rock"></div>
        <div class="rock"></div>
        <div class="rock"></div>
      </div>

      <div class="shooting">
        <div class="core"></div>
        <div class="trail"></div>
      </div>

      <div class="container-button">
        <a href="/">
          <div class="button">
            <div class="star"></div>
            <div class="star s2"></div>
            <div class=" star s3"></div>
            <span>Go Home</span>
          </div>
        </a>
      </div>

      <svg class="cactus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 714.000000 1280.000000" preserveAspectRatio="xMidYMid meet">
        <metadata>
          Created by potrace 1.15, written by Peter Selinger 2001-2017
        </metadata>
        <g transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
          <path d="M3650 12793 c-269 -30 -610 -116 -848 -215 -221 -91 -504 -249 -633
-353 -94 -76 -184 -187 -237 -290 -80 -158 -160 -529 -192 -894 -29 -316 59
-835 227 -1356 31 -93 124 -341 208 -550 298 -742 332 -892 390 -1710 43 -604
68 -1139 56 -1198 -26 -127 -43 -362 -39 -537 4 -207 10 -197 -96 -160 -314
108 -504 421 -630 1035 -65 319 -105 644 -146 1205 -40 556 -48 624 -87 770
-19 76 -27 136 -34 295 -13 276 -30 382 -74 472 -98 199 -323 314 -741 379
-165 26 -425 26 -509 1 -266 -82 -313 -292 -214 -962 130 -877 148 -1035 199
-1725 88 -1197 299 -1921 692 -2370 192 -219 481 -416 838 -568 278 -119 519
-178 807 -198 88 -6 93 -7 88 -28 -2 -11 -13 -71 -25 -132 -20 -110 -73 -312
-91 -346 -9 -17 -37 -144 -229 -1063 l-109 -520 -99 -260 c-177 -464 -254
-713 -288 -936 -31 -202 -1 -345 85 -407 120 -87 537 -164 906 -166 168 -1
207 2 242 16 136 56 390 87 958 118 488 26 720 65 878 147 124 65 144 115 126
312 -12 128 -40 226 -121 426 -120 295 -140 348 -164 445 -43 167 -49 103 156
1645 70 531 91 726 112 1075 15 255 15 974 -1 1159 -24 295 -31 581 -21 836 6
138 13 275 16 306 l6 56 144 46 c115 38 176 51 306 67 519 65 858 173 1158
370 232 153 338 321 404 641 55 267 71 516 86 1359 5 294 15 623 22 730 20
326 -7 513 -103 708 -105 216 -283 337 -530 361 -114 12 -224 -3 -364 -50
-191 -63 -316 -130 -401 -213 -209 -208 -246 -519 -158 -1336 18 -165 20 -431
4 -511 -26 -127 -82 -229 -154 -278 -49 -34 -239 -131 -315 -161 -47 -18 -50
-18 -55 -2 -2 9 -19 116 -36 237 -17 121 -45 297 -61 390 -54 312 -71 459
-104 905 -20 271 -19 397 6 787 18 282 20 395 16 808 -5 498 -8 540 -52 670
-56 166 -188 389 -290 490 -118 118 -304 195 -540 224 -85 10 -268 12 -345 4z" />
        </g>
      </svg>

    </div>);
}

export default _404;