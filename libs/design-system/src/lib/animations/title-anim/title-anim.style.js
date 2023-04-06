import css from 'styled-jsx/css';

export default css.feature`
.anim_title__wrap {
  position: relative;
  margin: 0 0;
}

.anim_title {
  overflow: hidden;
  
  will-change: transform;
}

.anim_title.anim_title--v1_mod {
  color: white;
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
  background-color: currentColor;
  will-change: transform;
}

`;
