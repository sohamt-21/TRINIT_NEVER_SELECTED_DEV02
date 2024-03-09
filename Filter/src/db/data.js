const data = [];
const db=require('./Db')
// data.push(db.forEach((elem)=>{}))
db.forEach((elem)=>{
  data.push(elem)
})

export default data;