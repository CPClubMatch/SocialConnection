// import React from 'react';
// import './App.css';
// import logo from '/Users/nicolasjulia/Downloads/clubcupid/my-app/src/retroheart.png'
// import cupid from '/Users/nicolasjulia/Downloads/clubcupid/my-app/src/cupid.png'

// // Data and logic (your provided script)
// const ALL_TAGS = { 1: "Community Service",

//   2: "Professional Networking",

//   3: "Creative Arts",

//   4: "Technology Integration",

//   5: "Environmental Sustainability",

//   6: "Leadership Development",

//   7: "Academic Support",

//   8: "Cultural Diversity",

//   9: "Social Events",

//   10: "Innovation and Entrepreneurship",

//   11: "Health and Wellness",

//   12: "Religious and Spiritual",

//   13: "Competitive Teams",

//   14: "Engineering Focus",

//   15: "Agricultural Practices",

//   16: "Sports and Recreation",

//   17: "Political Activism",

//   18: "Historical Preservation",

//   19: "Science and Research",

//   20: "Music and Performance",

//   21: "Advocacy and Human Rights",

//   22: "Corporate Partnerships",

//   23: "International Focus",

//   24: "Equity and Inclusion",

//   25: "STEM Education",

//   26: "Literary and Writing",

//   27: "Artistic Expression",

//   28: "Financial Education",

//   29: "Media and Communications",

//   30: "Career Readiness",

//   31: "Legal Education",

//   32: "Safety and Security",

//   33: "Volunteer Opportunities",

//   34: "Women’s Interests",

//   35: "Mental Health",

//   36: "Animal Welfare",

//   37: "Technology and Coding",

//   38: "Outdoor Activities",

//   39: "Family and Parenting",

//   40: "Culinary Arts" };
// const CATEGORY_QUESTIONS = { 
// "Sports and Recreation": [

//     ["Do you enjoy team-based sports like soccer, basketball, or cricket?", [16, 13]],

//     ["Are individual sports, such as cycling or fencing, more your style?", [16, 38]],

//     ["Do you prefer outdoor activities like hiking, rowing, or dragon boating?", [38, 11]],

//     ["Would you participate in competitive events like triathlons or esports?", [13, 16]],

//     ["Are you interested in exploring unique sports, such as archery or unicycling?", [16, 38]],

//     ["Do you enjoy water sports, such as sailing, waterskiing, or rowing?", [38, 11]],

//     ["Would you like to join a recreational club for fun rather than competition?", [33, 16]]

//   ],

//   "Creative Arts": [

//     ["Do you enjoy creating visual art, such as painting or drawing?", [27, 3]],

//     ["Are you passionate about performing arts, like dance, theater, or music?", [20, 3]],

//     ["Do you like writing, such as poetry, short stories, or journalism?", [26, 29]],

//     ["Would you join a comedy or improv club?", [20, 8]],

//     ["Are you interested in exploring textile arts or sustainable fashion?", [27, 5]],

//     ["Do you prefer collaborative projects, such as producing performances or art exhibitions?", [3, 27]],

//     ["Are you interested in photography or digital design?", [3, 29]],

//     ["Would you enjoy expressing your creativity in a non-competitive environment?", [27, 35]]

// ],

// "Community Service & Advocacy": [

//     ["Are you passionate about volunteering to help your community?", [1, 33]],

//     ["Do you enjoy advocating for social or environmental justice?", [21, 5]],

//     ["Would you like to work on projects promoting equity and inclusion?", [24, 34]],

//     ["Are you interested in supporting causes such as animal welfare?", [36, 1]],

//     ["Do you want to participate in activities that promote human rights?", [21, 33]],

//     ["Would you enjoy planning community events to bring people together?", [9, 1]],

//     ["Are you open to working with diverse cultural groups to achieve shared goals?", [8, 23]]

// ],

// "Professional Development & Networking": [

//     ["Do you want to join a club that focuses on career readiness or job skills?", [30, 2]],

//     ["Are you interested in learning about entrepreneurship or innovation?", [10, 28]],

//     ["Would you like to connect with professionals in your field of study?", [22, 2]],

//     ["Do you enjoy participating in leadership development programs?", [6, 2]],

//     ["Would you attend workshops on financial literacy or budgeting?", [28, 30]],

//     ["Are you interested in clubs that promote academic or professional success?", [7, 30]],

//     ["Do you enjoy collaborating with peers to solve real-world problems?", [4, 10]]

// ],

// "Technology and Engineering": [

//     ["Are you passionate about coding or software development?", [37, 4]],

//     ["Do you enjoy working on engineering projects or building things?", [14, 4]],

//     ["Would you like to join a robotics or AI-focused club?", [37, 19]],

//     ["Are you interested in promoting STEM education in your community?", [25, 33]],

//     ["Do you enjoy participating in hackathons or coding competitions?", [37, 13]],

//     ["Are you passionate about the future of renewable energy or sustainable tech?", [5, 14]],

//     ["Would you like to work on interdisciplinary projects involving technology?", [4, 14]]

// ],

// "Environmental Sustainability": [

//     ["Are you passionate about addressing climate change?", [5, 21]],

//     ["Do you enjoy participating in projects focused on conservation?", [5, 33]],

//     ["Would you like to join a club that promotes sustainable agriculture?", [15, 5]],

//     ["Are you interested in outdoor activities like tree planting or cleanups?", [33, 38]],

//     ["Do you enjoy raising awareness about environmental issues?", [5, 21]],

//     ["Would you work on initiatives to reduce campus waste or improve recycling?", [5, 15]],

//     ["Are you interested in collaborating on research about sustainability?", [19, 5]]

// ],

// "Cultural Diversity and Social Connection": [

//     ["Do you enjoy learning about and experiencing other cultures?", [8, 23]],

//     ["Are you passionate about promoting equity and inclusion on campus?", [24, 21]],

//     ["Would you like to join a club that focuses on multicultural events?", [9, 23]],

//     ["Are you interested in joining clubs that celebrate specific heritages?", [8, 34]],

//     ["Do you enjoy participating in activities that bring diverse groups together?", [9, 24]],

//     ["Would you like to explore clubs focused on international connections?", [23, 8]],

//     ["Are you passionate about addressing issues of social justice?", [21, 24]]


//   ] };
// const clubsData = [{

//     name: "Outdoor Adventurers",

//     description: "A club for exploring hiking, climbing, and other outdoor sports.",

//     tags: [16, 38]

//   },

//   {

//     name: "Green Earth Society",

//     description: "Focuses on campus cleanups, tree planting, and sustainability activism.",

