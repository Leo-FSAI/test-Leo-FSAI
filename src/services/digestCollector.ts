import moment from 'moment-timezone';

interface Card {
  id: string;
  title: string;
  status: string;
  completedAt: Date;
  userId: string;
}

async function collectCompletedCardsForDigest(userId: string, date: Date): Promise<Card[]> {
  try {
    // Placeholder for database interaction to fetch the cards
    // Assuming some database function fetchCardsByStatusAndUser
    const allCards: Card[] = await fetchCardsByStatusAndUser('Done', userId);

    // Convert the given date to the user's timezone
    const localTime = moment(date).tz('User/Timezone'); // 'User/Timezone' is a placeholder

    const startOfDay = localTime.clone().startOf('day');
    const endOfDay = localTime.clone().endOf('day');

    // Filter cards completed on the given date
    const completedCards = allCards.filter(card => {
      const completedAtLocal = moment(card.completedAt).tz('User/Timezone');
      return completedAtLocal.isBetween(startOfDay, endOfDay, null, '[]');
    });

    return completedCards;
  } catch (error) {
    // Log error if timezone can't be retrieved
    console.error(`Error collecting completed cards for user ${userId}: ${error.message}`);
    return [];
  }
}

export { collectCompletedCardsForDigest };