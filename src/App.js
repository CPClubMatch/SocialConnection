import React from 'react';
import './App.css';
import logo from '/Users/nicolasjulia/Downloads/clubcupid/my-app/src/retroheart.png'
import cupid from '/Users/nicolasjulia/Downloads/clubcupid/my-app/src/cupid.png'

// Data and logic (your provided script)
const ALL_TAGS = { 1: "Community Service",

  2: "Professional Networking",

  3: "Creative Arts",

  4: "Technology Integration",

  5: "Environmental Sustainability",

  6: "Leadership Development",

  7: "Academic Support",

  8: "Cultural Diversity",

  9: "Social Events",

  10: "Innovation and Entrepreneurship",

  11: "Health and Wellness",

  12: "Religious and Spiritual",

  13: "Competitive Teams",

  14: "Engineering Focus",

  15: "Agricultural Practices",

  16: "Sports and Recreation",

  17: "Political Activism",

  18: "Historical Preservation",

  19: "Science and Research",

  20: "Music and Performance",

  21: "Advocacy and Human Rights",

  22: "Corporate Partnerships",

  23: "International Focus",

  24: "Equity and Inclusion",

  25: "STEM Education",

  26: "Literary and Writing",

  27: "Artistic Expression",

  28: "Financial Education",

  29: "Media and Communications",

  30: "Career Readiness",

  31: "Legal Education",

  32: "Safety and Security",

  33: "Volunteer Opportunities",

  34: "Women’s Interests",

  35: "Mental Health",

  36: "Animal Welfare",

  37: "Technology and Coding",

  38: "Outdoor Activities",

  39: "Family and Parenting",

  40: "Culinary Arts" };
const CATEGORY_QUESTIONS = { 
"Sports and Recreation": [

    ["Do you enjoy team-based sports like soccer, basketball, or cricket?", [16, 13]],

    ["Are individual sports, such as cycling or fencing, more your style?", [16, 38]],

    ["Do you prefer outdoor activities like hiking, rowing, or dragon boating?", [38, 11]],

    ["Would you participate in competitive events like triathlons or esports?", [13, 16]],

    ["Are you interested in exploring unique sports, such as archery or unicycling?", [16, 38]],

    ["Do you enjoy water sports, such as sailing, waterskiing, or rowing?", [38, 11]],

    ["Would you like to join a recreational club for fun rather than competition?", [33, 16]]

  ],

  "Creative Arts": [

    ["Do you enjoy creating visual art, such as painting or drawing?", [27, 3]],

    ["Are you passionate about performing arts, like dance, theater, or music?", [20, 3]],

    ["Do you like writing, such as poetry, short stories, or journalism?", [26, 29]],

    ["Would you join a comedy or improv club?", [20, 8]],

    ["Are you interested in exploring textile arts or sustainable fashion?", [27, 5]],

    ["Do you prefer collaborative projects, such as producing performances or art exhibitions?", [3, 27]],

    ["Are you interested in photography or digital design?", [3, 29]],

    ["Would you enjoy expressing your creativity in a non-competitive environment?", [27, 35]]

],

"Community Service & Advocacy": [

    ["Are you passionate about volunteering to help your community?", [1, 33]],

    ["Do you enjoy advocating for social or environmental justice?", [21, 5]],

    ["Would you like to work on projects promoting equity and inclusion?", [24, 34]],

    ["Are you interested in supporting causes such as animal welfare?", [36, 1]],

    ["Do you want to participate in activities that promote human rights?", [21, 33]],

    ["Would you enjoy planning community events to bring people together?", [9, 1]],

    ["Are you open to working with diverse cultural groups to achieve shared goals?", [8, 23]]

],

"Professional Development & Networking": [

    ["Do you want to join a club that focuses on career readiness or job skills?", [30, 2]],

    ["Are you interested in learning about entrepreneurship or innovation?", [10, 28]],

    ["Would you like to connect with professionals in your field of study?", [22, 2]],

    ["Do you enjoy participating in leadership development programs?", [6, 2]],

    ["Would you attend workshops on financial literacy or budgeting?", [28, 30]],

    ["Are you interested in clubs that promote academic or professional success?", [7, 30]],

    ["Do you enjoy collaborating with peers to solve real-world problems?", [4, 10]]

],

"Technology and Engineering": [

    ["Are you passionate about coding or software development?", [37, 4]],

    ["Do you enjoy working on engineering projects or building things?", [14, 4]],

    ["Would you like to join a robotics or AI-focused club?", [37, 19]],

    ["Are you interested in promoting STEM education in your community?", [25, 33]],

    ["Do you enjoy participating in hackathons or coding competitions?", [37, 13]],

    ["Are you passionate about the future of renewable energy or sustainable tech?", [5, 14]],

    ["Would you like to work on interdisciplinary projects involving technology?", [4, 14]]

],

"Environmental Sustainability": [

    ["Are you passionate about addressing climate change?", [5, 21]],

    ["Do you enjoy participating in projects focused on conservation?", [5, 33]],

    ["Would you like to join a club that promotes sustainable agriculture?", [15, 5]],

    ["Are you interested in outdoor activities like tree planting or cleanups?", [33, 38]],

    ["Do you enjoy raising awareness about environmental issues?", [5, 21]],

    ["Would you work on initiatives to reduce campus waste or improve recycling?", [5, 15]],

    ["Are you interested in collaborating on research about sustainability?", [19, 5]]

],

"Cultural Diversity and Social Connection": [

    ["Do you enjoy learning about and experiencing other cultures?", [8, 23]],

    ["Are you passionate about promoting equity and inclusion on campus?", [24, 21]],

    ["Would you like to join a club that focuses on multicultural events?", [9, 23]],

    ["Are you interested in joining clubs that celebrate specific heritages?", [8, 34]],

    ["Do you enjoy participating in activities that bring diverse groups together?", [9, 24]],

    ["Would you like to explore clubs focused on international connections?", [23, 8]],

    ["Are you passionate about addressing issues of social justice?", [21, 24]]


  ] };
