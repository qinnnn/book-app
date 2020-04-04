<template>
	<view class="content">
		<view class="l-body">

			<view class="l-dl">
				<image class="l-dt" :src="bookimg" mode="aspectFill"></image>
				<view class="l-dd">
					<view class="l-dd-title">
						这个明星有些咸鱼
					</view>
					<view class="l-dd-sub">
						作者：刘慈欣
					</view>
					<view class="l-dd-content">
						重生平行世界，前世的疲惫，让李寒只想做一条安静的咸鱼。明星？出名？算了，虚无缥缈的东西！但是……他回家前写的一首主题曲却火了。我出名了？罢了，那就做一条明星中的咸鱼……
					</view>
					<view class="l-dd-footer">
						<image v-for="(s,i) in 5" :key="i" class="l-icon-star" lazy-load src="../../static/l-icon-star.png"></image>
						<text class="l-dd-grade">5.0</text>
					</view>
				</view>
			</view>

			<view class="l-body-select">
				<view class="l-body-tab" v-for="(s,i) in tab_list" :key="i" @tap="share(s)">
					<image :class="s.className" :src="s.icon" mode=""></image>{{s.title}}
				</view>
			</view>

			<view class="l-list">
				<view class="l-h3">
					<text class="l-h3-title">详情</text>
				</view>

				<view class="l-list-view">
					与三体文明的战争使人类第一次看到了宇宙黑暗的真相，地球文明像一个恐惧的孩子，熄灭了寻友的篝火，在暗夜中发抖。自以为历经沧桑，其实刚刚蹒跚学步；自以为悟出了生存竞争的秘密，其实还远没有竞争的资格。
				</view>
			</view>

			<view class="l-list">
				<view class="l-h3">
					<text class="l-h3-title">评论</text>
					<view class="l-h3-more" @tap="navtoComment">全部评论<image class="l-icon-more" src="../../static/l-icon-more.png" mode="widthFix"></image>
					</view>
				</view>

				<view class="l-list-content">
					<view class="l-list-sub-content">
						<view class="l-list-c-head">
							三体的文风和细节描写简直赞
						</view>
						<view class="l-list-c-body">
							一直认为写作是件很耗费体力与脑力的事情，特别是从新构架一个新的世界，一个文明。这需要你有丰富的
							直认为写作是件很耗费体力与脑力的事情，特别是从新构架一个新的世界，一个文明。这需要你有丰富的
						</view>
						<view class="l-list-c-foot">
							<view class="l-list-c-foot-l">
								<text class="l-list-c-foot-l-name">任飘渺</text>
								<image v-for="(s,i) in 4" :key="i" class="l-icon-star-blank" src="../../static/detail/l-icon-star-blank.png"
								 mode=""></image>
								<image class="l-icon-star-blank" src="../../static/detail/l-icon-star-blank-un.png" mode=""></image>
							</view>
							<view class="l-list-c-foot-r">
								<image class="l-icon-like" src="../../static/detail/l-icon-like.png" mode=""></image>8
							</view>
						</view>
					</view>
				</view>

			</view>

		</view>

		<view class="l-body-fixed">
			<view class="l-handle-btn l-look-btn" @tap="navtoSection">
				试看(3章节)
			</view>
			<view class="l-handle-btn l-buy-btn" @tap="$toast(`您已经欠我69元了哦,记得来付款`)">
				购买¥69.00
			</view>
		</view>

		<view class="l-share" v-if="isShare">
			<view class="l-close" @tap="isShare = !isShare">
				取消
			</view>
			<view class="l-share-img" @tap="$toast(`分享到不知道哪里去了`)">
				<image class="l-icon-share-list" src="../../static/detail/l-icon-share-list-1.png" mode=""></image>
				<image class="l-icon-share-list" src="../../static/detail/l-icon-share-list-2.png" mode=""></image>
				<image class="l-icon-share-list" src="../../static/detail/l-icon-share-list-3.png" mode=""></image>
				<image class="l-icon-share-list" src="../../static/detail/l-icon-share-list-4.png" mode=""></image>
			</view>
			<view class="l-share-btn">
				<button class="l-share-botton" type="primary" @tap="$toast(`分享所有`)">一键的分享到所有</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				bookimg: `../../static/152b74dd6eb4c583fd8921a3f634b5dc.jpg`,
				tab_list: [{
						title: `收藏`,
						className: `l-icon-share l-icon-share-1`,
						icon: `../../static/detail/l-icon-share-1.png`
					},
					{
						title: `分享`,
						className: `l-icon-share l-icon-share-2`,
						icon: `../../static/detail/l-icon-share-2.png`
					},
					{
						title: `放入书架`,
						className: `l-icon-share l-icon-share-3`,
						icon: `../../static/detail/l-icon-share-3.png`
					},
					{
						title: `目录`,
						className: `l-icon-share l-icon-share-4`,
						icon: `../../static/detail/l-icon-share-4.png`
					}
				],
				isShare: false
			}
		},
		onLoad() {
			uni.setNavigationBarTitle({
				title: `三体：死神永生`
			})
		},
		methods: {
			navtoComment() {
				uni.navigateTo({
					url: `/pages/comment/comment`
				})
			},
			navtoSection() {
				uni.navigateTo({
					url: `/pages/section/section`
				})
			},
			share(s) {
				if (s.title === `分享`) {
					this.isShare = !this.isShare
				} else {
					uni.showToast({
						title: `您点了` + s.title,
						icon: 'none'
					})
				}
			}
		}
	}
