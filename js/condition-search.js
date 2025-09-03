document.addEventListener('DOMContentLoaded', function() {
let conditions = [
    "Influenza",
    "HIV/AIDS",
    "Hepatitis B and C",
    "COVID-19",
    "Tuberculosis",
    "Strep throat",
    "Urinary tract infections (UTIs)",
    "Lyme disease",
    "Candidiasis",
    "Athlete's foot",
    "Histoplasmosis",
    "Malaria",
    "Giardiasis",
    "Toxoplasmosis",
    "Hypertension",
    "Coronary artery disease",
    "Heart failure",
    "Stroke",
    "Chronic obstructive pulmonary disease (COPD)",
    "Asthma",
    "Pulmonary fibrosis",
    "Diabetes mellitus (Type 1 and Type 2)",
    "Hypothyroidism",
    "Addison's disease",
    "Irritable bowel syndrome (IBS)",
    "Crohn's disease",
    "Ulcerative colitis",
    "Rheumatoid arthritis",
    "Lupus (systemic lupus erythematosus)",
    "Sjogren's syndrome",
    "Hashimoto's thyroiditis",
    "Type 1 diabetes",
    "Graves' disease",
    "Down syndrome",
    "Turner syndrome",
    "Klinefelter syndrome",
    "Cystic fibrosis",
    "Sickle cell anemia",
    "Huntington's disease",
    "Some forms of cancer",
    "Heart disease",
    "Alzheimer's disease",
    "Parkinson's disease",
    "Amyotrophic lateral sclerosis (ALS)",
    "Epilepsy",
    "Febrile seizures",
    "Multiple sclerosis",
    "Guillain-Barré syndrome",
    "Major depressive disorder",
    "Bipolar disorder",
    "Generalized anxiety disorder",
    "Panic disorder",
    "Post-traumatic stress disorder (PTSD)",
    "Schizophrenia",
    "Schizoaffective disorder",
    "Breast cancer",
    "Lung cancer",
    "Prostate cancer",
    "Osteosarcoma",
    "Liposarcoma",
    "Acute lymphoblastic leukemia (ALL)",
    "Chronic myeloid leukemia (CML)",
    "Hodgkin lymphoma",
    "Non-Hodgkin lymphoma",
    "Psoriasis",
    "Eczema (atopic dermatitis)",
    "Acne",
    "Melanoma",
    "Osteoporosis",
    "Osteoarthritis",
    "Rheumatoid arthritis",
    "Muscular dystrophy",
    "Myasthenia gravis",
    "Iron-deficiency anemia",
    "Pernicious anemia",
    "Sickle cell anemia",
    "Hemophilia",
    "Deep vein thrombosis (DVT)",
    "Phenylketonuria (PKU)",
    "Gaucher's disease",
    "Hyperlipidemia",
    "Metabolic syndrome",
    "Chronic kidney disease (CKD)",
    "Polycystic kidney disease",
    "Interstitial cystitis",
    "Urinary incontinence",
    "Polycystic ovary syndrome (PCOS)",
    "Endometriosis",
    "Menstrual disorders",
    "Prostate enlargement (BPH)",
    "Erectile dysfunction",
    "Meningitis",
    "Bronchitis",
    "Pneumonia",
    "Chickenpox",
    "Measles",
    "Mumps",
    "Rubella",
    "Zika virus",
    "Ebola",
    "Dengue fever",
    "Tetanus",
    "Whooping cough (Pertussis)",
    "Rabies",
    "Sepsis",
    "Migraine",
    "Cluster headaches",
    "Tension headaches",
    "Gout",
    "Fibromyalgia",
    "Systemic sclerosis (scleroderma)",
    "Celiac disease",
    "Peptic ulcer disease",
    "Pancreatitis",
    "Hepatic encephalopathy",
    "Liver cirrhosis",
    "Hepatocellular carcinoma",
    "Biliary atresia",
    "Cholecystitis",
    "Gallstones",
    "Endocrine tumors",
    "Neuroendocrine tumors",
    "Pheochromocytoma",
    "Primary hyperparathyroidism",
    "Hyperthyroidism",
    "Goiter",
    "Thyroid cancer",
    "Ovarian cancer",
    "Cervical cancer",
    "Uterine cancer",
    "Testicular cancer",
    "Bladder cancer",
    "Renal cell carcinoma",
    "Wilms tumor",
    "Skin cancer",
    "Basal cell carcinoma",
    "Squamous cell carcinoma",
    "Glioblastoma",
    "Meningioma",
    "Medulloblastoma",
    "Oligodendroglioma",
    "Pituitary adenoma",
    "Hydrocephalus",
    "Spina bifida",
    "Cerebral palsy",
    "Amyloidosis",
    "Hemochromatosis",
    "Wilson's disease",
    "Glycogen storage diseases",
    "Pompe disease",
    "Mitochondrial diseases",
    "Lysosomal storage diseases",
    "Fabry disease",
    "Tay-Sachs disease",
    "Niemann-Pick disease",
    "Krabbe disease",
    "Leukodystrophies",
    "Alport syndrome",
    "Bartter syndrome",
    "Gitelman syndrome",
    "Nephrotic syndrome",
    "Acute kidney injury",
    "Chronic pyelonephritis",
    "Hydronephrosis",
    "Bladder exstrophy",
    "Hypospadias",
    "Epispadias",
    "Erectile dysfunction",
    "Peyronie's disease",
    "Infertility",
    "Male hypogonadism",
    "Female hypogonadism",
    "Hirsutism",
    "Gynecomastia",
    "Galactorrhea",
    "Pituitary tumors",
    "Adrenal insufficiency",
    "Cushing's syndrome",
    "Addison's disease",
    "Congenital adrenal hyperplasia",
    "Hyperaldosteronism",
    "Hypoaldosteronism"
]
function filterconditions() {
    let input = document.getElementById('searchInput_2').value.toLowerCase();
    let dropdown = document.getElementById('dropdown_2');
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
            let matches = conditions.filter(condition => condition.toLowerCase().includes(input));
            
            if (matches.length > 0) {
                matches.forEach(condition => {
                    let div = document.createElement('div');
                    div.textContent = condition;
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
        document.getElementById('dropdown_4').style.display = 'none';
    }
});

// Expose filterSymptoms to the global scope for the input's onkeyup attribute to work
window.filterconditions = filterconditions;
});



document.addEventListener('DOMContentLoaded', function() {
    let conditions = [
        "Influenza",
        "HIV/AIDS",
        "Hepatitis B and C",
        "COVID-19",
        "Tuberculosis",
        "Strep throat",
        "Urinary tract infections (UTIs)",
        "Lyme disease",
        "Candidiasis",
        "Athlete's foot",
        "Histoplasmosis",
        "Malaria",
        "Giardiasis",
        "Toxoplasmosis",
        "Hypertension",
        "Coronary artery disease",
        "Heart failure",
        "Stroke",
        "Chronic obstructive pulmonary disease (COPD)",
        "Asthma",
        "Pulmonary fibrosis",
        "Diabetes mellitus (Type 1 and Type 2)",
        "Hypothyroidism",
        "Addison's disease",
        "Irritable bowel syndrome (IBS)",
        "Crohn's disease",
        "Ulcerative colitis",
        "Rheumatoid arthritis",
        "Lupus (systemic lupus erythematosus)",
        "Sjogren's syndrome",
        "Hashimoto's thyroiditis",
        "Type 1 diabetes",
        "Graves' disease",
        "Down syndrome",
        "Turner syndrome",
        "Klinefelter syndrome",
        "Cystic fibrosis",
        "Sickle cell anemia",
        "Huntington's disease",
        "Some forms of cancer",
        "Heart disease",
        "Alzheimer's disease",
        "Parkinson's disease",
        "Amyotrophic lateral sclerosis (ALS)",
        "Epilepsy",
        "Febrile seizures",
        "Multiple sclerosis",
        "Guillain-Barré syndrome",
        "Major depressive disorder",
        "Bipolar disorder",
        "Generalized anxiety disorder",
        "Panic disorder",
        "Post-traumatic stress disorder (PTSD)",
        "Schizophrenia",
        "Schizoaffective disorder",
        "Breast cancer",
        "Lung cancer",
        "Prostate cancer",
        "Osteosarcoma",
        "Liposarcoma",
        "Acute lymphoblastic leukemia (ALL)",
        "Chronic myeloid leukemia (CML)",
        "Hodgkin lymphoma",
        "Non-Hodgkin lymphoma",
        "Psoriasis",
        "Eczema (atopic dermatitis)",
        "Acne",
        "Melanoma",
        "Osteoporosis",
        "Osteoarthritis",
        "Rheumatoid arthritis",
        "Muscular dystrophy",
        "Myasthenia gravis",
        "Iron-deficiency anemia",
        "Pernicious anemia",
        "Sickle cell anemia",
        "Hemophilia",
        "Deep vein thrombosis (DVT)",
        "Phenylketonuria (PKU)",
        "Gaucher's disease",
        "Hyperlipidemia",
        "Metabolic syndrome",
        "Chronic kidney disease (CKD)",
        "Polycystic kidney disease",
        "Interstitial cystitis",
        "Urinary incontinence",
        "Polycystic ovary syndrome (PCOS)",
        "Endometriosis",
        "Menstrual disorders",
        "Prostate enlargement (BPH)",
        "Erectile dysfunction",
        "Meningitis",
        "Bronchitis",
        "Pneumonia",
        "Chickenpox",
        "Measles",
        "Mumps",
        "Rubella",
        "Zika virus",
        "Ebola",
        "Dengue fever",
        "Tetanus",
        "Whooping cough (Pertussis)",
        "Rabies",
        "Sepsis",
        "Migraine",
        "Cluster headaches",
        "Tension headaches",
        "Gout",
        "Fibromyalgia",
        "Systemic sclerosis (scleroderma)",
        "Celiac disease",
        "Peptic ulcer disease",
        "Pancreatitis",
        "Hepatic encephalopathy",
        "Liver cirrhosis",
        "Hepatocellular carcinoma",
        "Biliary atresia",
        "Cholecystitis",
        "Gallstones",
        "Endocrine tumors",
        "Neuroendocrine tumors",
        "Pheochromocytoma",
        "Primary hyperparathyroidism",
        "Hyperthyroidism",
        "Goiter",
        "Thyroid cancer",
        "Ovarian cancer",
        "Cervical cancer",
        "Uterine cancer",
        "Testicular cancer",
        "Bladder cancer",
        "Renal cell carcinoma",
        "Wilms tumor",
        "Skin cancer",
        "Basal cell carcinoma",
        "Squamous cell carcinoma",
        "Glioblastoma",
        "Meningioma",
        "Medulloblastoma",
        "Oligodendroglioma",
        "Pituitary adenoma",
        "Hydrocephalus",
        "Spina bifida",
        "Cerebral palsy",
        "Amyloidosis",
        "Hemochromatosis",
        "Wilson's disease",
        "Glycogen storage diseases",
        "Pompe disease",
        "Mitochondrial diseases",
        "Lysosomal storage diseases",
        "Fabry disease",
        "Tay-Sachs disease",
        "Niemann-Pick disease",
        "Krabbe disease",
        "Leukodystrophies",
        "Alport syndrome",
        "Bartter syndrome",
        "Gitelman syndrome",
        "Nephrotic syndrome",
        "Acute kidney injury",
        "Chronic pyelonephritis",
        "Hydronephrosis",
        "Bladder exstrophy",
        "Hypospadias",
        "Epispadias",
        "Erectile dysfunction",
        "Peyronie's disease",
        "Infertility",
        "Male hypogonadism",
        "Female hypogonadism",
        "Hirsutism",
        "Gynecomastia",
        "Galactorrhea",
        "Pituitary tumors",
        "Adrenal insufficiency",
        "Cushing's syndrome",
        "Addison's disease",
        "Congenital adrenal hyperplasia",
        "Hyperaldosteronism",
        "Hypoaldosteronism"
    ]
    function filterconditionsResponsive() {
        let input = document.getElementById('searchInput_2.1').value.toLowerCase();
        let dropdown = document.getElementById('dropdown_2.1');
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
                let matches = conditions.filter(condition => condition.toLowerCase().includes(input));
                
                if (matches.length > 0) {
                    matches.forEach(condition => {
                        let div = document.createElement('div');
                        div.textContent = condition;
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
            document.getElementById('dropdown_2.1').style.display = 'none';
        }
    });
    
    // Expose filterSymptoms to the global scope for the input's onkeyup attribute to work
    window.filterconditionsResponsive = filterconditionsResponsive;
    });
    