import { DbError } from "@/lib/errors/db-error";
import { Registration } from "@/lib/types/registration";
import { Result } from "@/lib/types/result";
import { fetchTransactions } from "./transactions";
import { fetchProfiles } from "./profile";
import { fetchMeals } from "./meal";
import { fetchWorkshops } from "./workshop";

export const fetchRegistrations = async (): Promise<
  Result<Registration, DbError>
> => {
  const successfulTransactionsResult = await fetchTransactions(true);

  if (!successfulTransactionsResult.ok) {
    return successfulTransactionsResult;
  }

  const userIds = successfulTransactionsResult.value.map((t) => t.userId);

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
  const { value: WorkshopData } = workshopsResult;

  let registrations: Registration[] = [];
};