//     tags: [5, 33]

//   },

//   {

//     name: "Art & Sketch Club",

//     description: "Join fellow artists for painting, sketching, and exhibitions.",

//     tags: [3, 27]

//   },

//   {

//     name: "Tech Innovators",

//     description: "A group for coding projects, hackathons, and emerging technologies.",

//     tags: [4, 10, 37]

//   },

//   {

//     name: "Volunteer Heroes",

//     description: "General volunteering for community events and service projects.",

//     tags: [1, 33]

//   },

//   {

//     name: "Fitness Fanatics",

//     description: "Focus on individual and group fitness, including running and cycling.",

//     tags: [16, 11, 38]

//   },

//   {

//     name: "Academic Scholars",

//     description: "Study groups, tutoring sessions, and academic support activities.",

//     tags: [7, 30]

//   },

//   {

//     name: "Global Citizens",

//     description: "Celebrating cultural diversity through events, potlucks, and service.",

//     tags: [8, 23, 9]

//   }];

// function cosineSimilarity(vecA, vecB) { let dotProduct = 0;

//   let normA = 0;

//   let normB = 0;

 

//   for (let i = 0; i < vecA.length; i++) {

//     dotProduct += vecA[i] * vecB[i];

//     normA += vecA[i] * vecA[i];

//     normB += vecB[i] * vecB[i];

//   }

//   if (normA === 0 || normB === 0) return 0; // avoid divide-by-zero

//   return dotProduct / (Math.sqrt(normA) * Math.sqrt(normB));

// }


// function rankClubsBySimilarity(clubs, userScores) { 

//   const userVector = Object.keys(ALL_TAGS).map((tagId) => userScores[tagId] || 0);


//   const ranked = clubs.map((club) => {

//     // if club's tag is present => score 10, else => 0

//     const clubVector = Object.keys(ALL_TAGS).map((tagId) => {

//       return club.tags.includes(parseInt(tagId)) ? 10 : 0;

//     });

//     const similarity = cosineSimilarity(userVector, clubVector);

//     return { ...club, similarity };

//   });

 

//   // sort by similarity desc

//   ranked.sort((a, b) => b.similarity - a.similarity);

//   return ranked.slice(0, 10); }

// function App() {
//   const categoryKeys = Object.keys(CATEGORY_QUESTIONS);
//   const [currentCategoryIndex, setCurrentCategoryIndex] = React.useState(0);
//   const [categoryInterests, setCategoryInterests] = React.useState({});
//   const [tagScores, setTagScores] = React.useState(() =>
//     Object.keys(ALL_TAGS).reduce((acc, tagId) => ({ ...acc, [tagId]: [] }), {})
//   );
//   const [surveyComplete, setSurveyComplete] = React.useState(false);
//   const [topClubs, setTopClubs] = React.useState([]);
//   const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(0);
//   const [quizStarted, setQuizStarted] = React.useState(false);

//   const handleStartQuiz = () => {
//     setQuizStarted(true);
//   };

//   const handleCategoryInterest = (yesOrNo) => {
//     if (yesOrNo) {
//       setCategoryInterests((prev) => ({
//         ...prev,
//         [categoryKeys[currentCategoryIndex]]: yesOrNo,
//       }));
//       setCurrentQuestionIndex(0);
//     } else {
//       if (currentCategoryIndex < categoryKeys.length - 1) {
//         setCurrentCategoryIndex(currentCategoryIndex + 1);
//         setCurrentQuestionIndex(0);
//       } else {
//         computeFinalResults();
//         setSurveyComplete(true);
//       }
//     }
//   };

//   const handleSubQuestionAnswer = (questionTags, answer) => {
//     const score = answer ? 10 : 0;
//     setTagScores((prev) => {
//       const updated = { ...prev };
//       questionTags.forEach((t) => {
//         updated[t] = [...updated[t], score];
//       });
//       return updated;
//     });

//     if (currentQuestionIndex === CATEGORY_QUESTIONS[categoryKeys[currentCategoryIndex]].length - 1) {
//       if (currentCategoryIndex < categoryKeys.length - 1) {
//         setCurrentCategoryIndex(currentCategoryIndex + 1);
//         setCurrentQuestionIndex(0);
//       } else {
//         computeFinalResults();
//         setSurveyComplete(true);
//       }
//     } else {
//       setCurrentQuestionIndex(currentQuestionIndex + 1);
//     }
//   };

//   const computeFinalResults = () => {
//     const averagedScores = Object.keys(ALL_TAGS).reduce((acc, tagId) => {
//       const scores = tagScores[tagId] || [];
//       acc[tagId] = scores.length
//         ? scores.reduce((a, b) => a + b, 0) / scores.length
//         : 0;
//       return acc;
//     }, {});

//     const ranked = rankClubsBySimilarity(clubsData, averagedScores);
//     setTopClubs(ranked);
//   };

//   const renderCategoryQuestions = () => {
//     const categoryName = categoryKeys[currentCategoryIndex];
//     const questions = CATEGORY_QUESTIONS[categoryName];
//     const isInterested = categoryInterests[categoryName];

//     if (isInterested === undefined) {
//       return (
//         <div className="question-block">
//           <h2 className="major-question">Are you interested in {categoryName}?</h2>
//           <button onClick={() => handleCategoryInterest(true)}>Yes</button>
//           <button onClick={() => handleCategoryInterest(false)}>No</button>
//         </div>
//       );
//     }

//     if (isInterested) {
//       const currentQuestion = questions[currentQuestionIndex];
//       return (
//         <div className="question-block">
//           <h3 className="category-name">{categoryName}</h3>
//           <h2 className="subcategory-question">{currentQuestion[0]}</h2>
//           <button onClick={() => handleSubQuestionAnswer(currentQuestion[1], true)}>Yes</button>
//           <button onClick={() => handleSubQuestionAnswer(currentQuestion[1], false)}>No</button>
//         </div>
//       );
//     }

//     return null;
//   };

//   if (surveyComplete) {
//     return (
//       <div className="App">
//         <header className="App-header">
//          <div className="logo-title-container">
//           <img src={logo} alt="Logo" className="header-icon" width="100" height="100"/>
//            <h1 className="club-cupid-title">Club Cupid</h1>
//            <img src={cupid} alt="Logo" className="header-icon-cupid" width="100" height="100"/>
//          </div>
//           <h2 className="top-matches-title">Here are your top club matches!</h2>
//           <div className="club-list">
//             {topClubs.map((club, index) => (
//               <div key={index} className="club-item">
//                 <h3>{club.name}</h3>
//                 <p>Match: {(club.similarity * 100).toFixed(2)}%</p>
//               </div>
//             ))}
//           </div>
//         </header>
//       </div>
//     );
//   }

