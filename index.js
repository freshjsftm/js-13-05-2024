const site = {
  title:'my site',
  headers:['qwe1','qwe2','qwe3'],
  showHeaders(){
    this.headers.forEach(function(elem){
      console.log(elem);
    })
  },
    showHeadersAndTitle(){
    this.headers.forEach((elem)=>{
      console.log(elem, this.title);
    })
  },
  showHeadersAndTitle2(){
    this.headers.forEach(function(elem){
      console.log(elem, this.title);
    })
  },
}

site.showHeaders()
site.showHeadersAndTitle()
site.showHeadersAndTitle2()
