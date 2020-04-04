<template>
	<view class="content">
		<view class="l-fixed">
			<!-- #ifndef MP-WEIXIN -->
			<view class="l-status"></view>
			<!-- #endif -->

			<!-- l-head -->

			<view class="l-head find-head">
				<view class="l-search" @tap="$toast(`搜索`)">
					<image class="l-icon-search2" src="../../static/icon/l-icon-search2.png" mode=""></image>
					<input style="font-size: 28rpx;" type="text" class="l-search-input" disabled="" value="" placeholder="可以搜索书名或作者"
					 placeholder-class="l-holder" />
				</view>
			</view>
		</view>

		<view class="l-placeholder"></view>

		<scroll-view class="l-content" :scroll-top="scrollTop" scroll-y="true" @scroll="scroll" refresher-enabled="true"
		 :refresher-triggered="triggered" @refresherrefresh="onRefresh" @refresherrestore="onRestore" @scrolltolower="reachBottom">
			<view class="l-body">
				<uni-swiper-dot style="width: 100%;" :info="info" :current="current" :mode="mode" :dots-styles="dotsStyles" field="content">
					<swiper class="l-swiper" :autoplay="true" :interval="3000" :duration="500" indicator-color="var(--c-bg-2)"
					 circular @tap="$toast(`轮播图`)" @change="change">
						<swiper-item v-for="(item, index) in info" :key="index">
							<view :class="item.colorClass" class="l-swiper-item">
								<image class="l-carousel-img" :src="item.url" mode="aspectFill" />
							</view>
						</swiper-item>
					</swiper>
				</uni-swiper-dot>
				<!-- l-swiper -->
				<view class="l-body-tab">
					<view class="l-tab-item" @tap="navtoClssify">
						<image class="l-tab-item-img l-tab-item-img-4" src="../../static/book-mall/l-icon-book-mall-4.png" mode=""></image>
						<view class="l-tab-item-value">
							分类
						</view>
					</view>
					<view class="l-tab-item" @tap="$toast(`榜单`)">
						<image class="l-tab-item-img l-tab-item-img-1" src="../../static/book-mall/l-icon-book-mall-1.png" mode=""></image>
						<view class="l-tab-item-value">
							榜单
						</view>
					</view>
					<view class="l-tab-item" @tap="$toast(`新书`)">
						<image class="l-tab-item-img l-tab-item-img-2" src="../../static/book-mall/l-icon-book-mall-2.png" mode=""></image>
						<view class="l-tab-item-value">
							新书
						</view>
					</view>
					<!-- <view class="l-tab-item" @tap="$toast(`特价`)">
						<image class="l-tab-item-img l-tab-item-img-3" src="../../static/book-mall/l-icon-book-mall-3.png" mode=""></image>
						<view class="l-tab-item-value">
							特价
						</view>
					</view> -->
				</view>

				<!-- l-madin -->
				<view class="l-main">

				</view>
			</view>
			<view class="l-body l-tie">
				<view class="find-heads">
					<image class="find-head-img" src="../../static/152b74dd6eb4c583fd8921a3f634b5dc.jpg" mode="aspectFill"></image>
					<view class="find-head-name">测试用户AAA</view>
					<view class="find-head-leval">Lv.10</view>
				</view>
				<view class="find-title">十本好看的小说，在这里推荐给大家，看了不吃亏，看了不上当，看了不后悔！！！</view>
				<view class="fint-book">
					<image src="../../static/152b74dd6eb4c583fd8921a3f634b5dc.jpg" mode="aspectFill"></image>
					<image src="../../static/152b74dd6eb4c583fd8921a3f634b5dc.jpg" mode="aspectFill"></image>
					<image src="../../static/152b74dd6eb4c583fd8921a3f634b5dc.jpg" mode="aspectFill"></image>
					<image src="../../static/152b74dd6eb4c583fd8921a3f634b5dc.jpg" mode="aspectFill"></image>
				</view>
				<view class="fint-tan">综合讨论</view>
				<view class="fint-tag">
					<view class="fint-tag-block">
						<view>5小时前</view>
						<view style="margin-left: 20rpx;">2.35万阅读</view>
					</view>
					<view class="fint-tag-block">
						<view style="margin-left: 20rpx;" class="fint-tag-block">
							<image class="fint-tag-icon" src="../../static/152b74dd6eb4c583fd8921a3f634b5dc.jpg" mode="aspectFill"></image>
							<span style="margin-left:12rpx;">2</span>
						</view>
						<view style="margin-left: 20rpx;" class="fint-tag-block">
							<image class="fint-tag-icon" src="../../static/152b74dd6eb4c583fd8921a3f634b5dc.jpg" mode="aspectFill"></image>
							<span style="margin-left:12rpx;">2</span>
						</view>
						<view style="margin-left: 20rpx;" class="fint-tag-block">
							<image class="fint-tag-icon" src="../../static/152b74dd6eb4c583fd8921a3f634b5dc.jpg" mode="aspectFill"></image>
							<span style="margin-left:12rpx;">2</span>
						</view>
					</view>
				</view>
			</view>
			<view class="l-body l-tie">
				<view class="find-heads">
					<image class="find-head-img" src="../../static/152b74dd6eb4c583fd8921a3f634b5dc.jpg" mode="aspectFill"></image>
					<view class="find-head-name">测试用户AAA</view>
					<view class="find-head-leval">Lv.10</view>
				</view>
				<view class="find-title">十本好看的小说，在这里推荐给大家，看了不吃亏，看了不上当，看了不后悔！！！</view>
				<view class="fint-book">
					<image src="../../static/152b74dd6eb4c583fd8921a3f634b5dc.jpg" mode="aspectFill"></image>
					<image src="../../static/152b74dd6eb4c583fd8921a3f634b5dc.jpg" mode="aspectFill"></image>
					<image src="../../static/152b74dd6eb4c583fd8921a3f634b5dc.jpg" mode="aspectFill"></image>
					<image src="../../static/152b74dd6eb4c583fd8921a3f634b5dc.jpg" mode="aspectFill"></image>
				</view>
				<view class="fint-tan">综合讨论</view>
				<view class="fint-tag">
					<view class="fint-tag-block">
						<view>5小时前</view>
						<view style="margin-left: 20rpx;">2.35万阅读</view>
					</view>
					<view class="fint-tag-block">
						<view style="margin-left: 20rpx;" class="fint-tag-block">
							<image class="fint-tag-icon" src="../../static/152b74dd6eb4c583fd8921a3f634b5dc.jpg" mode="aspectFill"></image>
							<span style="margin-left:12rpx;">2</span>
						</view>
						<view style="margin-left: 20rpx;" class="fint-tag-block">
							<image class="fint-tag-icon" src="../../static/152b74dd6eb4c583fd8921a3f634b5dc.jpg" mode="aspectFill"></image>
							<span style="margin-left:12rpx;">2</span>
						</view>
						<view style="margin-left: 20rpx;" class="fint-tag-block">
							<image class="fint-tag-icon" src="../../static/152b74dd6eb4c583fd8921a3f634b5dc.jpg" mode="aspectFill"></image>
							<span style="margin-left:12rpx;">2</span>
						</view>
					</view>
				</view>
			</view>
			<view class="find-loadmore" v-if="showLoadMore">{{loadMoreText}}</view>
		</scroll-view>
	</view>
