import { useDispatch, useSelector } from "react-redux";
import { searchItem } from "../redux/action/actionsCreators";
import { useState } from "react";
import { RootState, ItemType } from "./types/types";

/**
 * Компонент для отрисовки инпута поиска и передачи массива отфильтрованных объектов.
 *
 * @returns {JSX.Element} Элемент для отрисовки компонента SearchItem.
 */
const SearchItem = () => {
  // Получение списка элементов из Redux store
  const items = useSelector((state: RootState) => state.listsAddedForm);
  // Состояние для хранения значения инпута поиска
  const [item, setItem] = useState("");
  // Диспетчер Redux для отправки действий
  const dispatch = useDispatch();

  /**
   * Функция для посимвольного поиска в массиве объектов.
   *
   * @param {ItemType} obj - Объект, в котором производится поиск.
   * @param {string} value - Значение, по которому производится поиск.
   * @returns {boolean} Возвращает true, если найдено совпадение, иначе - false.
   */
  const searchСoincidences = (obj: ItemType, value: string) => {
    for (const key in obj) {
      if (
        (key === "price" || key === "name") &&
        obj[key].toString().includes(value.toString())
      ) {
        return true;
      }
    }
    return false;
  };

  /**
   * Обработчик изменения значения в инпуте поиска.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} e - Событие изменения значения в инпуте.
   * @returns {void} Ничего не возвращает, просто отправляет действие в Redux store.
   */
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setItem(value);

    if (value.toString().length > 0) {
      // Фильтрация списка элементов по введенному значению
      const result = items.filter((item) => searchСoincidences(item, value));

      if (result.length > 0) {
        // Отправка отфильтрованного списка в Redux store
        dispatch(searchItem(result));
      } else {
        // Если результат пустой, отправляем false в Redux store
        dispatch(searchItem(false));
      }
    } else if (value === "") {
      // Если значение пустое, отправляем true в Redux store (показываем все элементы)
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
