function HttpUploadWebsite(req,res){
     console.log(req.file)
}
function HttpViewWebsite(req,res){
     res.status(200).json({message:"viewed"})
     console.log('viewed')
}
module.exports = {
    HttpViewWebsite,
    HttpUploadWebsite,
}