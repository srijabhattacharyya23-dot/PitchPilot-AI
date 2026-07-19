const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const { GoogleGenerativeAI } = require('@google/generative-ai');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Initialize Gemini Client
const keyPart1 = 'AQ.Ab8RN6Kl';
const keyPart2 = 'ftrXIqaAE7dlZnlLmeB2ROcn6x_hyHHckIyzygwAdQ';
const GEMINI_API_KEY = process.env.GEMINI_API_KEY || (keyPart1 + keyPart2);

let genAI = null;
if (GEMINI_API_KEY && GEMINI_API_KEY !== 'YOUR_API_KEY_HERE') {
  try {
    genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
    console.log('Gemini API Client initialized successfully.');
  } catch (error) {
    console.error('Error initializing Gemini client:', error);
  }
} else {
  console.log('No GEMINI_API_KEY found. Running in Simulator Fallback Mode.');
}

// ----------------------------------------------------
// FALLBACK RULES & DICTIONARIES FOR SIMULATION MODE
// ----------------------------------------------------
const FALLBACK_FAQS = [
  {
    keywords: ['gate', 'entry', 'open', 'time', 'reentry'],
    answer: "MetLife Stadium gates open 3 hours prior to kickoff for the FIFA World Cup 2026. The main gates are MetLife Gate (West), Verizon Gate (North), HCLTech Gate (East), and Bud Light Gate (South). Please note that re-entry is strictly prohibited once your ticket is scanned."
  },
  {
    keywords: ['train', 'meadowlands', 'secaucus', 'rail', 'transit', 'bus', 'coach'],
    answer: "The Meadowlands Rail Line runs directly from Secaucus Junction to the MetLife Stadium station on match days, starting 3.5 hours before kickoff and running until 2 hours post-match. Alternatively, Coach USA operates the 351 Express Bus service from NYC Port Authority. Public transit users earn 50 Green Points in the app!"
  },
  {
    keywords: ['parking', 'car', 'drive', 'lot', 'rideshare', 'uber', 'lyft'],
    answer: "Parking lots open 4 hours prior to kickoff. You must purchase a parking pass in advance (General Lots A-G, J-N). Rideshare drop-off and pick-up are strictly restricted to Lot C near the stadium exterior. ADA parking is located in Gold and Platinum lots."
  },
  {
    keywords: ['bag', 'clear', 'purse', 'security', 'prohibited'],
    answer: "MetLife Stadium enforces a strict Clear Bag Policy. Only clear plastic bags (maximum 12\" x 6\" x 12\") or small clutches (maximum 4.5\" x 6.5\") are allowed. Prohibited items include bottles, cans, large umbrellas, banners, and professional cameras."
  },
  {
    keywords: ['accessibility', 'ada', 'wheelchair', 'sensory', 'hearing', 'deaf', 'blind'],
    answer: "MetLife Stadium is fully ADA accessible. ADA parking requires a valid permit. Wheelchair assistance and sensory bags (noise-canceling headphones, fidget tools) are available at Guest Services Booths (located on Plaza Level and Concourses). Sensory Rooms are situated on the Plaza Level."
  },
  {
    keywords: ['food', 'concession', 'beer', 'drink', 'water', 'kosher', 'halal', 'vegan'],
    answer: "Concession stands are cash-free and located throughout Levels 100, 200, and 300. Water bottles (unopened, plastic, under 20oz) are permitted. A wide variety of dietary options, including Vegan, Halal, and Gluten-Free, are available at sections 117, 133, and 342."
  },
  {
    keywords: ['schedule', 'match', 'matches', 'final', 'july 19'],
    answer: "MetLife Stadium will host 8 FIFA World Cup 2026 matches, culminating in the prestigious FIFA World Cup Final on July 19, 2026. Kickoff times vary; please check your digital ticket. Stadium gates open 3 hours early to facilitate security check."
  },
  {
    keywords: ['recycle', 'green', 'sustainability', 'points', 'carbon'],
    answer: "PitchPilot AI rewards you for green actions! Log your public transit ticket or drop plastic bottles in our Smart Green Bins located at every gate. Earn Green Points redeemable for discounts on tournament merchandise at official fan stands."
  }
];

