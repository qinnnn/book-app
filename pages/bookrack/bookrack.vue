<template>
	<view class="content">
		<view class="l-fixed">
			<!-- #ifndef MP-WEIXIN -->
			<view class="l-status"></view>
			<!-- #endif -->
			<!-- l-head -->
			<view class="l-head book-head">
				<view class="book-title">书架</view>
				<!-- <view class="l-search">
					<image class="l-icon-search" src="../../static/l-icon-search.png" mode=""></image>
					<input type="text" class="l-search-input" disabled="" value="" placeholder="精彩热搜：金光布袋戏《羽国志异》" placeholder-class="l-holder" />
				</view> -->
				<view class="book-menu">
					<image @tap="navtoSearch" style="margin-right: 15rpx;" class="l-icon-search" src="../../static/icon/l-icon-search.png"
					 mode=""></image>
					<image style="margin-left: 15rpx;" class="l-icon-search" src="../../static/icon/i-icon-more.png" mode=""></image>
				</view>
			</view>
		</view>

		<view class="l-placeholder"></view>

		<!-- <view > -->
		<scroll-view class="l-content" :scroll-top="scrollTop" scroll-y="true" @scroll="scroll">
			<view class="l-body l-ul">
				<view></view>
				<view class="l-li" v-for="(item,key) in 20" :key="key" @tap="navtoDetail">
					<view style="position: relative;overflow: hidden;">
						<image class="l-li-img" :src="bookimg" mode="aspectFill"></image>
						<view class="book-new">new</view>
					</view>
					<view class="l-li-txt">
						JavaScript高级程序设计（第三版）
					</view>
				</view>
				<view class="l-add">
					<view class="l-add-view">
						<image class="l-icon-add" src="../../static/l-icon-add.png" mode=""></image>
					</view>
				</view>
			</view>
		</scroll-view>
		<!-- </view> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				img: `../../static/152b74dd6eb4c583fd8921a3f634b5dc.jpg`,
				bookimg: `../../static/152b74dd6eb4c583fd8921a3f634b5dc.jpg`,
				scrollTop: 0,
				old: {
					scrollTop: 0
				}
			}
		},
		onLoad() {

		},
		methods: {
			navtoDetail: function() {
				uni.navigateTo({
					url: `/pages/detail/detail`
				})
			},
			navtoSearch: function() {
				uni.navigateTo({
					url: '/pages/detail/detail'
				});
			},
			scroll: function(e) {
				// console.log(e)
				this.old.scrollTop = e.detail.scrollTop
			},
			goTop: function(e) {
				// 解决view层不同步的问题
				this.scrollTop = this.old.scrollTop
				this.$nextTick(function() {
					this.scrollTop = 0
				});
				uni.showToast({
					icon: "none",
					title: "纵向滚动 scrollTop 值已被修改为 0"
				})
			}
		},
		onPullDownRefresh() {
			console.log('onPullDownRefresh')
			setTimeout(function() {
				uni.stopPullDownRefresh()
				console.log('stopPullDownRefresh')
			}, 1000)
		}
	}
</script>

<style>
	/* l-body */

	.l-body {
		padding: var(--pad-lr) 0 var(--pad-lr) var(--pad-lr);
	}

	.l-ul {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-bottom: 32rpx;
		flex-wrap: wrap;
	}

	.l-add,
	.l-li {
		width: 28%;
		height: 392rpx;
		margin-right: 5%;
		margin-bottom: 32rpx;
	}

	.l-li {
		text-align: center;
	}

	.l-add-view,
	.l-li-img {
		width: 100%;
		height: 300rpx;
		border-radius: 10rpx;
		margin-bottom: 8rpx;
	}

	.l-add-view {
		box-sizing: border-box;
		display: flex;
		border: 6rpx solid rgba(126, 127, 148, 1);
		align-items: center;
		justify-content: center;
	}

	.l-icon-add {
		width: 36rpx;
		height: 36rpx;
	}

	.l-li-txt {
		padding: 0 10rpx;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
	}

	.book-head {
		justify-content: space-between;
	}

	.book-title {
		margin-left: 5px;
		color: #fff;
		font-size: var(--f-size-3);
	}

	.book-menu {
		display: flex;
	}

	.book-new {
		position: absolute;
		top: -20rpx;
		right: -30rpx;
		background-color: #da0000;
		color: #fff;
		font-size: 8rpx;
		padding: 0 20rpx;
		transform: rotate(45deg);
		height: 50rpx;
		line-height: 75rpx;
	}
</style>
