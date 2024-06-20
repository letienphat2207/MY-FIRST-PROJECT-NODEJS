const getHomepage = (req,res) => {
    res.send('Hello world vs Le Tien Phat')
}
const getABC = (req,res)=>{
    res.send('check ABC')
}
const getSample = (req,res) =>{
    res.render('../views/sample.ejs')
}
module.exports=  {
    getHomepage,getABC,getSample
}