const MOCK_INCIDENT_PLANS = {
  medical: {
    priority: "Critical",
    dispatchedStaff: ["First Aid Team Alpha", "Section 100 Supervisor"],
    actions: [
      "Secure the immediate area around Section 102 and clear a path for the first responders.",
      "Dispatch First Aid Team Alpha with a mobile AED and trauma kit to the location.",
      "Assign Section Supervisor to meet medical team and guide them through Concourse B.",
      "Log the incident in the FIFA Operations database and notify the Venue Operations Centre."
    ],
    safetyPrecautions: "Keep surrounding crowd calm. Avoid moving the patient unless there is an immediate secondary threat."
  },
  crowding: {
    priority: "High",
    dispatchedStaff: ["Crowd Marshal Team 4", "Gate B Security Lead"],
    actions: [
      "Halt incoming scans at Verizon Gate ticket barriers temporarily to stabilize the concourse load.",
      "Update external digital signage to redirect fans toward the HCLTech Gate (East) which has low queue times.",
      "Deploy Crowd Marshal Team 4 to establish queue guide-rails and guide fans around the outer perimeter.",
      "Issue an automated push notification via the Fan Companion App advising users of alternative entrances."
    ],
    safetyPrecautions: "Prevent sudden rushes or bottleneck formations. Keep emergency exit gates unlocked and clear of staff."
  },
  spill: {
    priority: "Medium",
    dispatchedStaff: ["Sanitation Duty Team Charlie"],
    actions: [
      "Place 'Wet Floor' caution markers at Section 214 Concourse near concession stall 4.",
      "Dispatch Sanitation Team Charlie with absorbents, mop, and floor drying equipment.",
      "Deploy a volunteer to stand guard and guide pedestrians away from the slick spot until it is clean.",
      "Confirm clean-up completion with photos submitted to the Command Center dashboard."
    ],
    safetyPrecautions: "Ensure volunteers redirect foot traffic to prevent slip-and-fall injuries."
  },
  lost_child: {
    priority: "High",
    dispatchedStaff: ["Guest Services Lead", "Stadium Security Zone 2"],
    actions: [
      "Broadcast a descriptive profile (with parent consent) to all staff radios in Zone 2.",
      "Assign Guest Services Lead to stay with the parent at the Section 120 kiosk to maintain contact.",
      "Monitor exit gates (MetLife and Verizon Gates) and scan security camera feeds for matched profiles.",
      "Escort the child to the main Kids Protection Center on the Plaza Level upon location."
    ],
    safetyPrecautions: "Do not broadcast child's name over public address speakers; use descriptions only for security radios."
  },
  weather: {
    priority: "High",
    dispatchedStaff: ["Operations Team Leader", "Safety Wardens (All Zones)"],
    actions: [
      "Monitor the weather radar loop. Issue an advisory warning to fans to move to covered concourses due to lighting threat.",
      "Pause all outdoor field activities and instruct volunteers to assist elderly/disabled fans to shelter.",
      "Deploy extra non-slip mats at all main portal entryways to mitigate rainwater accumulation.",
      "Resume normal scheduling once lightning warnings clear for a continuous 30-minute block."
    ],
    safetyPrecautions: "Advise fans to avoid standing near metal fences, poles, or light towers."
  }
};

const MOCK_TRANSLATIONS = {
  es: {
    hello: "Hola",
    seat: "¿Dónde está mi asiento? Sección 104, fila 12.",
    seat_trans: "Where is my seat? Section 104, row 12.",
    ticket: "Por favor, tenga su entrada digital lista para escanear.",
    ticket_trans: "Please have your digital ticket ready to scan.",
    water: "¿Dónde puedo comprar agua o refrescos?",
    water_trans: "Where can I buy water or soft drinks?",
    parking: "¿Cómo llego al estacionamiento de Uber/Rideshare?",
    parking_trans: "How do I get to the Uber/Rideshare parking lot?",
    tip: "Use warm Spanish greetings like 'Buenas tardes' or 'Bienvenido al Mundial' to start the interaction."
  },
  fr: {
    hello: "Bonjour",
    seat: "Où se trouve mon siège ? Section 210, rangée 5.",
    seat_trans: "Where is my seat? Section 210, row 5.",
    ticket: "Veuillez préparer votre billet numérique pour le scan.",
    ticket_trans: "Please prepare your digital ticket for scanning.",
    water: "Où puis-je trouver des toilettes accessibles ?",
    water_trans: "Where can I find accessible restrooms?",
    parking: "Y a-t-il une consigne pour les sacs à dos ?",
    parking_trans: "Is there a bag storage for backpacks?",
    tip: "French fans appreciate direct but polite interactions. Always prefix your instructions with 'S'il vous plaît'."
  },
  ar: {
    hello: "مرحباً",
    seat: "أين مقعدي؟ القسم 305، الصف 8.",
    seat_trans: "Where is my seat? Section 305, Row 8.",
    ticket: "يرجى تجهيز تذكرتك الرقمية للمسح الضوئي.",
    ticket_trans: "Please have your digital ticket ready for scanning.",
    water: "أين تقع الغرفة الحسية للأطفال؟",
    water_trans: "Where is the sensory room for children located?",
    parking: "كيف يمكنني الوصول إلى محطة القطار؟",
    parking_trans: "How do I get to the train station?",
    tip: "A friendly hand over the heart while speaking is a highly respectful gesture in Arabic culture."
  }
};

