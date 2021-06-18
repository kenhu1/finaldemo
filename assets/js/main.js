var a = new Vue({
  el:'#app',
  data:{
      itemList:[
        {
          id:'1',
          itemName:'我是小野貓',
          imgUrl: 'https://img.onl/Tkn7Py',
          p:'100',
          count:'2'
        },
        {
          id:'2',
          itemName:'骷髏手短黑T',
          imgUrl:'https://img.onl/InBkO',
          p:'790',
          count:'3'
        },
        {
          id:'3',
          itemName:'超時尚牛仔庫',
          imgUrl:'https://img.onl/6qsLgw',
          p:'1200',
          count:'1'
        },
        {
          id:'4',
          itemName:'質感褐色系大衣服',
          imgUrl:'https://img.onl/KvwPf5',
          p:'2300',
          count:'1'
        },
        {
          id:'5',
          itemName:'質感褐色系大衣服',
          imgUrl:'https://img.onl/6bfidB',
          p:'700',
          count:'1'
        },
        {
          id:'6',
          itemName:'質感褐色系大衣服',
          imgUrl:' https://img.onl/9d39u6',
          p:'300',
          count:'1'
        },
  ]
  },
  methods:{
      handlePlus: function(item){
          item.count++;
      },
      handleSub: function(item){
          if(item.count>1){
          item.count--;                
          }
      },
      handledelete: function(index){
          console.log(this);
          this.itemList.splice(index,1);
      }
  },
  computed:{

  }
})
