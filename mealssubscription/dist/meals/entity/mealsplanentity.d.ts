import { subscription } from "../../subscriptions/entity/subscription";
declare enum mealtype {
    VEG = "VEG",
    NONVEG = "NONVEG",
    VEGAN = "VEGAN"
}
export declare class mealsplan {
    id: number;
    name: string;
    meal_type: mealtype;
    duration_days: number;
    price: number;
    subsmeal: subscription[];
}
export {};
