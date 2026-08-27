export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  field: string;
  year: string;
  achievements?: string[];
}

export const educationData: EducationItem[] = [
  {
    id: 'edu-1',
    institution: 'University of Technology & Computer Science',
    degree: 'Bachelor of Science (B.S.)',
    field: 'Computer Science & Software Engineering',
    year: '2015 — 2019',
    achievements: [
      'Graduated with First Class Honors (GPA 3.85 / 4.0)',
      'Lead researcher for Interactive Graphic Systems Capstone',
      'President of Web Development & Open Source Student Society',
    ],
  },
];