// if (!quizStarted) {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <div className="logo-title-container">
//            <img src={logo} alt="Logo" className="header-icon" width="100" height="100"/>
//            <h1 className="club-cupid-title">Club Cupid</h1>
//            <img src={cupid} alt="Logo" className="header-icon-cupid" width="100" height="100"/>
//         </div>
//         <h2><br /></h2>
//         <h2 className="survey-title">Club Matchmaking Survey</h2>
//         <button onClick={handleStartQuiz}>Start Quiz</button>
//       </header>
//     </div>
//   );
// }

//   return (
//     <div className="App">
//       <header className="App-header">
//         <div className="logo-title-container">
//           <img src={logo} alt="Logo" className="header-icon" width="100" height="100"/>
//            <h1 className="club-cupid-title">Club Cupid</h1>
//            <img src={cupid} alt="Logo" className="header-icon-cupid" width="100" height="100"/>
//         </div>
//         <h2><br /></h2>
//           {renderCategoryQuestions()}
//       </header>
//     </div>
//   );
// }

// export default App;














// import React, { useState } from 'react';
// import Papa from 'papaparse';
// import './App.css';
// import logo from './retroheart.png';
// import cupid from './cupid.png';

// // -------------------- 1. DEFINE TAGS AND BROAD CATEGORIES --------------------
// // In the Python version, ALL_TAGS has the format { tagID: ["Tag Name", parentID], ... }.
// // We’ll keep that structure here, so we can do the "parent average" logic later.

// const ALL_TAGS = {
//   1: ["Community Service", 1],
//   2: ["Professional Networking", 2],
//   3: ["Creative Arts", 3],
//   4: ["Technology Integration", 14],
//   5: ["Environmental Sustainability", 5],
//   6: ["Leadership Development", 2],
//   7: ["Academic Support", 2],
//   8: ["Cultural Diversity", 8],
//   9: ["Social Events", 8],
//   10: ["Innovation and Entrepreneurship", 14],
//   11: ["Health and Wellness", 16],
//   12: ["Religious and Spiritual", 8],
//   13: ["Competitive Teams", 16],
//   14: ["Engineering Focus", 14],
//   15: ["Agricultural Practices", 5],
//   16: ["Sports and Recreation", 16],
//   17: ["Political Activism", 1],
//   18: ["Historical Preservation", 8],
//   19: ["Science and Research", 14],
//   20: ["Music and Performance", 3],
//   21: ["Advocacy and Human Rights", 1],
//   22: ["Corporate Partnerships", 2],
//   23: ["International Focus", 8],
//   24: ["Equity and Inclusion", 8],
//   25: ["STEM Education", 14],
//   26: ["Literary and Writing", 3],
//   27: ["Artistic Expression", 3],
//   28: ["Financial Education", 2],
//   29: ["Media and Communications", 3],
//   30: ["Career Readiness", 2],
//   31: ["Legal Education", 1],
//   32: ["Safety and Security", 1],
//   33: ["Volunteer Opportunities", 1],
//   34: ["Women’s Interests", 8],
//   35: ["Mental Health", 1],
//   36: ["Animal Welfare", 5],
//   37: ["Technology and Coding", 14],
//   38: ["Outdoor Activities", 16],
//   39: ["Family and Parenting", 1],
//   40: ["Culinary Arts", 3]
// };

// // In Python, we have the same categories, each with sub-questions. We'll replicate that structure.
// const CATEGORY_QUESTIONS = {
//   "Sports and Recreation": [
//     ["Do you enjoy team-based sports like soccer, basketball, or cricket?", [16, 13]],
//     ["Are individual sports, such as cycling or fencing, more your style?", [16, 38]],
//     ["Do you prefer outdoor activities like hiking, rowing, or dragon boating?", [16, 38, 11]],
//     ["Would you participate in competitive events like triathlons or esports?", [16, 13]],
//     ["Are you interested in exploring unique sports, such as archery or unicycling?", [16, 38]],
//     ["Do you enjoy water sports, such as sailing, waterskiing, or rowing?", [16, 38, 11]],
//     ["Would you like to join a recreational club for fun rather than competition?", [16, 33]]
//   ],
//   "Creative Arts": [
//     ["Do you enjoy creating visual art, such as painting or drawing?", [3, 27]],
//     ["Are you passionate about performing arts, like dance, theater, or music?", [3, 20]],
//     ["Do you like writing, such as poetry, short stories, or journalism?", [3, 26]],
//     ["Would you join a comedy or improv club?", [3, 20]],
//     ["Are you interested in exploring textile arts or sustainable fashion?", [3, 27, 5]],
//     ["Do you prefer collaborative projects, such as producing performances or art exhibitions?", [3, 27]],
//     ["Are you interested in photography or digital design?", [3, 29]],
//     ["Would you enjoy expressing your creativity in a non-competitive environment?", [3, 27, 35]]
//   ],
//   "Community Service & Advocacy": [
//     ["Are you passionate about volunteering to help your community?", [1, 33]],
//     ["Do you enjoy advocating for social or environmental justice?", [1, 21, 5]],
//     ["Would you like to work on projects promoting equity and inclusion?", [1, 24, 34]],
//     ["Are you interested in supporting causes such as animal welfare?", [1, 36]],
//     ["Do you want to participate in activities that promote human rights?", [1, 21, 33]],
//     ["Would you enjoy planning community events to bring people together?", [1, 9]],
//     ["Are you open to working with diverse cultural groups to achieve shared goals?", [1, 8, 23]]
//   ],
//   "Professional Development & Networking": [
//     ["Do you want to join a club that focuses on career readiness or job skills?", [2, 30]],
//     ["Are you interested in learning about entrepreneurship or innovation?", [2, 10, 28]],
//     ["Would you like to connect with professionals in your field of study?", [2, 22]],
//     ["Do you enjoy participating in leadership development programs?", [2, 6]],
//     ["Would you attend workshops on financial literacy or budgeting?", [2, 28, 30]],
//     ["Are you interested in clubs that promote academic or professional success?", [2, 7, 30]],
//     ["Do you enjoy collaborating with peers to solve real-world problems?", [2, 4, 10]]
//   ],
//   "Technology and Engineering": [
//     ["Are you passionate about coding or software development?", [14, 37, 4]],
//     ["Do you enjoy working on engineering projects or building things?", [14, 4]],
//     ["Would you like to join a robotics or AI-focused club?", [14, 37, 19]],
//     ["Are you interested in promoting STEM education in your community?", [14, 25, 33]],
//     ["Do you enjoy participating in hackathons or coding competitions?", [14, 37, 13]],
//     ["Are you passionate about the future of renewable energy or sustainable tech?", [14, 5]],
//     ["Would you like to work on interdisciplinary projects involving technology?", [14, 4]]
//   ],
//   "Environmental Sustainability": [
//     ["Are you passionate about addressing climate change?", [5, 21]],
//     ["Do you enjoy participating in projects focused on conservation?", [5, 33]],
//     ["Would you like to join a club that promotes sustainable agriculture?", [5, 15]],
//     ["Are you interested in outdoor activities like tree planting or cleanups?", [5, 33, 38]],
//     ["Do you enjoy raising awareness about environmental issues?", [5, 21]],
//     ["Would you work on initiatives to reduce campus waste or improve recycling?", [5, 15]],
//     ["Are you interested in collaborating on research about sustainability?", [5, 19]]
//   ],
//   "Cultural Diversity and Social Connection": [
//     ["Do you enjoy learning about and experiencing other cultures?", [8, 23]],
//     ["Are you passionate about promoting equity and inclusion on campus?", [8, 24, 21]],
//     ["Would you like to join a club that focuses on multicultural events?", [8, 9, 23]],
//     ["Are you interested in joining clubs that celebrate specific heritages?", [8, 24]],
//     ["Do you enjoy participating in activities that bring diverse groups together?", [8, 9, 34]],
//     ["Would you like to explore clubs focused on international connections?", [8, 23]],
//     ["Are you passionate about addressing issues of social justice?", [8, 21, 24]]
//   ]
// };