</template>

<script>
	import uniSwiperDot from '@/components/uni-swiper-dot/uni-swiper-dot.vue'
	export default {
		components: {
			uniSwiperDot
		},
		data() {
			return {
				info: [{
						colorClass: 'uni-bg-red',
						url: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg',
						content: '内容 A'
					},
					{
						colorClass: 'uni-bg-green',
						url: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/muwu.jpg',
						content: '内容 B'
					},
					{
						colorClass: 'uni-bg-blue',
						url: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/cbd.jpg',
						content: '内容 C'
					}
				],
				dotsStyles: {
					backgroundColor: 'rgba(83, 200, 249,0.3)',
					border: '1px rgba(83, 200, 249,0.3) solid',
					color: '#fff',
					selectedBackgroundColor: 'rgba(83, 200, 249,0.9)',
					selectedBorder: '1px rgba(83, 200, 249,0.9) solid'
				},
				mode: 'default',
				current: 0,
				scrollTop: 0,
				old: {
					scrollTop: 0
				},
				showLoadMore: false,
				dataList: [],
				max: 0,
				loadMoreText: "加载中...",
				triggered: false,
				_freshing: false,
			}
		},
		onLoad() {
			this.initData();
		},
		onShow() {

		},
		onUnload() {
			this.max = 0;
			this.dataList = [];
			this.loadMoreText = "加载更多";
			this.showLoadMore = false;
			this._freshing = false;
		},
		methods: {
			initData() {
				setTimeout(() => {
					this.max = 0;
					this.dataList = [];
					let dataList = [];
					this.max += 10;
					this.dataList = this.dataList.concat(dataList);
				}, 300);
			},
			setListData() {
				let dataList = [];
				this.max += 10;
				console.log(this.max)
				this.dataList = this.dataList.concat(dataList);
			},
			change(e) {
				this.current = e.detail.current
			},
			navtoClssify(){
				uni.navigateTo({
					url: `/pages/classify/classify`
				})
			},
			navtoDetail() {
				uni.navigateTo({
					url: `/pages/detail/detail`
				})
			},
			scroll: function(e) {
				// console.log(e)
				this.old.scrollTop = e.detail.scrollTop
			},
			reachBottom() {
				console.log("onReachBottom");
				if (this.max > 40) {
					this.loadMoreText = "我是有底线的!"
					return;
				}
				this.showLoadMore = true;
				setTimeout(() => {
					this.setListData();
				}, 300);
			},
			onRefresh() {
				if (this._freshing) return;
				console.log("onRefresh");
				this._freshing = true;
				this.triggered = true
				setTimeout(() => {
					this.triggered = false;
					this._freshing = false;
				}, 3000)
			},
			onRestore() {
				this.triggered = 'restore'; // 需要重置
				console.log("onRestore");
			},
		},
	}
