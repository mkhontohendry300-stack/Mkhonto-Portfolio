import jsPDF from "jspdf";

export function generateResumePDF() {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  let yPosition = 15;
  const leftMargin = 15;
  const rightMargin = 15;
  const contentWidth = pageWidth - leftMargin - rightMargin;

  // Helper function to add text with wrapping
  function addWrappedText(
    text: string,
    fontSize: number,
    fontStyle: "normal" | "bold" = "normal",
    y?: number
  ) {
    doc.setFontSize(fontSize);
    if (fontStyle === "bold") {
      doc.setFont(undefined, "bold");
    } else {
      doc.setFont(undefined, "normal");
    }

    const wrappedText = doc.splitTextToSize(text, contentWidth);
    if (y !== undefined) {
      yPosition = y;
    }
    doc.text(wrappedText, leftMargin, yPosition);
    yPosition += wrappedText.length * (fontSize / 2.5) + 2;
    return yPosition;
  }

  function addSectionTitle(title: string) {
    doc.setDrawColor(100, 100, 100);
    yPosition += 4;
    doc.setFontSize(11);
    doc.setFont(undefined, "bold");
    doc.text(title, leftMargin, yPosition);
    yPosition += 6;
    doc.setLineWidth(0.5);
    doc.line(leftMargin, yPosition - 2, pageWidth - rightMargin, yPosition - 2);
    yPosition += 2;
  }

  // Header
  doc.setFontSize(20);
  doc.setFont(undefined, "bold");
  doc.text("Hendry Mike Mkhonto", leftMargin, yPosition);
  yPosition += 10;

  // Contact Info
  doc.setFontSize(9);
  doc.setFont(undefined, "normal");
  doc.text("Phone: +27 793003577", leftMargin, yPosition);
  yPosition += 4;
  doc.text("Email address: mkhontohendry300@gmail.com", leftMargin, yPosition);
  yPosition += 4;
  doc.text("Address: 37 Durban Rd, Bellville, Cape Town, 7530", leftMargin, yPosition);
  yPosition += 6;

  // Professional Summary
  addSectionTitle("PROFESSIONAL SUMMARY");
  addWrappedText(
    "Detail-oriented and analytical professional with junior experience in conducting statistical analysis, developing models, and presenting findings. I am skilled in data analysis, hypothesis testing, and programming, with a strong background in statistics and mathematics from my diploma in Mathematical Sciences at Cape Peninsula University of Technology. I am Proficient in Python, R, Microsoft office, and SQL. I am seeking a role to leverage my strong quantitative and problem-solving skills.",
    9
  );
  yPosition += 3;

  // Experience
  addSectionTitle("EXPERIENCE");

  doc.setFontSize(10);
  doc.setFont(undefined, "bold");
  doc.text("Junior Data Analyst | Statistics South Africa | Cape Town, South Africa", leftMargin, yPosition);
  yPosition += 5;

  doc.setFontSize(9);
  doc.setFont(undefined, "bold");
  doc.text("Project 2: Quantifying the Informal Sector's Impact on South Africa Employment and GDP", leftMargin, yPosition);
  doc.setFont(undefined, "normal");
  doc.text("07/2024 - 12/2024", pageWidth - rightMargin - 30, yPosition);
  yPosition += 5;

  const exp2Points = [
    "Cleaned and transform raw data for data analysis using statistical software.",
    "Conduct statistical analysis and generate statistical reports.",
    "Develop and implement statistical models and methodologies.",
    "Creating data visualizations, trend and reports finding to statistician.",
    "Prepare research findings and presentation to senior management for decision making."
  ];

  doc.setFont(undefined, "normal");
  exp2Points.forEach((point) => {
    doc.setFontSize(9);
    const wrapped = doc.splitTextToSize("• " + point, contentWidth - 5);
    doc.text(wrapped, leftMargin + 5, yPosition);
    yPosition += wrapped.length * 3.5;
  });

  yPosition += 2;

  doc.setFontSize(9);
  doc.setFont(undefined, "bold");
  doc.text("Project 1: Community Detection in Social Media", leftMargin, yPosition);
  doc.setFont(undefined, "normal");
  doc.text("03/2024 - 06/2024", pageWidth - rightMargin - 30, yPosition);
  yPosition += 5;

  const exp1Points = [
    "Use network analysis techniques to identify and analyze distinct user communities.",
    "Applied network analysis and community detection algorithms (Louvain, Girvan-Newman) using Python.",
    "Identified and visualized distinct user communities, providing insights for user segmentation.",
    "Utilized key libraries including NetworkX and Pandas to process and analyze social network data.",
    "The goal was to uncover hidden social structures and understand the target market of the business."
  ];

  doc.setFont(undefined, "normal");
  exp1Points.forEach((point) => {
    doc.setFontSize(9);
    const wrapped = doc.splitTextToSize("• " + point, contentWidth - 5);
    doc.text(wrapped, leftMargin + 5, yPosition);
    yPosition += wrapped.length * 3.5;
  });

  yPosition += 2;

  doc.setFontSize(10);
  doc.setFont(undefined, "bold");
  doc.text("Volunteer Peer Helper | Cape Peninsula University of Technology | Cape Town, South Africa", leftMargin, yPosition);
  yPosition += 5;

  doc.setFontSize(9);
  doc.setFont(undefined, "bold");
  doc.text("Department Student Counselling", leftMargin, yPosition);
  doc.setFont(undefined, "normal");
  doc.text("02/2024 – 09/2025", pageWidth - rightMargin - 30, yPosition);
  yPosition += 5;

  const volPoints = [
    "Provide students with emotional and academic support, promote mental wellness.",
    "Facilitate workshops and awareness campaigns on stress management, exams preparation.",
    "Referred students to student counsellors when necessary, maintaining strict confidentiality.",
    "Demonstrated empathy, leadership, and communication skills in multicultural university environments."
  ];

  doc.setFont(undefined, "normal");
  volPoints.forEach((point) => {
    doc.setFontSize(9);
    const wrapped = doc.splitTextToSize("• " + point, contentWidth - 5);
    doc.text(wrapped, leftMargin + 5, yPosition);
    yPosition += wrapped.length * 3.5;
  });

  // Check if we need a new page
  if (yPosition > pageHeight - 40) {
    doc.addPage();
    yPosition = 15;
  }

  // Education
  addSectionTitle("EDUCATION");

  doc.setFontSize(10);
  doc.setFont(undefined, "bold");
  doc.text("Diploma in Mathematica Sciences", leftMargin, yPosition);
  yPosition += 5;

  doc.setFontSize(9);
  doc.setFont(undefined, "normal");
  doc.text("Cape Peninsula University of Technology | Cape Town, South Africa", leftMargin, yPosition);
  doc.text("2021-2024", pageWidth - rightMargin - 30, yPosition);
  yPosition += 5;

  doc.setFontSize(10);
  doc.setFont(undefined, "bold");
  doc.text("Electrical Engineering (N1-N3)", leftMargin, yPosition);
  yPosition += 5;

  doc.setFontSize(9);
  doc.setFont(undefined, "normal");
  doc.text("Gert Sibanda College | Mpumalanga, South Africa", leftMargin, yPosition);
  doc.text("2019-2020", pageWidth - rightMargin - 30, yPosition);
  yPosition += 5;

  // Skills
  addSectionTitle("SKILLS");

  const skillsY = yPosition;

  // Technical Skills column
  doc.setFontSize(10);
  doc.setFont(undefined, "bold");
  doc.text("Technical Skills", leftMargin, yPosition);
  yPosition += 5;

  const technicalSkills = [
    "Programming Language (Python, R, MATLAB)",
    "Statistical Software (SAS)",
    "Microsoft Office (Excel, Word, Powerpoint)",
    "Data Management (SQL Database)",
    "Numerical Methods (Simulation)",
    "Statistical Analysis & Modelling",
    "Data Visualization (Matplotlib, ggplot2)"
  ];

  doc.setFontSize(9);
  doc.setFont(undefined, "normal");
  let techY = yPosition;
  technicalSkills.forEach((skill) => {
    const wrapped = doc.splitTextToSize("• " + skill, contentWidth / 2 - 10);
    doc.text(wrapped, leftMargin, techY);
    techY += wrapped.length * 3.5;
  });

  // Soft Skills column
  doc.setFontSize(10);
  doc.setFont(undefined, "bold");
  yPosition = skillsY;
  doc.text("Soft Skills", leftMargin + contentWidth / 2 + 5, yPosition);
  yPosition += 5;

  const softSkills = [
    "Problem Solving",
    "Communication (C2 Proficient)",
    "Time Management",
    "Teamwork",
    "Attention to Detail",
    "Adaptability",
    "Critical Thinking"
  ];

  doc.setFontSize(9);
  doc.setFont(undefined, "normal");
  let softY = yPosition;
  softSkills.forEach((skill) => {
    const wrapped = doc.splitTextToSize("• " + skill, contentWidth / 2 - 10);
    doc.text(wrapped, leftMargin + contentWidth / 2 + 5, softY);
    softY += wrapped.length * 3.5;
  });

  yPosition = Math.max(techY, softY) + 3;

  // Check if we need a new page
  if (yPosition > pageHeight - 40) {
    doc.addPage();
    yPosition = 15;
  }

  // Certifications
  addSectionTitle("CERTIFICATIONS");

  const certifications = [
    { title: "Academic excellence award", date: "10/2023 - 10/2024" },
    { title: "Peer Helper Leadership skill", date: "07/2024" },
    { title: "Peer Helper Certificate of Recognition", date: "09/2024" },
    { title: "AI For Everyone", date: "09/22/2025", issuer: "DeepLearning.AI & Coursera" },
    { title: "Certificate in Full Stack Development (32 Credits)", date: "07/14/2025", issuer: "FNB App Academy 2025" },
    { title: "AI & Machine Learning Fundamentals (Score: 46/50 - 92%)", date: "11/07/2025", issuer: "Capaciti" },
    { title: "Supervised Machine Learning: Regression and Classification", date: "10/13/2025", issuer: "DeepLearning.AI & Stanford University" }
  ];

  doc.setFontSize(9);
  doc.setFont(undefined, "normal");

  certifications.forEach((cert, idx) => {
    if (cert.issuer) {
      doc.setFont(undefined, "bold");
      doc.text("• " + cert.title, leftMargin, yPosition);
      doc.setFont(undefined, "italic");
      doc.text(cert.issuer, leftMargin + 5, yPosition + 3);
      yPosition += 3;
      doc.setFont(undefined, "normal");
      doc.text(cert.date, pageWidth - rightMargin - 30, yPosition - 3);
    } else {
      doc.text("• " + cert.title, leftMargin, yPosition);
      doc.text(cert.date, pageWidth - rightMargin - 30, yPosition);
    }
    yPosition += 4;
  });

  yPosition += 2;

  // References
  addSectionTitle("REFERENCES");

  doc.setFontSize(9);
  doc.setFont(undefined, "bold");
  doc.text("1. Lecturer (Cape Peninsula University of Technology)", leftMargin, yPosition);
  yPosition += 4;
  doc.setFont(undefined, "normal");
  doc.text("Mr. Marlon Don", leftMargin, yPosition);
  yPosition += 3;
  doc.text("Tel No: +27 618 189 169.", leftMargin, yPosition);
  yPosition += 5;

  doc.setFont(undefined, "bold");
  doc.text("2. Student Counselling", leftMargin, yPosition);
  yPosition += 4;
  doc.setFont(undefined, "normal");
  doc.text("Miss Ancilla Cornelissen", leftMargin, yPosition);
  yPosition += 3;
  doc.text("Telephone number: (021) 959 6390.", leftMargin, yPosition);
  yPosition += 5;

  doc.setFont(undefined, "bold");
  doc.text("3. Statistic South Africa (Manager)", leftMargin, yPosition);
  yPosition += 4;
  doc.setFont(undefined, "normal");
  doc.text("Mr. Waleed", leftMargin, yPosition);
  yPosition += 3;
  doc.text("Telephone number: +27 716 702 067.", leftMargin, yPosition);

  // Save the PDF
  doc.save("Hendry_Mike_Mkhonto_Resume.pdf");
}
