import React, { useState, useEffect } from "react";
import { usePapaParse } from "react-papaparse";

import "./App.css";
import logo from "./retroheart.png";
import cupid from "./cupid.png";

// ------------------- 1. DEFINE TAGS AND CATEGORIES -------------------
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
  40: ["Culinary Arts", 3],
};

function renameCategoryToNumber(categoryName) {
  switch (categoryName) {
    case "Community Service & Advocacy":
      return 1;
    case "Creative Arts":
      return 3;
    case "Sports and Recreation":
      return 16;
    case "Environmental Sustainability":
      return 5;
    case "Professional Development & Networking":
      return 2;
    case "Technology and Engineering":
      return 14;
    case "Cultural Diversity and Social Connection":
      return 8;
    default:
      return null;
  }
}

const CATEGORY_QUESTIONS = {
  "Sports and Recreation": [
    [
      "Do you enjoy team-based sports like soccer, basketball, or cricket?",
      [16, 13],
    ],
    ["Are individual sports, such as cycling or fencing, more your style?", [16, 38]],
    ["Do you prefer outdoor activities like hiking, rowing, or dragon boating?", [16, 38, 11]],
    ["Would you participate in competitive events like triathlons or esports?", [16, 13]],
    ["Are you interested in exploring unique sports, such as archery or unicycling?", [16, 38]],
    ["Do you enjoy water sports, such as sailing, waterskiing, or rowing?", [16, 38, 11]],
    ["Would you like to join a recreational club for fun rather than competition?", [16, 33]],
  ],
  "Creative Arts": [
    ["Do you enjoy creating visual art, such as painting or drawing?", [3, 27]],
    ["Are you passionate about performing arts, like dance, theater, or music?", [3, 20]],
    ["Do you like writing, such as poetry, short stories, or journalism?", [3, 26]],
    ["Would you join a comedy or improv club?", [3, 20]],
    ["Are you interested in exploring textile arts or sustainable fashion?", [3, 27, 5]],
    ["Do you prefer collaborative projects, such as producing performances or art exhibitions?", [3, 27]],
    ["Are you interested in photography or digital design?", [3, 29]],
    ["Would you enjoy expressing your creativity in a non-competitive environment?", [3, 27, 35]],
  ],
  "Community Service & Advocacy": [
    ["Are you passionate about volunteering to help your community?", [1, 33]],
    ["Do you enjoy advocating for social or environmental justice?", [1, 21, 5]],
    ["Would you like to work on projects promoting equity and inclusion?", [1, 24, 34]],
    ["Are you interested in supporting causes such as animal welfare?", [1, 36]],
    ["Do you want to participate in activities that promote human rights?", [1, 21, 33]],
    ["Would you enjoy planning community events to bring people together?", [1, 9]],
    ["Are you open to working with diverse cultural groups to achieve shared goals?", [1, 8, 23]],
  ],
  "Professional Development & Networking": [
    ["Do you want to join a club that focuses on career readiness or job skills?", [2, 30]],
    ["Are you interested in learning about entrepreneurship or innovation?", [2, 10, 28]],
    ["Would you like to connect with professionals in your field of study?", [2, 22]],
    ["Do you enjoy participating in leadership development programs?", [2, 6]],
    ["Would you attend workshops on financial literacy or budgeting?", [2, 28, 30]],
    ["Are you interested in clubs that promote academic or professional success?", [2, 7, 30]],
    ["Do you enjoy collaborating with peers to solve real-world problems?", [2, 4, 10]],
  ],
  "Technology and Engineering": [
    ["Are you passionate about coding or software development?", [14, 37, 4]],
    ["Do you enjoy working on engineering projects or building things?", [14, 4]],
    ["Would you like to join a robotics or AI-focused club?", [14, 37, 19]],
    ["Are you interested in promoting STEM education in your community?", [14, 25, 33]],
    ["Do you enjoy participating in hackathons or coding competitions?", [14, 37, 13]],
    ["Are you passionate about the future of renewable energy or sustainable tech?", [14, 5]],
    ["Would you like to work on interdisciplinary projects involving technology?", [14, 4]],
  ],
  "Environmental Sustainability": [
    ["Are you passionate about addressing climate change?", [5, 21]],
    ["Do you enjoy participating in projects focused on conservation?", [5, 33]],
    ["Would you like to join a club that promotes sustainable agriculture?", [5, 15]],
    ["Are you interested in outdoor activities like tree planting or cleanups?", [5, 33, 38]],
    ["Do you enjoy raising awareness about environmental issues?", [5, 21]],
    ["Would you work on initiatives to reduce campus waste or improve recycling?", [5, 15]],
    ["Are you interested in collaborating on research about sustainability?", [5, 19]],
  ],
  "Cultural Diversity and Social Connection": [
    ["Do you enjoy learning about and experiencing other cultures?", [8, 23]],
    ["Are you passionate about promoting equity and inclusion on campus?", [8, 24, 21]],
    ["Would you like to join a club that focuses on multicultural events?", [8, 9, 23]],
    ["Are you interested in joining clubs that celebrate specific heritages?", [8, 24]],
    ["Do you enjoy participating in activities that bring diverse groups together?", [8, 9, 34]],
    ["Would you like to explore clubs focused on international connections?", [8, 23]],
    ["Are you passionate about addressing issues of social justice?", [8, 21, 24]],
  ],
};