</script>

<style>
	/* l-head */

	.l-nav-bookrack {
		font-size: 30rpx;
	}


	/* l-main */

	.l-main {
		padding-bottom: 32rpx;
	}

	.l-h3 {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.l-h3-title {
		font: bold var(--f-size-5) normal;
	}

	.l-h3-more {
		display: flex;
		align-items: center;
		color: var(--c-bg-2);
	}

	.l-dl {
		margin-top: 32rpx;
		display: flex;
		width: 100%;
		height: 224rpx;
	}

	.l-dt {
		width: 160rpx;
		height: 100%;
		border-radius: 10rpx;
		margin-right: 24rpx;
	}

	.l-dd {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.l-dd-title {
		color: var(--c-txt-3);
		font: var(--f-size-3) normal;
	}

	.l-dd-content,
	.l-dd-footer {
		color: var(--c-txt-2);
		font: var(--f-size-2)/var(--f-size-4) normal;
	}

	.l-dd-content {
		width: 100%;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 3;
		overflow: hidden;
	}

	.l-dd-footer {
		display: flex;
		align-items: center;
	}

	.l-dd-view-footer {
		width: 100%;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		overflow: hidden;
		-webkit-line-clamp: 2;
	}

	.l-dd-img {
		width: 40rpx;
		height: 40rpx;
		border-radius: 50%;
		margin-right: 6rpx;
	}

	.find-head {
		justify-content: center;
	}

	.l-body-tab {
		display: flex;
		margin: 20rpx 0 0;
		align-items: center;
		white-space: nowrap;
		justify-content: space-around;
	}

	.l-tab-item-img {
		margin-bottom: 10rpx;
	}

	.l-tab-item-img-3,
	.l-tab-item-img-1 {
		width: 60rpx;
		height: 58rpx;
	}

	.l-tab-item-img-2 {
		width: 52rpx;
		height: 56rpx;
	}

	.l-tab-item-img-4 {
		width: 54rpx;
		height: 54rpx;
	}

	.l-tab-item-value {
		text-align: center;
		font-size: 26rpx;
		color: var(--c-txt-2);
	}

	.find-heads {
		width: 100%;
		margin-bottom: 12rpx;
		overflow: hidden;
		margin-top: 20rpx;
	}

	.find-head-img {
		width: 70rpx;
		height: 70rpx;
		margin-top: 5rpx;
		border-radius: 100%;
		float: left;
	}

	.find-head-name {
		line-height: 80rpx;
		margin-left: 20rpx;
		float: left;
		color: #000;
	}

	.find-head-leval {
		margin-left: 16rpx;
		float: left;
		line-height: 80rpx;
		font-size: 24rpx;
	}

	.find-title {
		font-size: var(--f-size-3);
		font-weight: 600;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
		margin-bottom: 18rpx;
	}

	.fint-book {
		display: flex;
		justify-content: space-between;
		margin-bottom: 18rpx;
	}

	.fint-book image {
		width: 20%;
		height: 200rpx;
	}

	.fint-tan {
		width: 100rpx;
		height: 40rpx;
		font-size: var(--f-size-1);
		color: #899da3;
		background-color: #e8e8e8;
		padding: 6rpx 14rpx;
		border-radius: 6rpx;
	}

	.fint-tag {
		margin: 20rpx 0;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.fint-tag-block {
		display: flex;
		color: #899da3;
		font-size: var(--f-size-1);
		align-items: center;
	}

	.fint-tag-icon {
		width: 40rpx;
		height: 40rpx;
	}
	.find-loadmore{
		background-color: #f9f8eb;
		line-height: 50rpx;
		text-align: center;
		width: 100%;
	}
</style>
