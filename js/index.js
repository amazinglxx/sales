window.onload=function(){
	var vm = new Vue({
		el:"#app",
		data:{
			show:false,
			dropdownValue:0,
			dropdownOption:[
			        { text: '近一周', value: 0 },
			        { text: '近一个月', value: 1 },
			        { text: '近三个月', value: 2 },
					{ text: '自定义时间', value: 3 },
			      ],
			currentDate: new Date(),
			showPickDateDialogTag:false,
			pickDateDialogTitle:"开始时间",
			startDate:"",
			endDate:"",
			
			showDeleteFooter:false,
			actions:[
				{name:"删除"}
			],
			showAddSaleDialogTag:false
		},
		methods:{
			showPopup(){
				this.show = true;
			},
			onClickLeft(){
				this.show = false;
			},
			delFund(){
				console.log("del")
				this.showDeleteFooter = true;
			},
			editFund(){
				console.log("edit")
			},
			changeDropdownValue(e){
				if(e == 3){
					this.pickDateDialogTitle = "开始时间";
					this.showPickDateDialogTag = true;
				}
			},
			confirmDate(){
				 this.pickDateDialogTitle = "结束时间";
				 if(this.pickDateDialogTitle == "结束时间" && this.endDate != ""){
					 this.showPickDateDialogTag = false;
				 }
			},
			onSelect(e){
				console.log(e)
			},
			
			addSale(){
				this.showAddSaleDialogTag = true;
				console.log(this.showAddSaleDialogTag)
			}
		}
	})
}