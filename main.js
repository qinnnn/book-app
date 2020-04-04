import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'

Vue.prototype.$toast = function(title){
	uni.showToast({
		title:`您点了` + title,
		icon:'none'
	})
}
let num = 0
Vue.prototype.$system = (function(){
	num++
	try{
		return uni.getSystemInfoSync()
	}catch(e){
		//TODO handle the exception
		let sys = null;
		uni.getSystemInfo({
			success(res) {
				sys = res;
			}
		})
		if(sys){
			return sys
		}else{
			if(num < 10){
				arguments.callee();
			}else{
				num = 0
			}
		}
	}
})()

const app = new Vue({
    ...App
})
app.$mount()
