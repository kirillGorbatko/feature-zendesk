import css from 'styled-jsx/css';

export default css.feature`
	.section {
		font-family: "Outfit", sans-serif;
		font-size: 10px;
	}

	.section button {
		font-family: "Outfit", sans-serif;
	}

	.feature {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: flex-start;
	}

	.feature__decor {
		position: absolute;
		z-index: -2;
		will-change: transform;
		overflow: hidden;
	}
	.feature__decor.feature__decor--v1_mod {
		background-color: #9b62ff;
	}
	.feature--v2_mod .feature__decor.feature__decor--v1_mod {
			top: 5.6em;
			left: -3.2em;
			width: 26.6em;
			height: 26em;
		}
	.feature__decor.feature__decor--v2_mod {
		top: calc(100% - 5.6em);
		left: 1em;
		width: 17.5em;
		height: 17.5em;
	}
	.feature__decor.feature__decor--v3_mod {
		top: 50%;
		left: 50%;
		z-index: -2;
	}
	.feature--v2_mod .feature__decor.feature__decor--v3_mod {
			width: 25.5em;
			height: 22.8em;
			margin: 7.4em 0 0 -8em;
		}

	.feature__decor_in {
		position: relative;
		width: 100%;
		height: 100%;
		will-change: transform;
	}

	.feature__decor_in_in {
		position: relative;
		width: 100%;
		height: 100%;
	}

	.feature--v2_mod .feature__decor_in_in--desktop_mod {
			display: none;
		}

	.feature__decor_img {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	.feature--v2_mod .feature__decor_img.feature__decor_img--desktop_mod {
			display: none;
		}
	.feature__decor_img.feature__decor_img--mobile_mod {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: contain;
	}

	.feature__main {
		position: relative;
		width: 20.6em;
		margin: 1.8em 0 0 -6.6em;
		z-index: 3;
	}
	.feature--v2_mod .feature__main {
			padding: 0 1em 1.2em;
			width: 18.5em;
			margin-right: 7.6em;
		}

	.feature__main_bg {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		box-shadow: 1em 1.8em 3.9em rgba(0, 0, 0, 0.2);
		background-color: #fafafa;
		border-radius: 1em;
		z-index: -1;
		will-change: transform;
	}
	.feature--v2_mod .feature__main_bg {
			border-radius: .7em;
		}

	.feature_top {
		position: relative;
		overflow: hidden;
		border-radius: 1em 1em 0 0;
		z-index: 1;
	}

	.feature--v2_mod .feature_top {
			margin: 0 -1em 1.4em;
		}
	.feature_top.feature_top--v2_mod {
		margin-bottom: 0;
	}

	.feature_top__in {
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		color: #fff;
		border-radius: 1em 1em 0 0;
		overflow: hidden;
		will-change: transform;
	}

	.feature--v2_mod .feature_top__in {
			height: 17.2em;
			padding: 1.6em 1.2em 1.4em;
		}
	.feature_top--v2_mod .feature_top__in {
		padding-bottom: 2.8em;
		height: 18.2em;
	}

	.feature_top__artist {
		margin-bottom: 0.3em;
	}

	.feature--v2_mod .feature_top__artist {
			font-size: 1.2em;
			text-transform: uppercase;
		}
	.feature_top--v2_mod .feature_top__artist {
		margin-bottom: 0.4em;
		font-size: 0.9em;
	}

	.feature--v2_mod .feature_top__song {
			font-size: 0.9em;
		}
	.feature_top--v2_mod .feature_top__song {
		font-size: 1.2em;
	}

	.feature_top__pic {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: -1;
	}
	.feature_top__pic:after {
		content: "";
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 71%;
		background-image: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.04) 25%, #000000 100%);
	}

	.feature_top__img {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.feature_subscribe {
		position: relative;
		display: flex;
		align-items: stretch;
		z-index: 1;
	}

	.feature--v2_mod .feature_subscribe {
			margin: 0 -15.4em 1.5em 0;
			border-radius: 0.4em;
		}
	.feature__sidebar .feature_subscribe.feature_subscribe--v2_mod {
		margin: 0 0 0.8em;
	}

	.feature_subscribe__bg {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: #fff;
		box-shadow: 1em 1.5em 4em rgba(0, 0, 0, 0.2);
		border-radius: 0.4em;
		z-index: -1;
		will-change: transform;
	}
	.feature--v2_mod .feature_subscribe__bg {
			border-radius: 0.3em;
		}

	.feature_subscribe__input {
		background-color: #f7f7f7;
		border: none;
		background-color: transparent;
		will-change: transform, opacity;
	}
	.feature--v2_mod .feature_subscribe__input {
			width: calc(100% - 6.4em);
			padding: 0 1.3em;
			height: 3.8666666667em;
			font-size: 1.5em;
		}
	.feature_subscribe--v2_mod .feature_subscribe__input {
		padding: 0 1.25em;
		height: 4em;
		font-size: 0.8em;
	}
	.feature_subscribe__input::-webkit-input-placeholder {
		color: #878787;
	}
	.feature_subscribe__input::-moz-placeholder {
		color: #878787;
	}
	.feature_subscribe__input:-ms-input-placeholder {
		color: #878787;
	}

	.feature_subscribe__btn {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		color: #fff;
		cursor: pointer;
		will-change: opacity;
	}

	.feature--v2_mod .feature_subscribe__btn {
			width: 6.4em;
			padding: 0.2666666667em 0.6666666667em;
			font-size: 1.5em;
		}
	.feature_subscribe--v2_mod .feature_subscribe__btn {
		padding: 0.5em 1em;
		font-size: 0.8em;
	}

	.feature_subscribe__btn_bg {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: #000;
		z-index: -1;
		border-radius: 0 0.4em 0.4em 0;
		transition: color 0.3s;
		will-change: transform;
	}
	.feature--v2_mod .feature_subscribe__btn_bg {
			border-radius: 0 0.3em 0.3em 0;
		}
	.feature_subscribe__btn:hover .feature_subscribe__btn_bg, .feature_subscribe__btn:focus .feature_subscribe__btn_bg {
		background-color: #222;
	}

	.feature_banner {
		position: relative;
		display: flex;
		padding: 1.4em 2em;
		color: #000;
		z-index: 1;
	}

	.feature--v2_mod .feature_banner {
			margin: 0 -15.4em 0.8em 0;
			padding-left: 1.8em;
		}
	.feature_banner:hover, .feature_banner:focus {
		text-decoration: none;
	}

	.feature_banner__content {
		display: flex;
		align-items: center;
		will-change: transform, opacity;
	}

	.feature_banner__bg {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: #fff;
		box-shadow: 1em 1.5em 4em rgba(0, 0, 0, 0.2);
		border-radius: 0.5em;
		z-index: -1;
		transition: background-color 0.3s;
		will-change: transform;
	}
	.feature--v2_mod .feature_banner {
			border-radius: 0.3em;
		}
	.feature_banner:hover .feature_banner__bg {
		background-color: #ededed;
	}

	.feature_banner__pic {
		position: relative;
	}

	.feature--v2_mod .feature_banner__pic {
			width: 3em;
			height: 3em;
			margin-right: 2.8em;
		}

	.feature_banner__img {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: contain;
	}


	.feature--v2_mod .feature_banner__title {
			font-size: 1.5em;
		}

	.follow_wrap {
		overflow: hidden;
		will-change: transform;
	}

	.feature--v2_mod .follow_wrap {
			margin: 0 -0.5em 0.8em;
		}

	.follow_wrap__in {
		padding: 0.4em 0.5em;
		will-change: transform;
	}

	.follow {
		display: flex;
		align-items: center;
		padding: 0.4em 1em;
		min-height: 3.2em;
		color: #000;
		background-color: #f7f7f7;
		border-radius: 0.3em;
		box-shadow: 0 1px 0.5em rgba(0, 0, 0, 0.2);
		transition: background-color 0.3s;
	}

	.feature--v2_mod .follow.follow--v2_mod {
			min-height: 2.8em;
			padding-left: 1.1em;
		}
	.follow:hover, .follow:focus {
		text-decoration: none;
		background-color: #ededed;
	}

	.follow__pic {
		position: relative;
	}

	.feature--v2_mod .follow__pic {
			width: 1.5em;
			height: 1.5em;
			margin-right: 0.8em;
		}

	.follow__img {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: contain;
	}


	.feature--v2_mod .follow__title {
			font-size: 0.7em;
		}

	.feature_video {
		overflow: hidden;
		will-change: transform;
	}

	.feature_video__in {
		position: relative;
		display: flex;
		color: #fff;
		z-index: 1;
		border-radius: 0.4em;
		overflow: hidden;
		will-change: transform;
	}
	.feature--v2_mod .feature_video__in {
			border-radius: 0.3em;
		}
	.feature_video__in:before {
		content: "";
		display: block;
		padding-bottom: 58%;
	}
	.feature_video__in:hover, .feature_video__in:focus {
		text-decoration: none;
	}

	.feature_video__content {
		width: 100%;
		padding: 0.6em 0.2em;
	}

	.feature_video__head {
		display: flex;
		align-items: center;
	}

	.feature_video__poster {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: -1;
	}
	.feature_video__poster:before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: #000;
		opacity: 0.44;
	}

	.feature_video__avatar {
		position: relative;
		width: 2em;
		height: 2em;
		margin-right: 0.8em;
		border-radius: 50%;
		overflow: hidden;
	}

	.feature_video__img {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.feature_video__name {
		font-size: 0.7em;
	}

	.feature_video__play {
		position: absolute;
		top: 50%;
		left: 50%;
		width: 3em;
		height: 2.2em;
		margin: -1.1em 0 0 -1.5em;
	}

	.feature_video__play_icon {
		display: block;
		width: 100%;
		height: 100%;
	}

	.feature__sidebar {
		position: relative;
		width: 19.6em;
		padding: 0 1em 1.2em;
	}
	.feature--v2_mod .feature__sidebar {
			display: none;
		}

	.feature__sidebar_bg {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		box-shadow: 0.8em 1.4em 3.1em rgba(0, 0, 0, 0.2);
		background-color: #fafafa;
		border-radius: 1em;
		z-index: -1;
		will-change: transform;
	}

	.feature__sidebar_content {
		position: relative;
		margin-top: -1.5em;
		z-index: 2;
		will-change: transform, opacity;
	}

	.feature__sidebar_item:not(:last-child) {
		margin-bottom: 0.8em;
	}
`;
