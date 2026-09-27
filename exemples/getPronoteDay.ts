import { input, number } from '@inquirer/prompts';

function pronoteDayToDate(
  premierLundi: string,
  jour: number
): Date {
  const [day, month, year] = premierLundi.split("/").map(Number) as [
    number,
    number,
    number
  ];

  const date = new Date(Date.UTC(year, month - 1, day));

  date.setUTCDate(date.getUTCDate() + jour - 1);

  return date;
}

(async() => {
    const premierLundi = await input({ message: "Enter the first Monday of the school year (format: DD/MM/YYYY)", required: true, default: "24/08/2026" })
    const day = await number({ message: "Enter the Pronote day number (1-365)", required: true, default: 1, min: 1, max: 365 })
    const date = pronoteDayToDate(premierLundi, day);
    console.log(date);
})();