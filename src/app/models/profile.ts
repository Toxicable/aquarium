import { Review } from "./reviews";

export interface Profile {
    $key: string;
    reviews: string[]; // points to review keys of reviews user has written

}