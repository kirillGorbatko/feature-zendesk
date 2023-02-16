import css from 'styled-jsx/css';

export default css.feature`
.anim_title__wrap {
  position: relative;
  margin: 0 0;

  font-size: 10px;
}

.anim_title {
  font-size: 9em;
  line-height: calc(9.5em / 9);
  font-weight: 700;
  font-family: 'GT-Super-Display-Super';
  overflow: hidden;
  
  will-change: transform;
}

@media (max-width: 1023px) {
  .anim_title {
    font-size: 5em;
  }
}

.anim_title.anim_title--v1_mod {
  color: white;
  /* color: blue; */
}


.anim_title.anim_title--v2_mod {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: currentColor;
}

.anim_title__in {
  padding: .1em 0;
  will-change: transform;
}

.anim_title__bg {
  position: absolute;
  top: 200%;
  left: 0;
  width: 200vw;
  margin-left: -50vw;
  height: 300%;
  /* background-color: gray; */
  background-color: currentColor;
  will-change: transform;
}

`;
