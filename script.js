function showSection(id){
    document.querySelectorAll(".content-section").forEach(sec=>{
        sec.classList.add("hidden");
    });
    document.getElementById(id).classList.remove("hidden");
}


function remindWater(){
    document.getElementById("waterStatus").innerText="Drink Water Now 💧";
    alert("Time to drink water!");
}


function remindMedicine(){
    document.getElementById("medicineStatus").innerText="Medicine time 💊";
    alert("Please take your medicine");
}


function simulateShake(){
    document.getElementById("motionStatus").innerText="Unusual shaking detected!";
    alert("Possible panic detected. Consider SOS.");
}


function triggerSOS(){
    document.getElementById("sosOutput").innerText="SOS Alert Sent! Help is on the way.";
    alert("SOS Alert Sent to Trusted Contacts");
}


function saveMedical(){
    document.getElementById("saveStatus").innerText="Medical Profile Saved Securely ✔";
}


function startBreathing(){
    let text=document.getElementById("breathText");
    let steps=["Breathe In","Hold","Breathe Out","Relax"];
    let i=0;

    setInterval(()=>{
        text.innerText=steps[i%4];
        i++;
    },2000);
}


function toggleTheme(){
    document.body.classList.toggle("dark");
}


function enableHighContrast(){
    document.body.classList.toggle("high-contrast");
}


function enableVoice(){
    alert("Say HELP loudly near mic to simulate feature");
}