// // -------------------- 2. HELPER FUNCTIONS FROM PYTHON (JAVASCRIPT VERSIONS) --------------------

// /**
//  * Returns the "parent" category ID for certain sub-tags. 
//  * (In Python we had rename_category_to_number, but we already store parent in ALL_TAGS[tagnumber][1].)
//  * We'll use that logic directly in the final scoring.
//  */

// /** 
//  * Calculate final average scores for each tag using the parent logic from Python.
//  * - userTags is an object: { tagId: [arrayOfResponses], ... }
//  * - We convert that array of responses into a single average.
//  * - Then we compare to the parent's average, etc.
//  */
// function calcUserTagScores(userTags) {
//   // First, build a dict of raw averages
//   let rawAverages = {};
//   for (const tagnumber in userTags) {
//     const responses = userTags[tagnumber];
//     if (!responses || responses.length === 0) {
//       rawAverages[tagnumber] = 0;
//     } else {
//       const sum = responses.reduce((acc, val) => acc + val, 0);
//       rawAverages[tagnumber] = sum / responses.length;
//     }
//   }

//   // Now adjust each average based on parent logic
//   // We do: if average_tag < average_parent => average_tag = (average_tag + average_parent) / 2
//   // Also if average_tag == 1 & we answered at least one question => average_tag = 2
//   let finalScores = {};
//   for (const tagnumber in userTags) {
//     const parentID = ALL_TAGS[tagnumber][1];
//     const avgTag = rawAverages[tagnumber];
//     const parentAvg = rawAverages[parentID] || 0;

//     let finalValue = avgTag;

//     // Compare with parent's average
//     if (finalValue < parentAvg) {
//       finalValue = (finalValue + parentAvg) / 2;
//     }
//     // If finalValue == 1 and there was at least one question answered => set to 2
//     // Because in Python we said: if average_tag == 1 and len(list_of_responses) >= 1 => average_tag = 2
//     if (finalValue === 1 && userTags[tagnumber].length >= 1) {
//       finalValue = 2;
//     }
//     finalScores[tagnumber] = finalValue;
//   }

//   return finalScores;
// }

// /**
//  * Convert a row from the club CSV into a vector of 40 elements (for tags 1..40).
//  * Each column after "Club Name" is a score (0 to 2).
//  */
// function buildClubVectorFromRow(row) {
//   // We'll assume row[0] is "Club Name". Then columns 1..40 correspond to tags 1..40 in order.
//   // row = ["Club Name", "score1", "score2", ..., "score40"]
//   const vector = [];
//   for (let tagId = 1; tagId <= 40; tagId++) {
//     // row index "tagId" because row[1] => tag for ID=1, row[2] => ID=2, ...
//     // parse as float to ensure numeric
//     vector.push(parseFloat(row[tagId]) || 0);
//   }
//   return vector;
// }

// /**
//  * Cosine similarity, given two numeric arrays of same length.
//  */
// function cosineSimilarity(vecA, vecB) {
//   let dotProduct = 0;
//   let normA = 0;
//   let normB = 0;

//   for (let i = 0; i < vecA.length; i++) {
//     dotProduct += vecA[i] * vecB[i];
//     normA += vecA[i] * vecA[i];
//     normB += vecB[i] * vecB[i];
//   }
//   if (normA === 0 || normB === 0) return 0; // avoid divide-by-zero
//   return dotProduct / (Math.sqrt(normA) * Math.sqrt(normB));
// }

// /**
//  * For each club row, compute similarity with the user's final vector.
//  * Return top 10 clubs sorted by similarity desc.
//  */
// function rankClubsBySimilarity(userVector, clubData) {
//   let results = [];

//   // Assume first row of CSV is column headers: ["Club Name","Tag1","Tag2",...,"Tag40"]
//   // Then subsequent rows are clubs.
//   // clubData is the entire CSV parse result (an array of arrays).
//   // We start from row index 1 (to skip headers) up to the end.
//   for (let i = 1; i < clubData.length; i++) {
//     const row = clubData[i];
//     if (row.length < 41) continue; // skip incomplete rows

//     const clubName = row[0];
//     const clubVector = buildClubVectorFromRow(row);
//     const similarity = cosineSimilarity(userVector, clubVector);

//     results.push({
//       clubName,
//       similarity
//     });
//   }

//   // Sort desc by similarity
//   results.sort((a, b) => b.similarity - a.similarity);
//   return results.slice(0, 10);
// }

// // -------------------- 3. MAIN REACT COMPONENT --------------------
// function App() {
//   // State to hold the CSV data
//   const [clubData, setClubData] = useState([]);
//   // Keep track of which category we are on
//   const categoryKeys = Object.keys(CATEGORY_QUESTIONS);
//   const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);
//   // For sub-questions
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

//   // We'll store an array of "scores" for each tagId: e.g. { '1': [], '2': [], ... '40': [] }
//   const [userTags, setUserTags] = useState(() => {
//     const initial = {};
//     for (let tagId in ALL_TAGS) {
//       initial[tagId] = [];
//     }
//     return initial;
//   });

