function calculateExperience() {
  const items = document.querySelectorAll(".timeline-item");
  const intervals = [];
  
  items.forEach(item => {
    const startStr = item.getAttribute("data-start-date");
    const endStr = item.getAttribute("data-end-date");
    if (!startStr) return;
    
    const start = new Date(startStr);
    const end = (endStr && endStr !== "Present") ? new Date(endStr) : new Date();
    
    intervals.push({ start, end });
  });
  
  if (intervals.length === 0) return;
  
  // Sort intervals by start date
  intervals.sort((a, b) => a.start - b.start);
  
  // Merge overlapping intervals
  const merged = [];
  let current = intervals[0];
  
  for (let i = 1; i < intervals.length; i++) {
    const next = intervals[i];
    if (next.start <= current.end) {
      if (next.end > current.end) {
        current.end = next.end;
      }
    } else {
      merged.push(current);
      current = next;
    }
  }
  merged.push(current);
  
  // Calculate total duration
  let totalMs = 0;
  merged.forEach(interval => {
    totalMs += (interval.end - interval.start);
  });
  
  // Convert to years and months
  const msInMonth = 30.436875 * 24 * 60 * 60 * 1000; // precise average month in ms
  const totalMonths = Math.round(totalMs / msInMonth);
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;
  
  let expStr = "";
  if (years > 0) {
    expStr += `${years} year${years > 1 ? 's' : ''}`;
  }
  if (months > 0) {
    if (expStr) expStr += " ";
    expStr += `${months} month${months > 1 ? 's' : ''}`;
  }
  
  let currentMode = 0; // 0: default, 1: days, 2: minutes, 3: seconds
  
  const days = Math.floor(totalMs / (24 * 60 * 60 * 1000));
  const minutes = Math.floor(totalMs / (60 * 1000));
  const seconds = Math.floor(totalMs / 1000);
  
  const defaultStr = expStr;
  const daysStr = `${days.toLocaleString()} day${days !== 1 ? 's' : ''}`;
  const minutesStr = `${minutes.toLocaleString()} minute${minutes !== 1 ? 's' : ''}`;
  const secondsStr = `${seconds.toLocaleString()} second${seconds !== 1 ? 's' : ''}`;
  
  const formats = [defaultStr, daysStr, minutesStr, secondsStr];
  
  if (expStr) {
    const container = document.getElementById("total-experience");
    if (container) {
      container.textContent = formats[currentMode];
      
      const pill = container.closest(".total-experience-pill");
      if (pill) {
        pill.title = "Click to toggle format";
        
        pill.addEventListener("click", () => {
          currentMode = (currentMode + 1) % formats.length;
          container.textContent = formats[currentMode];
        });
      }
    }
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", calculateExperience);
} else {
  calculateExperience();
}

