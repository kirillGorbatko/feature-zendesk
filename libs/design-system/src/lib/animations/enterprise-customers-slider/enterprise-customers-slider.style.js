import css from 'styled-jsx/css';

export default css.feature`
.section {
  font-family: "Outfit", sans-serif;
  font-size: 10px;
}

@media only screen and (max-width: 450px) {
  .section  {
    font-size: 7.8px;
  }
}

.shuffle-component {
  display: flex;
  align-items: center;
}

.shuffle-component__in {
  position: relative;
  width: 100%;
  margin: 0 auto;
  max-width: 42em;
  height: 74.8em;
}


.shuffle-component__in::before {
  position: absolute;
  left: 100%;
  bottom: .4em;

  width: 76.1em;
  height: 26.8em;

  transform: rotate(180deg);
  background-image: linear-gradient(203deg,#9b62ff 0%,rgba(255,255,255,.001)39%);
  opacity: 0.4;

  content: '';
}

.shuffle-component__card {
  width: 21em;
  border-radius: 2em;
  overflow: hidden;
  will-change: filter;
}

/* card1 start */

.shuffle-component__card_first {
  border-radius: 1.5em;
}

.shuffle_logo {
  position: relative;
  width: 21em;
  height: 42em;
  /* border-radius: 1.5em; */
  overflow: hidden;
}

.shuffle_logo__in {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  display: flex;
  padding: 4em 1em;

  will-change: transform;
}

.shuffle_logo__in:nth-child(n + 2) {
  left: 100%;
}

.shuffle_logo__in:nth-child(1) {
  background: #F8DF10;
}

.shuffle_logo__in:nth-child(2) {
  background: #00DC33;
}

.shuffle_logo__in:nth-child(3) {
  background: linear-gradient(180deg, #fc1696 0%, #2a00ec 100%);
}

.shuffle_logo__in:nth-child(4) {
  background: #FD2924;
}

.shuffle_logo__in:nth-child(5) {
  background: #0B3C5F;
}

.shuffle_logo__in:nth-child(6) {
  background: #0B3C5F;
}

.shuffle_logo__in:nth-child(7) {
  background: #F46003;
}

.shuffle_logo__in:nth-child(8) {
  background: #17CB92;
}

.shuffle_logo__in:nth-child(9) {
  background: #2E2E2E;
}

.shuffle_logo__pic {
  position: relative;
  width: 13em;
  margin: 0 auto
}

.shuffle_logo__in:nth-child(1) .shuffle_logo__pic {
  width: 13em;
}

.shuffle_logo__in:nth-child(2) .shuffle_logo__pic {
  width: 9em;
}

.shuffle_logo__in:nth-child(3) .shuffle_logo__pic {
  width: 15em;
}

.shuffle_logo__in:nth-child(4) .shuffle_logo__pic {
  width: 14em;
}

.shuffle_logo__in:nth-child(5) .shuffle_logo__pic {
  width: 15em;
}

.shuffle_logo__in:nth-child(6) .shuffle_logo__pic {
  width: 15em;
}

.shuffle_logo__in:nth-child(7) .shuffle_logo__pic {
  width: 13em;
}

.shuffle_logo__in:nth-child(8) .shuffle_logo__pic {
  width: 8.8em;
}

.shuffle_logo__in:nth-child(9) .shuffle_logo__pic {
  width: 15em;
}

.shuffle_logo__img {
  display: block;
  width: 100%;
}


/* card1 end */


/* card2 start */

.shuffle-component__card_second {
  position: absolute;
  top: 20em;
  left: 10.4em;

  width: 21em;
  height: 40em;
  padding: 3em 3em;
  box-shadow: -4em 5em 6em rgba(0, 0, 0, 0.15);
  border-radius: 1.5em;
  overflow: hidden;
}

.shuffle_second__logo {
  width: 5.4em;
  height: 5.4em;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: white;
  border-radius: 50%;
}

.shuffle_second__logo_pic {
  position: relative;
  width: 2.5em;
  height: 3em;
}

.shuffle_second__bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;

  z-index: -1;
}

.decor_w {
  position: relative;

  width: 35em;
  height: 26em;
  margin-top: 11em;
  margin-left: -7.8em;

  /* font-size: 10px; */
}

.decor_w svg {
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
}

.qq2,
[data-name="line-top-finish"],
[data-name="line-bottom-finish"] {
  fill: none;
  stroke: #fff;
  stroke-width: 2.5px;
  opacity: 0;
}

.qq1,
[data-name="line-top-start"],
[data-name="line-bottom-start"] {
  fill: none;
  stroke: #fff;
  stroke-width: 2.5px;
}

/* card2 end */


/* --------------------------------------------- card3 */

.shuffle-component__card_third {
  z-index: 2;
  position: absolute;
  left: 21em;
  top: 39.6em;

  width: 21em;
  height: 34.8em;
  border-radius: 0;
  /* padding: 12.3em 1.78em 2em 1.74em; */

  /* box-shadow: 0 1px 87px rgba(0, 0, 0, 0.2); */
  filter: drop-shadow(0 1px 4.6em rgba(0, 0, 0, 0.2));

  will-change: filter;
  /* border-radius: 2.8em; */
}

.shuffle-component__card_third_slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  height: 100%;
  padding: 0 1.5em 2em 1.5em;
  border-radius: 2.2em 2.2em 0 0;
  overflow: hidden;

  will-change: transform;
  background-color: #fff;
  overflow: hidden;
}

.shuffle-component__card_third_slide::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 6em;
  background-image: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.04) 25%, rgba(0, 0, 0, 0.2) 100%);
  opacity: 0.4;
  pointer-events: none;
}

.shuffle-component__card_third_head {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  position: relative;
  min-height: 21em;
  padding: 2.8em 0;
  margin-bottom: 2.1em;
}

.shuffle-component__card_third_bg {
  z-index: -1;
  position: absolute;
  left: -1.55em;
  right: -1.55em;
  top: 0;
  bottom: 0;
}

.shuffle-component__card_third_bg:before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 100%);
  opacity: .5;
  /* background-color: tomato; */
  z-index: 2;
}

.shuffle-component__card_third_slide:not(:first-child) {
  /* display: none; */
  position: absolute;
  top: 100%;
  /* transform: translateY(100%); */
  left: 0;

  width: 100%;
  height: 100%;
  background-color: white;
}

.shuffle-component__card_third_img {
  height: 100%;
}

.shuffle-component__card_third_content {
  position: relative;
}

.shuffle-component__card_third_subtitle {
  font-weight: 500;
  font-size: 1em;
  color: white;
  margin-bottom: .05em;
}

.shuffle-component__card_third_title {
  color: white;
  font-size: 1.7em;
  line-height: 1.1;
}

.shuffle-component__card_third_socials {
  width: 100%;
}

.shuffle-component__card_third_socials_item {
  position: relative;
  width: 100%;
  border-radius: .26em;

  background-color: #fff;
  box-shadow: 0 .1em .7em rgb(0 0 0 / 20%);
}

.shuffle-component__card_third_socials_item:first-child {
  box-shadow: 0 .1em 3.5em rgb(0 0 0 / 20%);
  z-index: 2;
}

.shuffle-component__card_third_socials_item:nth-child(2) {
  box-shadow: 0 .1em .6em rgb(0 0 0 / 20%);
}

.shuffle-component__card_third_socials_item:not(:last-child) {
  margin-bottom: 1.5em;
}
.shuffle-component__card_third_socials_item_in {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  min-height: 3.2em;
  padding: 0.4em 1em 0.6em;
  transition: background-color 0.3s;
  cursor: pointer;
}

.shuffle-component__card_third_socials_item_in:hover {
  background-color: #ededed;
}

.shuffle-component__card_third_socials_item_icon {
  position: relative;
  flex-shrink: 0;
  margin-right: 1.6em;
  width: 1.8em;
  height: 1.8em;
}

.shuffle-component__card_third_socials_item_title {
  font-size: .95em;
}

.shuffle-component__card_third_socials_item_drag {
  position: absolute;
  top: 50%;
  right: -1em;
  margin-top: -.6em;
  width: .6em;
  height: 1.2em;
}

/* --------------------------------------------- card3### */

`;