//   // Track whether they've indicated interest in a category (yes/maybe/no).
//   // If user says "no", we skip subquestions. If yes/maybe, we proceed with subquestions.
//   // We'll store a separate object: categoryInterest[categoryName] = "yes" / "maybe" / "no"
//   const [categoryInterest, setCategoryInterest] = useState({});

//   // Are we done with the entire survey?
//   const [surveyComplete, setSurveyComplete] = useState(false);
//   const [quizStarted, setQuizStarted] = useState(false);
//   const [topClubs, setTopClubs] = useState([]);

//   // ------------- Step 1: CSV uploading -------------
//   const handleFileUpload = (e) => {
//     const file = e.target.files[0];
//     if (!file) return;
//     Papa.parse(file, {
//       complete: (results) => {
//         setClubData(results.data);
//       }
//     });
//   };

//   // ------------- Step 2: Start the quiz -------------
//   const handleStartQuiz = () => {
//     setQuizStarted(true);
//   };

//   // ------------- Step 3: For each category, ask "Are you interested?" -------------
//   const handleCategoryInterestClick = (interest) => {
//     const thisCategory = categoryKeys[currentCategoryIndex];
//     setCategoryInterest((prev) => ({ ...prev, [thisCategory]: interest }));

//     // If "no", then we skip sub-questions and go to next category
//     // If "yes" or "maybe", we ask sub-questions
//     if (interest === "no") {
//       goToNextCategory();
//     } else {
//       // Reset sub-question index to 0 for this category
//       setCurrentQuestionIndex(0);
//     }
//   };

//   // Helper to move to next category after sub-questions
//   const goToNextCategory = () => {
//     if (currentCategoryIndex < categoryKeys.length - 1) {
//       setCurrentCategoryIndex(currentCategoryIndex + 1);
//       setCurrentQuestionIndex(0);
//     } else {
//       // done with all categories
//       finalizeScoresAndComputeClubs();
//     }
//   };

//   // ------------- Step 4: Sub-questions -------------
//   const handleSubQuestionAnswer = (tagIds, answeredYes) => {
//     // answeredYes can be 1 if yes, 0 if no
//     const numericAnswer = answeredYes ? 1 : 0;
//     // Insert this numeric answer into userTags for each involved tagId
//     setUserTags((prev) => {
//       const updated = { ...prev };
//       tagIds.forEach((tid) => {
//         updated[tid] = [...updated[tid], numericAnswer];
//       });
//       return updated;
//     });

//     // If we are at the end of sub-questions for this category, move on
//     const questionsForCategory = CATEGORY_QUESTIONS[categoryKeys[currentCategoryIndex]];
//     if (currentQuestionIndex === questionsForCategory.length - 1) {
//       // done with sub-questions for this category
//       goToNextCategory();
//     } else {
//       // go to next sub-question
//       setCurrentQuestionIndex(currentQuestionIndex + 1);
//     }
//   };

//   // ------------- Step 5: Finalize category interest score -------------
//   // If user said "yes" => push(1) for that category's tag
//   // If user said "maybe" => push(0.5) 
//   // If user said "no" => push(0)
//   // We'll do this just before computing final results so it doesn't break the sub-question flow
//   const applyCategoryInterestScores = (tempUserTags) => {
//     for (let cName in categoryInterest) {
//       const interest = categoryInterest[cName];
//       const catTagId = renameCategoryToNumber(cName); // parent tag ID from the Python logic

//       if (interest === "yes") {
//         tempUserTags[catTagId].push(1);
//       } else if (interest === "maybe") {
//         tempUserTags[catTagId].push(0.5);
//       } else {
//         // no => push(0)
//         tempUserTags[catTagId].push(0);
//       }
//     }
//     return tempUserTags;
//   };

//   /**
//    * In Python, rename_category_to_number does:
//    *  "Community Service & Advocacy" => 1
//    *  "Creative Arts" => 3
//    *  "Sports and Recreation" => 16
//    *  "Environmental Sustainability" => 5
//    *  "Professional Development & Networking" => 2
//    *  "Technology and Engineering" => 14
//    *  "Cultural Diversity and Social Connection" => 8
//    */
//   const renameCategoryToNumber = (categoryName) => {
//     if (categoryName === "Community Service & Advocacy") return 1;
//     if (categoryName === "Creative Arts") return 3;
//     if (categoryName === "Sports and Recreation") return 16;
//     if (categoryName === "Environmental Sustainability") return 5;
//     if (categoryName === "Professional Development & Networking") return 2;
//     if (categoryName === "Technology and Engineering") return 14;
//     if (categoryName === "Cultural Diversity and Social Connection") return 8;
//     // default fallback
//     return 1;
//   };

//   // ------------- Step 6: Once done, compute final user vector, rank clubs, show top 10 -------------
//   const finalizeScoresAndComputeClubs = () => {
//     // 1) incorporate yes/no/maybe interest
//     let tempUserTags = JSON.parse(JSON.stringify(userTags)); 
//     tempUserTags = applyCategoryInterestScores(tempUserTags);

//     // 2) run parent logic to get final scores  (0..2)
//     const finalScores = calcUserTagScores(tempUserTags);

//     // 3) build user vector of length 40
//     const userVector = [];
//     for (let tagId = 1; tagId <= 40; tagId++) {
//       userVector.push(finalScores[tagId] || 0);
//     }

//     // 4) rank clubs by similarity
//     const topTen = rankClubsBySimilarity(userVector, clubData);
//     setTopClubs(topTen);

//     // 5) show results
//     setSurveyComplete(true);
//   };

//   // -------------------- RENDERING --------------------
//   if (surveyComplete) {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <div className="logo-title-container">
//             <img src={logo} alt="Logo" className="header-icon" width="100" height="100" />
//             <h1 className="club-cupid-title">Club Cupid</h1>
//             <img src={cupid} alt="cupid" className="header-icon-cupid" width="100" height="100" />
//           </div>
//           <h2 className="top-matches-title">Here are your top club matches!</h2>
//           <div className="club-list">
//             {topClubs.map((club, idx) => (
//               <div key={idx} className="club-item">
//                 <h3>{club.clubName}</h3>
//                 <p>Match: {(club.similarity * 100).toFixed(2)}%</p>
//               </div>
//             ))}
//           </div>
//         </header>
//       </div>
//     );
//   }

