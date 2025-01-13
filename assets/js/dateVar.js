function calculateExperience() {
    const workStartYear = 2022;
    const currentYear = new Date().getFullYear();
    const experience = currentYear - workStartYear;
    document.getElementById('experience').textContent = experience;
}

window.onload = calculateExperience;
