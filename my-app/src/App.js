// import React, { useState, useEffect } from 'react';
// import Papa from 'papaparse';
// import './App.css';
// import logo from './retroheart.png';
// import cupid from './cupid.png';
// // -------------------- 1. DEFINE TAGS AND BROAD CATEGORIES --------------------
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
//     ["Do you enjoy advocating for social or environmental justice?", [1, 21, 6, 5]],
//     ["Would you like to work on projects promoting equity and inclusion?", [1, 24, 34]],
//     ["Are you interested in supporting causes such as animal welfare?", [1, 36]],
//     ["Do you want to participate in activities that promote human rights?", [1, 21, 33]],
//     ["Would you enjoy planning community events to bring people together?", [1, 6, 9]],
//     ["Are you open to working with diverse cultural groups to achieve shared goals?", [1, 8, 23]]
//   ],
//   "Professional Development & Networking": [
//     ["Do you want to join a club that focuses on career readiness or job skills?", [2, 30]],
//     ["Are you interested in learning about entrepreneurship or innovation?", [2, 10, 28]],
//     ["Would you like to connect with professionals in your field of study?", [2, 22]],
//     ["Do you enjoy participating in leadership development programs?", [2, 6]],
//     ["Would you attend workshops on financial literacy or budgeting?", [2, 28, 30]],
//     ["Are you interested in clubs that promote academic or professional success?", [2, 7, 30]],
//     ["Do you enjoy collaborating with peers to solve real-world problems?", [2, 4, 6, 10]]
//   ],
//   "Technology and Engineering": [
//     ["Are you passionate about coding or software development?", [14, 37, 4]],
//     ["Do you enjoy working on engineering projects or building things?", [14, 4]],
//     ["Would you like to join a robotics or AI-focused club?", [14, 37, 19, 4]],
//     ["Are you interested in promoting STEM education in your community?", [14, 25, 7, 33]],
//     ["Do you enjoy participating in hackathons or coding competitions?", [14, 4, 37, 13]],
//     ["Are you passionate about the future of renewable energy or sustainable tech?", [14, 5]],
//     ["Would you like to work on interdisciplinary projects involving technology?", [14, 4]]
//   ],
//   "Environmental Sustainability": [
//     ["Are you passionate about addressing climate change?", [5, 21]],
//     ["Do you enjoy participating in projects focused on conservation?", [5, 33]],
//     ["Would you like to join a club that promotes sustainable agriculture?", [5, 15]],
//     ["Are you interested in outdoor activities like tree planting or cleanups?", [5, 33, 38]],
//     ["Do you enjoy raising awareness about environmental issues?", [5, 21]],
//     ["Would you work on initiatives to reduce campus waste or improve recycling?", [5, 6, 15]],
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

import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import './App.css';
import logo from './retroheart.png';
import cupid from './cupid.png';

// -------------------- 1. DEFINE TAGS AND BROAD CATEGORIES --------------------
const ALL_TAGS = {
  1: ["Volunteering", 1],
  2: ["Networking", 2],
  3: ["Visual Arts", 3],
  4: ["Software Development", 14],
  5: ["Sustainability", 5],
  6: ["Leadership", 2],
  7: ["Tutoring", 7],
  8: ["Cultural Awareness", 8],
  9: ["Socializing", 9],
  10: ["Entrepreneurship", 10],
  11: ["Fitness", 16],
  12: ["Spirituality", 12],
  13: ["Competitive Gaming", 13],
  14: ["Engineering", 14],
  15: ["Agriculture", 15],
  16: ["Recreation", 16],
  17: ["Activism", 17],
  18: ["Historical Studies", 18],
  19: ["Research", 19],
  20: ["Performing Arts", 20],
  21: ["Human Rights", 21],
  22: ["Corporate Relations", 22],
  23: ["International Relations", 23],
  24: ["Inclusion", 24],
  25: ["STEM Education", 25],
  26: ["Creative Writing", 26],
  27: ["Artistic Design", 27],
  28: ["Financial Literacy", 28],
  29: ["Digital Media", 29],
  30: ["Career Development", 30],
  31: ["Legal Studies", 31],
  32: ["Campus Security", 32],
  33: ["Community Outreach", 33],
  34: ["Women's Empowerment", 34],
  35: ["Mental Wellness", 35],
  36: ["Animal Rights", 36],
  37: ["Coding", 37],
  38: ["Outdoor Adventures", 38],
  39: ["Family Support", 39],
  40: ["Culinary Arts", 40]
};

