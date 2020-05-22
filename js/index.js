// 创建 Vue 实例，得到 ViewModel
var vm = new Vue({
	el: '#app',
	data: {
		info: '点开始我就会滚动呦！点停止我就停了呐！',
		intervalId: null
	},
	methods: {
		go() {
			// 如果当前有定时器在运行，则直接return
			if (this.intervalId != null) {
				return;
			}
			// 开始定时器
			this.intervalId = setInterval(() => {
				this.info = this.info.substring(1) + this.info.substring(0, 1);
			}, 500);
		},
		stop() {
			clearInterval(this.intervalId);
		}
	}
});