// ------------------- 2. HELPER FUNCTIONS ----------------------------
function finalizeUserTags(userTags) {
  const finalScores = {};

  for (const tagIdStr of Object.keys(userTags)) {
    const tagId = parseInt(tagIdStr, 10);
    const responses = userTags[tagId] || [];

    // average for this tag
    let avgTag = responses.length ? responses.reduce((a, b) => a + b, 0) / responses.length : 0;

    // average for parent
    const parentId = ALL_TAGS[tagId][1];
    const parentResponses = userTags[parentId] || [];
    let avgParent = parentResponses.length
      ? parentResponses.reduce((a, b) => a + b, 0) / parentResponses.length
      : 0;

    // blend if child < parent
    if (avgTag < avgParent) {
      avgTag = (avgTag + avgParent) / 2;
    }

    // if avgTag == 1 and user answered at least once => set to 2
    if (avgTag === 1 && responses.length >= 1) {
      avgTag = 2;
    }

    finalScores[tagId] = avgTag;
  }

  return finalScores;
}

function cosineSimilarity(userVector, clubVector) {
  let dot = 0;
  let normUser = 0;
  let normClub = 0;

  for (let i = 0; i < userVector.length; i++) {
    dot += userVector[i] * clubVector[i];
    normUser += userVector[i] ** 2;
    normClub += clubVector[i] ** 2;
  }
  if (normUser === 0 || normClub === 0) return 0;
  return dot / (Math.sqrt(normUser) * Math.sqrt(normClub));
}

function userScoresToVector(finalScores) {
  const vector = [];
  const sortedKeys = Object.keys(ALL_TAGS)
    .map((k) => parseInt(k, 10))
    .sort((a, b) => a - b);

  for (const tagId of sortedKeys) {
    vector.push(finalScores[tagId] || 0);
  }
  return vector;
}

// Rank clubs by building their vector (matching tag names in columns)
// and comparing to user's final vector via cosine similarity
function rankClubsBySimilarity(finalUserTags, clubs) {
  const userVector = userScoresToVector(finalUserTags);
  const sortedTagIds = Object.keys(ALL_TAGS)
    .map((k) => parseInt(k, 10))
    .sort((a, b) => a - b);

  const ranked = clubs.map((club) => {
    const clubVector = sortedTagIds.map((tagId) => {
      // The key in the CSV is the name of the tag (e.g. "Community Service")
      // So we find ALL_TAGS[tagId][0] to get that name
      const tagName = ALL_TAGS[tagId][0];
      let val = club[tagName];
      return typeof val === "number" ? val : parseFloat(val) || 0;
    });
    const similarity = cosineSimilarity(userVector, clubVector);
    return { ...club, similarity };
  });

  ranked.sort((a, b) => b.similarity - a.similarity);
  return ranked.slice(0, 10);
}

