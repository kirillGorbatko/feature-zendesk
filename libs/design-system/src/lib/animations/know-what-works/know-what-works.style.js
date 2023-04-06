import css from 'styled-jsx/css';

export default css.feature`
	.section {
		padding: 3em 0;
		font-family: "Outfit", sans-serif;
		font-size: 10px;
		-webkit-user-select: none; /* Safari */
		-ms-user-select: none; /* IE 10 and IE 11 */
		user-select: none; /* Standard syntax */
	}

	@media only screen and (max-width: 1024px) {
		.section {
		  font-size: 8px;
		}
	  }

	.know_wrap {
		position: relative;
		margin: 0 auto;
	}
	.know_wrap.know_wrap--v1_mod {
			width: 40em;
			height: 40em;
		}
	.know__border {
		width: 100%;
		height: 100%;
		border: 2px solid #000;
		border-radius: 50%;
		display: none;
	}

	.know__border_svg {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		transform-origin: 50% 50%;
		transform: rotate(-90deg);
		overflow: visible;
	}

	.know__border_circle {
		width: 100%;
		height: 100%;
		will-change: stroke-dashoffset, stroke-dasharray;
	}
	.know_wrap--v1_mod .know__border_circle.know__border_circle--mobile_mod {
			display: none;
		}

	.know__center {
		position: absolute;
		top: 50%;
		left: 50%;
		border-radius: 50%;
		overflow: hidden;
		transition: box-shadow 0.3s;
	}
	.know_wrap--v1_mod .know__center.know__center--shadow_mod {
			box-shadow: 0 4rem 4rem rgba(0, 0, 0, 0.3);
		}
	.know_wrap--v1_mod .know__center {
			width: 22.4em;
			height: 22.4em;
			margin: -11.2em 0 0 -11.2em;
		}
	.know__center_in {
		position: relative;
		width: 100%;
		height: 100%;
		will-change: clip-path;
	}

	.know__center_img {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.know_list {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		will-change: transform;
	}

	.know_list__item {
		position: absolute;
		top: 50%;
		left: 50%;
		width: 0;
		height: 0;
	}
	.know_list__item:nth-child(1) {
		transform: rotate(25.2deg);
		z-index: 3;
	}
	.know_list__item:nth-child(2) {
		transform: rotate(45deg);
		z-index: 2;
	}
	.know_list__item:nth-child(3) {
		transform: rotate(65deg);
	}
	.know_list__item:nth-child(4) {
		transform: rotate(113.8deg);
		z-index: 3;
	}
	.know_list__item:nth-child(5) {
		transform: rotate(133.8deg);
		z-index: 2;
	}
	.know_list__item:nth-child(6) {
		transform: rotate(153.8deg);
	}
	.know_list__item:nth-child(7) {
		transform: rotate(206deg);
	}
	.know_list__item:nth-child(8) {
		transform: rotate(226deg);
	}
	.know_list__item:nth-child(9) {
		transform: rotate(246deg);
	}

	.know_list__item_in {
		position: absolute;
		left: 0;
		transform-origin: 50% 50%;
	}
	.know_wrap--v1_mod .know_list__item_in {
			top: -20.4em;
			width: 8em;
			height: 8em;
			margin: -4em 0 0 -4em;
		}
	.know_list__item:nth-child(1) .know_list__item_in {
		transform: rotate(-25.2deg);
	}
	.know_list__item:nth-child(2) .know_list__item_in {
		transform: rotate(-45deg);
	}
	.know_wrap--v1_mod .know_list__item:nth-child(2) .know_list__item_in {
			top: -19.4em;
		}
	.know_list__item:nth-child(3) .know_list__item_in {
		transform: rotate(-65deg);
	}
	.know_wrap--v1_mod .know_list__item:nth-child(3) .know_list__item_in {
			top: -19.6em;
		}
	.know_list__item:nth-child(4) .know_list__item_in {
		transform: rotate(-113.8deg);
	}
	.know_wrap--v1_mod .know_list__item:nth-child(4) .know_list__item_in {
			top: -19em;
		}
	.know_list__item:nth-child(5) .know_list__item_in {
		transform: rotate(-133.8deg);
	}
	.know_wrap--v1_mod .know_list__item:nth-child(5) .know_list__item_in {
			top: -18.2em;
		}
	.know_list__item:nth-child(6) .know_list__item_in {
		transform: rotate(-153.8deg);
	}
	.know_wrap--v1_mod .know_list__item:nth-child(6) .know_list__item_in {
			top: -19.2em;
		}
	.know_list__item:nth-child(7) .know_list__item_in {
		transform: rotate(-206deg);
	}
	.know_wrap--v1_mod .know_list__item:nth-child(7) .know_list__item_in {
			top: -19.4em;
		}
	.know_list__item:nth-child(8) .know_list__item_in {
		transform: rotate(-226deg);
	}
	.know_wrap--v1_mod .know_list__item:nth-child(8) .know_list__item_in {
			top: -18.6em;
		}
	.know_list__item:nth-child(9) .know_list__item_in {
		transform: rotate(-246deg);
	}
	.know_wrap--v1_mod .know_list__item:nth-child(9) .know_list__item_in {
			top: -19.2em;
		}
	.know_list__preview {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #fff;
		border-radius: 50%;
		will-change: transform, opacity;
		box-shadow: 0.3rem 1.4rem 1.1rem rgba(0, 0, 0, 0.15);
	}
	.know_wrap--v1_mod .know_list__preview {
			border: 0.3em solid #000;
		}
	.know_list__pic {
		position: relative;
		width: calc(100% + 2px);
		height: calc(100% + 2px);
		margin: -1px;
		border-radius: 50%;
		overflow: hidden;
	}

	.know_list__img {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.know_list__icon {
		position: relative;
	}
	.know_wrap--v1_mod .know_list__icon {
			width: 4em;
			height: 3.6em;
		}
	.know_list__icon_in {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: contain;
	}

	.know_list__value {
		position: absolute;
		display: flex;
		align-items: center;
		will-change: transform, opacity;
	}
	.know_wrap--v1_mod .know_list__item:nth-child(1) .know_list__value {
			top: 0.8em;
			left: calc(100% + 2.8em);
		}
	.know_wrap--v1_mod .know_list__item:nth-child(2) .know_list__value {
			top: 1.4em;
			left: calc(100% + 2.8em);
		}
	.know_wrap--v1_mod .know_list__item:nth-child(3) .know_list__value {
			top: 2em;
			left: calc(100% + 2.2em);
		}
	.know_wrap--v1_mod .know_list__item:nth-child(4) .know_list__value {
			top: 2.2em;
			left: calc(100% + 2.2em);
		}
	.know_wrap--v1_mod .know_list__item:nth-child(5) .know_list__value {
			top: 3.2em;
			left: calc(100% + 3.4em);
		}
	.know_wrap--v1_mod .know_list__item:nth-child(6) .know_list__value {
			top: 3.8em;
			left: calc(100% + 3em);
		}
	.know_wrap--v1_mod .know_list__item:nth-child(7) .know_list__value {
			top: 5.4em;
			right: calc(100% + 2em);
		}
	.know_wrap--v1_mod .know_list__item:nth-child(8) .know_list__value {
			top: 4.2em;
			right: calc(100% + 2em);
		}
	.know_wrap--v1_mod .know_list__item:nth-child(9) .know_list__value {
			top: 4em;
			right: calc(100% + 2.4em);
		}
	.know_list__value_text {
		font-weight: 600;
	}
	.know_wrap--v1_mod .know_list__value_text {
			font-size: 2.2em;
		}
	.know_list__item:nth-child(n+7) .know_list__value_text {
		order: 2;
	}
	.know_list__value_decor {
		position: relative;
	}
	.know_wrap--v1_mod .know_list__value_decor {
			width: 1.4em;
			height: 1.8em;
			margin-left: 0.8em;
		}
	.know_list__item:nth-child(n+7) .know_list__value_decor {
		margin-left: 0;
	}
	.know_wrap--v1_mod .know_list__item:nth-child(n+7) .know_list__value_decor {
			margin-right: 0.8em;
		}
	.know_list__value_icon {
		display: block;
		width: 100%;
		height: 100%;
	}
`;