//   if (!quizStarted) {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <div className="logo-title-container">
//             <img src={logo} alt="Logo" className="header-icon" width="100" height="100" />
//             <h1 className="club-cupid-title">Club Cupid</h1>
//             <img src={cupid} alt="cupid" className="header-icon-cupid" width="100" height="100" />
//           </div>
//           <h2><br /></h2>
//           <h2 className="survey-title">Club Matchmaking Survey</h2>
//           <p>Please upload the CSV file with club scores (130 rows, 40 columns):</p>
//           <input type="file" accept=".csv" onChange={handleFileUpload} />
//           <br /><br />
//           {clubData.length > 0 && (
//             <button onClick={handleStartQuiz}>
//               Start Quiz
//             </button>
//           )}
//           {clubData.length === 0 && (
//             <p style={{ fontStyle: 'italic', marginTop: '1rem' }}>
//               (Upload a valid CSV to enable the quiz)
//             </p>
//           )}
//         </header>
//       </div>
//     );
//   }

//   // If the quiz is started, but not yet complete, we show category or sub-questions
//   const categoryName = categoryKeys[currentCategoryIndex];
//   const interest = categoryInterest[categoryName];

//   // If user hasn't answered interest yet, show that question
//   if (interest === undefined) {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <div className="logo-title-container">
//             <img src={logo} alt="Logo" className="header-icon" width="100" height="100" />
//             <h1 className="club-cupid-title">Club Cupid</h1>
//             <img src={cupid} alt="cupid" className="header-icon-cupid" width="100" height="100" />
//           </div>
//           <h2><br /></h2>
//           <div className="question-block">
//             <h2 className="major-question">Are you interested in {categoryName}?</h2>
//             <button onClick={() => handleCategoryInterestClick("yes")}>Yes</button>
//             <button onClick={() => handleCategoryInterestClick("maybe")}>Maybe</button>
//             <button onClick={() => handleCategoryInterestClick("no")}>No</button>
//           </div>
//         </header>
//       </div>
//     );
//   }

//   // If user said "yes" or "maybe", we show sub-questions
//   const questionsForCategory = CATEGORY_QUESTIONS[categoryName];
//   const currentQuestion = questionsForCategory[currentQuestionIndex];

//   return (
//     <div className="App">
//       <header className="App-header">
//         <div className="logo-title-container">
//           <img src={logo} alt="Logo" className="header-icon" width="100" height="100" />
//           <h1 className="club-cupid-title">Club Cupid</h1>
//           <img src={cupid} alt="cupid" className="header-icon-cupid" width="100" height="100" />
//         </div>
//         <h2><br /></h2>
//         <div className="question-block">
//           <h3 className="category-name">{categoryName}</h3>
//           <h2 className="subcategory-question">{currentQuestion[0]}</h2>
//           <button onClick={() => handleSubQuestionAnswer(currentQuestion[1], true)}>Yes</button>
//           <button onClick={() => handleSubQuestionAnswer(currentQuestion[1], false)}>No</button>
//         </div>
//       </header>
//     </div>
//   );
// }

// export default App;





import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import './App.css';
import logo from './retroheart.png';
import cupid from './cupid.png';

// -------------------- 1. DEFINE TAGS AND BROAD CATEGORIES --------------------
const ALL_TAGS = {
  1: ["Community Service", 1],
  2: ["Professional Networking", 2],
  3: ["Creative Arts", 3],
  4: ["Technology Integration", 14],
  5: ["Environmental Sustainability", 5],
  6: ["Leadership Development", 2],
  7: ["Academic Support", 2],
  8: ["Cultural Diversity", 8],
  9: ["Social Events", 8],
  10: ["Innovation and Entrepreneurship", 14],
  11: ["Health and Wellness", 16],
  12: ["Religious and Spiritual", 8],
  13: ["Competitive Teams", 16],
  14: ["Engineering Focus", 14],
  15: ["Agricultural Practices", 5],
  16: ["Sports and Recreation", 16],
  17: ["Political Activism", 1],
  18: ["Historical Preservation", 8],
  19: ["Science and Research", 14],
  20: ["Music and Performance", 3],
  21: ["Advocacy and Human Rights", 1],
  22: ["Corporate Partnerships", 2],
  23: ["International Focus", 8],
  24: ["Equity and Inclusion", 8],
  25: ["STEM Education", 14],
  26: ["Literary and Writing", 3],
  27: ["Artistic Expression", 3],
  28: ["Financial Education", 2],
  29: ["Media and Communications", 3],
  30: ["Career Readiness", 2],
  31: ["Legal Education", 1],
  32: ["Safety and Security", 1],
  33: ["Volunteer Opportunities", 1],
  34: ["Women’s Interests", 8],
  35: ["Mental Health", 1],
  36: ["Animal Welfare", 5],
  37: ["Technology and Coding", 14],
  38: ["Outdoor Activities", 16],
  39: ["Family and Parenting", 1],
  40: ["Culinary Arts", 3]
};

