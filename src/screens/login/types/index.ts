export type User = {
  id: number;
  firstName: string;
  lastName: string;
};

export interface LoginResponse {
  token: string;
  user: User;
}

export interface AuthData {
  token: string;
  user: User;
}

export interface FactsResponse {
  data: {
    fact: string;
    length: number;
  }[];
}