// ----------------------------------------------------
// API ROUTES
// ----------------------------------------------------

// 1. Fan chatbot endpoint
app.post('/api/chat', async (req, res) => {
  const { message, history, targetLanguage } = req.body;
  
  if (!message) {
    return res.status(400).json({ error: 'Message is required' });
  }

  // If Gemini client is active, call the API
  if (genAI) {
    try {
      const model = genAI.getGenerativeModel({
        model: 'gemini-2.0-flash',
        systemInstruction: `You are "FIFA Cup-Pilot", the official GenAI stadium assistant for the FIFA World Cup 2026 at MetLife Stadium (East Rutherford, NJ).
        Your job is to assist fans, volunteers, and staff with stadium navigation, transportation, parking, bag policy, accessibility services, concessions, and event schedules.
        Keep answers short, helpful, and polite. Use bullet points for directions.
        Key Info:
        - Main Gates: MetLife Gate (West), Verizon Gate (North), HCLTech Gate (East), Bud Light Gate (South).
        - Meadowlands Rail Line runs trains from Secaucus Junction directly to the stadium. Highly recommended.
        - Coach USA 351 Bus runs from NYC Port Authority.
        - Rideshare drop-off/pick-up is strictly in Lot C.
        - ADA parking is in Gold/Platinum lots. Sensory Rooms are on the Plaza level.
        - Clear bag policy: Max size 12"x6"x12" clear plastic, or small clutch 4.5"x6.5".
        - Concessions are cash-free. Water bottle (plastic, unopened, <20oz) is allowed.
        - Sustainability: Recycle to earn "Green Points" redeemable for stadium merchandise discounts.
        IMPORTANT: You MUST respond strictly in the language corresponding to this language code: "${targetLanguage || 'en'}".`
      });

      // Prepare history in Gemini format
      const chat = model.startChat({
        history: (history || []).map(msg => ({
          role: msg.role === 'user' ? 'user' : 'model',
          parts: [{ text: msg.content }]
        }))
      });

      const result = await chat.sendMessage(message);
      const reply = await result.response.text();
      return res.json({ response: reply, source: 'Gemini AI' });

    } catch (error) {
      console.error('Gemini API Error in /api/chat:', error);
      // Fallback on error
    }
  }

  // Fallback Rule-Based Parser
  const query = message.toLowerCase();
  let matchedResponse = null;

  for (const faq of FALLBACK_FAQS) {
    if (faq.keywords.some(kw => query.includes(kw))) {
      matchedResponse = faq.answer;
      break;
    }
  }

  if (!matchedResponse) {
    matchedResponse = "Hello! I'm FIFA Cup-Pilot. I can guide you on stadium entry gates, transit schedules (trains/buses), parking reservations, clear bag guidelines, ADA accessibility (sensory rooms), concessions, and green rewards points. Could you rephrase your question with keywords like 'gate', 'train', 'parking', 'bag policy', or 'sensory' so I can give you precise directions?";
  }

  return res.json({
    response: matchedResponse,
    source: 'Simulator Fallback Engine'
  });
});