const CATEGORY_QUESTIONS = {
  "Community Service & Advocacy": [
    ["Are you passionate about volunteering to support local communities?", [1, 33, 17]],
    ["Do you enjoy advocating for social or environmental justice?", [17, 21, 5]],
    ["Would you like to work on projects promoting inclusion and diversity?", [24, 8, 34]],
    ["Are you interested in supporting animal rights initiatives?", [36, 1, 33]],
    ["Do you want to participate in activities that promote human rights?", [21, 1, 17]],
    ["Would you enjoy planning community events to foster social connections?", [33, 9, 8]],
    ["Are you open to working with diverse cultural groups to achieve shared goals?", [8, 23, 24]]
  ],
  "Arts & Culture": [
    ["Do you enjoy creating visual art, such as painting or sculpture?", [3, 27, 5]],
    ["Are you passionate about performing arts, like theater, dance, or music?", [20, 3, 26]],
    ["Do you like creative writing, such as poetry over storytelling?", [26, 3, 35]],
    ["Would you join a photography or digital design club?", [29, 3, 27]],
    ["Are you interested in textile arts or sustainable fashion design?", [27, 5, 3]],
    ["Do you prefer collaborative art projects or solo exhibitions?", [27, 3, 35]],
    ["Would you enjoy expressing your creativity in a non-competitive environment?", [3, 35, 27]]
  ],
  "Sports & Recreation": [
    ["Do you enjoy team-based sports like soccer, basketball, or volleyball?", [16, 11, 6]],
    ["Are individual activities such as yoga or pilates more appealing to you?", [16, 11, 35]],
    ["Do you prefer outdoor adventures like hiking or kayaking?", [16, 38, 11]],
    ["Would you participate in competitive events like marathons or esports tournaments?", [16, 13, 37]],
    ["Are you interested in water-based activities such as sailing or swimming?", [16, 11, 38]],
    ["Do you enjoy fitness classes or gym workouts?", [16, 11, 35]],
    ["Would you like to join a recreational club for fun rather than competition?", [16, 33, 9]]
  ],
  "Professional Development & Networking": [
    ["Do you want to join a club that focuses on career development or job skills?", [30, 2, 28]],
    ["Are you interested in learning about entrepreneurship or starting your own business?", [10, 2, 28]],
    ["Would you like to connect with professionals in your field of study?", [2, 22, 30]],
    ["Do you enjoy participating in leadership development programs?", [6, 2, 30]],
    ["Would you attend workshops on financial literacy or budgeting?", [28, 2, 30]],
    ["Are you interested in clubs that promote academic or professional success?", [7, 2, 30]],
    ["Do you enjoy networking events to expand your professional connections?", [2, 22, 30]]
  ],
  "Technology & Engineering": [
    ["Are you passionate about coding or software development?", [4, 37, 5]],
    ["Do you enjoy working on engineering projects or building things?", [14, 4, 5]],
    ["Would you like to join a robotics or AI-focused club?", [37, 14, 19]],
    ["Are you interested in promoting STEM education in your community?", [25, 4, 7]],
    ["Do you enjoy participating in hackathons or coding competitions?", [4, 37, 13]],
    ["Are you passionate about renewable energy or sustainable technology?", [5, 4, 14]],
    ["Would you like to work on interdisciplinary projects involving technology?", [4, 14, 19]]
  ],
  "Health & Wellness": [
    ["Are you interested in mental wellness and stress management?", [35, 11, 33]],
    ["Do you enjoy participating in fitness and wellness activities?", [11, 16, 35]],
    ["Would you like to join a yoga or meditation club?", [35, 11, 33]],
    ["Are you passionate about promoting healthy lifestyles?", [11, 35, 28]],
    ["Do you need support with maintaining a balanced life?", [35, 11, 28]],
    ["Would you attend workshops on nutrition and wellness?", [35, 28, 11]],
    ["Are you interested in peer support groups for mental health?", [35, 33, 28]]
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
    // const parentID = ALL_TAGS[tagnumber][1];
    const avgTag = rawAverages[tagnumber];
    // const parentAvg = rawAverages[parentID] || 0;

    let finalValue = avgTag;
    // if (finalValue < parentAvg) {
    //   finalValue = (finalValue + parentAvg) / 2;
    // }
    if (finalValue === 1 && userTags[tagnumber].length > 2) {
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
            <h1 className="club-cupid-title">Club<br />Cupid</h1>
            <img src={cupid} alt="Logo" className="header-icon-cupid" width="100" height="100" />
          </div>
          <h2 className="top-matches-title">Here are your top club matches!</h2>
          <button onClick={() => window.open("https://now.calpoly.edu/organizations", "_blank")}>Go See All Clubs</button>
          <button onClick={() => window.location.reload()}>Retake Quiz</button>
          <div className="club-list">
            {topClubs.map((club, index) => (
              <div key={index} className="club-item">
                <h3>{club.clubName}</h3>
                <p>Match: {(club.similarity * 100).toFixed(2)}%</p>
              </div>
            ))}
          </div>
        </header>
        <footer>
        <p>Made with ❤️ at Cal Poly by Nico, Akshat, Justin, and Luis</p>
        </footer>
      </div>
    );
  }

  if (!quizStarted) {
    return (
      <div className="App">
        <header className="App-header">
          <div className="logo-title-container">
            <img src={logo} alt="Logo" className="header-icon" width="100" height="100" />
            <h1 className="club-cupid-title">Club<br />Cupid</h1>
            <img src={cupid} alt="Logo" className="header-icon-cupid" width="100" height="100" />
          </div>
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
            <h1 className="club-cupid-title">Club<br />Cupid</h1>
            <img src={cupid} alt="Logo" className="header-icon-cupid" width="100" height="100" />
          </div>
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
          <h1 className="club-cupid-title">Club<br />Cupid</h1>
          <img src={cupid} alt="Logo" className="header-icon-cupid" width="100" height="100" />
        </div>
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
