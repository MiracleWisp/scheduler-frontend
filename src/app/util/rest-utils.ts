export class RestUtils {
  public static extractResults<T>(response: ListResponse<T>): T[] {
    return response.results;
  }
}

export class ListResponse<T> {
  count: number;
  next: number;
  previous: number;
  results: T[];
}