const CATEGORY_QUESTIONS = {
  "Sports and Recreation": [
    ["Do you enjoy team-based sports like soccer, basketball, or cricket?", [16, 13]],
    ["Are individual sports, such as cycling or fencing, more your style?", [16, 38]],
    ["Do you prefer outdoor activities like hiking, rowing, or dragon boating?", [16, 38, 11]],
    ["Would you participate in competitive events like triathlons or esports?", [16, 13]],
    ["Are you interested in exploring unique sports, such as archery or unicycling?", [16, 38]],
    ["Do you enjoy water sports, such as sailing, waterskiing, or rowing?", [16, 38, 11]],
    ["Would you like to join a recreational club for fun rather than competition?", [16, 33]]
  ],
  "Creative Arts": [
    ["Do you enjoy creating visual art, such as painting or drawing?", [3, 27]],
    ["Are you passionate about performing arts, like dance, theater, or music?", [3, 20]],
    ["Do you like writing, such as poetry, short stories, or journalism?", [3, 26]],
    ["Would you join a comedy or improv club?", [3, 20]],
    ["Are you interested in exploring textile arts or sustainable fashion?", [3, 27, 5]],
    ["Do you prefer collaborative projects, such as producing performances or art exhibitions?", [3, 27]],
    ["Are you interested in photography or digital design?", [3, 29]],
    ["Would you enjoy expressing your creativity in a non-competitive environment?", [3, 27, 35]]
  ],
  "Community Service & Advocacy": [
    ["Are you passionate about volunteering to help your community?", [1, 33]],
    ["Do you enjoy advocating for social or environmental justice?", [1, 21, 5]],
    ["Would you like to work on projects promoting equity and inclusion?", [1, 24, 34]],
    ["Are you interested in supporting causes such as animal welfare?", [1, 36]],
    ["Do you want to participate in activities that promote human rights?", [1, 21, 33]],
    ["Would you enjoy planning community events to bring people together?", [1, 9]],
    ["Are you open to working with diverse cultural groups to achieve shared goals?", [1, 8, 23]]
  ],
  "Professional Development & Networking": [
    ["Do you want to join a club that focuses on career readiness or job skills?", [2, 30]],
    ["Are you interested in learning about entrepreneurship or innovation?", [2, 10, 28]],
    ["Would you like to connect with professionals in your field of study?", [2, 22]],
    ["Do you enjoy participating in leadership development programs?", [2, 6]],
    ["Would you attend workshops on financial literacy or budgeting?", [2, 28, 30]],
    ["Are you interested in clubs that promote academic or professional success?", [2, 7, 30]],
    ["Do you enjoy collaborating with peers to solve real-world problems?", [2, 4, 10]]
  ],
  "Technology and Engineering": [
    ["Are you passionate about coding or software development?", [14, 37, 4]],
    ["Do you enjoy working on engineering projects or building things?", [14, 4]],
    ["Would you like to join a robotics or AI-focused club?", [14, 37, 19]],
    ["Are you interested in promoting STEM education in your community?", [14, 25, 33]],
    ["Do you enjoy participating in hackathons or coding competitions?", [14, 37, 13]],
    ["Are you passionate about the future of renewable energy or sustainable tech?", [14, 5]],
    ["Would you like to work on interdisciplinary projects involving technology?", [14, 4]]
  ],
  "Environmental Sustainability": [
    ["Are you passionate about addressing climate change?", [5, 21]],
    ["Do you enjoy participating in projects focused on conservation?", [5, 33]],
    ["Would you like to join a club that promotes sustainable agriculture?", [5, 15]],
    ["Are you interested in outdoor activities like tree planting or cleanups?", [5, 33, 38]],
    ["Do you enjoy raising awareness about environmental issues?", [5, 21]],
    ["Would you work on initiatives to reduce campus waste or improve recycling?", [5, 15]],
    ["Are you interested in collaborating on research about sustainability?", [5, 19]]
  ],
  "Cultural Diversity and Social Connection": [
    ["Do you enjoy learning about and experiencing other cultures?", [8, 23]],
    ["Are you passionate about promoting equity and inclusion on campus?", [8, 24, 21]],
    ["Would you like to join a club that focuses on multicultural events?", [8, 9, 23]],
    ["Are you interested in joining clubs that celebrate specific heritages?", [8, 24]],
    ["Do you enjoy participating in activities that bring diverse groups together?", [8, 9, 34]],
    ["Would you like to explore clubs focused on international connections?", [8, 23]],
    ["Are you passionate about addressing issues of social justice?", [8, 21, 24]]
  ]
};

// -------------------- 2. HELPER FUNCTIONS FROM PYTHON (JAVASCRIPT VERSIONS) --------------------

function calcUserTagScores(userTags) {
  let rawAverages = {};
  for (const tagnumber in userTags) {
    const responses = userTags[tagnumber];
    if (!responses || responses.length === 0) {
      rawAverages[tagnumber] = 0;
    } else {
      const sum = responses.reduce((acc, val) => acc + val, 0);
      rawAverages[tagnumber] = sum / responses.length;
    }
  }

  let finalScores = {};
  for (const tagnumber in userTags) {
    const parentID = ALL_TAGS[tagnumber][1];
    const avgTag = rawAverages[tagnumber];
    const parentAvg = rawAverages[parentID] || 0;

    let finalValue = avgTag;
    if (finalValue < parentAvg) {
      finalValue = (finalValue + parentAvg) / 2;
    }
    if (finalValue === 1 && userTags[tagnumber].length >= 1) {
      finalValue = 2;
    }
    finalScores[tagnumber] = finalValue;
  }
  return finalScores;
}

function buildClubVectorFromRow(row) {
  const vector = [];
  for (let tagId = 1; tagId <= 40; tagId++) {
    vector.push(parseFloat(row[tagId]) || 0);
  }
  return vector;
}

function cosineSimilarity(vecA, vecB) {
  let dotProduct = 0;
  let normA = 0;
  let normB = 0;

  for (let i = 0; i < vecA.length; i++) {
    dotProduct += vecA[i] * vecB[i];
    normA += vecA[i] * vecA[i];
    normB += vecB[i] * vecB[i];
  }
  if (normA === 0 || normB === 0) return 0;
  return dotProduct / (Math.sqrt(normA) * Math.sqrt(normB));
}

function rankClubsBySimilarity(userVector, clubData) {
  let results = [];
  for (let i = 1; i < clubData.length; i++) {
    const row = clubData[i];
    if (row.length < 41) continue;
    const clubName = row[0];
    const clubVector = buildClubVectorFromRow(row);
    const similarity = cosineSimilarity(userVector, clubVector);
    results.push({ clubName, similarity });
  }
  results.sort((a, b) => b.similarity - a.similarity);
  return results.slice(0, 10);
}

