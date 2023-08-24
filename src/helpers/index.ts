import { Commits, Repository } from "@/types";

export const getRandomColor = (): string => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

export const formatDate = (date: Date): string => {
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return `Week of ${
    monthNames[date.getMonth()]
  } ${date.getDate()}, ${date.getFullYear()}`;
};

export const aggregateDataByWeek = (
  data: Repository[],
  fullName: string,
  repoId: number,
): [Commits[], Commits | null] => {
  const aggregated: Commits[] = [];
  let newCard: Commits | null = null;
  const existingColor = getRandomColor()

  data.forEach((item: any) => {
    const date = new Date(item.timestamp);
    const key = formatDate(date);

    const existingData = aggregated.find((entry) => entry.name === key);
    if (existingData) {
      existingData[fullName] = ((existingData[fullName] as number) || 0) + 1;
    } else {
      aggregated.push({ name: key, id: repoId, [fullName]: 1, color: existingColor, fullName});
    }

    if (!newCard) {
      newCard = {
        repoId,
        name: fullName,
        color: existingColor,
        lastCommit: date.toUTCString(),
      };
      console.log(newCard, "card")
    }
  });

  return [aggregated, newCard];
};