// ------------------- 3. MAIN REACT COMPONENT ------------------------
function App() {
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);
  const categoryNames = Object.keys(CATEGORY_QUESTIONS);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  // userTags is an object: { 1: [], 2: [], 3: [], ... }
  const [userTags, setUserTags] = useState(() => {
    const init = {};
    for (let tagId in ALL_TAGS) {
      init[tagId] = [];
    }
    return init;
  });

  const [surveyComplete, setSurveyComplete] = useState(false);
  const [topClubs, setTopClubs] = useState([]);
  const [clubScores, setClubScores] = useState([]);

  // Use the react-papaparse hook
  const { readRemoteFile } = usePapaParse();

  // ------------------- 4. FETCH & PARSE CSV ON MOUNT ----------------
  useEffect(() => {
    readRemoteFile("/FinalWinterClubScores.csv", {
      download: true,
      header: true,
      complete: (results) => {
        // Convert numeric columns from string to float
        results.data.forEach((row) => {
          for (let key in row) {
            if (key !== "Club Name" && row[key] !== undefined && row[key] !== "") {
              row[key] = parseFloat(row[key]) || 0;
            }
          }
        });
        console.log(results);
        setClubScores(results.data);
      },
      error: (err) => {
        console.error("Error parsing CSV:", err);
      },
    });
  }, [readRemoteFile]);

  // -------------- 5. QUIZ LOGIC HANDLERS ----------------------------
  function handleStartQuiz() {
    setQuizStarted(true);
  }

  function handleCategoryInterestResponse(interestValue) {
    // interestValue is 1, 0.5, or 0
    const categoryName = categoryNames[currentCategoryIndex];
    const categoryTag = renameCategoryToNumber(categoryName);

    setUserTags((prev) => {
      const updated = { ...prev };
      updated[categoryTag] = [...prev[categoryTag], interestValue];
      return updated;
    });

    if (interestValue === 0) {
      goToNextCategoryOrFinish();
    } else {
      // if yes or maybe => go into subquestions
      setCurrentQuestionIndex(0);
    }
  }

  function handleSubQuestionAnswer(answerValue, tagIds) {
    // answerValue = 1 (yes) or 0 (no)
    setUserTags((prev) => {
      const updated = { ...prev };
      tagIds.forEach((tId) => {
        updated[tId] = [...updated[tId], answerValue];
      });
      return updated;
    });

    const thisCategoryName = categoryNames[currentCategoryIndex];
    const questionsInThisCategory = CATEGORY_QUESTIONS[thisCategoryName];

    if (currentQuestionIndex < questionsInThisCategory.length - 1) {
      // Go to next sub-question
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      // Move to the next category or finish
      goToNextCategoryOrFinish();
    }
  }

  function goToNextCategoryOrFinish() {
    if (currentCategoryIndex < categoryNames.length - 1) {
      // Move to the next category
      setCurrentCategoryIndex((prev) => prev + 1);
      setCurrentQuestionIndex(0); // Reset sub-question index for the next category
    } else {
      // Finish the survey
      finalizeSurvey();
    }
  }

  function finalizeSurvey() {
    const finalUserTags = finalizeUserTags(userTags);
    const rankedClubs = rankClubsBySimilarity(finalUserTags, clubScores);
    setTopClubs(rankedClubs);
    setSurveyComplete(true);
  }

  // ------------------- 6. RENDERING LOGIC ---------------------------
  if (surveyComplete) {
    return (
      <div className="App">
        <header className="App-header">
          <div className="logo-title-container">
            <img src={logo} alt="Logo" className="header-icon" />
            <h1 className="club-cupid-title">Club Cupid</h1>
            <img src={cupid} alt="Logo" className="header-icon-cupid" />
          </div>
          <h2 className="top-matches-title">Here are your top club matches!</h2>
          <div className="club-list">
            {topClubs.map((club, index) => (
              <div key={index} className="club-item">
                <h3>{club["Club Name"]}</h3>
                <p>Similarity: {(club.similarity * 100).toFixed(2)}%</p>
              </div>
            ))}
          </div>
        </header>
      </div>
    );
  }

  if (!quizStarted) {
    return (
      <div className="App">
        <header className="App-header">
          <div className="logo-title-container">
            <img src={logo} alt="Logo" className="header-icon" />
            <h1 className="club-cupid-title">Club Cupid</h1>
            <img src={cupid} alt="Logo" className="header-icon-cupid" />
          </div>
          <h2 className="survey-title">Club Matchmaking Survey</h2>
          <button onClick={handleStartQuiz}>Start Quiz</button>
        </header>
      </div>
    );
  }

  // If quiz started but not complete, we show either category interest or sub-questions
  const currentCategory = categoryNames[currentCategoryIndex];
  const subQuestions = CATEGORY_QUESTIONS[currentCategory];
  const categoryTagNumber = renameCategoryToNumber(currentCategory);
  const categoryAnswers = userTags[categoryTagNumber];

  // If user hasn't answered the main category question yet (or answered 'no')
  // then ask "Are you interested in this category?"
  if (
    categoryAnswers.length === 0 ||
    (categoryAnswers.length > 0 &&
      subQuestions &&
      currentQuestionIndex === 0 &&
      categoryAnswers.length === 1 &&
      categoryAnswers[0] < 1)
  ) {
    return (
      <div className="App">
        <header className="App-header">
          <div className="logo-title-container">
            <img src={logo} alt="Logo" className="header-icon" />
            <h1 className="club-cupid-title">Club Cupid</h1>
            <img src={cupid} alt="Logo" className="header-icon-cupid" />
          </div>
          <div className="question-block">
            <h2 className="major-question"> Are you interested in {currentCategory}? </h2>
            <div>
              <button onClick={() => handleCategoryInterestResponse(1)}>Yes</button>
              <button onClick={() => handleCategoryInterestResponse(0.5)}>Maybe</button>
              <button onClick={() => handleCategoryInterestResponse(0)}>No</button>
            </div>
          </div>
        </header>
      </div>
    );
  }

  // Otherwise, user said yes/maybe => handle sub-questions
  const [prompt, tagIds] = subQuestions[currentQuestionIndex];

  return (
    <div className="App">
      <header className="App-header">
        <div className="logo-title-container">
          <img src={logo} alt="Logo" className="header-icon" />
          <h1 className="club-cupid-title">Club Cupid</h1>
          <img src={cupid} alt="Logo" className="header-icon-cupid" />
        </div>
        <div className="question-block">
          <h3 className="category-name">{currentCategory}</h3>
          <h2 className="subcategory-question">{prompt}</h2>
          <button onClick={() => handleSubQuestionAnswer(1, tagIds)}>Yes</button>
          <button onClick={() => handleSubQuestionAnswer(0, tagIds)}>No</button>
        </div>
      </header>
    </div>
  );
}

export default App;

