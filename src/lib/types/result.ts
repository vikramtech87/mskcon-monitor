export type Result<T, E = Error> =
  | {
      ok: true;
      value: T;
    }
  | {
      ok: false;
      error: E;
    };

export const promiseToResult = async <T>(
  promise: Promise<T>
): Promise<Result<T, any>> => {
  try {
    const value = await promise;
    return {
      ok: true,
      value,
    };
  } catch (error) {
    return {
      ok: false,
      error,
    };
  }
};