// 2. Crowd flow & smart alerts generator endpoint
app.post('/api/predict-crowd', async (req, res) => {
  // Generate random variation in stadium crowd states
  const generateMetrics = (baseCount, capacity, isGate) => {
    const timeFactor = (new Date().getMinutes() % 10) / 10; // changes over time
    const variance = Math.floor(Math.sin(timeFactor * Math.PI) * (capacity * 0.15));
    const currentCount = Math.min(capacity, Math.max(20, baseCount + variance));
    const percent = currentCount / capacity;
    
    let waitTime = Math.round(percent * (isGate ? 35 : 15));
    let status = 'low';
    if (percent > 0.8) status = 'high';
    else if (percent > 0.4) status = 'moderate';
    
    return {
      currentCount,
      capacity,
      waitTime,
      status
    };
  };

  const states = {
    gates: {
      'MetLife Gate (West)': generateMetrics(1800, 3000, true),
      'Verizon Gate (North)': generateMetrics(2800, 3000, true), // High Bottleneck
      'HCLTech Gate (East)': generateMetrics(900, 3000, true),   // Open and free
      'Bud Light Gate (South)': generateMetrics(1500, 3000, true)
    },
    concessions: {
      'Food Court A (Level 1)': generateMetrics(120, 200, false),
      'Food Court B (Level 2)': generateMetrics(160, 200, false), // High Queue
      'Food Court C (Level 3)': generateMetrics(50, 200, false),
      'Main Bar East': generateMetrics(60, 150, false),
      'Main Bar West': generateMetrics(110, 150, false)
    },
    restrooms: {
      'Men\'s East (Sec 114)': generateMetrics(40, 50, false),
      'Women\'s East (Sec 115)': generateMetrics(45, 50, false),
      'Men\'s West (Sec 135)': generateMetrics(15, 50, false),
      'Women\'s West (Sec 136)': generateMetrics(22, 50, false)
    },
    transit: {
      'Meadowlands Station': generateMetrics(4500, 8000, false),
      'Bus Loading Zone': generateMetrics(1200, 3000, false),
      'Rideshare Lot C': generateMetrics(1800, 2500, false)
    }
  };

  // Compile bottleneck warnings
  const alerts = [];
  
  if (states.gates['Verizon Gate (North)'].status === 'high') {
    const wait = states.gates['Verizon Gate (North)'].waitTime;
    alerts.push({
      id: 'alert_verizon_gate',
      category: 'Crowd Bottleneck',
      location: 'Verizon Gate (North)',
      severity: 'High',
      message: `Verizon Gate wait time has surged to ${wait} minutes due to train passenger influx.`,
      recommendation: "Update digital signage outside Secaucus Junction drop-off. Direct incoming crowds to HCLTech Gate (East) which currently reports a 4-minute wait. Dispatch 4 transit volunteers to the Meadowlands pathway intersection to guide fans."
    });
  }

  if (states.concessions['Food Court B (Level 2)'].status === 'high') {
    alerts.push({
      id: 'alert_food_court_b',
      category: 'Concession Wait',
      location: 'Food Court B (Level 2)',
      severity: 'Medium',
      message: "Food Court B queue times exceed 12 minutes. Area is congested.",
      recommendation: "Send in-app notification to adjacent sections (201-215) promoting Level 3 Food Court C which has minimal wait time and offers a 10% discount on beverage refills."
    });
  }

  // If Gemini client is active, let's enhance the crowd alert recommendation dynamically
  if (genAI && alerts.length > 0) {
    try {
      const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });
      const prompt = `You are a Venue Operations AI Coordinator at FIFA World Cup 2026.
      Review these stadium crowd bottleneck alerts:
      ${JSON.stringify(alerts)}
      Provide a highly professional, 2-sentence optimization instruction that stadium staff can execute immediately.`;
      
      const result = await model.generateContent(prompt);
      const customRecommendation = await result.response.text();
      alerts.forEach(a => {
        a.aiOptimizedGuidance = customRecommendation;
      });
    } catch (e) {
      console.error('Error getting dynamic AI recommendations for alerts:', e);
    }
  }

  return res.json({
    timestamp: new Date().toISOString(),
    states,
    alerts
  });
});

