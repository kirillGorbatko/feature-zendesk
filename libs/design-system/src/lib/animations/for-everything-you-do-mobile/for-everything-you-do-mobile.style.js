import css from 'styled-jsx/css';

export default css.feature`
.section {
  font-family: "Outfit", sans-serif;
  font-size: 10px;

  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */

}

a, button, input, div {
  cursor: default;
  pointer-events: none;
}


.for-everyting {
  display: flex;
  align-items: center;
  overflow: hidden;
}

.for-everyting__in {
  position: relative;
  width: 100%;
  margin: 0 auto;
}

.for-everyting--v1_mod .for-everyting__in {
  max-width: 66.6em;
  height: 108.4em;
}

.for-everyting--v2_mod .for-everyting__in {
  max-width: 30em;
  height: 43.5em;
}

.for-everyting__card {
  position: absolute;
  width: 23em;
  height: 100%;
  max-height: 49.4em;
  border-radius: 2.7em;
  overflow: hidden;
  will-change: filter;
}

.for-everyting--v2_mod .for-everyting__card {
  font-size: 0.624em;
}

/* .for-everyting__card_in {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 2.7em;
} */

.for-everyting__card_bg {
  position: absolute;
  left: 0;

  width: 100%;
  height: 50%;
  overflow: hidden;
}

.for-everyting__card_bg.for-everyting__card_bg--style_1_mod {
  top: 1px;
}

.for-everyting__card_bg.for-everyting__card_bg--style_2_mod {
  bottom: 1px;
}

.for-everyting__card_bg.for-everyting__card_bg--style_1_mod .for-everyting__card_bg_in {
  border-radius: 2.7em 2.7em 0 0;
}

.for-everyting__card_bg.for-everyting__card_bg--style_2_mod .for-everyting__card_bg_in {
  border-radius: 0 0 2.7em 2.7em;
}

.for-everyting--v1_mod .for-everyting__card_third_img--size_pos_2_mod {
  width: 102%;
  margin-left: -1%;
}

.for-everyting__card_bg_in {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: #fff;
}

.for-everyting__card_third .for-everyting__card_bg_in {
  background-color: #FAFAFA;
}

.for-everyting__card_img {
  position: relative;
  width: 100%;
  display: block;
  object-fit: cover;
  overflow: hidden;
}

.for-everyting__card_img_in {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}



/* .for-everyting__card_first_img--size_pos_1_mod {
  height: 24.2em;
}

.for-everyting__card_first_img--size_pos_2_mod {
  height: 25.2em;
}

.for-everyting__card_first_img--size_pos_3_mod {
  position: absolute;
  bottom: 0;
  left: 0;

  height: 5.6em;
} */

.for-everyting__card_third {
  z-index: 4;
  bottom: 0;
  right: 8.5em;
  top: auto;
  filter: drop-shadow(0.6em 0.9em 2.6em rgba(96, 96, 96, 0.3));
}

.for-everyting__card_third_decor {
  position: absolute;
  right: 1em;
  bottom: 1em;

  width: 3.4em;
  height: 3.4em;

  background-color: #FF5262;
  border-radius: 50%;

  cursor: pointer;
  z-index: 4;

  transition: background-color .2s ease-in-out;
}

.for-everyting__card_third_decor:hover {
  background-color: #ff5263c4;
}

.for-everyting__card_third_decor::after,
.for-everyting__card_third_decor::before {
  position: absolute;
  left: 50%;
  top: 50%;

  background-color: #fff;
  width: 1.2em;
  height: max(1px, 0.1em);
  margin: min(-1px, -0.1em) 0 0 -.6em;
  content: '';
}

.for-everyting__card_third_decor::after {
  transform-origin: center;
  transform: rotate(90deg);
}

.for-everyting__card_third_img--size_pos_1_mod {
  height: 13em;
}

.for-everyting__card_third_img--size_pos_2_mod {
  position: absolute;
  bottom: 0;
  height: 36.4em;
}

.for-everyting__decor {
  position: absolute;
}

.for-everyting__decor--style_1_mod {
  z-index: 1;
}

.for-everyting--v1_mod .for-everyting__decor--style_1_mod {
  top: 24em;
  left: 0;
  width: 13.5em;
  height: 11em;
  overflow: hidden;
}

.for-everyting--v2_mod .for-everyting__decor--style_1_mod {
  top: 8.6em;
  left: auto;
  right: 5.3em;
  width: 12.7em;
  height: 16.5em;
  overflow: hidden;
}

.for-everyting__decor--style_2_mod {
  z-index: 1;
  top: 10.8em;
  left: 26.8em;
  width: 25em;
  height: 45em;
  background-color: #000000;
}

.for-everyting__decor--style_3_mod {
  z-index: 3;
  left: 26.8em;
  bottom: 28em;
  width: 39.8em;
  height: 25em;
  background-color: #9b62ff;
}

.for-everyting--v1_mod .for-everyting__decor--style_4_mod {
  z-index: 3;
  bottom: 10.8em;
  right: 0;
  width: 16.9em;
  height: 17.2em;
}

.for-everyting--v2_mod .for-everyting__decor--style_4_mod {
  z-index: 1;
  top: 25em;
  left: 5.2em;
  width: 14.1em;
  height: 14.3em;
}

.for-everyting__lines_decor {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
  height: 100%;
}

/*  --------------------------------------------- CARD 1 */

.for-everyting__card_first {
  z-index: 2;
  top: 0;
  padding: var(--vr-indent) 0 var(--vr-indent) 0;

  filter: drop-shadow(0 .1em 2.6em rgba(0, 0, 0, 0.2));
  color: #000;

  --vr-indent: 2.4em;
  --r-indent: 1.88em;
  --l-indent: 1.6em;
}

.for-everyting--v1_mod .for-everyting__card_first {
  left: 13.5em;
}

.for-everyting--v2_mod .for-everyting__card_first {
  left: 0;
}

.for-everyting__card_first_content_top_w {
  width: 100%;
  overflow: hidden;
  padding: 0 var(--r-indent) 0 var(--l-indent);
  margin-top: 1px;
}

.for-everyting__card_first_content_top {
  width: 100%;
  padding-bottom: .8em;
}

.for-everyting__card_first_head {
  display: flex;
  justify-content: flex-start;
  margin-bottom: 1.8em;
}

.for-everyting__card_first_title {
  font-weight: 600;
  font-size: 1.44em;
  margin-right: 3em;
  z-index: 1;
}

.for-everyting__card_burger {
  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
  width: 1.2em;
  height: 1.2em;
  margin-top: .4em;
  margin-left: auto;
  cursor: pointer;
}

.for-everyting__card_third .for-everyting__card_burger {
  margin-top: 0;
}

.for-everyting__card_burger_in {
  width: 100%;
  border-bottom: .2em solid #000;
  margin-top: .2em;
  height: .2em;
}

.for-everyting__card_burger_in::after,
.for-everyting__card_burger_in::before {
  display: block;
  position: absolute;
  left: 50%;
  top: 50%;
  width: .8em;
  margin-left: -.4em;
  border-bottom: 0.2em solid #000;
  content: '';
  transition: transform .2s ease-in-out;
}

.for-everyting__card_burger_in:hover::after,
.for-everyting__card_burger_in:hover::before {
  transform: scaleX(1.5);
  transform-origin: center;
}

.for-everyting__card_burger_in::after {
  margin-top: -.5em;
}

.for-everyting__card_burger_in::before {
  margin-top: .5em;
}


.for-everyting__card_first_image {
  position: relative;
  width: 100%;
  height: 11.8em;
}

.for-everyting__card_first_image:not(:last-child) {
  margin-bottom: 2em;
}

.for-everyting__card_first_icon {
  position: absolute;
  right: 0;
  width: 1em;
  cursor: pointer;
  height: 1em;
}

.for-everyting__card_first_icon > img {
  position: inherit;
}

.for-everyting__card_first_icon::before {
  position: absolute;
  left: 50%;
  top: 50%;

  width: 2.4em;
  height: 2.4em;
  margin: -1.2em 0 0 -1.2em;
  box-shadow: 0 .1em .6em rgb(0 0 0 / 20%);
  background-color: #fff;
  content: '';
  transition: background-color .2s ease-in-out;
}

.for-everyting__card_first_icon--pos_1_mod {
  top: 2em;
}

.for-everyting__card_first_icon--pos_1_mod::before {
  background-color: #FF5262;
}

.for-everyting__card_first_icon:hover::before {
  background-color: #ededed;
}


.for-everyting__card_first_icon.for-everyting__card_first_icon--pos_1_mod:hover::before {
  background-color: #ff5263e6;
}

.for-everyting__card_first_icon--pos_2_mod {
  bottom: 2em;
  top: auto;
}

.for-everyting__card_first_icon--pos_3_mod {
  top: 50%;
  right: .6em;
  margin-top: -.5em;
}

.for-everyting__card_first_icon--pos_3_mod::before {
  width: 2em;
  height: 2em;
  margin: -1em 0 0 -1em;
}

.for-everyting__card_first_descr_wrap {
  position: relative;
  text-align: center;
  padding: 0 2.6em;
}

.for-everyting__card_first_subtitle {
  font-weight: 500;
  font-size: 1.2em;
}

.for-everyting__card_first_subtitle:not(:last-child) {
  margin-bottom: .45em;
}

.for-everyting__card_first_descr {
  color: #6F6F6F;
  font-size: .8em;
}

.for-everyting__card_first_content_bottom_w {
  width: 100%;
  overflow: hidden;
  margin-top: -1px;
  padding: 0 var(--r-indent) 0 var(--l-indent);
}

.for-everyting__card_first_content_bottom {
  width: 100%;
  padding-top: 1em;
}

.for-everyting__card_socials {
  width: 100%;
}

.for-everyting__card_socials_item {
  position: relative;
  width: 100%;
  border-radius: .26em;
  min-height: 3.54em;
  background-color: #fff;
  box-shadow: 0 .1em .6em rgb(0 0 0 / 20%);
}

.for-everyting__card_socials_item:not(:last-child) {
  margin-bottom: 1.28em;
}

.for-everyting__card_socials_item_in {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  min-height: 3.54em;
  padding: .86em 1.2em;
  transition: background-color 0.3s;
  cursor: pointer;
}

.for-everyting__card_socials_item_in:hover {
  background-color: #ededed;
}

.for-everyting__card_socials_item_icon {
  position: relative;
  flex-shrink: 0;
  margin-right: 1.8em;
  width: 1.9em;
  height: 1.9em;
}

.for-everyting__card_socials_item_title {
  color: black;
  font-size: .95em;
}

.for-everyting__card_socials_item_drag {
  position: absolute;
  top: 50%;
  right: -1em;
  margin-top: -.6em;
  width: .6em;
  height: 1.2em;
}

.for-everyting__card_first_video {
  width: 100%;
  height: 11.2em;
  cursor: pointer;
}

.for-everyting__card_first_video_play {
  position: absolute;
  top: 50%;
  left: 50%;

  width: 3.4em;
  height: 2.4em;
  margin: -1.7em 0 0 -1.2em;
}

.for-everyting__card_first_video_head {
  position: absolute;
  padding: .9em 1.1em;
  display: flex;
  align-items: center;
  z-index: 2;
}

.for-everyting__card_first_video_head_icon {
  position: relative;
  width: 2em;
  height: 2em;
  margin-right: 1.1em;
  border-radius: 50%;
  overflow: hidden;
}

.for-everyting__card_first_video_head_title {
  font-size: .76em;
  color: #fff;
}

.for-everyting__card_first_video_head_cover {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;

  border-radius: .26em;
  overflow: hidden;
}

.for-everyting__card_first_video_head_play {
  z-index: 2;
  position: absolute;
  left: 50%;
  top: 50%;

  margin: -1.2em 0 0 -1.7em;
  width: 3.4em;
  height: 2.4em;
}

.for-everyting__card_first_bar {
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 2.1em 2.2em 2.1em 1.6em;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  box-shadow: 0 0 10px rgb(0 0 0 / 20%);
  background-color: #fff;
  border-radius: 2.5em;
}

.for-everyting__card_first_bar_add {
  position: relative;
  width: 1em;
  height: 1em;
  margin-right: 1.56em;
  cursor: pointer;
}

.for-everyting__card_first_bar_add::after,
.for-everyting__card_first_bar_add::before {
  position: absolute;
  left: 0;
  top: 50%;

  width: 100%;
  margin-top: min(-1px, -.1em);
  height: max(1px, .1em);
  background-color: #000;
  content: '';
}

.for-everyting__card_first_bar_add::after {
  transform: rotate(90deg);
}

.for-everyting__card_first_bar_input {
  font-size: .94em;
}

.for-everyting__card_first_bar_input:not(:last-child) {
  margin-right: 2em;
}

.for-everyting__card_first_bar_setting {
  position: relative;
  width: 1.1em;
  height: 1.1em;
  margin-left: auto;
  border-radius: 50%;
  cursor: pointer;
}

.for-everyting__card_first_bar_setting > img {
  position: inherit;
}

.for-everyting__card_first_bar_setting:hover::before {
  background-color: #ff5263c4;
}

.for-everyting__card_first_bar_setting::before {
  position: absolute;
  left: 50%;
  top: 50%;

  width: 3.3em;
  height: 3.3em;
  margin: -1.66em 0 0 -1.66em;
  border-radius: 50%;
  background-color: #FF5262;
  content: '';
  transition: background-color .2s ease-in-out;
}

/*  --------------------------------------------- CARD 1# */
/*  --------------------------------------------- CARD 2 */
.for-everyting__card_second {
  z-index: 2;
  left: auto;
  filter: drop-shadow(0.6em 0.9em 2.6em rgba(96, 96, 96, 0.3));
}

.for-everyting__card_second_w {
  width: 100%;
  height: 100%;
  position: relative;
  padding: 12.3em 1.78em 2em 1.74em;
  background-color: #fff;
  overflow: hidden;
  border-radius: 2.8em;
}

.for-everyting__card_second .for-everyting__card_socials_item_in {
  padding: .5em 1.2em;
}

.for-everyting__card_second .for-everyting__card_socials_item:not(:last-child) {
  margin-bottom: 1.2em;
}

.for-everyting__card_second .for-everyting__card_socials_item_icon {
  margin-right: 1.6em;
}

.for-everyting--v1_mod .for-everyting__card_second {
  top: 20.4em;
  right: 3.8em;
}

.for-everyting--v2_mod .for-everyting__card_second {
  top: calc(12.7em / 0.624);
  right: 0;
  height: calc(30.9em / 0.624);
  min-height: calc(30.9em / 0.624);
}

.for-everyting__card_second_img {
  height: 100%;
}

.for-everyting__card_second_content {
  position: relative;
}

.for-everyting__card_second_subtitle {
  font-weight: 500;
  font-size: 1.1em;
  color: white;
  margin-bottom: .05em;
}

.for-everyting__card_second_title {
  color: white;
  font-size: 1.8em;
  margin-bottom: .5em;
}

.for-everyting__card_second_bg {
  position: absolute;
  left: 0;
  top: 0;
  height: 19.5em;
  width: 100%;
}

/*  --------------------------------------------- CARD 2# */


.for-everyting__card_third {
  padding: 2.6em 0;
  display: flex;
  flex-direction: column;
}

.card_head_w {
  overflow: hidden;
  width: 100%;
  padding: 0 1.8em;
  flex-shrink: 0;
  margin-top: 1px;
}

.card_head {
  position: relative;
  z-index: 2;
}

.card_head__top {
  margin-bottom: 2.8em;
  display: flex;
  align-items: center;
}

.card_head__title {
  font-weight: 600;
  margin-right: 1em;
  font-size: 1.4em;
  letter-spacing: .02em;
}

.card_head__count {
  margin-top: .4em;
  font-size: .9em;
  color: #9b9b9b;
}

.card_head__decor {
  position: relative;

  margin-left: auto;
  width: 1.2em;
  height: .2em;
  background-color: #000;
}

.card_form {
  display: flex;
  align-items: center;
  padding-bottom: .7em;
  border-bottom: 2px solid #D8D8D8;
  margin-bottom: 1.2em;
}

.card_form__icon {
  position: relative;
  width: 1em;
  height: 1em;
  margin-right: .9em;
}

.card_form__input {
  font-size: .9em;
  color: #000
}

.card_info {
  display: flex;
  margin-bottom: .6em;
}

.card_info__selected {
  display: flex;
}

.card_info__selected_count {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.7em;
  height: 1.7em;
  margin-right: .7em;

  color: #fff;

  background-color: #000;
  border-radius: 50%;
}

.card_info__selected_count_in {
  font-size: .9em;
}

.card_info__selected_title {
  font-size: .9em;
}

.card_info__tabs {
  display: flex;
  margin-left: auto;
}

.card_info__tabs_item {
  position: relative;
  cursor: pointer;
  transition: opacity .2s ease-in-out;
}

.card_info__tabs_item:not(:last-child) {
  margin-right: 1em;
}

.card_info__tabs_item:first-child {
  font-weight: 600;
}

.card_info__tabs_item:not(:first-child):hover {
  opacity: .8;
}

.card_info__tabs_item:first-child:before {
  content: '';
  position: absolute;
  left: 0;
  bottom: -.1em;
  height: .2em;
  width: 100%;
  background-color: #000;
}

.card_info__tabs_item:hover::before {
  background-color: #000;
}

.card_info__tabs_text {
  font-size: .9em;
}

.card_head__decor:before,
.card_head__decor:after {
  content: '';
  position: absolute;
  left: 50%;

  height: 100%;
  width: .7em;
  margin-left: -.35em;
  background-color: #000;
}

.card_head__decor:before {
  top: -.6em;
}

.card_head__decor:after {
  bottom: -.6em;
}

.card_post__list_w {
  width: 100%;
  overflow: hidden;
  flex-shrink: 1;
  margin-top: -1px;
}

.card_post__list {
  position: relative;
  z-index: 2;
  padding: .8em 1.8em 0;
}

.card_post__list:before {
  content: '';
  position: absolute;
  left: 0;
  top: 26.5em;

  width: 100%;
  height: 9.4em;

  background: linear-gradient(0, #FAFAFA 20%, rgba(255, 255, 255, 0) 100%);

  z-index: 4;
}

.card_post {
  padding: 1.2em 1em .9em;
  box-shadow: 0 1px .6em rgba(0, 0, 0, 0.2);
  border-radius: .3em;
  overflow: hidden;
}

.card_post:not(:last-child) {
  margin-bottom: 1.2em;
}

.card_post__head {
  display: flex;
  margin-bottom: 1.2em;
}

.card_post__pic {
  position: relative;
  width: 4em;
  height: 4em;
  margin-right: 1em;
  cursor: pointer;
  flex-shrink: 0;
}

.card_post__head_main {
  display: flex;
  flex-direction: column;
  margin-top: -.2em;
}

.card_post__title {
  font-weight: 700;
  margin-bottom: .1em;
  cursor: pointer;
  font-size: .8em;
}

.card_post__author {
  font-weight: 500;
  cursor: pointer;
  font-size: .8em;
}

.card_post__link {
  margin-top: auto;

  font-size: .8em;
  letter-spacing: .01em;
  color: #9B9B9B;
  transition: opacity .2s ease-in-out;
  cursor: pointer;
}
.card_post__link:hover {
  opacity: .8;
}

.card_post__info {
  display: flex;
  margin-bottom: .5em;
}

.card_post__info_item {
  position: relative;
  font-size: .8em;
  color: #9B9B9B;
}

.card_post__info_item:after {
  content: '';
  position: absolute;
  top: 50%;
  right: 0;
  width: .2em;
  height: .2em;
  margin: -.1em 0 0;
  background-color: currentColor;
}

.card_post__info_item:not(:last-child) {
  padding-right: .7em;
  margin-right: .6em;
}

.cart_post__bottom {
  position: relative;

  display: flex;
  align-items: center;
  padding: 1em 1.6em 0 1.4em;
}

.cart_post__bottom:before {
  content: '';
  position: absolute;
  top: 0;
  left: -1.8em;
  width: calc(100% + 3.6em);
  border-bottom: 0.5px solid #D8D8D8;
  /* background-color: #D8D8D8; */
}

.cart_post__bottom_item {
  display: flex;
  align-items: center;
  transition: opacity .2s ease-in-out;
  cursor: pointer;
}

.cart_post__bottom_item:hover {
  opacity: .8;
}

.cart_post__bottom_item:not(:last-child) {
  margin-right: auto;
}

.cart_post__bottom_img {
  position: relative;
  width: 1em;
  height: 1.2em;
  margin-right: .6em;
}

.cart_post__bottom_item:nth-child(1) .cart_post__bottom_img {
  width: 1.6em;
  height: 1.3em;
}

.cart_post__bottom_title {
  font-size: .8em;
  font-weight: 500;
}

/*  --------------------------------------------- CARD 3# */

`;
