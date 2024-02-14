import { useSelector, useDispatch } from "react-redux";
import { removeItem, editItem } from "../redux/action/actionsCreators";
import { RootState, ItemType } from "./types/types";

/**
 * Компонент для отрисовки списка элементов и их редактирования.
 *
 * @returns {JSX.Element} Элемент для отрисовки списка.
 */
const ListsAddedForm = () => {
  // Получение списка элементов из Redux store
  const items = useSelector((state: RootState) => state.listsAddedForm);
  // Получение отфильтрованных элементов из Redux store
  const filteredItems = useSelector((state: RootState) => state.searchItem);
  // Получение диспетчера Redux для отправки действий
  const dispatch = useDispatch();

  let itemsForRender: ItemType[] = [];

  /**
   * Определение элементов для отрисовки с учетом фильтрации.
   *
   * @returns {void} Ничего не возвращает, просто устанавливает значения для itemsForRender.
   */
  if (filteredItems === false) return;

  if (!Array.isArray(filteredItems) || filteredItems.length === 0) {
    itemsForRender = items;
  } else {
    itemsForRender = filteredItems;
  }

  /**
   * Удаление элемента из списка по его идентификатору.
   *
   * @param {string | undefined} id - Идентификатор элемента для удаления.
   * @returns {void} Ничего не возвращает, просто отправляет действие в Redux store.
   */
  const handleRemove = (id: string | undefined) => {
    if (id !== undefined) {
      dispatch(removeItem(id));
    }
  };

  /**
   * Редактирование элемента списка по его идентификатору.
   *
   * @param {string | undefined} id - Идентификатор элемента для редактирования.
   * @param {string | undefined} name - Новое имя элемента.
   * @param {number | undefined} price - Новая цена элемента.
   * @returns {void} Ничего не возвращает, просто отправляет действие в Redux store.
   */
  const handleEdit = (
    id: string | undefined,
    name: string | undefined,
    price: number | undefined
  ): void => {
    if (id !== undefined && name !== undefined && price !== undefined) {
      dispatch(editItem(id, name, price));
      handleRemove(id);
    }
  };

  return (
    <>
      <ul>
        {itemsForRender.map((item: ItemType) => (
          <li key={item.id}>
            {item.name} {item.price}
            <button onClick={() => handleRemove(item.id)}>X</button>
            <button onClick={() => handleEdit(item.id, item.name, item.price)}>
              &#9998;
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListsAddedForm;
