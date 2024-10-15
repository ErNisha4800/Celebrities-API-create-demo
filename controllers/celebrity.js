const Celebrity = require("../models/celebrity");

const getAllCelebrities =async (req, res) => {
    const {gender, name, country, sort, select} =req.query;
     console.log("~ file: celebrity.js ~line 5 ~ getAllCelebrities ~sort", sort);
   const queryObject = {};
      if(gender){
        queryObject.gender = gender; 
      }
      if(country){
        queryObject.country = country;
        // console.log(queryObject.name);
      }
      if(name){
        queryObject.name = name;
        // console.log(queryObject.name);
      }
      let apiData =Celebrity.find(queryObject);

      if(sort){
        let sortFix = sort.split(",").join( " ");
        apiData =apiData.sort(sortFix);
       
      }
      if(select){
        // let selectFix = select.replace(",", " ");
        let selectFix = select.split(",").join( " ");
        apiData =apiData.select(selectFix);
       
      }
      let page = Number(req.query.page) ||1;
      let limit = Number(req.query.limit) || 5;

      let skip =(page-1) * limit;

      apiData = apiData.skip(skip).limit(limit);

      console.log(queryObject);
      
      
      

    const Celebrities = await apiData;
     res.status(200).json({ Celebrities, nbHits:Celebrities.length });
    //  console.log(Celebrities);
    // res.status(200).json({ msg: "I am createProduct" });
};
const createCelebritiesTesting = async (req, res) => {
    // Your callback function code here
    const Celebrities = await Celebrity.find(req.query).skip(2);
    // res.status(200).json({ msg: "I am createProductTesting" });
    res.status(200).json({ Celebrities });
  };
  
  module.exports = { getAllCelebrities, createCelebritiesTesting };