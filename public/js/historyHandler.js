const historicalFacts = [
    'The Great Wall of China was built over 2,000 years ago.',
    'Leonardo da Vinci painted the Mona Lisa between 1503 and 1506.',
    'The French Revolution began in 1789, leading to the rise of Napoleon Bonaparte.',
    'The first successful airplane flight was conducted by the Wright brothers in 1903.',
    'The Titanic sank on its maiden voyage in 1912 after hitting an iceberg.',
    'Nelson Mandela was released from prison in 1990, eventually leading to the end of apartheid in South Africa.',
    'Neil Armstrong became the first person to walk on the moon in 1969 during the Apollo 11 mission.',
    'The ancient city of Pompeii was destroyed and buried by the eruption of Mount Vesuvius in 79 AD.',
    'Christopher Columbus reached the Americas in 1492, initiating European exploration of the New World.',
    'The Black Death, a devastating pandemic, swept through Europe in the 14th century, leading to millions of deaths.',
    'The Renaissance, a period of great cultural and intellectual achievement, occurred in Europe during the 14th to 17th centuries.',
    'The ancient city of Rome was founded in 753 BCE, eventually becoming the capital of the Roman Empire.',
    'Marie Curie conducted pioneering research on radioactivity and became the first woman to win a Nobel Prize.',
];

const random = Math.floor(Math.random() * historicalFacts.length);
const randomFact = historicalFacts[random];

document.getElementById('fact-text').textContent = randomFact;