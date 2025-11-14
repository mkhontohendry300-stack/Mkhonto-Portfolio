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
  const contactInfo =
    "📱 +27 793003577 | 📧 mkhontohendry300@gmail.com | 📍 37 Durban Rd, Bellville, Cape Town, 7530";
  const wrappedContact = doc.splitTextToSize(contactInfo, contentWidth);
  doc.text(wrappedContact, leftMargin, yPosition);
  yPosition += wrappedContact.length * 3 + 5;

  // Professional Summary
  addSectionTitle("PROFESSIONAL SUMMARY");
  addWrappedText(
    "Detail-oriented and analytical professional with junior experience in conducting statistical analysis, developing models, and presenting findings. Skilled in data analysis, hypothesis testing, and programming, with a strong background in statistics and mathematics. Proficient in Python, R, Microsoft Office, and SQL. Seeking a role to leverage strong quantitative and problem-solving skills.",
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
  doc.setFont(undefined, "italic");
  doc.text("Project 2: Quantifying the Informal Sector's Impact on South Africa Employment and GDP (07/2024 - 12/2024)", leftMargin, yPosition);
  yPosition += 5;

  const exp2Points = [
    "Cleaned and transformed raw data for data analysis using statistical software",
    "Conducted statistical analysis and generated statistical reports",
    "Developed and implemented statistical models and methodologies",
    "Created data visualizations, trends and reports for statistician review",
    "Prepared research findings and presentations to senior management for decision making"
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
  doc.setFont(undefined, "italic");
  doc.text("Project 1: Community Detection in Social Media (03/2024 - 06/2024)", leftMargin, yPosition);
  yPosition += 5;

  const exp1Points = [
    "Used network analysis techniques to identify and analyze distinct user communities",
    "Applied network analysis and community detection algorithms using Python (Louvain, Girvan-Newman)",
    "Identified and visualized distinct user communities for user segmentation",
    "Utilized NetworkX and Pandas to process and analyze social network data",
    "Uncovered hidden social structures to understand business target market"
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
  doc.setFont(undefined, "italic");
  doc.text("Department Student Counselling (02/2024 – 09/2025)", leftMargin, yPosition);
  yPosition += 5;

  const volPoints = [
    "Provided students with emotional and academic support, promoting mental wellness",
    "Facilitated workshops and awareness campaigns on stress management and exam preparation",
    "Referred students to counsellors when necessary, maintaining strict confidentiality",
    "Demonstrated empathy, leadership, and communication skills in multicultural environments"
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
  doc.text("Diploma in Mathematical Sciences", leftMargin, yPosition);
  yPosition += 5;

  doc.setFontSize(9);
  doc.setFont(undefined, "normal");
  doc.text("Cape Peninsula University of Technology | Cape Town, South Africa", leftMargin, yPosition);
  yPosition += 4;
  doc.text("2021-2024", leftMargin, yPosition);
  yPosition += 5;

  doc.setFontSize(10);
  doc.setFont(undefined, "bold");
  doc.text("Electrical Engineering (N1-N3)", leftMargin, yPosition);
  yPosition += 5;

  doc.setFontSize(9);
  doc.setFont(undefined, "normal");
  doc.text("Gert Sibanda College | Mpumalanga, South Africa", leftMargin, yPosition);
  yPosition += 4;
  doc.text("2019-2020", leftMargin, yPosition);
  yPosition += 5;

  // Skills
  addSectionTitle("SKILLS");

  doc.setFontSize(10);
  doc.setFont(undefined, "bold");
  doc.text("Technical Skills", leftMargin, yPosition);
  yPosition += 4;

  const technicalSkills = [
    "Python, R, MATLAB",
    "SAS (Statistical Software)",
    "Microsoft Office Suite",
    "SQL Database Management"
  ];

  doc.setFontSize(9);
  doc.setFont(undefined, "normal");
  technicalSkills.forEach((skill) => {
    const wrapped = doc.splitTextToSize("• " + skill, contentWidth - 5);
    doc.text(wrapped, leftMargin + 5, yPosition);
    yPosition += 4;
  });

  yPosition += 2;

  doc.setFontSize(10);
  doc.setFont(undefined, "bold");
  doc.text("Soft Skills", leftMargin, yPosition);
  yPosition += 4;

  const softSkills = [
    "Problem Solving",
    "Communication (C2 Proficient)",
    "Time Management",
    "Teamwork",
    "Statistical Modelling",
    "Data Visualization",
    "Attention to Detail",
    "Critical Thinking"
  ];

  doc.setFontSize(9);
  doc.setFont(undefined, "normal");
  softSkills.forEach((skill) => {
    const wrapped = doc.splitTextToSize("• " + skill, contentWidth - 5);
    doc.text(wrapped, leftMargin + 5, yPosition);
    yPosition += 4;
  });

  // Check if we need a new page
  if (yPosition > pageHeight - 40) {
    doc.addPage();
    yPosition = 15;
  }

  // Certifications
  addSectionTitle("CERTIFICATIONS");

  const certifications = [
    "Academic Excellence Award (10/2023 - 10/2024)",
    "Peer Helper Leadership Skill (07/2024)",
    "Peer Helper Certificate of Recognition (09/2024)"
  ];

  doc.setFontSize(9);
  doc.setFont(undefined, "normal");
  certifications.forEach((cert) => {
    const wrapped = doc.splitTextToSize("• " + cert, contentWidth - 5);
    doc.text(wrapped, leftMargin + 5, yPosition);
    yPosition += 4;
  });

  yPosition += 5;

  // References
  addSectionTitle("REFERENCES");

  doc.setFontSize(9);
  doc.setFont(undefined, "bold");
  doc.text("1. Lecturer - Cape Peninsula University of Technology", leftMargin, yPosition);
  yPosition += 4;
  doc.setFont(undefined, "normal");
  doc.text("Mr. Marlon Don | Tel: +27 618 189 169", leftMargin, yPosition);
  yPosition += 5;

  doc.setFont(undefined, "bold");
  doc.text("2. Student Counselling Department", leftMargin, yPosition);
  yPosition += 4;
  doc.setFont(undefined, "normal");
  doc.text("Miss Ancilla Cornelissen | Tel: (021) 959 6390", leftMargin, yPosition);
  yPosition += 5;

  doc.setFont(undefined, "bold");
  doc.text("3. Statistics South Africa (Manager)", leftMargin, yPosition);
  yPosition += 4;
  doc.setFont(undefined, "normal");
  doc.text("Mr. Waleed | Tel: +27 716 702 067", leftMargin, yPosition);

  // Save the PDF
  doc.save("Hendry_Mike_Mkhonto_Resume.pdf");
}
