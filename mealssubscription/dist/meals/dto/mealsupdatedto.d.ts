declare enum mealtype {
    VEG = "VEG",
    NON_VEG = "NON_VEG",
    VEGAN = "VEGAN"
}
export declare class updatemealsdto {
    name: string;
    meal_type: mealtype;
    duration_days: number;
    price: number;
}
export {};
