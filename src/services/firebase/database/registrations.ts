import { DbError } from "@/lib/errors/db-error";
import { Registration } from "@/lib/types/registration";
import { Result } from "@/lib/types/result";
import { fetchTransactions } from "./transactions";
import { fetchProfiles } from "./profile";
import { fetchMeals } from "./meal";
import { fetchWorkshops } from "./workshop";

export const fetchRegistrations = async (): Promise<
  Result<Registration[], DbError>
> => {
  const successfulTransactionsResult = await fetchTransactions(true);

  if (!successfulTransactionsResult.ok) {
    return successfulTransactionsResult;
  }

  let userIds: string[] = [];
  for (const [_, value] of successfulTransactionsResult.value) {
    userIds.push(value.userId);
  }

  const profilesResult = await fetchProfiles(userIds);
  if (!profilesResult.ok) {
    return profilesResult;
  }

  const mealsResult = await fetchMeals(userIds);
  if (!mealsResult.ok) {
    return mealsResult;
  }

  const workshopsResult = await fetchWorkshops(userIds);
  if (!workshopsResult.ok) {
    return workshopsResult;
  }

  const { value: profileData } = profilesResult;
  const { value: mealData } = mealsResult;
  const { value: workshopData } = workshopsResult;

  let registrations: Registration[] = [];

  for (const userId of userIds) {
    const profileDatum = profileData.get(userId)!;
    const mealDatum = mealData.get(userId)!;
    const workshopDatum = workshopData.get(userId)!;

    const registration: Registration = {
      userId,
      meal: mealDatum,
      profile: profileDatum,
      workshop: workshopDatum,
    };
    registrations.push(registration);
  }

  return {
    ok: true,
    value: registrations,
  };
};
