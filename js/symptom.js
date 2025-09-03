document.addEventListener('DOMContentLoaded', function() {
    let symptoms = [
        "Fatigue",
        "Fever",
        "Weakness",
        "Weight loss",
        "Sweating (night sweats)",
        "Chest pain",
        "Palpitations",
        "Shortness of breath (dyspnea)",
        "Swelling in legs (edema)",
        "Syncope (fainting)",
        "Cough",
        "Wheezing",
        "Hemoptysis (coughing up blood)",
        "Pleuritic chest pain",
        "Orthopnea (shortness of breath when lying flat)",
        "Abdominal pain",
        "Nausea",
        "Vomiting",
        "Diarrhea",
        "Constipation",
        "Blood in stool (hematochezia or melena)",
        "Bloating",
        "Headache",
        "Dizziness",
        "Seizures",
        "Numbness or tingling",
        "Weakness or paralysis",
        "Memory loss",
        "Confusion",
        "Speech difficulties",
        "Joint pain (arthralgia)",
        "Muscle pain (myalgia)",
        "Swelling of joints",
        "Stiffness",
        "Back pain",
        "Rash",
        "Itching (pruritus)",
        "Redness (erythema)",
        "Swelling",
        "Bruising",
        "Dry skin",
        "Painful urination (dysuria)",
        "Blood in urine (hematuria)",
        "Urinary frequency or urgency",
        "Pelvic pain",
        "Erectile dysfunction",
        "Abnormal vaginal discharge or bleeding",
        "Depression",
        "Anxiety",
        "Mood swings",
        "Hallucinations",
        "Delusions",
        "Insomnia",
        "Excessive thirst (polydipsia)",
        "Excessive hunger (polyphagia)",
        "Excessive urination (polyuria)",
        "Heat intolerance",
        "Cold intolerance",
        "Unusual bleeding or bruising",
        "Anemia (pallor, fatigue)",
        "Lymphadenopathy (swollen lymph nodes)",
        "Vision changes (blurred vision, double vision)",
        "Hearing loss",
        "Ringing in the ears (tinnitus)",
        "Recurrent infections",
        "Allergic reactions (hives, anaphylaxis)",
        "Autoimmune symptoms (varied depending on specific autoimmune disease)"
    ];

    function filterSymptoms() {
        let input = document.getElementById('searchInput').value.toLowerCase();
        let dropdown = document.getElementById('dropdown');
        dropdown.innerHTML = '';
        dropdown.style.display = 'block';

        // Show loading message
        let loadingMessage = document.createElement('div');
        loadingMessage.className = 'loading';
        loadingMessage.textContent = 'Loading...';
        dropdown.appendChild(loadingMessage);

        setTimeout(() => {
            dropdown.innerHTML = '';
            if (input) {
                let matches = symptoms.filter(symptom => symptom.toLowerCase().includes(input));
                
                if (matches.length > 0) {
                    matches.forEach(symptom => {
                        let div = document.createElement('div');
                        div.textContent = symptom;
                        div.addEventListener('click', function() {
                            dropdown.style.display = 'none';
                        });
                        dropdown.appendChild(div);
                    });
                } else {
                    let noResult = document.createElement('div');
                    noResult.className = 'loading';
                    noResult.textContent = 'No results found';
                    dropdown.appendChild(noResult);
                }
            } else {
                dropdown.style.display = 'none';
            }
        }, 500); // Simulate loading time
    }

    // Add an event listener to close the dropdown when clicking outside
    document.addEventListener('click', function(event) {
        let isClickInside = document.querySelector('.search_box').contains(event.target);
        if (!isClickInside) {
            document.getElementById('dropdown').style.display = 'none';
        }
    });
    
    // Expose filterSymptomsResponsive to the global scope for the input's onkeyup attribute to work
    window.filterSymptoms = filterSymptoms;
});




document.addEventListener('DOMContentLoaded', function() {
    let symptoms = [
        "Fatigue",
        "Fever",
        "Weakness",
        "Weight loss",
        "Sweating (night sweats)",
        "Chest pain",
        "Palpitations",
        "Shortness of breath (dyspnea)",
        "Swelling in legs (edema)",
        "Syncope (fainting)",
        "Cough",
        "Wheezing",
        "Hemoptysis (coughing up blood)",
        "Pleuritic chest pain",
        "Orthopnea (shortness of breath when lying flat)",
        "Abdominal pain",
        "Nausea",
        "Vomiting",
        "Diarrhea",
        "Constipation",
        "Blood in stool (hematochezia or melena)",
        "Bloating",
        "Headache",
        "Dizziness",
        "Seizures",
        "Numbness or tingling",
        "Weakness or paralysis",
        "Memory loss",
        "Confusion",
        "Speech difficulties",
        "Joint pain (arthralgia)",
        "Muscle pain (myalgia)",
        "Swelling of joints",
        "Stiffness",
        "Back pain",
        "Rash",
        "Itching (pruritus)",
        "Redness (erythema)",
        "Swelling",
        "Bruising",
        "Dry skin",
        "Painful urination (dysuria)",
        "Blood in urine (hematuria)",
        "Urinary frequency or urgency",
        "Pelvic pain",
        "Erectile dysfunction",
        "Abnormal vaginal discharge or bleeding",
        "Depression",
        "Anxiety",
        "Mood swings",
        "Hallucinations",
        "Delusions",
        "Insomnia",
        "Excessive thirst (polydipsia)",
        "Excessive hunger (polyphagia)",
        "Excessive urination (polyuria)",
        "Heat intolerance",
        "Cold intolerance",
        "Unusual bleeding or bruising",
        "Anemia (pallor, fatigue)",
        "Lymphadenopathy (swollen lymph nodes)",
        "Vision changes (blurred vision, double vision)",
        "Hearing loss",
        "Ringing in the ears (tinnitus)",
        "Recurrent infections",
        "Allergic reactions (hives, anaphylaxis)",
        "Autoimmune symptoms (varied depending on specific autoimmune disease)"
    ];

    function filterSymptomsResponsive() {
        let input = document.getElementById('searchInput_1.1').value.toLowerCase();
        let dropdown = document.getElementById('dropdown_1.1');
        dropdown.innerHTML = '';
        dropdown.style.display = 'block';

        // Show loading message
        let loadingMessage = document.createElement('div');
        loadingMessage.className = 'loading';
        loadingMessage.textContent = 'Loading...';
        dropdown.appendChild(loadingMessage);

        setTimeout(() => {
            dropdown.innerHTML = '';
            if (input) {
                let matches = symptoms.filter(symptom => symptom.toLowerCase().includes(input));
                
                if (matches.length > 0) {
                    matches.forEach(symptom => {
                        let div = document.createElement('div');
                        div.textContent = symptom;
                        div.addEventListener('click', function() {
                            dropdown.style.display = 'none';
                        });
                        dropdown.appendChild(div);
                    });
                } else {
                    let noResult = document.createElement('div');
                    noResult.className = 'loading';
                    noResult.textContent = 'No results found';
                    dropdown.appendChild(noResult);
                }
            } else {
                dropdown.style.display = 'none';
            }
        }, 500); // Simulate loading time
    }

    // Add an event listener to close the dropdown when clicking outside
    document.addEventListener('click', function(event) {
        let isClickInside = document.querySelector('.search_box').contains(event.target);
        if (!isClickInside) {
            document.getElementById('dropdown_1.1').style.display = 'none';
        }
    });
    
    // Expose filterSymptoms to the global scope for the input's onkeyup attribute to work
    window.filterSymptomsResponsive = filterSymptomsResponsive;
});