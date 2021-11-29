import { Product } from "./reducers/product.reducer";

export interface AppState {
    readonly product: Product[];
}
