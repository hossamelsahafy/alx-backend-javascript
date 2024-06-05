interface MajorCredits {
  credits: number;
  brand: 'major';
}
interface MinorCredits {
  credits: number;
  brand: 'minor';
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  let totalCredits = subject1.credits + subject2.credits;
  return { credits: totalCredits, brand: 'major' };
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  let totalCredits = subject1.credits + subject2.credits;
  return { credits: totalCredits, brand: 'minor' };
}