</script>

<style>
	.content {
		padding-bottom: 108rpx;
	}

	.l-body-fixed {
		position: fixed;
		bottom: 0;
		left: 0;
		height: 98rpx;
		display: flex;
		width: calc(100% - var(--pad-lr) - var(--pad-lr));
		padding: 0 var(--pad-lr);
		align-items: center;
		white-space: nowrap;
		background-color: #373a49;
		justify-content: space-between;
	}

	.l-look-btn {
		width: 30%;
		background-color: var(--c-txt-2);
	}

	.l-buy-btn {
		width: 55%;
		background-color: #0068B7;
	}

	.l-handle-btn {
		font-size: 30rpx;
		display: flex;
		border-radius: 40rpx;
		align-items: center;
		justify-content: center;
		height: 80rpx;
	}

	.l-dl {
		margin-top: 32rpx;
		display: flex;
		width: 100%;
		height: 320rpx;
	}

	.l-dt {
		width: 216rpx;
		height: 100%;
		border-radius: 6rpx;
		margin-right: 24rpx;
	}

	.l-dd {
		flex: 1;
		display: flex;
		padding-bottom: 12rpx;
		flex-direction: column;
		justify-content: space-between;
	}

	.l-dd-title {
		font: bold var(--f-size-5) normal;
	}

	.l-dd-sub {
		color: var(--c-txt-2);
		font: var(--f-size-2)/var(--f-size-4) normal;
	}

	.l-dd-content {
		width: 100%;
		color: #868DAB;
		font: 26rpx normal;
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

	.l-icon-star {
		width: 30rpx;
		height: 28rpx;
		margin-right: 4rpx;
	}

	.l-dd-grade {
		color: #F9174D;
		margin-left: 28rpx;
		font-size: var(--f-size-5);
	}

	.l-icon-share {
		margin-right: 18rpx;
	}

	.l-icon-share-1 {
		width: 29rpx;
		height: 28rpx;
	}

	.l-icon-share-2 {
		width: 25rpx;
		height: 27rpx;
	}

	.l-icon-share-3 {
		width: 27rpx;
		height: 22rpx;
	}

	.l-icon-share-4 {
		width: 30rpx;
		height: 24rpx;
	}

	.l-body-tab,
	.l-body-select {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.l-body-tab {
		padding: 40rpx 0 12rpx;
	}

	.l-list {
		padding-top: 40rpx;
	}

	.l-h3 {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.l-h3-title {
		font: bold var(--f-size-4) normal;
	}

	.l-h3-more {
		display: flex;
		align-items: center;
		color: var(--c-bg-2);
	}

	/* list */

	.l-list-view {
		padding-top: 40rpx;
		color: var(--c-bg-2);
	}

	.l-icon-like,
	.l-icon-star-blank {
		width: 22rpx;
		height: 20rpx;
		margin-right: 4rpx;
	}

	.l-icon-like {
		margin-right: 12rpx;
	}

	.l-list-content {
		background-color: rgba(245, 247, 249, 0.2);
		border-radius: 16rpx;
		padding: 35rpx 32rpx;
		margin-top: 32rpx;
	}

	.l-list-c-foot-l-name {
		margin-right: 20rpx;
	}

	.l-list-c-head {
		font-size: var(--f-size-3);
		padding-bottom: 25rpx;
	}

	.l-list-c-body {
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
		color: var(--c-txt-2);
		font-size: var(--f-size-1);
		margin-bottom: 35rpx;
	}

	.l-list-c-foot {
		color: var(--c-txt-2);
		font-size: var(--f-size-1);
		display: flex;
		align-items: center;
		justify-content: space-between;
	}


	/* share */

	.l-share {
		position: fixed;
		bottom: 0;
		left: 0;
		width: calc(100% - var(--pad-lr) - var(--pad-lr));
		padding: 32rpx var(--pad-lr);
		z-index: 999;
		background-color: #080932;
	}

	.l-icon-share-list {
		width: 130rpx;
		height: 130rpx;
	}

	.l-share-img {
		display: flex;
		align-items: center;
		justify-content: space-around;
	}

	.l-close {
		text-align: right;
		margin-bottom: 27rpx;
	}

	.l-share-btn {
		padding: 56rpx 70rpx 0;
	}

	.l-share-botton {
		border-radius: 40rpx;
	}
</style>
