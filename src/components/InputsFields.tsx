import { useDispatch, useSelector } from "react-redux";
import { addItem, changeItem } from "../redux/actionsCreators";
import { RootState } from "../redux/types/types";
/**
* Компонент для ввода данных.
* @returns {JSX.Element} Компонент для ввода данных.
*/
const InputsFields = () => {
 const dispatch = useDispatch();
 const item = useSelector((state: RootState) => state.inputsFields);
 
 /**
  * Очищает поля ввода.
  */
 const clearFields = () => {
   dispatch(changeItem("name", ""));
   dispatch(changeItem("price", ""));
 };
 
 /**
  * Обработчик отправки формы.
  * @param {React.FormEvent<HTMLFormElement>} e - Событие отправки формы.
  */
 const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
   e.preventDefault();
   dispatch(addItem(item.name, item.price));
   clearFields();
 };
 
 /**
  * Обработчик изменения значения в поле ввода.
  * @param {React.ChangeEvent<HTMLInputElement>} e - Событие изменения значения в поле ввода.
  */
 const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
   const { name, value } = e.target;
   dispatch(changeItem(name, value));
 };
 
 /**
  * Обработчик отмены ввода.
  */
 const handleCancel = () => {
   clearFields();
 };
 
 return (
   <main>
     <form action="" className="form__inputs" onSubmit={handleSubmit}>
       <label htmlFor="name">Name</label>
       <input
         name="name"
         type="text"
         value={item.name}
         onChange={handleChange}
         required
       />
       <label htmlFor="price">Price</label>
       <input
         name="price"
         type="number"
         value={item.price}
         onChange={handleChange}
         required
       />
       <button type="submit">Save</button>
       <button onClick={() => handleCancel()}>Cancel</button>
     </form>
   </main>
 );
};

export default InputsFields;