const clubsData = [{

    name: "Outdoor Adventurers",

    description: "A club for exploring hiking, climbing, and other outdoor sports.",

    tags: [16, 38]

  },

  {

    name: "Green Earth Society",

    description: "Focuses on campus cleanups, tree planting, and sustainability activism.",

    tags: [5, 33]

  },

  {

    name: "Art & Sketch Club",

    description: "Join fellow artists for painting, sketching, and exhibitions.",

    tags: [3, 27]

  },

  {

    name: "Tech Innovators",

    description: "A group for coding projects, hackathons, and emerging technologies.",

    tags: [4, 10, 37]

  },

  {

    name: "Volunteer Heroes",

    description: "General volunteering for community events and service projects.",

    tags: [1, 33]

  },

  {

    name: "Fitness Fanatics",

    description: "Focus on individual and group fitness, including running and cycling.",

    tags: [16, 11, 38]

  },

  {

    name: "Academic Scholars",

    description: "Study groups, tutoring sessions, and academic support activities.",

    tags: [7, 30]

  },

  {

    name: "Global Citizens",

    description: "Celebrating cultural diversity through events, potlucks, and service.",

    tags: [8, 23, 9]

  }];

function cosineSimilarity(vecA, vecB) { let dotProduct = 0;

  let normA = 0;

  let normB = 0;

 

  for (let i = 0; i < vecA.length; i++) {

    dotProduct += vecA[i] * vecB[i];

    normA += vecA[i] * vecA[i];

    normB += vecB[i] * vecB[i];

  }

  if (normA === 0 || normB === 0) return 0; // avoid divide-by-zero

  return dotProduct / (Math.sqrt(normA) * Math.sqrt(normB));

}


function rankClubsBySimilarity(clubs, userScores) { 

  const userVector = Object.keys(ALL_TAGS).map((tagId) => userScores[tagId] || 0);


  const ranked = clubs.map((club) => {

    // if club's tag is present => score 10, else => 0

    const clubVector = Object.keys(ALL_TAGS).map((tagId) => {

      return club.tags.includes(parseInt(tagId)) ? 10 : 0;

    });

    const similarity = cosineSimilarity(userVector, clubVector);

    return { ...club, similarity };

  });

 

  // sort by similarity desc

  ranked.sort((a, b) => b.similarity - a.similarity);

  return ranked.slice(0, 10); }

