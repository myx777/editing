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
   * Функция посимвольного поиска в массиве объектов
   */
  const searchСoincidences = (obj: ItemType, value: string) => {
    for (let key in obj) {
      if (obj.hasOwnProperty(key) &&
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

    if(value.toString().length > 0){
      console.info(value.length);
      
      const result = items.filter((item) => searchСoincidences(item, value));
      console.info(result);
            
      if(result.length > 0){
        console.info(result);

        dispatch(searchItem(result));
      } else {
        dispatch(searchItem(false));
      }
     
    } else if (value === "") {
      dispatch(searchItem(true));
    }

  

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
