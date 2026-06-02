import { buttonRecipe } from "./buttons";
import { dialogSlotRecipe } from "./dialog";
import { fileUploadSlotRecipe } from "./fileUpload";
import { inputRecipe } from "./Input";

export const recipes = {
  button: buttonRecipe,
  input: inputRecipe,
};

export const slotRecipes = {
  dialog: dialogSlotRecipe,
  fileUpload: fileUploadSlotRecipe,
};
