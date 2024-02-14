import { useDispatch, useSelector } from "react-redux";
import { searchItem } from "../redux/action/actionsCreators";
import { useState } from "react";
import { RootState, ItemType } from "./types/types";

/**
 * Компонент отрисовки инпута поиска и передает массив отфильтрованных объектов
 * 
 * @returns {JSX.Element} SearchItem component
 */
const SearchItem = () => {
  const items = useSelector((state: RootState) => state.listsAddedForm);
  const [item, setItem] = useState("");
  const dispatch = useDispatch();

  /**
   * Функция поиска посимвольного поиска в массиве объектов
  */
  const searchСoincidences = (obj: ItemType, value: string) => {
    for (let key in obj) {
      if (
        obj.hasOwnProperty(key) &&
        (key === "price" || key === "name") &&
        obj[key].toString().includes(value.toString())
      ) {
        return true;
      }
    }
    return false;
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setItem(value);

    const result = items.filter((item) => searchСoincidences(item, value));

    dispatch(searchItem(result));
  };

  return (
    <>
      <form action="">
        <label htmlFor="search">Search</label>
        <input type="text" id="search" value={item} onChange={handleSearch} />
      </form>
    </>
  );
};
export default SearchItem;
