import { useSelector, useDispatch } from "react-redux";
import { removeItem, editItem } from "../redux/action/actionsCreators";
import { RootState, ItemType } from "./types/types";

const ListsAddedForm = () => {
  const items = useSelector((state: RootState) => state.listsAddedForm);
  const filteredItems = useSelector((state) => state.searchItem);

  const dispatch = useDispatch();

  let itemsForRender: ItemType[] = [];

  console.info(items);
  console.info(filteredItems);

  if (filteredItems === false) return;
  // Проверяем, если filteredItems не является массивом или пустой
  if (!Array.isArray(filteredItems) || filteredItems.length === 0) {
    // Отображаем все элементы из items
    itemsForRender = items;
  } else {
    itemsForRender = filteredItems;
  }

  const handleRemove = (id: string | undefined) => {
    if (id !== undefined) {
      dispatch(removeItem(id));
    }
  };

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
