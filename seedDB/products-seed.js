const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });
const Product = require("../models/product");
const Category = require("../models/category");
const mongoose = require("mongoose");
const faker = require("faker");
const connectDB = require("./../config/db");
connectDB();

async function seedDB() {
  faker.seed(0);

  //----------------------Backpacks
  const backpacks_titles = [
"Discrete Structure",
"Data Structure",
"Digital Systems", 
"Object Oriented Programming & Methodology", 
"Mathematics- III",
"Analysis Design of Algorithm",
"Software Engineering",
"Computer Org. & Architecture",
"Operating Systems",
"Data Analytics", 
 ];
  const backpacks_imgs = [
    "https://images.unsplash.com/photo-1610563166150-b34df4f3bcd6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY0OTIzOTE5OA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
    "https://images.unsplash.com/photo-1504639725590-34d0984388bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit",
    "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit",
    "https://rukminim1.flixcart.com/image/416/416/j77xjm80/book/6/1/8/computer-science-original-imaexhvhrzjwhgkg.jpeg?q=70",
    "https://5.imimg.com/data5/NK/KJ/GLADMIN-17084875/discrete-structures-book-500x500.png",
    "https://images.unsplash.com/photo-1518770660439-4636190af475?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit",
    "https://www.pngitem.com/pimgs/m/113-1138414_computer-science-png-png-download-computer-science-icon.png",
    "https://www.clipartmax.com/png/middle/43-431306_technology-enhanced-science-investigations-computer-science-logo-png.png", 
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdjD17aIaVgLlzEL0-eOJrvqbv4ejNkgay7g&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUXTWcovKy1Au7QEtAbbOjpMrZiuGM-vKTP0YP4-Krno35-yYML3YugrwBUvOPDo3eeVE&usqp=CAU",
  ];

  //--------------------Travel Bags
  const travel_titles = [
    "Construction Materials",
    "Surveying",
    "Building Planning & Architecture",
    
  ];

  const travel_imgs = [
    "https://novapublishers.com/wp-content/uploads/2019/01/9781617286933-1-e1546969115553.jpg",
    "https://5.imimg.com/data5/FY/JG/GLADMIN-2954845/surveying-for-engineers-and-arch-500x500.png",
    "https://images-na.ssl-images-amazon.com/images/I/71n1gLlA7AL.jpg",
    
  ];

  //--------------------Briefcases
  const briefcases_titles = [
    "Discrete Structure",
    "Data Structure",
  ];

  const briefcases_imgs = [
    "https://5.imimg.com/data5/NK/KJ/GLADMIN-17084875/discrete-structures-book-500x500.png",
    "https://rukminim1.flixcart.com/image/312/312/ku4ezrk0/book/e/u/o/data-structures-algorithms-using-c-original-imag7b7fkgegtyrf.jpeg?q=70",
  ];

  //--------------------Mini Bags
  const miniBags_titles = [
    "Signals & Systems",
    "Electrical Measurement & Measuring Instrument",
    "Network Analysis",
  ];
  const miniBags_imgs = [
    "https://images-na.ssl-images-amazon.com/images/I/51VmLRWPBoL._SX379_BO1,204,203,200_.jpg",
    "https://rukminim2.flixcart.com/image/416/416/kjswia80/book/z/p/j/electrical-measurement-measuring-instruments-for-gtu-18-course-original-imafzaj4rhzqun4h.jpeg?q=70",
    "https://rukminim2.flixcart.com/image/416/416/jur9nrk0/book/1/2/3/network-analysis-revised-third-edition-by-pearson-original-imafftpvufprdgpw.jpeg?q=70", 
  ];

  //--------------------Large Handags

  const largeHandbags_titles = [
    "Signals & Systems",
    "Electrical Measurement & Measuring Instrument",
    "Network Analysis",
  ];
  const largeHandbags_imgs = [
    "https://images-na.ssl-images-amazon.com/images/I/51VmLRWPBoL._SX379_BO1,204,203,200_.jpg",
    "https://rukminim2.flixcart.com/image/416/416/kjswia80/book/z/p/j/electrical-measurement-measuring-instruments-for-gtu-18-course-original-imafzaj4rhzqun4h.jpeg?q=70",
    "https://rukminim2.flixcart.com/image/416/416/jur9nrk0/book/1/2/3/network-analysis-revised-third-edition-by-pearson-original-imafftpvufprdgpw.jpeg?q=70",
     
  ];

  //-----------------------Purses
  const purses_titles = [
"Thermodynamics", 
"Materials Technology",
"Strength of Material",
  
  ];
  const purses_imgs = [
    "https://www.wileyindia.com/pub/media/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/9/7/9789389698664.jpg",
    "https://images-eu.ssl-images-amazon.com/images/I/41k6Z-mT4qL._SX342_SY445_QL70_ML2_.jpg",
    "https://5.imimg.com/data5/DV/TD/MY-28838716/strength-of-material-book-500x500.png",
    
  ];

  //-----------------Totes

  const totes_titles = [
    "Thermodynamics",
    "Materials Technology",
    "Strength of Material",
  ];
  const totes_imgs = [
    "https://www.wileyindia.com/pub/media/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/9/7/9789389698664.jpg",
    "https://images-eu.ssl-images-amazon.com/images/I/41k6Z-mT4qL._SX342_SY445_QL70_ML2_.jpg",
    "https://5.imimg.com/data5/DV/TD/MY-28838716/strength-of-material-book-500x500.png",
  ];

  async function seedProducts(titlesArr, imgsArr, categStr) {
    try {
      const categ = await Category.findOne({ title: categStr });
      for (let i = 0; i < titlesArr.length; i++) {
        let prod = new Product({
          productCode: faker.helpers.replaceSymbolWithNumber("####-##########"),
          title: titlesArr[i],
          imagePath: imgsArr[i],
          description: faker.lorem.paragraph(),
          price: faker.random.number({ min: 10, max: 50 }),
          manufacturer: faker.company.companyName(0),
          available: true,
          category: categ._id,
        });
        await prod.save();
      }
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async function closeDB() {
    console.log("CLOSING CONNECTION");
    await mongoose.disconnect();
  }

  await seedProducts(backpacks_titles, backpacks_imgs, "CS");
  await seedProducts(briefcases_titles, briefcases_imgs, "IT");
  await seedProducts(travel_titles, travel_imgs, "CE");
  await seedProducts(miniBags_titles, miniBags_imgs, "EC");
  await seedProducts(
    largeHandbags_titles,
    largeHandbags_imgs,
    "EE"
  );
  await seedProducts(purses_titles, purses_imgs, "ME");
  await seedProducts(totes_titles, totes_imgs, "AU");

  await closeDB();
}

seedDB();
