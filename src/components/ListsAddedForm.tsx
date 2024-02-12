import { useDispatch, useSelector } from "react-redux";
import { editItem, removeItem } from "../redux/actionsCreators";
import { ItemType, RootState } from "../redux/types/types";

/**
 * Компонент для отображения списка элементов и их редактирования.
 * @component
 */
const ListsAddedForm = () => {
  /**
   * Список элементов.
   * @type {ItemType[]}
   */
  const items = useSelector((state: RootState) => state.listsAddedForm);

  /**
   * Диспетчер Redux.
   * @type {Function}
   */
  const dispatch = useDispatch();

  /**
   * Обработчик удаления элемента из списка.
   * @param {string | undefined} id - Идентификатор элемента.
   */
  const handleRemove = (id: string | undefined) => {
    if (id !== undefined) {
      dispatch(removeItem(id));
    }
  };

  /**
   * Обработчик редактирования элемента списка.
   * @param {string | undefined} id - Идентификатор элемента.
   * @param {string | undefined} name - Новое имя элемента.
   * @param {number | undefined} price - Новая цена элемента.
   * @returns {void}
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
        {items.map((item: ItemType) => (
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
