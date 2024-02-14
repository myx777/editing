import { useDispatch, useSelector } from "react-redux";
import { removeItem, editItem } from "../redux/action/actionsCreators";
import { RootState, ItemType } from "./types/types";


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
  const filteredItems = useSelector((state) => state.searchItem)  

   /**
   * Диспетчер Redux.
   * @type {Function}
   */
   const dispatch = useDispatch();

  let itemsForRender: ItemType[] = [];

  console.info(items);
  console.info(filteredItems);
  
  if(filteredItems.length !== 0) {
    filteredItems.forEach((item) => {
      itemsForRender.push(item);
      
    });
  } else {
    items.forEach((item) => {
      itemsForRender.push(item);
    });
  }
  
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
