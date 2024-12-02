const API_URL=async(url='',optionObject,msg=null)=>{
try {
const response=await fetch(url,optionObject);
if(!response.ok) throw Error("somehing went wrong");
return msg;
} catch (error) {
console.log(error.message);
return error.message;
}
}
export default API_URL;