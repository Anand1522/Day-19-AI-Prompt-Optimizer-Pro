let optimizedText="";

function optimizePrompt(){

const prompt=
document.getElementById(
"userPrompt"
).value.trim();

if(prompt===""){

alert(
"Please enter a prompt."
);

return;

}

const purpose=
document.getElementById(
"purpose"
).value;

const tone=
document.getElementById(
"tone"
).value;

let score=40;

const suggestions=[];

/* ---------- Prompt Length ---------- */

if(prompt.length>20){

score+=15;

}else{

suggestions.push(
"Add more details to your prompt."
);

}

if(prompt.length>60){

score+=10;

}

if(prompt.length>120){

score+=10;

}

/* ---------- Question ---------- */

if(prompt.includes("?")){

score+=5;

}else{

suggestions.push(
"Turn your request into a clear question."
);

}

/* ---------- Keywords ---------- */

if(

prompt.toLowerCase().includes("explain")||

prompt.toLowerCase().includes("create")||

prompt.toLowerCase().includes("generate")||

prompt.toLowerCase().includes("build")

){

score+=10;

}else{

suggestions.push(
"Use action words like Explain, Create, Build or Generate."
);

}

/* ---------- Final Score ---------- */

score=Math.min(100,score);

document.getElementById(
"score"
).innerHTML=score;

document.getElementById(
"score"
).style.background=

`conic-gradient(
#10b981 ${score*3.6}deg,
rgba(255,255,255,.10) 0deg
)`;

/* ---------- Suggestions ---------- */

if(suggestions.length===0){

suggestions.push(
"Excellent prompt structure."
);

suggestions.push(
"Good context detected."
);

suggestions.push(
"Ready for AI."
);

}

document.getElementById(
"suggestions"
).innerHTML=

suggestions.map(

item=>`<li>${item}</li>`

).join("");

/* ---------- Optimized Prompt ---------- */

optimizedText=

`Role:
Expert ${purpose} Specialist

Objective:
${prompt}

Context:
The response should help the user achieve the best possible outcome.

Tone:
${tone}

Instructions:

• Think step-by-step.

• Explain clearly.

• Use practical examples.

• Include important details.

• Avoid assumptions.

• Provide structured output.

Expected Output:

A professional, well-organized, detailed response with examples and actionable insights.`;

document.getElementById(
"optimizedPrompt"
).value=

optimizedText;

}

/* ---------- Copy ---------- */

function copyPrompt(){

if(optimizedText===""){

alert(
"Optimize a prompt first."
);

return;

}

navigator.clipboard.writeText(

optimizedText

);

alert(
"Prompt copied successfully."
);

}

/* ---------- Download ---------- */

function downloadPrompt(){

if(optimizedText===""){

alert(
"Optimize a prompt first."
);

return;

}

const blob=

new Blob(

[optimizedText],

{

type:"text/plain"

}

);

const link=

document.createElement(
"a"
);

link.href=

URL.createObjectURL(
blob
);

link.download=

`Optimized_Prompt_${new Date()

.toLocaleDateString("en-GB")

.replaceAll("/","-")}.txt`;

link.click();

}

/* ---------- Reset ---------- */

function resetPrompt(){

document.getElementById(
"userPrompt"
).value="";

document.getElementById(
"optimizedPrompt"
).value="";

document.getElementById(
"score"
).innerHTML="0";

document.getElementById(
"score"
).style.background=

`conic-gradient(
#10b981 0deg,
rgba(255,255,255,.10) 0deg
)`;

document.getElementById(
"suggestions"
).innerHTML=

"<li>Waiting...</li>";

optimizedText="";

}