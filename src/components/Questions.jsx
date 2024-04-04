// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import sampleQuestions from "../data/sampleQuestions";
// import { motion } from "framer-motion";
// import fakeData from '../../data/fakeData'
// import { useTranslation } from "react-i18next";

// const QuestionCards = (props) => {
//   const [value, setValue] = useState([]);
//   const [comp, setComp] = useState({});
//   const params = useParams();
//   const [currentCards, setCurrentCards] = useState([]);
//   const { t } = useTranslation([]);

//   useEffect(() => {
//     fakeData.filter(companies => companies.id == params.companyID)
//       .map(company => {
//         setComp(company)
//       })
//   }, [])

//   function handleSubmit(array) {
//     if (array.length < 5) {
//       alert('Rating Failed');
//     }
//     else {
//       const obj = {
//         isim: comp.company,
//         sehir: comp.location,
//         oy_1: array[0].rate,
//         oy_2: array[1].rate,
//         oy_3: array[2].rate,
//         oy_4: array[3].rate,
//         oy_5: array[4].rate
//       }
//       fetch("http://localhost:5000/companies", {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(obj)
//       });
//       alert('Rating is Successful');
//       window.location.replace(`/home`);
//     }
//   }

//   return (
//     <>
//       <div className="container">
//         <div className="row justify-content-center">
//           {t("CompanyPage.card", { returnObjects: true }).map((question, index) => (
//             <div className="col-lg-11 col-md-9 col-sm-10 col-12 mb-3" key={question.id}>
//               <div className="card" style={{ backgroundColor: "#eef3f4", borderRadius: "15px" }}>
//                 <div className="row g-0">
//                   <div className="col-md-4">
//                     <img
//                       src={question.img}
//                       alt="Company Logo"
//                       className="img-fluid rounded-start"
//                       style={{ width: "300px", height: "230px", border: "1.5px solid black", borderRadius: "10px", marginLeft: "5px" }}
//                     />
//                   </div>
//                   <div className="col-md-8">
//                     <div className="card-body" style={{ textAlign: "justify" }}>
//                       <h5 className="card-title" style={{ color: "#1976D2" }}>{question.category}</h5>
//                       <h6 className="card-subtitle mb-2">{question.q}</h6>
//                     </div>
//                     <div className="card-body">
//                       <h6 className="card-subtitle mb-2" style={{ color: "#1976D2" }}>{question.subTitle}</h6>
//                       <div className="rating">
//                         {[...Array(5)].map((_, i) => (
//                           <span
//                             key={i}
//                             className={`star ${i < value[index]?.rate ? 'filled' : ''}`}
//                             onClick={() => {
//                               if (value[index]) {
//                                 let newArr = [...value];
//                                 newArr[index] = { id: index, rate: i + 1 };
//                                 setValue(newArr);
//                               } else {
//                                 setValue([...value, { id: index, rate: i + 1 }]);
//                               }
//                             }}
//                           >
//                             &#9733;
//                           </span>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="row justify-content-center mb-3">
//           <div className="col">
//             <motion.div
//               className="animatable"
//               whileHover={{
//                 scale: 1.1,
//                 transition: { duration: 0.3 }
//               }}
//               whileTap={{ scale: 0.9 }}
//             >
//               <button
//                 onClick={() => {
//                   handleSubmit(value);
//                 }}
//                 className="btn btn-primary"
//                 style={{
//                   padding: "10px",
//                   backgroundColor: "#1e88e5",
//                   color: "#fff"
//                 }}
//               >
//                 {t("CompanyPage.button.text")}
//               </button>
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default QuestionCards;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sampleQuestions from "../data/sampleQuestions";
import { motion } from "framer-motion";
import fakeUniData from "../data/fakeUni";
import { useTranslation } from "react-i18next";

const QuestionCards = (props) => {
  const [value, setValue] = useState([]);
  const [comp, setComp] = useState({});
  const params = useParams();
  const { t } = useTranslation([]);

  useEffect(() => {
    fakeUniData.filter(university => university.id == params.universityID)
      .map(university => {
        setComp(university);
      });
  }, []);

  function handleSubmit(array) {
    if (array.length < 5) {
      alert('Rating Failed');
    }
    else {
      const obj = {
        isim: comp.university,
        sehir: comp.location,
        oy_1: array[0].rate,
        oy_2: array[1].rate,
        oy_3: array[2].rate,
        oy_4: array[3].rate,
        oy_5: array[4].rate
      }
      // Simulating post request, replace it with actual logic
      console.log(obj); // Log the object to check if data is correct
      alert('Rating is Successful');
      // window.location.replace(`/home`);
    }
  }

  return (
    <>
      <div className="container mt-3">
        <div className="row justify-content-center">
          {sampleQuestions.map((question, index) => (
            <div className="col-lg-11 col-md-9 col-sm-10 col-12 mb-3" key={question.id}>
              <div className="card" style={{ backgroundColor: "#eef3f4", borderRadius: "15px" }}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src={question.img}
                      alt="University Logo"
                      className="img-fluid rounded-start"
                      style={{ width: "300px", height: "230px", border: "1.5px solid black", borderRadius: "10px", marginLeft: "5px" }}
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body" style={{ textAlign: "justify" }}>
                      <h5 className="card-title" style={{ color: "#1976D2" }}>{question.questionCategory}</h5>
                      <h6 className="card-subtitle mb-2">{question.question}</h6>
                    </div>
                    <div className="card-body">
                      <h6 className="card-subtitle mb-2" style={{ color: "#1976D2" }}>{question.subTitle}</h6>
                      <div className="rating">
                        {[...Array(5)].map((_, i) => (
                          <span
                            key={i}
                            className={`star ${i < value[index]?.rate ? 'filled' : ''}`}
                            onClick={() => {
                              if (value[index]) {
                                let newArr = [...value];
                                newArr[index] = { id: index, rate: i + 1 };
                                setValue(newArr);
                              } else {
                                setValue([...value, { id: index, rate: i + 1 }]);
                              }
                            }}
                          >
                            &#9733;
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="row justify-content-center mb-3">
          <div className="col">
            <motion.div
              className="animatable"
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.9 }}
            >
              <button
                onClick={() => {
                  handleSubmit(value);
                }}
                className="btn btn-primary"
                style={{
                  padding: "10px",
                  backgroundColor: "#1e88e5",
                  color: "#fff"
                }}
              >
                {t("CompanyPage.button.text")}
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  )
}

export default QuestionCards;