function App() {
  const categoryKeys = Object.keys(CATEGORY_QUESTIONS);
  const [currentCategoryIndex, setCurrentCategoryIndex] = React.useState(0);
  const [categoryInterests, setCategoryInterests] = React.useState({});
  const [tagScores, setTagScores] = React.useState(() =>
    Object.keys(ALL_TAGS).reduce((acc, tagId) => ({ ...acc, [tagId]: [] }), {})
  );
  const [surveyComplete, setSurveyComplete] = React.useState(false);
  const [topClubs, setTopClubs] = React.useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(0);
  const [quizStarted, setQuizStarted] = React.useState(false);

  const handleStartQuiz = () => {
    setQuizStarted(true);
  };

  const handleCategoryInterest = (yesOrNo) => {
    if (yesOrNo) {
      setCategoryInterests((prev) => ({
        ...prev,
        [categoryKeys[currentCategoryIndex]]: yesOrNo,
      }));
      setCurrentQuestionIndex(0);
    } else {
      if (currentCategoryIndex < categoryKeys.length - 1) {
        setCurrentCategoryIndex(currentCategoryIndex + 1);
        setCurrentQuestionIndex(0);
      } else {
        computeFinalResults();
        setSurveyComplete(true);
      }
    }
  };

  const handleSubQuestionAnswer = (questionTags, answer) => {
    const score = answer ? 10 : 0;
    setTagScores((prev) => {
      const updated = { ...prev };
      questionTags.forEach((t) => {
        updated[t] = [...updated[t], score];
      });
      return updated;
    });

    if (currentQuestionIndex === CATEGORY_QUESTIONS[categoryKeys[currentCategoryIndex]].length - 1) {
      if (currentCategoryIndex < categoryKeys.length - 1) {
        setCurrentCategoryIndex(currentCategoryIndex + 1);
        setCurrentQuestionIndex(0);
      } else {
        computeFinalResults();
        setSurveyComplete(true);
      }
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const computeFinalResults = () => {
    const averagedScores = Object.keys(ALL_TAGS).reduce((acc, tagId) => {
      const scores = tagScores[tagId] || [];
      acc[tagId] = scores.length
        ? scores.reduce((a, b) => a + b, 0) / scores.length
        : 0;
      return acc;
    }, {});

    const ranked = rankClubsBySimilarity(clubsData, averagedScores);
    setTopClubs(ranked);
  };

  const renderCategoryQuestions = () => {
    const categoryName = categoryKeys[currentCategoryIndex];
    const questions = CATEGORY_QUESTIONS[categoryName];
    const isInterested = categoryInterests[categoryName];

    if (isInterested === undefined) {
      return (
        <div className="question-block">
          <h2 className="major-question">Are you interested in {categoryName}?</h2>
          <button onClick={() => handleCategoryInterest(true)}>Yes</button>
          <button onClick={() => handleCategoryInterest(false)}>No</button>
        </div>
      );
    }

    if (isInterested) {
      const currentQuestion = questions[currentQuestionIndex];
      return (
        <div className="question-block">
          <h3 className="category-name">{categoryName}</h3>
          <h2 className="subcategory-question">{currentQuestion[0]}</h2>
          <button onClick={() => handleSubQuestionAnswer(currentQuestion[1], true)}>Yes</button>
          <button onClick={() => handleSubQuestionAnswer(currentQuestion[1], false)}>No</button>
        </div>
      );
    }

    return null;
  };

  if (surveyComplete) {
    return (
      <div className="App">
        <header className="App-header">
         <div className="logo-title-container">
          <img src={logo} alt="Logo" className="header-icon" width="100" height="100"/>
           <h1 className="club-cupid-title">Club Cupid</h1>
           <img src={cupid} alt="Logo" className="header-icon-cupid" width="100" height="100"/>
         </div>
          <h2 className="top-matches-title">Here are your top club matches!</h2>
          <div className="club-list">
            {topClubs.map((club, index) => (
              <div key={index} className="club-item">
                <h3>{club.name}</h3>
                <p>Match: {(club.similarity * 100).toFixed(2)}%</p>
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
           <img src={logo} alt="Logo" className="header-icon" width="100" height="100"/>
           <h1 className="club-cupid-title">Club Cupid</h1>
           <img src={cupid} alt="Logo" className="header-icon-cupid" width="100" height="100"/>
        </div>
        <h2><br /></h2>
        <h2 className="survey-title">Club Matchmaking Survey</h2>
        <button onClick={handleStartQuiz}>Start Quiz</button>
      </header>
    </div>
  );
}

  return (
    <div className="App">
      <header className="App-header">
        <div className="logo-title-container">
          <img src={logo} alt="Logo" className="header-icon" width="100" height="100"/>
           <h1 className="club-cupid-title">Club Cupid</h1>
           <img src={cupid} alt="Logo" className="header-icon-cupid" width="100" height="100"/>
        </div>
        <h2><br /></h2>
          {renderCategoryQuestions()}
      </header>
    </div>
  );
}

export default App;