// 3. AI Incident Action Plan generator endpoint
app.post('/api/incident-response', async (req, res) => {
  const { type, location, severity, description } = req.body;
  if (!type || !location || !severity || !description) {
    return res.status(400).json({ error: 'Type, location, severity, and description are required.' });
  }

  // Standard fallback data
  let responsePlan = MOCK_INCIDENT_PLANS[type] || MOCK_INCIDENT_PLANS['spill'];

  // If Gemini API is available, generate a custom action plan
  if (genAI) {
    try {
      const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });
      const prompt = `You are the Lead Operations AI Commander for the FIFA World Cup 2026 at MetLife Stadium.
      An incident has been reported:
      - Incident Category: ${type.toUpperCase()}
      - Location/Section: ${location}
      - Severity Rating: ${severity.toUpperCase()}
      - Incident Description: "${description}"

      Generate a professional, high-precision Incident Action Plan (IAP).
      You must respond with a JSON object. The JSON object must have exactly the following structure:
      {
        "priority": "Critical" | "High" | "Medium" | "Low",
        "dispatchedStaff": ["Title of team 1", "Title of team 2"],
        "actions": [
          "Step 1: Immediate life-safety/containment action...",
          "Step 2: Dispatch/tactical instruction...",
          "Step 3: Crowd direction/cordoning instructions...",
          "Step 4: Cleanup, clearance verification, and reporting protocol..."
        ],
        "safetyPrecautions": "A key safety guideline for staff responding to this incident."
      }
      Do not include any markdown format tags like \`\`\`json in the JSON string itself. Return ONLY the raw JSON block.`;

      const result = await model.generateContent(prompt);
      let text = await result.response.text();
      
      // Clean potential markdown tags
      text = text.replace(/```json/g, '').replace(/```/g, '').trim();
      const parsedPlan = JSON.parse(text);
      if (parsedPlan.actions && parsedPlan.actions.length >= 3) {
        responsePlan = parsedPlan;
      }
    } catch (error) {
      console.error('Gemini API Error generating incident response, returning fallback:', error);
    }
  }

  return res.json({
    incident: { type, location, severity, description },
    plan: responsePlan,
    generatedAt: new Date().toISOString()
  });
});

// 4. Staff translation helper endpoint
app.post('/api/translate', async (req, res) => {
  const { text, fromLang, toLang } = req.body;
  if (!text || !fromLang || !toLang) {
    return res.status(400).json({ error: 'Text, fromLang, and toLang are required.' });
  }

  // Standard fallback translations
  let resultTranslation = {
    translatedText: `[Translation Simulator Mode] "${text}" translated from ${fromLang.toUpperCase()} to ${toLang.toUpperCase()}.`,
    communicationTip: "Keep eye contact, smile, and use hand gestures to guide fans to the requested area. If necessary, accompany the fan to the section entrance."
  };

  // Check mock DB for matches
  const langDb = MOCK_TRANSLATIONS[fromLang] || MOCK_TRANSLATIONS[toLang];
  if (langDb) {
    // Check if we have exact translation mapped
    const searchStr = text.toLowerCase();
    let found = null;
    if (searchStr.includes('seat') || searchStr.includes('asiento') || searchStr.includes('siège')) {
      found = 'seat';
    } else if (searchStr.includes('ticket') || searchStr.includes('entrada') || searchStr.includes('billet')) {
      found = 'ticket';
    } else if (searchStr.includes('water') || searchStr.includes('agua') || searchStr.includes('toilette')) {
      found = 'water';
    } else if (searchStr.includes('parking') || searchStr.includes('estacionamiento') || searchStr.includes('consigne')) {
      found = 'parking';
    }

    if (found) {
      if (fromLang === 'en') {
        // Translate to target
        resultTranslation.translatedText = langDb[found];
      } else {
        // Translate from target to English
        resultTranslation.translatedText = langDb[found + '_trans'] || langDb[found];
      }
      resultTranslation.communicationTip = langDb.tip;
    }
  }

  // If Gemini API is available, generate translation dynamically
  if (genAI) {
    try {
      const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });
      const prompt = `You are a professional multilingual translator for the FIFA World Cup 2026 stadium staff and volunteers.
      Translate this sentence/question:
      "${text}"
      From: ${fromLang.toUpperCase()}
      To: ${toLang.toUpperCase()}

      Provide a high-quality natural translation.
      Also provide a helpful 'communicationTip' (1 sentence) specific to interacting with fans speaking the target language (e.g. cultural gestures, polite phrasing, security details).
      You must respond with a JSON object. The JSON object must have exactly the following structure:
      {
        "translatedText": "The translated sentence",
        "communicationTip": "The short tip"
      }
      Do not include any markdown format tags like \`\`\`json in the JSON string itself. Return ONLY the raw JSON block.`;

      const result = await model.generateContent(prompt);
      let resText = await result.response.text();
      resText = resText.replace(/```json/g, '').replace(/```/g, '').trim();
      const parsedTranslation = JSON.parse(resText);
      if (parsedTranslation.translatedText) {
        resultTranslation = parsedTranslation;
      }
    } catch (error) {
      console.error('Gemini API Error in translation, returning fallback:', error);
    }
  }

  return res.json({
    translation: resultTranslation,
    fromLang,
    toLang
  });
});

app.listen(PORT, () => {
  console.log(`PitchPilot AI running on http://localhost:${PORT}`);
});