// -------------------- 3. MAIN REACT COMPONENT --------------------
function App() {
  const [clubData, setClubData] = useState([]);
  const categoryKeys = Object.keys(CATEGORY_QUESTIONS);
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userTags, setUserTags] = useState(() => {
    const initial = {};
    for (let tagId in ALL_TAGS) {
      initial[tagId] = [];
    }
    return initial;
  });
  const [categoryInterest, setCategoryInterest] = useState({});
  const [surveyComplete, setSurveyComplete] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);
  const [topClubs, setTopClubs] = useState([]);

  // ------------------ ONLY CHANGE: Automatically load local CSV ------------------ //
  useEffect(() => {
    // On mount, fetch the CSV from the same folder and parse it with Papa
    fetch('./FinalWinterClubScores.csv')
      .then(response => response.text())
      .then(text => {
        const parsed = Papa.parse(text);
        console.log("CSV data loaded:", parsed);
        setClubData(parsed.data);
      });
  }, []);
  // ------------------------------------------------------------------------------ //

  // Original (commented out) code for manual file upload - not used anymore:
  // const handleFileUpload = (e) => {
  //   const file = e.target.files[0];
  //   if (!file) return;
  //   Papa.parse(file, {
  //     complete: (results) => {
  //       setClubData(results.data);
  //     }
  //   });
  // };

  const handleStartQuiz = () => {
    setQuizStarted(true);
  };

  const handleCategoryInterestClick = (interest) => {
    const thisCategory = categoryKeys[currentCategoryIndex];
    setCategoryInterest((prev) => ({ ...prev, [thisCategory]: interest }));
    if (interest === "no") {
      goToNextCategory();
    } else {
      setCurrentQuestionIndex(0);
    }
  };

  const goToNextCategory = () => {
    if (currentCategoryIndex < categoryKeys.length - 1) {
      setCurrentCategoryIndex(currentCategoryIndex + 1);
      setCurrentQuestionIndex(0);
    } else {
      finalizeScoresAndComputeClubs();
    }
  };

  const handleSubQuestionAnswer = (tagIds, answeredYes) => {
    const numericAnswer = answeredYes ? 1 : 0;
    setUserTags((prev) => {
      const updated = { ...prev };
      tagIds.forEach((tid) => {
        updated[tid] = [...updated[tid], numericAnswer];
      });
      return updated;
    });

    const questionsForCategory = CATEGORY_QUESTIONS[categoryKeys[currentCategoryIndex]];
    if (currentQuestionIndex === questionsForCategory.length - 1) {
      goToNextCategory();
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const applyCategoryInterestScores = (tempUserTags) => {
    for (let cName in categoryInterest) {
      const interest = categoryInterest[cName];
      const catTagId = renameCategoryToNumber(cName);
      if (interest === "yes") {
        tempUserTags[catTagId].push(1);
      } else if (interest === "maybe") {
        tempUserTags[catTagId].push(0.5);
      } else {
        tempUserTags[catTagId].push(0);
      }
    }
    return tempUserTags;
  };

  const renameCategoryToNumber = (categoryName) => {
    if (categoryName === "Community Service & Advocacy") return 1;
    if (categoryName === "Creative Arts") return 3;
    if (categoryName === "Sports and Recreation") return 16;
    if (categoryName === "Environmental Sustainability") return 5;
    if (categoryName === "Professional Development & Networking") return 2;
    if (categoryName === "Technology and Engineering") return 14;
    if (categoryName === "Cultural Diversity and Social Connection") return 8;
    return 1;
  };

  const finalizeScoresAndComputeClubs = () => {
    let tempUserTags = JSON.parse(JSON.stringify(userTags));
    tempUserTags = applyCategoryInterestScores(tempUserTags);
    const finalScores = calcUserTagScores(tempUserTags);

    const userVector = [];
    for (let tagId = 1; tagId <= 40; tagId++) {
      userVector.push(finalScores[tagId] || 0);
    }
    const topTen = rankClubsBySimilarity(userVector, clubData);
    setTopClubs(topTen);
    setSurveyComplete(true);
  };

  if (surveyComplete) {
    return (
      <div className="App">
        <header className="App-header">
          <div className="logo-title-container">
            <img src={logo} alt="Logo" className="header-icon" width="100" height="100" />
            <h1 className="club-cupid-title">Club Cupid</h1>
            <img src={cupid} alt="Logo" className="header-icon-cupid" width="100" height="100" />
          </div>
          <h2 className="top-matches-title">Here are your top club matches!</h2>
          <div className="club-list">
            {topClubs.map((club, index) => (
              <div key={index} className="club-item">
                <h3>{club.clubName}</h3>
                <p>Match: {(club.similarity * 100).toFixed(2)}%</p>
              </div>
            ))}
          </div>
        </header>
      </div>
    );
  }

  //   if (surveyComplete) {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <div className="logo-title-container">
//             <img src={logo} alt="Logo" className="header-icon" width="100" height="100" />
//             <h1 className="club-cupid-title">Club Cupid</h1>
//             <img src={cupid} alt="cupid" className="header-icon-cupid" width="100" height="100" />
//           </div>
//           <h2 className="top-matches-title">Here are your top club matches!</h2>
//           <div className="club-list">
//             {topClubs.map((club, idx) => (
//               <div key={idx} className="club-item">
//                 <h3>{club.clubName}</h3>
//                 <p>Match: {(club.similarity * 100).toFixed(2)}%</p>
//               </div>
//             ))}
//           </div>
//         </header>
//       </div>
//     );
//   }

  if (!quizStarted) {
    return (
      <div className="App">
        <header className="App-header">
          <div className="logo-title-container">
            <img src={logo} alt="Logo" className="header-icon" width="100" height="100" />
            <h1 className="club-cupid-title">Club Cupid</h1>
            <img src={cupid} alt="Logo" className="header-icon-cupid" width="100" height="100" />
          </div>
          <h2><br /></h2>
          <h2 className="survey-title">Club Matchmaking Survey</h2>
          {/* We removed the file input here, so the CSV is auto-loaded */}
          {clubData.length > 0 ? (
            <button onClick={handleStartQuiz}>Start Quiz</button>
          ) : (
            <p style={{ fontStyle: 'italic', marginTop: '1rem' }}>
              Loading CSV data...
            </p>
          )}
        </header>
      </div>
    );
  }

  const categoryName = categoryKeys[currentCategoryIndex];
  const interest = categoryInterest[categoryName];

  if (interest === undefined) {
    return (
      <div className="App">
        <header className="App-header">
          <div className="logo-title-container">
            <img src={logo} alt="Logo" className="header-icon" width="100" height="100" />
            <h1 className="club-cupid-title">Club Cupid</h1>
            <img src={cupid} alt="Logo" className="header-icon-cupid" width="100" height="100" />
          </div>
          <h2><br /></h2>
          <div className="question-block">
            <h2 className="major-question">Are you interested in {categoryName}?</h2>
            <button onClick={() => handleCategoryInterestClick("yes")}>Yes</button>
            <button onClick={() => handleCategoryInterestClick("maybe")}>Maybe</button>
            <button onClick={() => handleCategoryInterestClick("no")}>No</button>
          </div>
        </header>
      </div>
    );
  }

  const questionsForCategory = CATEGORY_QUESTIONS[categoryName];
  const currentQuestion = questionsForCategory[currentQuestionIndex];

  return (
    <div className="App">
      <header className="App-header">
        <div className="logo-title-container">
          <img src={logo} alt="Logo" className="header-icon" width="100" height="100" />
          <h1 className="club-cupid-title">Club Cupid</h1>
          <img src={cupid} alt="Logo" className="header-icon-cupid" width="100" height="100" />
        </div>
        <h2><br /></h2>
        <div className="question-block">
          <h3 className="category-name">{categoryName}</h3>
          <h2 className="subcategory-question">{currentQuestion[0]}</h2>
          <button onClick={() => handleSubQuestionAnswer(currentQuestion[1], true)}>Yes</button>
          <button onClick={() => handleSubQuestionAnswer(currentQuestion[1], false)}>No</button>
        </div>
      </header>
    </div>
  );
}

export default App;