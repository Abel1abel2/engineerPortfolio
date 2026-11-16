const fs = require('fs');
const path = require('path');
const { PDFDocument, rgb, StandardFonts } = require('pdf-lib');

async function createResume() {
  const pdfDoc = await PDFDocument.create();
  // Standard Letter size: 612 x 792
  const page = pdfDoc.addPage([612, 792]);
  const { width, height } = page.getSize();

  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontOblique = await pdfDoc.embedFont(StandardFonts.HelveticaOblique);

  // Colors based on resume design
  const darkOrange = rgb(0.93, 0.49, 0.05); // #ec7d0d
  const lightOrange = rgb(0.96, 0.65, 0.12);
  const darkTextColor = rgb(0.12, 0.12, 0.12);
  const grayTextColor = rgb(0.35, 0.35, 0.35);
  const lightGray = rgb(0.85, 0.85, 0.85);

  // Background accent circles / shapes
  // Top left orange circle
  page.drawCircle({
    x: 45,
    y: height - 40,
    size: 16,
    color: darkOrange,
  });

  // Circle behind photo
  page.drawCircle({
    x: 165,
    y: height - 90,
    size: 32,
    color: darkOrange,
  });

  // Top header dots
  page.drawCircle({
    x: 450,
    y: height - 38,
    size: 11,
    color: darkOrange,
  });
  page.drawCircle({
    x: 545,
    y: height - 15,
    size: 26,
    color: darkOrange,
  });

  // Light watermark circle bottom left
  page.drawCircle({
    x: 150,
    y: 120,
    size: 180,
    color: rgb(0.96, 0.96, 0.96),
  });

  // Photo
  try {
    const photoPath = path.join(__dirname, 'public', 'images', 'dag.JPG');
    if (fs.existsSync(photoPath)) {
      const photoBytes = fs.readFileSync(photoPath);
      const photoImage = await pdfDoc.embedJpg(photoBytes);
      // Photo circle border or box
      page.drawImage(photoImage, {
        x: 45,
        y: height - 175,
        width: 120,
        height: 120,
      });
    }
  } catch (e) {
    console.error('Error embedding photo:', e);
  }

  // Header Title
  page.drawText('DAGIM GIRMA', {
    x: 215,
    y: height - 68,
    size: 22,
    font: fontBold,
    color: darkTextColor,
  });

  page.drawText('CABIN TECHNICIAN', {
    x: 215,
    y: height - 84,
    size: 11,
    font: fontBold,
    color: darkOrange,
  });

  // Divider line under header
  page.drawLine({
    start: { x: 215, y: height - 94 },
    end: { x: 550, y: height - 94 },
    thickness: 1.5,
    color: darkTextColor,
  });

  // Profile Section
  page.drawText('Profile', {
    x: 215,
    y: height - 125,
    size: 15,
    font: fontBold,
    color: darkTextColor,
  });

  const profileLines = [
    'Motivated and detail-oriented professional with strong communication and',
    'problem-solving skills. Experienced in working in fast-paced environments and',
    'committed to delivering high-quality results. Quick learner with the ability to',
    'adapt to new challenges and technologies.'
  ];

  let currentY = height - 145;
  for (const line of profileLines) {
    page.drawText(line, {
      x: 215,
      y: currentY,
      size: 9.5,
      font: fontRegular,
      color: grayTextColor,
      lineHeight: 14,
    });
    currentY -= 14;
  }

  // Work Experience Section
  currentY -= 15;
  page.drawText('Work Experience', {
    x: 215,
    y: currentY,
    size: 15,
    font: fontBold,
    color: darkTextColor,
  });
  page.drawLine({
    start: { x: 215, y: currentY - 4 },
    end: { x: 345, y: currentY - 4 },
    thickness: 1.5,
    color: darkTextColor,
  });

  // Job 1: Ethiopian Airlines
  currentY -= 25;
  page.drawText('ETHIOPIAN AIR LINES', {
    x: 215,
    y: currentY,
    size: 10.5,
    font: fontBold,
    color: darkTextColor,
  });
  page.drawText('Jan 2025 - Present', {
    x: 440,
    y: currentY,
    size: 10,
    font: fontBold,
    color: darkTextColor,
  });

  currentY -= 14;
  page.drawText('CABIN TECHNICIAN', {
    x: 215,
    y: currentY,
    size: 9.5,
    font: fontRegular,
    color: darkTextColor,
  });

  currentY -= 14;
  page.drawText('I HAVE TAKEN CABIN TECHNICIAN TRAINING BEFORE', {
    x: 215,
    y: currentY,
    size: 8.5,
    font: fontRegular,
    color: grayTextColor,
  });
  currentY -= 12;
  page.drawText('RECRUITMENT FOR 8 MONTH.', {
    x: 215,
    y: currentY,
    size: 8.5,
    font: fontRegular,
    color: grayTextColor,
  });

  // Job 2: Nile Insurance
  currentY -= 22;
  page.drawText('NILE INSURANCE', {
    x: 215,
    y: currentY,
    size: 10.5,
    font: fontBold,
    color: darkTextColor,
  });
  page.drawText('Sep 2023 - Mar 2024', {
    x: 430,
    y: currentY,
    size: 10,
    font: fontBold,
    color: darkTextColor,
  });

  currentY -= 14;
  page.drawText('JUNIOR UNDERWRITER AND CLAIM OFFICER', {
    x: 215,
    y: currentY,
    size: 9.5,
    font: fontRegular,
    color: darkTextColor,
  });

  // Education Section
  currentY -= 28;
  page.drawText('Education', {
    x: 215,
    y: currentY,
    size: 15,
    font: fontBold,
    color: darkTextColor,
  });
  page.drawLine({
    start: { x: 215, y: currentY - 4 },
    end: { x: 295, y: currentY - 4 },
    thickness: 1.5,
    color: darkTextColor,
  });

  currentY -= 25;
  page.drawText('MECHANICAL ENGINEERING', {
    x: 215,
    y: currentY,
    size: 10.5,
    font: fontBold,
    color: darkTextColor,
  });
  page.drawText('Sep 2017 - Aug 2022', {
    x: 430,
    y: currentY,
    size: 10,
    font: fontBold,
    color: darkTextColor,
  });

  currentY -= 14;
  page.drawText('BAHIR DAR INSTITUTES OF TECHNOLOGY UNIVERSITY', {
    x: 215,
    y: currentY,
    size: 9,
    font: fontRegular,
    color: grayTextColor,
  });

  currentY -= 22;
  page.drawText('MANAGEMENT', {
    x: 215,
    y: currentY,
    size: 10.5,
    font: fontBold,
    color: darkTextColor,
  });
  page.drawText('Oct 2022 - Continue', {
    x: 430,
    y: currentY,
    size: 10,
    font: fontBold,
    color: darkTextColor,
  });

  currentY -= 14;
  page.drawText('UNITY UNIVERSITY', {
    x: 215,
    y: currentY,
    size: 9,
    font: fontRegular,
    color: grayTextColor,
  });
  currentY -= 12;
  page.drawText('I WILL GRADUATE IN 2026', {
    x: 215,
    y: currentY,
    size: 8.5,
    font: fontRegular,
    color: grayTextColor,
  });

  // Projects Section
  currentY -= 28;
  page.drawText('Projects', {
    x: 215,
    y: currentY,
    size: 15,
    font: fontBold,
    color: darkTextColor,
  });
  page.drawLine({
    start: { x: 215, y: currentY - 4 },
    end: { x: 280, y: currentY - 4 },
    thickness: 1.5,
    color: darkTextColor,
  });

  currentY -= 24;
  page.drawText('AIR CONDITIONING DUCT SYSTEM', {
    x: 215,
    y: currentY,
    size: 10.5,
    font: fontBold,
    color: darkTextColor,
  });

  currentY -= 14;
  page.drawText('DESIGN AND SIMULATION OF AIR CONDITIONING DUCT SYSTEM', {
    x: 215,
    y: currentY,
    size: 9,
    font: fontRegular,
    color: grayTextColor,
  });

  // LEFT COLUMN: Contact, Skills, Languages
  // Contact
  let leftY = height - 230;
  page.drawText('Contact', {
    x: 35,
    y: leftY,
    size: 14,
    font: fontBold,
    color: darkTextColor,
  });
  page.drawLine({
    start: { x: 35, y: leftY - 4 },
    end: { x: 95, y: leftY - 4 },
    thickness: 1.5,
    color: darkTextColor,
  });

  leftY -= 22;
  page.drawText('+251939744076', {
    x: 35,
    y: leftY,
    size: 9,
    font: fontRegular,
    color: darkTextColor,
  });

  leftY -= 16;
  page.drawText('dagimgirma1234@gmail.com', {
    x: 35,
    y: leftY,
    size: 9,
    font: fontRegular,
    color: darkTextColor,
  });

  leftY -= 16;
  page.drawText('ETHIOPIA, ADDIS ABABA', {
    x: 35,
    y: leftY,
    size: 9,
    font: fontRegular,
    color: darkTextColor,
  });

  // Skills
  leftY -= 32;
  page.drawText('Skills', {
    x: 35,
    y: leftY,
    size: 14,
    font: fontBold,
    color: darkTextColor,
  });
  page.drawLine({
    start: { x: 35, y: leftY - 4 },
    end: { x: 75, y: leftY - 4 },
    thickness: 1.5,
    color: darkTextColor,
  });

  const skillsList = [
    { text: 'MECHANICAL SYSTEM AND\nMAINTENANCE', val: 0.9 },
    { text: 'AIRCRAFT MAINTENANCE SUPPORT', val: 0.85 },
    { text: 'TECHNICAL DOCUMENTATION', val: 0.8 },
    { text: 'ENGINEERING DESIGN AND\nSIMULATION', val: 0.85 },
    { text: 'TEAM WORK AND\nCOMMUNICATION', val: 0.95 },
  ];

  for (const s of skillsList) {
    leftY -= 22;
    const lines = s.text.split('\n');
    for (const l of lines) {
      page.drawText(l, {
        x: 35,
        y: leftY,
        size: 8,
        font: fontBold,
        color: darkTextColor,
      });
      leftY -= 10;
    }
    // Bar
    leftY -= 2;
    const barWidth = 140;
    page.drawRectangle({
      x: 35,
      y: leftY,
      width: barWidth,
      height: 3,
      color: lightGray,
    });
    page.drawRectangle({
      x: 35,
      y: leftY,
      width: barWidth * s.val,
      height: 3,
      color: darkOrange,
    });
    leftY -= 6;
  }

  // Languages
  leftY -= 20;
  page.drawText('Languages', {
    x: 35,
    y: leftY,
    size: 14,
    font: fontBold,
    color: darkTextColor,
  });
  page.drawLine({
    start: { x: 35, y: leftY - 4 },
    end: { x: 110, y: leftY - 4 },
    thickness: 1.5,
    color: darkTextColor,
  });

  leftY -= 20;
  page.drawText('English', {
    x: 35,
    y: leftY,
    size: 9,
    font: fontRegular,
    color: darkTextColor,
  });
  leftY -= 14;
  page.drawText('ENGLISH AND AMHARIC', {
    x: 35,
    y: leftY,
    size: 8.5,
    font: fontRegular,
    color: grayTextColor,
  });

  const pdfBytes = await pdfDoc.save();
  const outputPath = path.join(__dirname, 'public', 'Dagim_Girma_CV.pdf');
  fs.writeFileSync(outputPath, pdfBytes);
  console.log('CV successfully created at:', outputPath);
}

createResume().catch(console.error);
