<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	
	page,
	uni-page{
		background-color: var(--bg-color);
		color: var(--font-color);
		font-size: var(--f-size-2);
		
		height: 100%;
		
		/* font-size */
		--f-size-1:24rpx;
		--f-size-2:28rpx;
		--f-size-3:32rpx;
		--f-size-4:36rpx;
		--f-size-5:40rpx;
		--f-size-6:44rpx;
		
		/* color | background */
		--c-txt-1:#FFFFFF;
		--c-txt-2:#95A1A6;
		--c-txt-3:#cdced0;
		
		--c-bg-1:#000000;
		--c-bg-2:#7E7F94;
		--c-bg-3:#0b0c21;
		
		/* padding-left | right */
		--pad-lr:32rpx;
		
		/* navbar-height */
		--h-head:44px;
		
		/* input placeholder text color */
		--c-input-holder:#696a7f;
		
		--bg-color: #fff;
		--co-color: #5ACC93;
		--yy-color: #F3F3F3;
		--li-color: #EAFFF8;
		--font-color: #333;
	}
	
	/* init button */
	
	uni-button,
	button{
		margin: 0;
		padding: 0;
		color: var(--c-txt-1);
		background-color: var(--c-bg-1);
	}
	
	uni-button:after,
	button:after{
		border: none;
		width: 100%;
		height: 100%;
	}
	
	.button-hover{
		color: inherit;
		background-color: inherit;
	}
	
	/* init img */
	uni-image,
	uni-image>img,
	img{
		vertical-align: middle;
	}
	
	.l-lay-gray{
		background-color: #C0C0C0;
	}
	
	.l-status{
		width: 100%;
		height: var(--status-bar-height);
		background-color: transparent;
	}
	
	/* clear both  */
	.l-clear-both:after{
		content: ' ';
		display: block;
		width: 0;
		height: 0;
		clear: both;
		zoom: 1;
	}
	
	/* navbar -fixed -placeholder */
	.content {
		position: relative;
		height: 100%;
	}
	
	.l-fixed{
		position: fixed;
		width: 100%;
		z-index: 999;
		top: 0;
		background-color: var(--co-color);
		box-shadow: 0 2px 2px 0 rgba(0,0,0,.1);
	}
	
	.l-placeholder{
		width: 100%;
		/* #ifndef MP-WEIXIN */
		height: calc(var(--status-bar-height) + var(--h-head));
		/* #endif */
		
		/* #ifdef MP-WEIXIN */
		height: var(--h-head);
		/* #endif */
	}
	
	/* l-head-search */
	
	.l-head{
		padding: 0 32rpx;
		display: flex;
		align-items: center;
		height: var(--h-head);
	}
	
	.l-search{
		flex: 1;
		display: flex;
		align-items: center;
		padding: 10rpx 22rpx;
		margin-right: 16rpx;
		border-radius: 10rpx;
		background-color: var(--bg-color);
	}
	
	.l-icon-search{
		width: 36rpx;
		height: 36rpx;
	}
	.l-icon-search2{
		width: 46rpx;
		height: 46rpx;
	}
	
	.l-search-input{
		flex: 1;
		padding: 0 12rpx;
	}
	
	.l-holder{
		color: var(--c-input-holder);
	}
	
	/* l-swiper */
	
	.l-body{
		padding: 0 var(--pad-lr);
	}
	
	.l-swiper{
		margin: 30rpx 0 10rpx 0;
		height: 248rpx;
	}
	
	.l-swiper-item{
		height: 100%;
		overflow: hidden;
		border-radius: 6rpx;
	}
	
	.l-carousel-img{
		width: 100%;
		height: 100%;
	}
	
	/* l-icon */
	
	.l-icon-more{
		width: 30rpx;
		/* height: 27rpx; */
		vertical-align: middle;
		margin-left: 12rpx;
	}
	.l-content{
		overflow: hidden;
		/* overflow-x: hidden;
		overflow-y: scroll; */
		width: 100%;
		/* #ifndef MP-WEIXIN */
		height: calc(100% - var(--status-bar-height) - var(--h-head));
		/* #endif */
		
		/* #ifdef MP-WEIXIN */
		height: calc(100% - var(--h-head));
		/* #endif */
	}
	.l-tie{
		border-bottom: 16rpx solid #f9f8eb;
	}
</style>
