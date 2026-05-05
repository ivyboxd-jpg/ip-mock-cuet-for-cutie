// This file runs securely on Vercel's servers. 
// Nobody can right-click your website to see this file or the API key.

const CHAPTER_TEXT = `
INFORMATICS PRACTICES CLASS XII NCERT KNOWLEDGE BASE:

CHAPTER 1: QUERYING AND SQL FUNCTIONS
Single row functions return one result per row (e.g., POWER, ROUND, MOD, UCASE, MID, SUBSTR, LENGTH, LEFT, RIGHT, INSTR, NOW, DATE).
Aggregate/Multiple row functions return one result for a group of rows (e.g., MAX, MIN, AVG, SUM, COUNT).
GROUP BY groups rows. HAVING specifies conditions on GROUP BY rows.
Operations: UNION combines tables without duplicates. INTERSECT gets common tuples. MINUS gets tuples in first but not second. Cartesian product pairs all rows (Degree = sum of degrees, Cardinality = product of cardinalities).
DROP TABLE <tablename> deletes a table and its data.
LIKE clause uses wildcards: '%' (zero or more characters), '_' (exactly one character).
SUBSTR(string, pos, n) extracts n characters starting at pos. e.g., substr("Every cloud has a silver lining", 7, 5) is "cloud".

CHAPTER 2 & 3: DATA HANDLING USING PANDAS
Pandas is the most popular Python library for data analysis and manipulation. It contains Series (1D) and DataFrame (2D).
DataFrames can be exported to CSV using to_csv() and imported using read_csv(). A Spreadsheet package is most suitable to create/read CSV files.
Combining DataFrames is done using pd.merge() or append().
Descriptive Statistics: df.max(), df.min(), df.sum(), df.count(), df.mean(), df.median(), df.mode(), df.quantile().
Variance is calculated using df.var(). It is the average of squared differences from the mean. Standard deviation is df.std().
Handling missing values (NaN): use dropna() to drop, fillna() to estimate/replace.

CHAPTER 4: PLOTTING DATA USING MATPLOTLIB
Visualisation helps in understanding data. Matplotlib.pyplot is used for plotting.
import matplotlib.pyplot as plt
Customisations include linewidth, linestyle, edgecolor, color.
Bar charts use kind='bar'. Histograms use kind='hist' (groups data into bins).
Scatter plots show relationship between two variables (correlation).
Pie charts represent proportional data. To show percentage as label, use 'autopct'.

CHAPTER 5: INTERNET AND WEB
A network is an interconnection of devices. LAN (Local, up to 1km), MAN (Metropolitan), WAN (Wide, across continents).
Devices: Modem (Modulator Demodulator, converts analog to digital and vice versa), Hub (broadcasts), Switch (sends signals only to selected destination using MAC), Router (connects networks, internet), Gateway (entry/exit point, firewall).
Topologies: Mesh, Ring, Bus, Star, Tree/Hybrid.
The World Wide Web (WWW) was invented by Tim Berners-Lee. The first web browser was Mosaic by NCSA.
Web hosting is a service that puts a website onto the internet. Web servers store and deliver website content.

CHAPTER 6: SOCIETAL IMPACTS
Digital Footprints: Active (intentionally submitted, e.g., writing emails/responses on apps) and Passive (unintentionally left behind, e.g., browsing history).
Net Etiquettes: Be ethical, respectful, responsible. Don't feed trolls. An Internet Troll deliberately sows discord or upsets people for amusement.
Cyber Bullying: Intimidating online.
Intellectual Property Rights (IPR): Copyright (creative works), Patent (inventions), Trademark (brand symbols/logos).
FOSS (Free and Open Source Software) like Ubuntu, LibreOffice. GPL and Creative Commons (CC) provide licensing guidelines.
Cyber Crime: Hacking (White hat = ethical, Black hat/Crackers = malicious). Hacktivist is a hacker aiming for political or social change.
Phishing: Fake emails/sites to steal credentials. Ransomware blocks access until ransom is paid. Malware like Adware generates revenue for developers.
E-waste (Electronic waste) contains harmful metals (lead, cadmium). Proper management is Reduce, Reuse, Recycle.
Ergonomics is the science of designing workplaces to prevent physical strain. Bad posture can be prevented by following ergonomists' recommendations.
`;

export default async function handler(req, res) {
  // Only allow POST requests from the frontend
  if (req.method !== 'POST') return res.status(405).send('Method Not Allowed');

  const { question, userChoice, correctChoice, isCorrect } = req.body;
  
  // Securely pulls the Gemini API key from Vercel Environment Variables
  const GEMINI_API_KEY = process.env.GEMINI_API_KEY; 

  const promptText = `
    Student answered a question. 
    Question: "${question}"
    Student picked: "${userChoice}"
    Correct answer: "${correctChoice}"
    Is correct: ${isCorrect}

    SOURCE MATERIAL (TEXTBOOK SUMMARY):
    ${CHAPTER_TEXT}

    INSTRUCTIONS:
    1. Explain exactly why "${correctChoice}" is the correct answer.
    2. GROUNDING: You MUST base your explanation STRICTLY on the SOURCE MATERIAL above.
    3. CITE: If possible, pull a short direct quote from the text.
    4. TONE: Be warm. Use her name (Aaradhya).
    5. LIMITATIONS: If the answer is NOT in the text, say "I couldn't find the exact reference in the chapter provided, but here is why ${correctChoice} is correct based on CS principles..."
    6. Maximum 3 sentences.
  `;

  try {
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: promptText }] }],
        systemInstruction: { parts: [{ text: "You are a brilliant, encouraging Informatics Practices teacher." }] },
        generationConfig: { temperature: 0.1 } // Keeps the AI hyper-focused on the textbook
      })
    });

    const data = await response.json();
    
    // Check if Google returned an error
    if (data.error) {
      return res.status(500).json({ explanation: "AI Error: " + data.error.message });
    }

    const explanation = data.candidates[0].content.parts[0].text;
    res.status(200).json({ explanation });
    
  } catch (error) {
    res.status(500).json({ error: "Failed to connect to AI" });
  }
}
